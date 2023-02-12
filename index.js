const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const format = require('date-format');

app.get('/',(req,res)=>{
    res.status(200).send("<h1>Hello This is Anand Kunal Mishra</h1>");
});

app.get("/api/v1/facebook", (req,res) => {
    const facebookSocial = {
        username : "Anand Kunal Mishra" ,
        followers : 66,
        follows : 70,
        date : format("dd[MM] - hh:mm:ss", new Date())
    };

    res.status(200).json({ facebookSocial });
});
app.get("/api/v1/instaSocial", (req,res) => {
    const instaSocial = {
        username : "Anand Kunal Mishra" ,
        followers : 66,
        follows : 70,
        date : format("dd[MM] - hh:mm:ss", new Date())
    };

    res.status(200).json({ instaSocial });
});
app.get("/api/v1/linkedInSocial", (req,res) => {
    const linkedInSocial = {
        username : "Anand Kunal Mishra" ,
        followers : 66,
        follows : 70,
        date : format("dd[MM] - hh:mm:ss", new Date())
    };

    res.status(200).json({ linkedInSocial });
});

app.get("/api/v1/:token",(req,res)=>{
    console.log(req.params.token);
    res.status(200).json({param: req.params.token});
});

app.listen(PORT,()=>{
    console.log(`Server is running in port ${PORT}`);
});