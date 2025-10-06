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

## UC04.2: Respostas em Postagens no Fórum

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

## UC04.3: Votos em Postagens e Respostas no Fórum

* **Atores:** usuário, sistema;
* **Descrição:** permitir ranqueamento de postagens e respostas com base no *feedback* do usuários;
* **Pré-condição:** usuário deve estar autenticado e uma postagem/resposta deve existir;
* **Pós-condição:** fórum atualizado com novas postagens e respostas e seus respectivos votos.

### Fluxo Principal

1. Usuário acessa a página do fórum e abre uma postagem que despertou seu interesse;
2. Sistema apresenta ao usuário opções de "upvote" e "downvote" tanto na postagem,quanto nas respostas.
3. Usuário escolhe uma das opções, ou nenhuma, de acordo com sua compreensão da pergunta e suas respostas.

---

## UC05: Visualizar Agenda de Monitores

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

## UC06: Agendamento de Monitorias

* **Atores:** aluno, monitor, sistema;
* **Descrição:** permitir que alunos agendem sessões de monitoria individuais ou em grupo com os monitores disponíveis;
* **Pré-condição:** usuário deve estar autenticado e o monitor deve ter horários disponíveis em sua agenda;
* **Pós-condição:** sessão de monitoria agendada e registrada no sistema.

### Fluxo Principal

1. Aluno acessa a página de agenda de monitorias;
2. Sistema apresenta a lista de matérias e monitores disponíveis;
3. Aluno seleciona o monitor e visualiza seus horários disponíveis;
4. Aluno escolhe o tipo de sessão (individual ou em grupo) e seleciona o horário desejado;
5. Sistema solicita confirmação do agendamento;
6. Aluno confirma o agendamento;
8. Monitor confirma o agendamento;
9. Sistema registra a sessão na agenda e envia confirmação para o monitor e o aluno.

### Fluxo Alternativo

* Caso o horário selecionado já esteja ocupado, o sistema:
  1. Exibe uma mensagem informando indisponibilidade;
  2. Sugere outros horários disponíveis;
  3. Aluno seleciona um novo horário;
  4. Sistema confirma o novo agendamento.

* Caso o Monitor rejeite o agendamento, o sistema:
    1. Informa por chat a indisponibilidade;

---

## UC07: Busca e Filtro de Monitores

* **Atores:** aluno, sistema;
* **Descrição:** permitir busca e filtragem de monitores por matéria, disponibilidade e histórico de atendimentos;
* **Pré-condição:** usuário deve estar autenticado;
* **Pós-condição:** lista de monitores exibida conforme os critérios de busca.

### Fluxo Principal

1. Aluno acessa a página buscar monitor;
2. Sistema apresenta campos de busca e filtros (matéria, turno, avaliação, frequência de atendimentos);
3. Aluno preenche os filtros desejados e confirma a busca;
4. Sistema processa a solicitação e retorna os monitores compatíveis;
5. Aluno visualiza a lista e pode acessar o perfil de um monitor.

### Fluxo Alternativo

* Caso nenhum monitor atenda aos critérios de busca, o sistema:
  1. Exibe uma mensagem informando que não há resultados disponíveis;
  2. Sugere filtros mais amplos para nova busca.

---

## UC08: Repositório de Questões

* **Atores:** aluno, monitor, sistema;
* **Descrição:** disponibilizar questões categorizadas por matéria e nível de dificuldade para estudo e prática;
* **Pré-condição:** usuário deve estar autenticado;
* **Pós-condição:** questões exibidas ou adicionadas com sucesso.

### Fluxo Principal

1. Usuário acessa a seção de repositório de questões;
2. Sistema exibe lista de matérias e níveis de dificuldade;
3. Usuário escolhe uma matéria e visualiza as questões disponíveis;
4. Aluno pode responder questões, e o monitor pode cadastrar novas;
5. Sistema armazena as respostas e o progresso do usuário.

### Fluxo Alternativo

* Caso não existam questões cadastradas para a matéria selecionada, o sistema:
  1. Exibe mensagem informando ausência de conteúdo;
  2. Sugere matérias ou níveis relacionados.

