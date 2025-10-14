# Diagrama de Classes
## User Domain

**Casos de Uso Associados:** UC01, UC02;

**Funcionalidades:** cadastro e autenticação de usuários.

> [!NOTE]
> Algumas funções, como edição e deleção não serão implementadas nesse primeiro momento por uma dependência do Spring Security que ainda será abordada e trabalhada em sala de aula.

```mermaid
classDiagram

    class User {
        id: Long
        username: String
        email: String
        password: String
        roles: List~Role~

        chats: List~Chat~
        posts: List~ForumPost~
        replies: List~ForumReply~

        postVotes: List~PostVote~
        replyVotes: List~ReplyVote~
    }

    class Role {
        <<enum>>
        role: String
    }

    class UserRepository {
        <<JPA interface>>
    }

    class UserService {
        repository: UserRepository
        getAllUsers(Long id) List~User~
        getUser(Long id) User
        register(RegisterDTO dto) User
        authenticate(LoginDTO dto) User
    }

    class UserController {
        service: UserService
        getAllUsers() List~User~
        getUser(@RequestParam Long id) User
        register(@RequestBody RegisterDTO dto) User
        authenticate(@RequestBody LoginDTO dto) User
    }

    namespace DTOs {
        class RegisterDTO {
            username: String
            email: String
            password: String
            roles: List~Role~
        }

        class LoginDTO {
            login: String
            password: String
        }
    }

    namespace Security {

        class HashAlgorithmInterface {
            <<interface>>
            hash(String str) String
            validate(String hash, String str) boolean
        }

        class HashAlgorithm {}

    }

    User --> Role : has
    UserRepository --> User : manages
    UserService --> UserRepository : uses
    UserController --> UserService : uses

    HashAlgorithm <|-- HashAlgorithmInterface : implements
    UserService --> HashAlgorithm : uses

```