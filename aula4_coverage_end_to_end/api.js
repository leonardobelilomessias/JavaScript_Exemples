const http = require('http')
const routes = {
  '/contact:get':(request,response)=>{
    response.write('contact Us page')
    return response.end()
  },
  default:(request,response)=>{
    response.write("Hello Word")
    return response.end()
  }
}
const handle = function(request,response){
  const {url,method} = request
  const routeKey = `${url}:${method.toLowerCase()}`
  const chosen = routes[routeKey] || routes.default
  response.writeHead(200,{
    'Content-Type':'text/html'
  })
  return chosen(request,response)}

const app = http.createServer(handle).listen(3000,()=> console.log("App running"))
module.exports = app