const userRouter = require('./UserRouter.js')
const productRoute = require('./ProductRouter.js')
const routes = (app)=> {
    app.use('/api/user', userRouter)
    app.use('/api/product', productRoute)
}
module.exports = routes;