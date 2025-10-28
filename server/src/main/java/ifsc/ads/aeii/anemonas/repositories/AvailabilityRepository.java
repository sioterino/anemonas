package ifsc.ads.aeii.anemonas.repositories;

import ifsc.ads.aeii.anemonas.models.schedule.Availability;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.DayOfWeek;
import java.util.List;

public interface AvailabilityRepository extends JpaRepository<Availability, Long> {
    List<Availability> findByTutorId(Long tutorId);
    List<Availability> findByTutorIdAndDayOfWeek(Long tutorId, DayOfWeek dayOfWeek);
    List<Availability> findBySubjectContainingIgnoreCase(String subject);
}
