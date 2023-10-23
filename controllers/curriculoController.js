const db = require('../config/db');

const createCurriculo = async (req, res) => {
  const { nome, experiencia, educacao } = req.body;

  try {
    const newCurriculo = await db.one(
      'INSERT INTO curriculos (nome, experiencia, educacao) VALUES ($1, $2, $3) RETURNING *',
      [nome, experiencia, educacao]
    );

    res.json(newCurriculo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar currículo' });
  }
};

const getAllCurriculos = async (req, res) => {
  try {
    const curriculos = await db.any('SELECT * FROM curriculos');
    res.json(curriculos);
  } catch (error) {
    console.error("Erro ao criar currículo:", error); 
    res.status(500).json({ error: 'Erro ao buscar currículos' });
  }
};

module.exports = {
  createCurriculo,
  getAllCurriculos,
};
