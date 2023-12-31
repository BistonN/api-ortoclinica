const express = require('express');
const router = express.Router();
const multer = require('multer');

const login = require('../middleware/login.middleware');
const produtoController = require('../controllers/produto.controller');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './assets');
    },
    filename: (req, file, cb) => {
        cb(null, new Date().getTime() + '-' + file.originalname);
    }
});
const upload = multer({
    storage: storage
});


router.get(
    '/',
    login.required,
    produtoController.getProdutosDisponiveis
);

module.exports = router;