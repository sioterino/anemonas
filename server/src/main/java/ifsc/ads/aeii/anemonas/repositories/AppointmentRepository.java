package ifsc.ads.aeii.anemonas.repositories;

import ifsc.ads.aeii.anemonas.models.schedule.Appointment;
import ifsc.ads.aeii.anemonas.models.schedule.AppointmentStatus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
    List<Appointment> findByTutorId(Long tutorId);
    List<Appointment> findByStudentId(Long studentId);
    List<Appointment> findByAvailabilityIdAndDate(Long availabilityId, LocalDate date);
    List<Appointment> findByTutorIdAndStatus(Long tutorId, AppointmentStatus status);
}
