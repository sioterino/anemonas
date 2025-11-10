package ifsc.ads.aeii.anemonas.controllers;

import ifsc.ads.aeii.anemonas.dto.AvailabilityRequest;
import ifsc.ads.aeii.anemonas.models.schedule.Availability;
import ifsc.ads.aeii.anemonas.services.AvailabilityService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.DayOfWeek;
import java.util.List;

@RestController
@RequestMapping("/api/availabilities")
@RequiredArgsConstructor
public class AvailabilityController {

    private final AvailabilityService availabilityService;

    @GetMapping
    public ResponseEntity<List<Availability>> getAll() {
        return ResponseEntity.ok(availabilityService.getAll());
    }

    @GetMapping("/tutor/{tutorId}")
    public ResponseEntity<List<Availability>> getByTutor(@PathVariable Long tutorId) {
        return ResponseEntity.ok(availabilityService.getByTutor(tutorId));
    }

    @GetMapping("/tutor/{tutorId}/dia/{dayOfWeek}")
    public ResponseEntity<List<Availability>> getByTutorAndDay(
            @PathVariable Long tutorId,
            @PathVariable DayOfWeek dayOfWeek
    ) {
        return ResponseEntity.ok(availabilityService.getByTutorAndDay(tutorId, dayOfWeek));
    }

    @GetMapping("/subject/{subject}")
    public ResponseEntity<List<Availability>> getBySubject(@PathVariable String subject) {
        return ResponseEntity.ok(availabilityService.getBySubject(subject));
    }

    @PostMapping
    public ResponseEntity<Availability> create(@RequestBody AvailabilityRequest request) {
        Availability availability = new Availability();
        availability.setSubject(request.getSubject());
        availability.setDayOfWeek(request.getDayOfWeek());
        availability.setStartTime(request.getStartTime());
        availability.setEndTime(request.getEndTime());
        availability.setMaxStudents(request.getMaxStudents() != null ? request.getMaxStudents() : 1);

        return ResponseEntity.ok(availabilityService.create(availability, request.getTutorId()));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        availabilityService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
