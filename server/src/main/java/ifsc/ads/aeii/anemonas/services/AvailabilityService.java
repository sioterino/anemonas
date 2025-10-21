package ifsc.ads.aeii.anemonas.services;

import ifsc.ads.aeii.anemonas.models.schedule.Availability;
import ifsc.ads.aeii.anemonas.repositories.AvailabilityRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.DayOfWeek;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AvailabilityService {
    private final AvailabilityRepository availabilityRepository;

    public List<Availability> getByTutor(Long tutorId) {
        return availabilityRepository.findByTutorId(tutorId);
    }

    public List<Availability> getByTutorAndDay(Long tutorId, DayOfWeek dayOfWeek) {
        return availabilityRepository.findByTutorIdAndDayOfWeek(tutorId, dayOfWeek);
    }

    public List<Availability> getBySubject(String subject) {
        return availabilityRepository.findBySubjectContainingIgnoreCase(subject);
    }

    public Availability create(Availability availability) {
        return availabilityRepository.save(availability);
    }

    public void delete(Long id) {
        availabilityRepository.deleteById(id);
    }
}
