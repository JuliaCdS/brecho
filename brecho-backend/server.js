const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Configuração do CORS
app.use(cors({
  origin: 'http://localhost:8100', // Substitua pelo endereço do seu app Ionic
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(bodyParser.json());

// Configuração do MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '190404',
  database: 'ionicdb'
});

connection.connect(error => {
  if (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
    return;
  }
  console.log('Conectado ao banco de dados MySQL');

  // Cria a tabela 'users' se não existir
  const createUsersTable = `
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      nome VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL
    );
  `;
  connection.query(createUsersTable, (error, results) => {
    if (error) {
      console.error('Erro ao criar tabela users:', error);
    } else {
      console.log('Tabela users criada ou já existente');
    }
  });

  // Cria a tabela 'pecas' se não existir
  const createPecasTable = `
    CREATE TABLE IF NOT EXISTS pecas (
      id INT AUTO_INCREMENT PRIMARY KEY,
      nome VARCHAR(255) NOT NULL,
      descricao TEXT,
      preco DECIMAL(10, 2) NOT NULL
    );
  `;
  connection.query(createPecasTable, (error, results) => {
    if (error) {
      console.error('Erro ao criar tabela pecas:', error);
    } else {
      console.log('Tabela pecas criada ou já existente');
    }
  });
});

// Rota para a raiz ("/")
app.get('/', (req, res) => {
  res.send('Bem-vindo ao servidor Node.js');
});

// Rota para registrar usuários
app.post('/register', (req, res) => {
  const { nome, email, password } = req.body;
  const query = 'INSERT INTO users (nome, email, password) VALUES (?, ?, ?)';
  connection.query(query, [nome, email, password], (error, results) => {
    if (error) {
      console.error('Erro ao registrar usuário:', error);
      res.status(500).send('Erro ao registrar usuário');
      return;
    }
    res.status(201).json({ message: 'Usuário registrado com sucesso', id: results.insertId });
  });
});

// Rota para login
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
  connection.query(query, [email, password], (error, results) => {
    if (error) {
      console.error('Erro ao fazer login:', error);
      res.status(500).send('Erro ao fazer login');
      return;
    }
    if (results.length > 0) {
      res.status(200).json({ message: 'Login bem-sucedido' });
    } else {
      res.status(401).json({ message: 'Credenciais inválidas' });
    }
  });
});

// Rota para inserir peças
app.post('/api/inserir-peca', (req, res) => {
  const { nome, descricao, preco } = req.body;
  const query = 'INSERT INTO pecas (nome, descricao, preco) VALUES (?, ?, ?)';
  connection.query(query, [nome, descricao, preco], (error, results) => {
    if (error) {
      console.error('Erro ao inserir peça:', error);
      res.status(500).send('Erro ao inserir peça');
      return;
    }
    res.status(201).json({ message: 'Peça inserida com sucesso', id: results.insertId });
  });
});

// Rota para obter todas as peças
app.get('/api/pecas', (req, res) => {
  const query = 'SELECT * FROM pecas';
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Erro ao obter as peças:', error);
      res.status(500).send('Erro ao obter as peças');
      return;
    }
    res.status(200).json(results);
  });
});

app.get('/api/pecas/:id', (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM pecas WHERE id = ?';
  connection.query(query, [id], (error, results) => {
    if (error) {
      console.error('Erro ao obter a peça:', error);
      res.status(500).send('Erro ao obter a peça');
      return;
    }
    if (results.length === 0) {
      res.status(404).send('Peça não encontrada');
      return;
    }
    res.status(200).json(results[0]);
  });
});


// Inicia o servidor HTTP
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
