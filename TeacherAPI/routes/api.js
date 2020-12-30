require("dotenv").config()
const express = require("express")
const router = express.Router()
const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@teacherbot-jgarz.gcp.mongodb.net/test?retryWrites=true`
const mnClient = require("mongonow")(url)
if (mnClient) console.log("Connected to MongoDB")
let teacherbot
let urls, code, notes, questions, answers


teacherbot = mnClient.db("teacherbot")
notes = teacherbot.collection("notes")
code = teacherbot.collection("code")
questions = teacherbot.collection("questions")
answers = teacherbot.collection("answers")
urls = teacherbot.collection("urls")


function show(collection, fn) {
    // later make a case where if the collection is empty
    collection.find().toArray(function(err, data) {
        fn(err, data)
    })
}

let displayData = function(res) {
        return function(err, data) {
            if (err) {
                console.error(err)
                return
            }
            res.json(data)
        }
}

 router.get('/notes', function(req, res, next) {
 console.log("Attempting to GET all notes")
 show(notes, displayData(res))
 })

router.get('/urls', function(req, res, next) {
 console.log("Attempting to GET all urls")
 show(urls, displayData(res))
 })

router.get('/code', function(req, res, next) {
 console.log("Attempting to GET all code")
 show(code, displayData(res))
 })

router.get('/questions', function(req, res, next) {
 console.log("Attempting to GET all questions")
 show(questions, displayData(res))
 })

router.get('/answers', function(req, res, next) {
 console.log("Attempting to GET all answers")
 show(answers, displayData(res))
 })

module.exports = router
