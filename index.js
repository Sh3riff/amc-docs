const path = require('path') 
const express = require('express') 
const cors = require('cors') 
const swaggerUi = require('swagger-ui-express') 
const YAML = require('yamljs')

const swaggerDocs = YAML.load(path.resolve(__dirname, './swagger.yaml'))

const app = express()
app.use(cors())
app.use(
  '/',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocs, { explorer: true })
)
app.listen(process.env.PORT || 5000, console.log('server running...'))
