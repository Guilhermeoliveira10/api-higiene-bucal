const express = require('express');
const app = express();
const port = 3000;

const advices = {
    toothCare: [
        "Escove seus dentes pelo menos duas vezes ao dia, especialmente após as refeições.",
        "Use creme dental com flúor para ajudar a proteger os dentes contra cáries.",
        "Evite escovar os dentes com muita força para não desgastar o esmalte dental."
    ],
    goodHabits: [
        "Mantenha uma dieta equilibrada e evite alimentos ricos em açúcar.",
        "Beba água regularmente para ajudar a remover partículas de alimentos.",
        "Visite o dentista a cada seis meses para uma limpeza profissional e check-up."
    ],
    dentalFloss: [
        "Use fio dental diariamente para limpar entre os dentes.",
        "Passe o fio dental cuidadosamente para evitar machucar a gengiva.",
        "O fio dental ajuda a remover restos de alimentos onde a escova não alcança."
    ],
    toothache: [
        "Se sentir dor de dente, consulte um dentista o mais rápido possível.",
        "Evite alimentos muito frios ou muito quentes se estiver com dor de dente.",
        "Uma boa higiene bucal pode prevenir dores de dente e outros problemas."
    ]
};

app.get('/advice/:category', (req, res) => {
    const category = req.params.category;
    const adviceList = advices[category];

    if (adviceList) {
        const randomAdvice = adviceList[Math.floor(Math.random() * adviceList.length)];
        res.json({ advice: randomAdvice });
    } else {
        res.status(404).json({ error: "Categoria de conselho não encontrada." });
    }
});

app.listen(port, () => {
    console.log(`API de conselhos sobre higiene bucal rodando em http://localhost:${port}`);
});
