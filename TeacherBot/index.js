require('dotenv').config()
const discord = require("discord.js")
const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@teacherbot-jgarz.gcp.mongodb.net/test?retryWrites=true`
const mnClient = require("mongonow")(url)
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
    collection.find().toArray(function(err,data) {
        fn(err, data)
    })
}

const client = new discord.Client()

client.on("ready", function() {
    console.log("TeacherBot seems ready!")
})

client.on("message", function(msgObj) {
    if (msgObj.author.bot) return
    const content = msgObj.content
    if (content.includes("Hello")) {
        msgObj.reply("Hello student!")
    }

    let displayData = function(err, data) {
        if (err) {
            console.error(err) 
            return
        }
        let listOfData = [""]
        let count = 1;
        data.forEach(datum => {
            listOfData.push(count + " " + datum.item)
            count++
        })
        console.log("Attempting to display data")
        msgObj.reply(listOfData.join("\n \n"))
    }

    // Get notess
    const commandMap = {
        gN: notes,
        gU: urls,
        gC: code,
        gQ: questions,
        gA: answers
      }
      
      if (content.startsWith('!') && content.length >= 3) {
        const cmd = content.slice(1, 3) // grab the second two characters from the string (gN, gU, etc.)
        if (commandMap[cmd]) { // if this command is mapped...
          show(commandMap[cmd], displayData) // show the collection from the map
        }
      }
})

client.login(process.env.DISCORD_TOKEN)