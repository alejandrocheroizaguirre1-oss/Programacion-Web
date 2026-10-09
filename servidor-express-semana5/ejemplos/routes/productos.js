const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Listado de productos');
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Detalle del producto con ID: ${id}`);
});


module.exports = router;