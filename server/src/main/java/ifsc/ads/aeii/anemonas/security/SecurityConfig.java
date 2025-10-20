package ifsc.ads.aeii.anemonas.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                //configura quais rotas precisam de autenticação
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/", "/public/**").permitAll() // rotas publicas
                        .anyRequest().authenticated() //todas as outras precisam de autenticação
                )
                // configura longin via Oauth2
                .oauth2Login(oauth -> oauth
                        .loginPage("/login")
                        .defaultSuccessUrl("/usuario/me", true) //direciona para /user apos login
                )
                .logout(logout -> logout
                        .logoutSuccessUrl("/") // redireciona para pg principal apos logout
                        .permitAll()
                );
        return http.build(); // constroi e retorna o SecurityFilterChain com todas as regras configuradas
    }
}
