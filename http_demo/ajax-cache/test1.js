var request = new XMLHttpRequest()
      
      request.open('GET','/text.json')
      request.setRequestHeader('Cache-Control','no-cache')
      request.onload=function(){
        console.log(request.responseText)
      }
      
      request.send()