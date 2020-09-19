addEventListener(
  "fetch",event => {
     let url=new URL(event.request.url);
     url.hostname="v2ray-heroku-hubertlee.herokuapp.com";
     let request=new Request(url,event.request);
     event. respondWith(
       fetch(request)
     )
  }
)
