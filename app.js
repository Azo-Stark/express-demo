const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const router = require('./router')
const errorHandler = require('./middleware/error-handler')
require('./model')

app.use(express.json())
app.use(express.urlencoded())
app.use(morgan('dev'))
app.use(cors())

const PORT = process.env.PROT || 3000

app.use('/api',router)

app.use(errorHandler())

app.listen(PORT, () => {
    console.log('服务已经启动' + PORT + '端口正在监听！！！')
})