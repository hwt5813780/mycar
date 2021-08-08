const express = require('express');
const router = express.Router();

const {staff_file_up, staff_img_up} = require('../controller/manageAPI/uploadImg');
const Query = require('./../config/dbHelper');
const jwt = require("jsonwebtoken");
const {KEY} = require("./../config/config");



router.post('/staff', (req, res, next) => {
    // 3. 查询数据库
    let sql = `SELECT * FROM t_staff;`;
    Query(sql).then((result) => {
            res.json({
                status: 1,
                msg: '管理员信息更新成功!',
                data: {
                    staff_id:result.staff_id,
                    profile:result.profile,
                    name:result.name,
                    position:result.position,
                    phone:result.phone,
                    email:result.email,
                    purchase_quantity:result.purchase_quantity,
                    purchase_cost:result.purchase_cost,
                    sale_quantity:result.sale_quantity,
                    sale_value:result.sale_value
                }
            })
        }).catch((error) => {
            res.json({
                status: 0,
                msg: '当前用户不存在！'
            })
        })
})

module.exports = router;