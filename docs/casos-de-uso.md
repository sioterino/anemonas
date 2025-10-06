# CASOS DE USO

## UC01: Cadastro de Usuários

* **Atores:** usuário (aluno/monitor), sistema;

> [!NOTE]
> O projeto inclui usuários coordenadores e administrador; no entanto, nesses casos, o fluxo seria diferente, necessitando uma autenticação e validação de credenciais mais criteriosas que não cabem ao MVP inicial do projeto.

* **Descrição:** permitir que novos usuários se cadastrem na plataforma e acessem o sistema com credenciais únicas;
* **Pré-condição:** usuário deve possuir um email;
* **Pós-condição:** usuário cadastrado e pronto para autenticação.

### Fluxo Principal

1. Usuário acessa a página de cadastro;
2. Sistema fornece um formulário para registro;
3. Usuário fornece credenciais de registro (nome, nome de usuário, email, instituição, senha, aluno/monitor);
4. Sistema verifica se o email e nome de usuário já estão em uso;
5. Sistema retorna uma mensagem de sucesso ao usuário informando que o cadastro foi efetuado.

### Fluxo Alternativo

* Durante a etapa de verificação, caso o email ou nome de usuário já estejam em uso, o sistema:
   1. Retorna uma mensagem de erro;
   2. Solicita um novo email ou nome de usuário;
   3. Valida novas credenciais fornecidas.

---

## UC2: Autenticação de Usuários

* **Atores:** usuário (aluno, monitor, coordenador, administrador), sistema;
* **Descrição:** realizar autenticação diferenciada conforme o papel do usuário;
* **Pré-condição:** usuário deve estar cadastrado;
* **Pós-condição:** usuário autenticado com sessão ativa e segura.

### Fluxo Principal

1. Usuário acessa a página de *login*;
2. Sistema fornece um formulário para autenticação;
3. Usuário fornece credenciais de autenticação (nome de usuário ou email e senha);
4. Sistema verifica se as credenciais estão corretas;
5. Sistema retorna uma mensagem de sucesso ao usuário informando que foi autenticado.

### Fluxo Alternativo

* Durante a etapa de verificação, caso as credenciais de usuário não estejam corretas, o sistema:
   1. Retorna uma mensagem de erro;
   2. Solicita correção das credenciais de autenticação;
   3. Valida novas credenciais fornecidas.

---

## UC03: Comunicação via Chat

* **Atores:** aluno, monitor, sistema;
* **Descrição:** permitir comunicação entre usuários via chat;

> [!NOTE]
> No projeto, é incluso sistema de moderação com uso de IA, por conta do prazo de entrega, essa *feature* não cabe dentro do MVP estipulado inicialmente.

* **Pré-condição:** usuários devem possuir contas autenticadas;
* **Pós-condição:** conversas são registradas, havendo um histórico.

### Fluxo Principal

1. Usuário acessa página de chat de conversa;
2. Usuário escolhe um contato para trocar mensagens;
3. Usuário envia mensagens em tempo real;
4. Sistema armazena histórico de conversa.

---

## UC04.1: Postagens no Fórum

* **Atores:** usuário, sistema;
* **Descrição:** permitir perguntas sobre materiais acadêmicos;
* **Pré-condição:** usuário deve estar autenticado;
* **Pós-condição:** fórum atualizado com novas postagens.

### Fluxo Principal

1. Usuário acessa a página do fórum e escolhe fazer uma nova postagem;
2. Sistema apresenta um formulário de postagem;
3. Usuário fornece informações importantes para postagem (título, corpo, matéria/assunto);
4. Sistema valida se todos os campos foram preenchidos corretamente.
5. Sistema retorna uma mensagem informando que uma nova postagem foi adicionada ao feed.

### Fluxo Alternativo

* Durante a validação dos campos do formulário de postagem, caso algum campo não esteja preenchido corretamente, o sistema:
    1. Exibe um erro informando que faltam campos a serem preenchidos;
    2. Pede ao usuário para terminar de fornecer os dados necessários para realizar a postagem;
    3. Valida a nova entrada do usuário.

---

### UC04.2: Respostas em Postagens no Fórum

* **Atores:** usuário, sistema;
* **Descrição:** permitir discussões abertas;
* **Pré-condição:** usuário deve estar autenticado e deve existir uma postagem no fórum;
* **Pós-condição:** postagem atualizada no fórum com novas respostas.

### Fluxo Principal

1. Usuário acessa a página de fórum, encontra uma postagem cuja pergunta ele conheça a resposta e decide postar uma resposta;
2. Sistema apresenta um formulário de resposta;
3. Usuário fornece apenas um corpo contendo o conteúdo a ser postado;
4. Sistema valida se o campo foi preenchido corretamente;
5. Sistema retorna uma mensagem informando que uma resposta foi enviada sob uma postagem.

### Fluxo Alternativo

* Durante a fase de validação do formulário de resposta, caso o campo do corpo da mensagem não esteja preenchido, o sistema:
    1. Exibe um erro avisando que não é possível enviar respostas em branco;
    2. Exige preenchimento do campo;
    3. Valida dados inseridos no campo.

---

### UC04.3: Votos em Postagens e Respostas no Fórum

* **Atores:** usuário, sistema;
* **Descrição:** permitir ranqueamento de postagens e respostas com base no *feedback* do usuários;
* **Pré-condição:** usuário deve estar autenticado e uma postagem/resposta deve existir;
* **Pós-condição:** fórum atualizado com novas postagens e respostas e seus respectivos votos.

### Fluxo Principal

1. Usuário acessa a página do fórum e abre uma postagem que despertou seu interesse;
2. Sistema apresenta ao usuário opções de "upvote" e "downvote" tanto na postagem,quanto nas respostas.
3. Usuário escolhe uma das opções, ou nenhuma, de acordo com sua compreensão da pergunta e suas respostas.

---

### UC05: Visualizar Agenda de Monitores

* **Atores:** usuário, sistema;
* **Descrição:** permitir a visualização das disponibilidades dos monitores em uma agenda pública;
* **Pré-condição:** usuário deve estar autenticado;
* **Pós-condição:** agenda é consultada com sucesso.

### Fluxo Principal

1. Usuário acessa página de matérias e seleciona a matéria de interesse;
2. Sistema exibe monitores da matéria selecionada;
3. Usuário seleciona exibir o perfil de um dos monitores;
4. Sistema retorna o perfil do monitor, junto de sua disponibilidade e agenda;

---

## Histórico do Documento

| Data     | Autor | Edição                                    |
| -------- | ----- | ----------------------------------------- |
| 06/10/25 | Sofia | Criação do documento.                     |
