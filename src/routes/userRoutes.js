const router = require("express").Router();
const User = require("../models/user");

router.post("/", async (req, res) => {
  const { name, lastName, email, password } = req.body;

  const user = { name, lastName, email, password };

  if (!name || !lastName || !email) {
    res.status(422).json({
      error: "O nome, sobrenome ou email é obrigatório.",
    });
  }

  try {
    await User.create(user);
    res.status(200).json({
      error: false,
      message: "Usuário foi cadastrado com sucesso.",
    });
  } catch (err) {
    res.status(400).json({
      error: true,
      message: "Não foi possivel cadastrar a pessoa.",
    });
    console.log(err);
  }
});

module.exports = router;