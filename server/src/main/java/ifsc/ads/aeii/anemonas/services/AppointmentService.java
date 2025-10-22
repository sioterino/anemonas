package ifsc.ads.aeii.anemonas.services;

import ifsc.ads.aeii.anemonas.models.User;
import ifsc.ads.aeii.anemonas.models.schedule.Appointment;
import ifsc.ads.aeii.anemonas.models.schedule.AppointmentStatus;
import ifsc.ads.aeii.anemonas.models.schedule.Availability;
import ifsc.ads.aeii.anemonas.repositories.AppointmentRepository;
import ifsc.ads.aeii.anemonas.repositories.AvailabilityRepository;
import ifsc.ads.aeii.anemonas.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AppointmentService {

    private final AppointmentRepository appointmentRepository;
    private final AvailabilityRepository availabilityRepository;
    private final UserRepository userRepository;

    public Appointment create(Long availabilityId, Long studentId, LocalDate date, String topic) {

        Availability availability = availabilityRepository.findById(availabilityId)
                .orElseThrow(() -> new RuntimeException("Disponibilidade não encontrada"));

        User student = userRepository.findById(studentId)
                .orElseThrow(() -> new RuntimeException("Aluno não encontrado"));

        // valida se já existe agendamento nessa disponibilidade e data
        List<Appointment> existing = appointmentRepository
                .findByAvailabilityAndDate(availability, date);

        if (!existing.isEmpty()) {
            throw new RuntimeException("Já existe agendamento para este horário");
        }

        Appointment appointment = new Appointment();
        appointment.setAvailability(availability);
        appointment.setTutor(availability.getTutor());
        appointment.setStudent(student);
        appointment.setDate(date);
        appointment.setTopic(topic);
        appointment.setStatus(AppointmentStatus.PENDING);

        return appointmentRepository.save(appointment);
    }

    public Appointment confirm(Long id) {
        Appointment appointment = appointmentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Agendamento não encontrado"));
        appointment.setStatus(AppointmentStatus.CONFIRMED);
        return appointmentRepository.save(appointment);
    }

    public Appointment cancel(Long id) {
        Appointment appointment = appointmentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Agendamento não encontrado"));
        appointment.setStatus(AppointmentStatus.CANCELLED);
        return appointmentRepository.save(appointment);
    }

    public List<Appointment> getByTutor(Long tutorId) {
        User tutor = userRepository.findById(tutorId)
                .orElseThrow(() -> new RuntimeException("Tutor não encontrado"));
        return appointmentRepository.findByTutor(tutor);
    }

    public List<Appointment> getByStudent(Long studentId) {
        User student = userRepository.findById(studentId)
                .orElseThrow(() -> new RuntimeException("Aluno não encontrado"));
        return appointmentRepository.findByStudent(student);
    }

    public List<Appointment> getPendingByTutor(Long tutorId) {
        User tutor = userRepository.findById(tutorId)
                .orElseThrow(() -> new RuntimeException("Tutor não encontrado"));
        return appointmentRepository.findByTutorAndStatus(tutor, AppointmentStatus.PENDING);
    }
}
