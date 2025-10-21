## Subir o banco de dados

No terminal, dentro da pasta onde está o arquivo `docker-compose.yml`, execute:

```bash
  docker compose up -d
```

---

### Verificar se o container está rodando

```bash
  docker ps
```

Você deve ver algo assim:

```
CONTAINER ID   IMAGE               COMMAND                  STATUS          PORTS                    NAMES
a1b2c3d4e5f6   postgres:15-alpine  "docker-entrypoint.s…"   Up 10 seconds   0.0.0.0:5432->5432/tcp   anemonas
```


O banco PostgreSQL agora está rodando em segundo plano e pode ser acessado com:

```
Host: localhost
Porta: 5432
Banco: anemonas
Usuário: user
Senha: coisarada
```

---

Se quiser **parar o banco** depois, use:

```bash
  docker compose down
```
