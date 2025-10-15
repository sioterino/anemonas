package ifsc.ads.aeii.anemonas.models.forum;

import ifsc.ads.aeii.anemonas.models.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Forum {

    private User author;
    private String content;
    private LocalDateTime timestamp;

}
