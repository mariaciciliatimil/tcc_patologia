// controllers/exameController.js

exports.cadastrarExame = (req, res) => {
    // Lógica para cadastrar um exame
    const exameData = req.body;
    
    // Aqui você pode adicionar a lógica para salvar o exame no banco de dados

    res.status(201).json({ message: 'Exame cadastrado com sucesso!', exame: exameData });
};
