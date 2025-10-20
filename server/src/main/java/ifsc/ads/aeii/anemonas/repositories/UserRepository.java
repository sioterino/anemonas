package ifsc.ads.aeii.anemonas.repositories;

import ifsc.ads.aeii.anemonas.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long>{
    Optional<User> findByEmail(String email);
}
