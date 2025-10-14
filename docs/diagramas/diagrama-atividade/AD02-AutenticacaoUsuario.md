# Diagrama de Atividade
## Autenticação de Usuário

```mermaid
flowchart TD
    Start([Início]) --> A1[Acessar página de login]
    A1 --> A2[Inserir email]
    A2 --> A3[Inserir senha]
    A3 --> A4[Submeter email e senha]

    A4 --> D1{Credenciais válidas?}
    D1 -->|Não| A5[Exibir erro de autenticação]
    A5 --> D2{Tentativas < 5?}
    D2 -->|Sim| A2
    D2 -->|Não| A6[Bloquear conta temporariamente]
    A6 --> A7[Enviar email de bloqueio da conta]
    A7 --> End1([Fim - Conta Bloqueada])

    D1 -->|Sim| D3{Conta ativa?}
    D3 -->|Não| A8[Exibir erro: conta inativa]
    A8 --> A9[Oferecer reenvio do email de ativação]
    A9 --> End2([Fim])

    D3 -->|Sim| A10[Gerar token JWT]
    A10 --> A11[Criar sessão]
    A11 --> A12[Registrar log de acesso]

    A12 --> D4{Tipo de usuário?}
    D4 -->|Aluno| A13[Redirecionar para dashboard do aluno]
    D4 -->|Monitor| A14[Redirecionar para dashboard do monitor]
    D4 -->|Coordenador| A15[Redirecionar para dashboard do coordenador]

    A13 --> End3([Fim - Autenticado])
    A14 --> End3
    A15 --> End3

```

## Notas
- Após 5 tentativas falhas, a conta é bloqueada por 30 minutos
- O token JWT tem validade de 24 horas
- O sistema registra data, hora e IP de cada acesso
- Cada tipo de usuário é redirecionado para sua interface específica
