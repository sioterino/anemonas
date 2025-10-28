package ifsc.ads.aeii.anemonas.repositories;

import ifsc.ads.aeii.anemonas.models.User;
import ifsc.ads.aeii.anemonas.models.schedule.Appointment;
import ifsc.ads.aeii.anemonas.models.schedule.AppointmentStatus;
import ifsc.ads.aeii.anemonas.models.schedule.Availability;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
    List<Appointment> findByTutor(User tutor);
    List<Appointment> findByStudent(User student);
    List<Appointment> findByAvailabilityAndDate(Availability availability, LocalDate date);
    List<Appointment> findByTutorAndStatus(User tutor, AppointmentStatus status);
}
