

var prev = function(){
    var carousel = document.getElementById('carousel');
    carousel.prev();

};

var next = function(){
    var carousel = document.getElementById('carousel');
    carousel.next();
};

ons.ready(function(){
    var carousel = document.addEventListener('postchange', function(event){
        console.log('Changed to ' + event.activeIndex);
    })
})

var login = function(){
    var formUsername = document.getElementById("username").value; 
    var formPassword = document.getElementById("password").value;


    var ajax = new XMLHttpRequest();
    var method = "GET";
    var url = "log.php";
    var asynchronous  = true;

    ajax.open(method,url,asynchronous);
    //send ajax response
    ajax.send();

    //recieve data from data.php
    ajax.onreadystatechange = function()
    {
        if(this.readyState == 4 && this.status == 200)
        {
            //convert JSON back to array
            var data = JSON.parse(this.responseText);
            console.log(data); //for debuging
 
             var html = "";

            //looping through the data
            for(var a = 0; a < data.length; a++)
            {
                var username = data[a].username;
                var password = data[a].password;

                if( username == formUsername && password == formPassword){
                    next(); 
                }

            }

        }
    }


   
}