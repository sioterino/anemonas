package ifsc.ads.aeii.anemonas.services;


import ifsc.ads.aeii.anemonas.models.Role;
import ifsc.ads.aeii.anemonas.models.User;
import ifsc.ads.aeii.anemonas.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public User save(OAuth2User oAuth2User) {
        String email = oAuth2User.getAttribute("email");
        return userRepository.findByEmail(email)
                .orElseGet(() -> {
                    User novo = new User();
                    novo.setName(oAuth2User.getAttribute("name"));
                    novo.setEmail(email);
                    novo.setRole(Role.STUDENT); // padrão ao se cadastrar via Google
                    return userRepository.save(novo);
                });
    }
}
