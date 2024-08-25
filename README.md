# Postagens

Esta é uma API, objeto de tarefa do projeto APROFUNDA / PretaLab. Construída com Node.js, Express, Cors e uuid . 
A API permite realizar postagens na estrutura:  id: uuidv4, title, content, format e created_at:

# Tecnologias Utilizadas
- Node.js
- Express
- Cors
- Nodemon (para desenvolvimento)

# Execução
Para iniciar a API, foi usado o Nodemon:
.  Para desenvolvimento: 
   npm run dev

.  Para produção:
   npm start

A API estará disponível em http://localhost:3333

# Métodos Utilizados
1. Criar uma nova tarefa
URL: /textPst/:id
Método: POST
Corpo da requisição:

    {
	"title": "Título",
    "content": "Comentário",
    "format": "Link"	
    }

2. Listar todas as tarefas
URL: /textPst
Método: GET

3. Obter uma tarefa por ID
URL: /textsPst | const id = req.query.id
Método: GET

4. Editar uma tarefa
URL: /textPst/:id
Método: PATCH
Corpo da requisição

{
	"title": "Título Atualizado",
    "content": "Comentário Atualizado",
    "format": "Link Atualizado"	
}

5. Deletar uma tarefa
URL: /textPst/:id
Método: DELETE

# Testar a API
Para testar a rota GET foi utilizado a ferramenta INSOMNIA

. POST

