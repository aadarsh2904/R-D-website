import express from 'express'
import cors from 'cors'
import db from './db.js'
const app = express()
const port = 5000

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.json("Hello, this is IIT Indore Research and Development website`s Backend Server");
})
app.get('/api/patents', (req, res) => {
 const q = "SELECT * FROM patents";
 db.query(q,(err,data)=>{
    if(err) return res.json(err)
    return res.json(data)
 })
})

app.get('/api/publications', (req, res) => {
 const q = "SELECT * FROM publications";
 db.query(q,(err,data)=>{
    if(err) return res.json(err)
    return res.json(data)
 })
})

app.get('/api/techtransfer', (req, res) => {
 const q = "SELECT * FROM tech_transfer";
 db.query(q,(err,data)=>{
    if(err) return res.json(err)
    return res.json(data)
 })
})

app.get('/api/sponsored', (req, res) => {
 const q = "SELECT * FROM sponsered_projects";
 db.query(q,(err,data)=>{
    if(err) return res.json(err)
    return res.json(data)
 })
})

app.get('/api/consultancy', (req, res) => {
 const q = "SELECT * FROM consultancy";
 db.query(q,(err,data)=>{
    if(err) return res.json(err)
    return res.json(data)
 })
})

app.get('/api/notification', (req, res) => {
 const q = "SELECT * FROM notifications ORDER BY id DESC LIMIT 10 ";
 db.query(q,(err,data)=>{
    if(err) return res.json(err)
    return res.json(data)
 })
})

app.get('/api/notificationpage', (req, res) => {
 const q = "SELECT * FROM notifications ORDER BY id DESC";
 db.query(q,(err,data)=>{
    if(err) return res.json(err)
    return res.json(data)
 })
})

app.get('/api/researchmetrics', (req, res) => {
 const q = "SELECT * FROM researchmetrics LIMIT 1";
 db.query(q,(err,data)=>{
    if(err) return res.json(err)
    return res.json(data)
 })
})
app.get('/api/cep', (req, res) => {
 const q = "SELECT * FROM cepdata";
 db.query(q,(err,data)=>{
    if(err) return res.json(err)
    return res.json(data)
 })
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})