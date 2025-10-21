package ifsc.ads.aeii.anemonas.services;

import ifsc.ads.aeii.anemonas.models.schedule.Appointment;
import ifsc.ads.aeii.anemonas.models.schedule.AppointmentStatus;
import ifsc.ads.aeii.anemonas.repositories.AppointmentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AppointmentService {
    private final AppointmentRepository appointmentRepository;

    public Appointment create(Appointment appointment) {
        //verifica agendamentos existentespara disponibilidade  na data
        List<Appointment> existing = appointmentRepository.findByAvailabilityIdAndDate(
                appointment.getAvailabilityId(),
                appointment.getDate()
        );

        if (!existing.isEmpty()) {
            throw new RuntimeException("Já existe agendamento para este horário");
        }

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
        return appointmentRepository.findByTutorId(tutorId);
    }

    public List<Appointment> getByStudent(Long studentId) {
        return appointmentRepository.findByStudentId(studentId);
    }

    public List<Appointment> getPendingByTutor(Long tutorId) {
        return appointmentRepository.findByTutorIdAndStatus(tutorId, AppointmentStatus.PENDING);
    }
}
