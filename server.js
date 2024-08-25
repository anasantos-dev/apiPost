const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
const slug = require("slug");

const postsRouter = express.Router();
const app = express();
const PORT = 3333;

app.use(express.json());
app.use(cors());

const postagList = [];

postsRouter.post("/textPst/:id", (req, res) => {
  const { title, content, format } = req.body;

  const newPostage = {
    id: uuidv4(),
    title: title,
    content: content,
    format: format,
    created_at: new Date().toLocaleDateString("pt-BR"),
  };

  postagList.push(newPostage);
  res.status(201).json({ message: `Title: ${title} , criado com sucesso` });
});

postsRouter.get("/textPst", (req, res) => {
  res.json(postagList);
});

postsRouter.get("/textsPst", (req, res) => {
  const id = req.query.id;
  const textFound = postagList.find((text) => text.id === id);
  res.json(textFound);
});


postsRouter.patch('/textPst/:id', (req, res) => {
    const { id } = req.params
    const { title, content, format } = req.body 
  
    const textFound = postagList.find(text => text.id === id)
  
    if (!textFound) {
      return res.status(404).json({ message: `Texto com o ${id} editado com sucesso`})
    }
  
    if (title != null) {
    textFound.title = title
    }
  
    if (content != null) {
    textFound.content = content
    }
    
    if (author != null) {
    textFound.format = format
    }
  
    res.json({ message: `Texto com o ${id} editado com sucesso`})
  })


postsRouter.delete("/textPst/:id", (req, res) => {
  const { id } = req.params;

  const position = postagList.findIndex((post) => post.id === id);

  console.log(position);

  postagList.splice(position, 1);

  res.json(postagList);
});

app.use(postsRouter);
app.listen(PORT, console.log(`Servidor rodando na porta ${PORT}`));
