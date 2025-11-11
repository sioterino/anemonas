package ifsc.ads.aeii.anemonas.controllers;

import ifsc.ads.aeii.anemonas.models.schedule.Appointment;
import ifsc.ads.aeii.anemonas.services.AppointmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/agendamentos")
@RequiredArgsConstructor
public class AppointmentController {

    private final AppointmentService appointmentService;

    @PostMapping
    public ResponseEntity<Appointment> create(
            @RequestParam Long availabilityId,
            @RequestParam Long studentId,
            @RequestParam String date,  // formato yyyy-MM-dd
            @RequestParam(required = false) String topic
    ) {
        LocalDate localDate = LocalDate.parse(date);
        return ResponseEntity.ok(
                appointmentService.create(availabilityId, studentId, localDate, topic)
        );
    }

    @PutMapping("/{id}/confirm")
    public ResponseEntity<Appointment> confirm(@PathVariable Long id) {
        return ResponseEntity.ok(appointmentService.confirm(id));
    }

    @PutMapping("/{id}/cancel")
    public ResponseEntity<Appointment> cancel(@PathVariable Long id) {
        return ResponseEntity.ok(appointmentService.cancel(id));
    }

    @GetMapping("/tutor/{tutorId}")
    public ResponseEntity<List<Appointment>> getByTutor(@PathVariable Long tutorId) {
        return ResponseEntity.ok(appointmentService.getByTutor(tutorId));
    }

    @GetMapping("/student/{studentId}")
    public ResponseEntity<List<Appointment>> getByStudent(@PathVariable Long studentId) {
        return ResponseEntity.ok(appointmentService.getByStudent(studentId));
    }

    @GetMapping("/tutor/{tutorId}/pending")
    public ResponseEntity<List<Appointment>> getPendingByTutor(@PathVariable Long tutorId) {
        return ResponseEntity.ok(appointmentService.getPendingByTutor(tutorId));
    }
}
