let http = require('http');
let fs = require('fs');
//
http.createServer((request,response)=>{
    if(request.headers.accept == "text/event-stream")
    {
        sendEvent(request,response);

    }else{
        response.writeHead(200,{
            'Content-Type':'text/html'
        });
        response.write(fs.readFileSync(__dirname+'/index.html'));
        response.end();
    }
}).listen(8000);
///
function sendEvent(request,response)
{
    response.writeHead(200,{
        'Content-Type':'text/event-stream'
    });
    // sends an event every 5 seconds
    setInterval(()=>{
    response.write("data:"+(new Date()).toLocaleTimeString()+"\n\n")
    },1000);

}
