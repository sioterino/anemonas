# Diagrama de Classe
## Fórum Domain

**Casos de Uso Associados:** UC04.1, UC04.4, UC04.3;

**Funcionalidades:** criação de posts e respostas; acesso ao fórum; upvotes e downvotes.

> [!NOTE]
> Algumas funções, como edição e deleção não serão implementadas nesse primeiro momento por uma dependência do Spring Security que ainda será abordada e trabalhada em sala de aula.

```mermaid
classDiagram

    namespace Parent {
        class Forum {
            id: Long
            author: User
            content: String
            timestamp: LocalDateTime
            upvotes: int
            downvotes: int
        }

        class Vote {
            id: Long
            user: User
            type: VoteType
            timestamp: LocalDateTime
        }
    }

    namespace Child {
        class ForumPost {
            title: String
            subject: Subject
            replies: List~ForumReply~
            votes: List~PostVote~
        }

        class ForumReply {
            post: ForumPost
            votes: List~ReplyVote~
        }

        class PostVote {
            post: ForumPost
        }

        class ReplyVote {
            reply: ForumReply
        }
    }

    class VoteType {
        <<enum>>
        UPVOTE
        DOWNVOTE
    }


    namespace Repositories {
        class ForumPostRepository {
            <<JPA interface>>
        }

        class ForumReplyRepository {
            <<JPA interface>>
        }

        class PostVoteRepository {
            <<JPA interface>>
        }

        class ReplyVoteRepository {
            <<JPA interface>>
        }
    }

    namespace Services {
        class ForumPostService {
            postRepository: ForumPostRepository
            voteRepository: PostVoteRepository

            createPost(ForumPostDTO dto) ForumPost
            getAllPosts() List~ForumPost~
            getPostById(Long id) ForumPost
            votePost(VoteDTO dto) ForumPost
            removeVote(VoteDTO dto) ForumPost
        }

        class ForumReplyService {
            replyRepository: ForumReplyRepository
            voteRepository: ReplyVoteRepository

            createReply(Long postId, ForumReplyDTO dto) ForumReply
            getRepliesByPost(Long postId) List~ForumReply~
            voteReply(VoteDTO dto) ForumReply
            removeVote(VoteDTO dto) ForumReply
        }
    }

    namespace Controllers {
        class ForumPostController {
            service: ForumPostService

            +getAllPosts() List~ForumPost~
            +getPostById(@RequestParam Long id) ForumPost
            +createPost(@RequestBody ForumPostDTO dto) ForumPost
            +votePost(@RequestBody VoteDTO dto) ForumPost
            +removeVote(@RequestBody VoteDTO dto) ForumPost
        }

        class ForumReplyController {
            service: ForumReplyService

            +createReply(Long postId, ForumReplyDTO dto) ForumReply
            +getRepliesByPost(Long postId) List~ForumReply~
            +voteReply(@RequestBody VoteDTO dto) ForumReply
            +removeVote(@RequestBody VoteDTO dto) ForumReply
        }
    }

    namespace DTOs {
        class ForumPostDTO {
            title: String
            subjectId: Long
            authorId: Long
            content: String
        }

        class ForumReplyDTO {
            postId: Long
            authorId: Long
            content: String
        }

        class VoteDTO {
            targetId: Long
            userId: Long
            type: VoteType
        }
    }


    ForumPostController --> ForumPostService : uses
    ForumPostService --> ForumPostRepository : uses
    ForumPostService --> PostVoteRepository : uses
    ForumPostRepository --> ForumPost : manages
    PostVoteRepository --> PostVote : manages
    
    
    ForumReplyController --> ForumReplyService : uses
    ForumReplyService --> ForumReplyRepository : uses
    ForumReplyService --> ReplyVoteRepository : uses
    ForumReplyRepository --> ForumReply : manages
    ReplyVoteRepository --> ReplyVote : manages

    Forum <|-- ForumPost
    Forum <|-- ForumReply
    Vote <|-- PostVote
    Vote <|-- ReplyVote

```