---

## UC09: Trilhas de Aprendizado e Quizzes Interativos

* **Atores:** aluno, sistema;
* **Descrição:** oferecer trilhas de aprendizado com quizzes e feedback imediato, promovendo aprendizado personalizado;
* **Pré-condição:** aluno deve estar autenticado;
* **Pós-condição:** progresso do aluno é atualizado e feedback exibido.

### Fluxo Principal

1. Aluno acessa a página de trilhas de aprendizado;
2. Sistema exibe trilhas disponíveis por matéria;
3. Aluno seleciona uma trilha e inicia o primeiro módulo;
4. Ao final de cada módulo, o sistema apresenta um quiz interativo;
5. Aluno responde o quiz;
6. Sistema corrige automaticamente e fornece feedback imediato;
7. Sistema registra o progresso do aluno.

### Fluxo Alternativo

* Caso o aluno não conclua o módulo ou quiz, o sistema:
  1. Armazena o progresso parcial;
  2. Exibe mensagem informando que o módulo não foi finalizado;
  3. Permite retomada posterior.

---

## UC10: Criação e Indicação de Exercícios

* **Atores:** monitor, sistema;
* **Descrição:** permitir que monitores criem e indiquem exercícios específicos para alunos ou grupos;
* **Pré-condição:** monitor deve estar autenticado;
* **Pós-condição:** exercício criado e vinculado a alunos ou grupos.

### Fluxo Principal

1. Monitor acessa a página exercícios em seu perfil;
2. Sistema apresenta formulário para criação de exercício;
3. Monitor insere enunciado, matéria, nível de dificuldade e gabarito;
4. Monitor seleciona alunos ou grupos para indicação;
5. Sistema valida as informações;
6. Sistema salva o exercício e notifica os alunos indicados.

### Fluxo Alternativo

* Caso o monitor não preencha todos os campos obrigatórios, o sistema:
  1. Exibe mensagem de erro solicitando preenchimento;
  2. Valida as novas informações;
  3. Registra o exercício após correção.

---

## UC11: Visualização de Desempenho Individual

* **Atores:** aluno, sistema;
* **Descrição:** permitir que o aluno visualize seu desempenho e evolução ao longo do tempo;
* **Pré-condição:** aluno deve estar autenticado e ter atividades concluídas;
* **Pós-condição:** painel de desempenho atualizado e exibido.

### Fluxo Principal

1. Aluno acessa o página de desempenho em seu perfil;
2. Sistema coleta dados de quizzes, exercícios e monitorias realizadas;
3. Sistema exibe gráficos e estatísticas de evolução;
4. Aluno analisa resultados e recebe sugestões de melhoria.

### Fluxo Alternativo

* Caso o aluno ainda não tenha realizado atividades, o sistema:
  1. Exibe mensagem informando ausência de dados;
  2. Sugere trilhas ou atividades iniciais.

---

## UC12: Estatísticas de Engajamento

* **Atores:** monitor, sistema;
* **Descrição:** exibir métricas sobre engajamento em fóruns, quizzes e monitorias;
* **Pré-condição:** usuário deve estar autenticado com permissão adequada;
* **Pós-condição:** estatísticas exibidas com sucesso.

### Fluxo Principal

1. Monitor acessa página de estatísticas no seu perfil;
2. Sistema coleta dados de participação e interação dos usuários;
3. Sistema apresenta métricas (ex: número de respostas em perguntas no fórum, quizzes realizados, frequência de monitorias);
4. Usuário pode filtrar por disciplina, aluno ou período.

### Fluxo Alternativo

* Caso não haja dados disponíveis, o sistema:
  1. Exibe mensagem informando ausência de registros;
  2. Sugere ampliar o intervalo de tempo da busca.

---

## Histórico do Documento

| Data     | Autor | Edição                                    |
| -------- | ----- | ----------------------------------------- |
| 06/10/25 | Sofia | Criação do documento.                     |
| 06/10/25 | Sofia | Adição de mais casos de uso.              |
