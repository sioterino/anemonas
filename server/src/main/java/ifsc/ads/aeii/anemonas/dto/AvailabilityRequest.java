package ifsc.ads.aeii.anemonas.dto;


import java.time.DayOfWeek;
import java.time.LocalTime;
import lombok.Data;

@Data
public class AvailabilityRequest {
    private Long tutorId;
    private String subject;
    private DayOfWeek dayOfWeek;
    private LocalTime startTime;
    private LocalTime endTime;
    private Integer maxStudents;
}
