var express = require('express');
var router = express.Router();
const newsController = require('../../components/News/NewsController')

//http://localhost:3000/news/api/add-new
router.post('/add-new', async (req, res, next) => {
    try {
        const { title, content, date } = req.body;
        const news = await newsController.addNew(title, content, date);
        if (news) {
            return res.status(200).json({ result: true, news: news, message: "Add New Success" });
        }
        return res.status(400).json({ result: false, news: null, message: "Add New Failed" });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error System' })
    }
});
//http://localhost:3000/news/api/get-by-id
router.get('/get-by-id', async (req, res, next) => {
    try {
        const { id } = req.query;
        const news = await newsController.getById(id);
        if (news) {
            return res.status(200).json({ result: true, news: news, message: "Success" });
        }
        return res.status(400).json({ result: false, news: null, message: "Failed" });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error System' })
    }
});
//http://localhost:3000/news/api/get-by-title
router.get('/get-by-title', async (req, res, next) => {
    try {
        const { title } = req.query;
        const news = await newsController.getByTitle(title);
        if (news) {
            return res.status(200).json({ result: true, news: news, message: "Success" });
        }
        return res.status(400).json({ result: false, news: null, message: "Failed" });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error System' })
    }
});
//http://localhost:3000/news/api/get-all
router.get('/get-all', async (req, res, next) => {
    try {
        const news = await newsController.getAll();
        if (news) {
            return res.status(200).json({ result: true, news: news, message: "Success" });
        }
        return res.status(400).json({ result: false, news: null, message: "Failed" });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error System' })
    }
});
//http://localhost:3000/news/api/delete-by-id
router.delete('/delete-by-id', async (req, res, next) => {
    try {
        const { id } = req.query;
        console.log(id);
        const news = await newsController.deleteById(id);
        if (news) {
            return res.status(200).json({ result: true, message: "Success" });
        }
        return res.status(400).json({ result: false,message: "Failed" });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error System' })
    }
});
//http://localhost:3000/news/api/update-by-id
router.put('/update-by-id', async (req, res, next) => {
    try {
        const { id } = req.query;
        const { title,content,date } = req.body;

        console.log(id);
        const news = await newsController.updateById(id,title,content,date);
        if (news) {
            return res.status(200).json({ result: true, message: "Success" });
        }
        return res.status(400).json({ result: false,message: "Failed" });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error System' })
    }
});







module.exports = router;
