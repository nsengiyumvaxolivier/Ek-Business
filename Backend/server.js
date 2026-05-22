const express = require('express');
const app = express();
const cors = require("cors");
const crypt = require('bcrypt');
const jwk = require('jsonwebtoken');
const conn = require("./connection");
app.use(cors());
app.use(express.json());
//app product...........................................................................................
app.post("/add-product",(req,res)=>{
    const{name,in_price,out_price,stock}=req.body;
         const insert ="insert into product(p_name,in_price,out_price,p_stock) values(?,?,?,?)";
    
    conn.query(insert,[name,in_price,out_price,stock],(err,result)=>{
        if(err){
            return res.json({Error:err});
        }
        return res.json("Product Added");
    })
})
//select product............................................................................................
app.get("/get-product",(req,res)=>{
    const select ="SELECT * FROM product";
    conn.query(select,(err,resulrt)=>{
        if(err){
            return res.json({erro:err});
        }
            return res.json(resulrt);

    })
})

app.listen(7000,()=>{
    console.log("Running.....");
})
