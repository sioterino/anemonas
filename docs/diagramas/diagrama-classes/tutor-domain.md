# Diagrama de Classe
## Tutor Domain

**Casos de Uso Associados:** UC05, UC06, UC07;

**Funcionalidades:** acessar perfil de tutores, acessar agenda de tutores, marcar datas de tutorias em uma agenda de tutor.

```mermaid
classDiagram

    class Tutor {
        id: Long
        user: User
        subjects: List~Subjects~
        availabilities: List~Availability~
        appointments: List~Appointment~
        rating: Double
    }

    class Subject {
        id: Long
        name: String
        tutors: List~Tutor~
    }

    class Availability {
        id: Long
        date: Date
        startTime: LocalTime
        endTime: LocalTime
        tutor: Tutor
    }

    class Appointment {
        id: Long
        tutor: Tutor
        student: User
        dateTime: LocalDateTime
        confirmedByTutor: boolean
        type: SessionType
    }

    class SessionType {
        <<enum>>
        type: String
    }

    namespace Controllers {

        class TutorController {
            service: TutorService
            getAllTutors() List~Tutors~
            getTutor(@RequestParam Long id) Tutor
            getTutorsBySubject(@RequestParam String subject) List~Tutor~
        }

        class AppointmentController {
            service: AppointmentService
            service: AvailabilityService
            createAppointment(@RequestBody AppointmentDTO dto) Appointment
            confirmAppointment(@RequestParam Long appointmentId) Appointment
            getAppointmentByTutor(@RequestParam Long TutorId) Appointment
            getAppointmentsByStudent(@RequestParam Long studentId) List~Appointment~
            cancelAppointment(@RequestParam Long appointmentId) Appointment
        }

    }

    namespace Services {

        class TutorService {
            repository: TutorRepository
            getAllTutors() List~Tutor~
            getTutor(Long id): Tutor
            getTutorsBySubject(String subject) List~Tutor~
        }

        class AvailabilityService {
            repository: AvailabilityRepository
            getAvailableTimeByTutor(Long tutorId) List~Availability~
            addAvailability(AvailabilityDTO dto) Availability
            removeAvailability(long availabilityId) Availability
        }

        class AppointmentService {
            repository: AppointmentRepository
            createAppointment(AppointmentDTO dto) Appointment
            confirmAppointment(Long appointmentId, boolean confirmed) Appointment
            getAppointmentByTutor(Long TutorId) Appointment
            getAppointmentsByStudent(Long studentId) List~Appointment~
            cancelAppointment(Long appointmentId) Appointment
        }

    }

    namespace Repositories {
        class TutorRepository {
            <<JPA interface>>
        }

        class AvailabilityRepository {
            <<JPA interface>>
        }

        class AppointmentRepository {
            <<JPA interface>>
        }
    }

    namespace DTOs {
        class AvailabilityDTO {
            date: Date
            startTime: LocalTime
            endTime: LocalTime
            tutorId: Long
        }

        class AppointmentDTO {
            tutorId: Long
            studentId: Long
            dateTime: LocalDateTime
            confirmedByTutor: boolean
            type: String
        }
    }


    Tutor --> Subject : teaches
    Tutor --> Availability : has
    Tutor --> Appointment : has
    Appointment --> SessionType : type of

    TutorController --> TutorService : uses
    TutorService --> TutorRepository : uses
    TutorRepository --> Tutor : menages

    AvailabilityService --> AvailabilityRepository : uses
    AvailabilityRepository --> Availability : menages

    AppointmentController --> AppointmentService : uses
    AppointmentController --> AvailabilityService : uses
    AppointmentService --> AppointmentRepository : uses
    AppointmentRepository --> Appointment : menages

```