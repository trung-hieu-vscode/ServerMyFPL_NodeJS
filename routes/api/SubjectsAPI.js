var express = require('express');
var router = express.Router();
const SubController = require('../../components/Subjects/SubController')

//http://localhost:3000/subjects/api/add-sub
router.post('/add-sub', async (req, res, next) => {
    try {
        const { tenmonhoc, gvdunglop, loaimon } = req.body;
        const subs = await SubController.addSub(tenmonhoc, gvdunglop, loaimon);
        if (subs) {
            return res.status(200).json({ result: true, subs: subs, message: "Add subject Success" });
        }
        return res.status(400).json({ result: false, subs: null, message: "Add subject Failed" });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error System' })
    }
});
//http://localhost:3000/subjects/api/get-by-idd
router.get('/get-by-idd', async (req, res, next) => {
    try {
        const { id } = req.query;
        const subs = await SubController.getById(id);
        if (subs) {
            return res.status(200).json({ result: true, subs: subs, message: "Success" });
        }
        return res.status(400).json({ result: false, subs: null, message: "Failed" });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error System' })
    }
});
// //http://localhost:3000/subject/api/get-by-title
// router.get('/get-by-title', async (req, res, next) => {
//     try {
//         const { title } = req.query;
//         const news = await newsController.getByTitle(title);
//         if (news) {
//             return res.status(200).json({ result: true, news: news, message: "Success" });
//         }
//         return res.status(400).json({ result: false, news: null, message: "Failed" });
//     } catch (error) {
//         return res.status(500).json({ result: false, message: 'Error System' })
//     }
// });
//http://localhost:3000/subjects/api/get-all
router.get('/get-all', async (req, res, next) => {
    try {
        const subs = await SubController.getAll();
        if (subs) {
            return res.status(200).json({ result: true, subs: subs, message: "Success" });
        }
        return res.status(400).json({ result: false, subs: null, message: "Failed" });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error System' })
    }
});
//http://localhost:3000/subjects/api/delete-by-id
router.delete('/delete-by-id', async (req, res, next) => {
    try {
        const { id } = req.query;
        console.log(id);
        const subs = await SubController.deleteById(id);
        if (subs) {
            return res.status(200).json({ result: true, message: "Success" });
        }
        return res.status(400).json({ result: false,message: "Failed" });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error System' })
    }
});
//http://localhost:3000/subjects/api/update-by-id
router.put('/update-by-id', async (req, res, next) => {
    try {
        const { id } = req.query;
        const {tenmonhoc,gvdunglop,loaimon } = req.body;

        console.log(id);
        const subs = await SubController.updateById(id,tenmonhoc,gvdunglop,loaimon);
        if (subs) {
            return res.status(200).json({ result: true, message: "Success" });
        }
        return res.status(400).json({ result: false,message: "Failed" });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error System' })
    }
});




//â


module.exports = router;
