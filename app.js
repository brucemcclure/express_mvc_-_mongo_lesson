const express = require('express') // This is the framework we are using to build the server
const exphbs = require('express-handlebars') // This is the templating engine we will use for the views
const app = express() // This creates the express app. Notice that it is a function
const port = 3000 // A variable to hold our port number. This will be used to start the server

// NB expess is unopiniated but handlebars is not. It needs a few files set out for it.
// It needs a layouts views folder, layouts folder and a main.handlebars inside that
// Inside of main.handlebars add {{{body}}} between the <body> tags

app.engine('handlebars', exphbs({ defaultLayout: 'main' })) // Telling express that we need to use handlebars
app.set('view engine', 'handlebars') // Setting the view engine to be handlebars

// When we recieve data from an http request, it is not in a format that we can automatically use
// It is in the form of a stream. The below 2 lines of code convert it for us.
// app.use, is a flag that it is a piece of global middleware. ie the whole app will use it
// Essentially a funnel to make sure the correct data comes into our app
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// This is an empty array that will be our pseudo database until we hook up mongo
const contacts = []

// This is the code that will turn the web server on
app.listen(port, () => console.log(`Server listening on port ${port}!`))
