const express=require('express')
const fs=require('fs')
const app=express()

app.all('*',function (req,res,next) {
  res.header('Access-Control-Allow-Origin','*')
  res.header('Access-Control-Allow-Headers',"content-type")
  res.header('Access-Control-Allow-Methods','DELETE,PUT,POST,GET,OPTIONS')
  if (req.method.toLowerCase()=='options'){
    res.send(200)
  }else {
    next()
  }
})

app.get('/home/multidata',function (req,res) {
  fs.readFile('./data/homedata/multidata.json',function (err,data) {
    if (err){
      return res.send('err')
    }
    res.send(JSON.parse(data))
  })
})

app.get('/home/bigdata',function (req,res) {
  fs.readFile('./data/homedata/tabdata.json',function (err,data) {
    if (err){
      return res.send('err')
    }
    res.send(JSON.parse(data))
  })
})

app.get('/home/homedata', function (req, res) {
  //判断参数
  const path=`./data/homedata/${req.query.type}${req.query.page}.json`
  // console.log(path)
  fs.readFile(path, function (err, data) {
    if (err) {
      return res.send('err')
    }
    res.send((JSON).parse(data))
  })
})

app.get('/home/category',function (req,res) {
  fs.readFile('./data/categorydata/category.json',function (err,data) {
    if (err){
      return res.send('err')
    }
    res.send(JSON.parse(data))
  })
})

app.get('/home/subcategory',function (req,res) {
  const path=`./data/categorydata/${req.query.type}${req.query.page}.json`
  fs.readFile(path,function (err,data) {
    if (err){
      return res.send('err')
    }
    res.send(JSON.parse(data))
  })
})

app.listen(8000,function () {
  console.log("8000...")
})
