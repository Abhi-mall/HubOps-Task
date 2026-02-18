import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import serviceRouter from './routes/serviceRoutes.js'

dotenv.config()

const app = express()

app.use(cors())   
app.use(express.json())   

const PORT = process.env.PORT || 4000

app.get('/', (req, res) => {
  res.send('Hello from server')
})

app.use('/api/services', serviceRouter)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))   