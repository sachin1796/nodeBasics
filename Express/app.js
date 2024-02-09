const express = require('express');


const app = express();
const morgan = require('morgan');

const myMiddleWareFunction = require('./middlewares/middleware') 

const secondMiddlewareFunction = require('./middlewares/middleware2')


// GET , POST , PUT , DELETE

app.use(express.json())

app.use(myMiddleWareFunction)

app.use(secondMiddlewareFunction)

app.use(morgan('tiny message'))

const courses = [
    {
        id : 1,
        name:'Javascript'
    },
    {
        id : 2,
        name:'Java'
    },
    {
        id : 3,
        name:'Python'
    },
    {
        id : 4,
        name:'BhaiLang'
    },
]


//access some data from  a particular resource
app.get('/' , (req,res) => {
    res.send('Hello from Sachin')
})

app.get('/about' , (req,res) => {
    res.send('About')
})

app.get('/contact' , (req,res) => {
    res.send('Contact us')
})

app.get('/courses' ,  (req,res) => {
    res.send(courses)
})

//POST > creating entry

app.post('/courses' ,  (req,res) => {
    const course = {
        id:courses.length + 1,
        name: req.body.name
    }
    courses.push(course)
    res.send(course)
})

// PUT - update 
app.put('/courses/:id' , (req,res) => {
    let course = courses.find(course => course.id === parseInt(req.params.id))

    if(!course) res.status(404).send('Course does not exist')
    course.name = req.body.name;
    res.send(course)

})

// DELETE 
app.delete('/courses/:id' , (req,res) => {
    let course = courses.filter(course => course.id === parseInt(req.params.id))
    if(!course) res.status(404).send('Course does not exist')

    const index = courses.indexOf(course)

    courses.splice(index,1)

    res.send(course)

})

// Route Parameters
app.get('/courses/:id', (req,res) => {
    let course = courses.find(course => course.id === parseInt(req.params.id))

    if(!course) res.status(404).send('Course does not exist')

    res.send(course)
})








const port = process.env.PORT || 8080



app.listen(port , () => {
    console.log(`Server started.You can access it on http://localhost:${port}`)
})
