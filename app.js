const http=require('http');
const server=http.createServer((req,res)=>{
if(req.url==='/')
{
    res.end('welocome to home apge');
}
if(req.url==='/about')
{
    res.end('Here is our short history');
}
res.end(`
    <h1>OOps!</h1>
    <a href="/">back home</a>
`)
})
server.listen(5000);