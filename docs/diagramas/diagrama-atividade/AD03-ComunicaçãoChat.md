# Diagrama de Atividade
## Comunicação via Chat


## Acesso e abertura do chat
```mermaid
flowchart TD
    Start([Início]) --> A1[Acessar módulo de chat]
    A1 --> D1{Tem conversas existentes?}

    D1 -->|Sim| A2[Exibir lista de conversas]
    D1 -->|Não| A3[Exibir tela vazia]

    A2 --> D2{Ação do usuário?}
    A3 --> D2

    D2 -->|Selecionar conversa| A4[Abrir conversa existente]
    D2 -->|Nova conversa| A5[Buscar usuário]

    A5 --> A6[Selecionar destinatário]
    A6 --> A7[Criar nova conversa]
    A7 --> A4

    A4 --> A8[Carregar histórico de mensagens]
    A8 --> A9[Estabelecer conexão WebSocket]
    A9 --> ChatLoopStart[Início do Loop de Chat]


```

## Envio de Mensagens e status
```mermaid
flowchart TD
    ChatLoopStart --> D3{Evento?}
    D3 -->|Digitar mensagem| A10[Capturar texto]
    A10 --> D4{Anexar arquivo?}

    D4 -->|Sim| A11[Selecionar arquivo]
    A11 --> D5{Arquivo válido?}
    D5 -->|Não| A12[Exibir erro]
    A12 --> A10
    D5 -->|Sim| A13[Upload do arquivo]
    A13 --> A14[Enviar mensagem]
    D4 -->|Não| A14[Enviar mensagem]

    A14 --> A15[Salvar no banco de dados]
    A14 --> A16[Transmitir via WebSocket]

    A15 --> A17[Atualizar interface do remetente]
    A16 --> D6{Destinatário online?}

    D6 -->|Sim| A18[Entregar em tempo real]
    A18 --> A19[Exibir notificação]
    D6 -->|Não| A20[Armazenar para entrega posterior]

    A19 --> A21[Marcar como entregue]
    A21 --> D7{Destinatário leu?}
    D7 -->|Sim| A22[Marcar como lida]
    D7 -->|Não| ChatLoopStart

    A22 --> ChatLoopStart
    A20 --> ChatLoopStart
    A17 --> ChatLoopStart


```

## Recebimento de mensagens e encerramento 
```mermaid
flowchart TD
    ChatLoopStart --> D3b{Evento?}
    D3b -->|Receber mensagem| A23[Atualizar interface]
    A23 --> A24[Reproduzir notificação]
    A24 --> ChatLoopStart

    D3b -->|Fechar chat| A25[Encerrar WebSocket]
    A25 --> End([Fim])


```

## Notas
- Os diagramas foram separados para melhor vizualização 
- Suporte para mensagens de texto e arquivos (imagens, PDFs, até 10MB)
- Indicadores de status: enviado, entregue, lido
- Notificações em tempo real para mensagens recebidas
- Histórico completo de conversas mantido no banco de dados
- Conexão WebSocket para comunicação bidirecional em tempo real
