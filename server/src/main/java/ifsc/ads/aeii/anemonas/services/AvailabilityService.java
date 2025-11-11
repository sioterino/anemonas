package ifsc.ads.aeii.anemonas.services;

import ifsc.ads.aeii.anemonas.models.Role;
import ifsc.ads.aeii.anemonas.models.User;
import ifsc.ads.aeii.anemonas.models.schedule.Availability;
import ifsc.ads.aeii.anemonas.repositories.AvailabilityRepository;
import ifsc.ads.aeii.anemonas.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.text.Normalizer;
import java.time.DayOfWeek;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AvailabilityService {
    private final AvailabilityRepository availabilityRepository;
    private final UserRepository userRepository;

    public List<Availability> getAll() {
        return availabilityRepository.findAll();
    }

    public List<Availability> getByTutor(Long tutorId) {
        return availabilityRepository.findByTutorId(tutorId);
    }

    public List<Availability> getByTutorAndDay(Long tutorId, DayOfWeek dayOfWeek) {
        return availabilityRepository.findByTutorIdAndDayOfWeek(tutorId, dayOfWeek);
    }

    public List<Availability> getBySubject(String subject) {
        return availabilityRepository.findBySubjectContainingIgnoreCase(subject);
    }

    public Availability create(Availability availability, Long tutorId) {
        User tutor = userRepository.findById(tutorId)
                .orElseThrow(() -> new IllegalArgumentException("Usuário não encontrado com ID: " + tutorId));

        // valida o papel do usuário
        if (tutor.getRole() != Role.TUTOR) {
            throw new IllegalArgumentException("Usuário com ID " + tutorId + " não é um tutor válido.");
        }

        availability.setSubject(normalizeSubject(availability.getSubject()));

        availability.setTutor(tutor);
        return availabilityRepository.save(availability);
    }

    public void delete(Long id) {
        availabilityRepository.deleteById(id);
    }

    private String normalizeSubject(String subject) {
        if (subject == null) return null;
        String noAccents = Normalizer.normalize(subject, Normalizer.Form.NFD)
                .replaceAll("\\p{M}", ""); // remove acentos
        return noAccents.toLowerCase().trim(); // padroniza
    }
}
