package ifsc.ads.aeii.anemonas.controllers;

import ifsc.ads.aeii.anemonas.models.schedule.Appointment;
import ifsc.ads.aeii.anemonas.services.AppointmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/agendamentos")
@RequiredArgsConstructor
public class AppointmentController {

    private final AppointmentService appointmentService;

    @PostMapping
    public ResponseEntity<Appointment> create(@RequestBody Appointment appointment) {
        return ResponseEntity.ok(appointmentService.create(appointment));
    }

    @PutMapping("/{id}/confirmar")
    public ResponseEntity<Appointment> confirm(@PathVariable Long id) {
        return ResponseEntity.ok(appointmentService.confirm(id));
    }

    @PutMapping("/{id}/cancelar")
    public ResponseEntity<Appointment> cancel(@PathVariable Long id) {
        return ResponseEntity.ok(appointmentService.cancel(id));
    }

    @GetMapping("/monitor/{tutorId}")
    public ResponseEntity<List<Appointment>> getByTutor(@PathVariable Long tutorId) {
        return ResponseEntity.ok(appointmentService.getByTutor(tutorId));
    }

    @GetMapping("/estudante/{studentId}")
    public ResponseEntity<List<Appointment>> getByStudent(@PathVariable Long studentId) {
        return ResponseEntity.ok(appointmentService.getByStudent(studentId));
    }

    @GetMapping("/monitor/{tutorId}/pendentes")
    public ResponseEntity<List<Appointment>> getPendingByTutor(@PathVariable Long tutorId) {
        return ResponseEntity.ok(appointmentService.getPendingByTutor(tutorId));
    }
}
