package ifsc.ads.aeii.anemonas.controllers;

import ifsc.ads.aeii.anemonas.models.schedule.Availability;
import ifsc.ads.aeii.anemonas.services.AvailabilityService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.DayOfWeek;
import java.util.List;

@RestController
@RequestMapping("/api/disponibilidades")
@RequiredArgsConstructor
public class AvailabilityController {

    private final AvailabilityService availabilityService;

    @GetMapping("/monitor/{tutorId}")
    public ResponseEntity<List<Availability>> getByTutor(@PathVariable Long tutorId) {
        return ResponseEntity.ok(availabilityService.getByTutor(tutorId));
    }

    @GetMapping("/monitor/{tutorId}/dia/{dayOfWeek}")
    public ResponseEntity<List<Availability>> getByTutorAndDay(
            @PathVariable Long tutorId,
            @PathVariable DayOfWeek dayOfWeek
    ) {
        return ResponseEntity.ok(availabilityService.getByTutorAndDay(tutorId, dayOfWeek));
    }

    @GetMapping("/materia/{subject}")
    public ResponseEntity<List<Availability>> getBySubject(@PathVariable String subject) {
        return ResponseEntity.ok(availabilityService.getBySubject(subject));
    }

    @PostMapping
    public ResponseEntity<Availability> create(@RequestBody Availability availability) {
        return ResponseEntity.ok(availabilityService.create(availability));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        availabilityService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
