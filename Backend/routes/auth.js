import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    let obj = {
        name: "",
        rollNumber: 15,
        branch: 'CSE'
    }
    res.json(obj);
})

export default router