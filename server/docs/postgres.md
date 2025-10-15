## 1. Criar o banco de dados
O banco de dados para esta atividade deve ser criado numa imagem docker. O projeto PostgreSQL disponibiliza uma imagem contendo o postgresql instalado e pronto para ser usado. Para criar seu container com o banco siga estes passos:

1. SOMENTE SE ESTIVER NO LABORATÓRIO: execute primeiro este comando:
```bash
  dockerd-rootless-setuptool.sh install
```

2. Obtenha a imagem postgresql do docker
```bash
  docker pull postgres
```

3. Crie um container usando essa imagem. Neste exemplo, o nome do container é pg-spring, e a senha de acesso ao banco é coisarada. Por fim, o container possibilita que aplicações fora do container acessem o banco via port 5432.
```bash
    docker run --name anemonas -e POSTGRES_PASSWORD=coisarada -d -p 5432:5432 postgres
```

4. Agora crie um banco de dados para sua aplicação, conforme explicado na introdução ao uso de banco de dados no Spring Boot:
```bash
    docker exec -it anemonas bash
    root# psql -U postgres -W
    
    postgres=# create database anemonas;
    pbe=#quit
    root# exit
```

5. Atenção: container_id é o identificador do container que você iniciou no passo 2. Ele pode ser obtida com este comando:
```bash
    docker ps
```

## 2. Adicionar dependências à sua aplicação para usar JPA e Postgresql
Uma vez tendo o banco ativado, você deve adicionar as dependências para que sua aplicação consiga usá-lo. Acrescente o seguinte ao arquivo build.gradle, na seção dependencies:
```
    dependencies {
        // mantenha as dependências já existentes ...
        
            implementation 'org.hibernate.orm:hibernate-community-dialects'
            implementation 'org.springframework.boot:spring-boot-starter-data-jpa'
            implementation 'org.postgresql:postgresql'
        
            // Lombok: para facilitar geração de código repetitivo
            implementation 'org.projectlombok:lombok'
            annotationProcessor 'org.projectlombok:lombok'
    }
```
As novas dependências são:
```
    org.hibernate.orm:hibernate-community-dialects: dialetos sql do hibernate (o ORM utilizado)
    org.springframework.boot:spring-boot-starter-data-jpa: suporte e configurações do JPA no Spring Boot
    
    org.postgresql:postgresql: drive JDBC para Postgresql
```

## 3. Configure a sua aplicação para que possa usar o banco de dados
Para que a sua aplicação possa usar o banco de dados, algumas propriedades precisam ser definidas em application.properties:

```
    spring.datasource.driver-class-name=org.postgresql.Driver
    spring.datasource.url=jdbc:postgresql://localhost:5432/pbe
    spring.datasource.username=postgres
    spring.datasource.password=coisarada
    spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect
    spring.jpa.hibernate.ddl-auto=update
    spring.jpa.hibernate.show_sql=true
```