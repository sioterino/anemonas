# Diagrama de Atividade
## Cadastro de Usuário

```mermaid
flowchart TD
    Start([Início]) --> A1[Acessar página de cadastro]
    A1 --> A2[Preencher formulário com dados pessoais]
    A2 --> A3[Selecionar tipo de usuário]
    A3 --> A4[Aceitar termos de uso]
    A4 --> A5[Submeter formulário]

    A5 --> D1{Dados válidos?}
    D1 -->|Não| A6[Exibir mensagens de erro]
    A6 --> A2

    D1 -->|Sim| D2{Email já cadastrado?}
    D2 -->|Sim| A7[Exibir erro: email já existe]
    A7 --> A2

    D2 -->|Não| A8[Criar conta no sistema]
    A8 --> A9[Gerar token de verificação]
    A9 --> A10[Enviar email de confirmação]

%% Fork (representado por divisão de fluxo)
    A10 --> A11[Exibir mensagem de sucesso]
    A11 --> A12[Aguardar confirmação de email]

    A12 --> A14[Redirecionar para login]
    A12 --> D3{Email confirmado em 24h?}

    D3 -->|Sim| A15[Ativar conta]
    D3 -->|Não| A16[Manter conta inativa]

    A15 --> End([Fim])
    A16 --> End
    A14 --> End
```

## Notas
- O usuário pode escolher entre Aluno, Monitor ou Coordenador
- A validação inclui: formato de email, força da senha, campos obrigatórios
- O token de verificação expira em 24 horas
- Contas não verificadas podem ser excluídas automaticamente após período de inatividade