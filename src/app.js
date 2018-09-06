const fs=require('fs');
const path=require('path');
const express=require('express');
const app=express();

app.set('views',path.join(__dirname,'views'));

app.set('views engine','ejs');

app.use(express.static(path.join(__dirname,'public')));

const accountData=fs.readFileSync(
  path.join(__dirname,'json','accounts'),'utf8'    
);
const accounts=json.parse('accountData');

const userData=fs.readFileSync(
    path.join(__dirname,'json','users'),'utf8'
);
const users=json.parse('userData');

app.get('/',(req,res)=>{res.render('index',{title:'Accounts Summary',accounts});
});


app.get('/savings',(req,res)=>{
    res.render('account',{account:accounts.savings});
});

app.get('/checking',(req,res)=>{
    res.render('account',{account:accounts.checking});
});

app.get('/credit',(req,res)=>{
    res.render('account',{account:accounts.credit});
});

app.get('/profile',(req,res)=>{
    res.render('profile',{user:user[0]});
});

app.listen(9001, () =>console.log('log on port 5000'));