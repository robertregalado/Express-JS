const express = require('express')
const router = express.Router()

//router.use(logger)

router.get('/', (req, res) => {
    console.log(req.query.name)
    res.send("Users List")
})

router.get('/new', (req, res) => {
    res.render('users/new')
})

router.post('/', (req, res) => {
    const isValid = true
    if (isValid) {
        users.push({ firstName: req.body.firstName })
        res.redirect(`/users/${users.length - 1}`)
    } else {
        console.log("Error")
        res.render('users/new', { firstName: req.body.firstName })
    }
    res.send('Hi')
})

router
    .route("/:id")
    .get((req, res) => {
        console.log(req.user)
        res.send(`Get User with ID ${req.params.id}`)
    })
    .put((req, res) => {
        res.send(`Update User with ID ${req.params.id}`)
    })
    .delete((req, res) => {
        res.send(`Delete User with ID ${req.params.id}`)
    })

const users = [{ name: "Robert" }, { name: "Nida" }]
router.param("id", (req, res, next, id) => {
    req.user = users[id - 1]
    next()
})

module.exports = router