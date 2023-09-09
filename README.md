# E-commerce com NestJS e MongoDB

## Para instalar as dependências do projeto, execute o seguinte comando:

npm install

## Configuração
Antes de executar o projeto, você precisa configurar a variável de ambiente. Crie um arquivo .env na raiz do projeto e adicione na variável a url do mongoDBAtlas.

DATABASE_URL = <URL do banco de dados MongoDB>

## Configurar o nodemailer
1 - Abra a pasta app -> email -> email.service.ts
2 - Preencha os dados para configuração constructor() {
    this.transporter = nodemailer.createTransport({
      host: '',
      port: ,
      auth: {
        user: '',
        pass: '',
      },
    });
  }



## Para executar o projeto em modo de desenvolvimento, execute o seguinte comando:

npm run start:dev

Isso iniciará o servidor de desenvolvimento em http://localhost:8000>.

## Link do Swagger
<http://localhost:8000/api>


## Cadastrar os produtos
1 - Abra o arquivo com o nome products.mock.json e copie o coteudo
2 - Abra o INSOMNIA  e criei um endpoint POST com a url http://localhost:8000/products e faça o 
envio do carquivo.

## Cadastrar usuario
1 - Crie um endpoiter POST http://localhost:8000/user 
2 - Enviei os dados name, email e password