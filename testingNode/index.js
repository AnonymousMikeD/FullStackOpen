const http = require('http')
const express = require('express')
const { response } = require('express')
const app = express()
app.use(express.json())

const cors = require('cors')

app.use(cors())

let notes = [
    {
        id:1,
        content: "HTML is easy",
        date: "2022-07-14T21:43:00.091Z",
        important:false
    },
    {
        id:2,
        content: "Browser can execute only Javascript",
        date: "2022-07-14T21:43:00.091Z",
        important:false
    },
    {
        id:3,
        content: "GET and POST are the most important methjods of HTTP protocol",
        date: "2022-07-14T21:43:00.091Z",
        important:true
    }
]


app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
})

app.get('/api/notes', (request, response) => {
    response.json(notes);
})



app.get('/api/notes/:id',(request, response) => {
    const id = Number(request.params.id)
    const note = notes.find(note=>note.id===id)
    if(note){
        response.json(note)
    } else {
        response.status(404).end()
    }
})

app.delete('/api/notes/:id', (request, response)=> {
    const id = Number(request.params.id)
    console.log(id)
    notes = notes.filter(note => note.id !== id)
    
    response.status(204).end()
})

const generateId = () => {
    const maxId = notes.length>0
    ? Math.max(...notes.map(n => n.id))
    :0
    return maxId+1
}

app.post('/api/notes', (request, response) => {
    const body = request.body

    if(!body.content){
        return response.status(400).json({
            error: 'content missing'
        })
    }

    const note = {
        content: body.content,
        important: body.important || false,
        date: new Date(),
        id: generateId(),
    }

    note.id = maxId + 1

    notes = notes.concat(note)

    response.json(note)
})

const PORT = process.env || 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)