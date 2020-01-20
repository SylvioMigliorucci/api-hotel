# configurar .env
NODE_ENV=development

# Auth
APP_SECRET=

# Database

DB_DIALECT="postgresql"
DB_HOST=127.0.0.1
DB_NAME=api-hotel
DB_USER=postgres
DB_PASS=
DB_PORT=5432

PORT_SERVER=3333

# Comandos
>yarn

>yarn dev run

> yarn add sequelize-cli

> yarn sequelize db:migrate

# Rotas

### GET Hospedes
urlrota/checkin?nome=&documento=&telefone

### Post Hospedes

{
	"nome": "joao",
	"documento": "123",
	"telefone": "123"
}

### Post Checkin
{
	"hospede": 1,
	"data_entrada": "2020-01-16T02:18:48+0000",
	"data_saida": "2020-01-17T02:18:48+0000",
	"adicional_veiculo": true
}