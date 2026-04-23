import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
//mongodb+srv://bieloliveira9531_db_user:FLBwcxxgpZBp4Pml@cadastro.eotrdxo.mongodb.net/Usuarios?appName=cadastro
const app = express()
app.use(express.json())
app.use(cors()) 

mongoose.connect('mongodb+srv://bieloliveira9531_db_user:FLBwcxxgpZBp4Pml@cadastro.eotrdxo.mongodb.net/Usuarios?appName=cadastro')
    .then(() => console.log('Conectado ao MongoDB'))
    .catch((err) => console.error('Erro ao conectar ao MongoDB:', err));

const usuarioSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true },
}, { timestamps: true }
);
const Usuario = mongoose.model('Usuario', usuarioSchema);



app.get("/usuarios", async (req, res) => {
    const usuariosdobanco = await Usuario.find()
    res.json(usuariosdobanco)
})




app.post("/usuarios", async (req, res) => {
    console.log(req.body)
    const usuariocriado = await Usuario.create(req.body)


    res.json(usuariocriado)

})

const PORT = process.env.PORT || 3003;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});