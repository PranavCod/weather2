 $(document).ready(function(){
    
    var typed = new Typed('.typed', {
        strings: ['Hello','You can find weather Info here'],
        smartBackspace: true,
        typeSpeed: 100,
        loop: true,
      });


    $("#searchInput").on("keyup", function(e){
        var cityname = e.target.value
        const APIKey = "4e05fdf242fe14f1293521c0d09ba12c"

        $.ajax({

            url: `http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIKey}&units=metric`,
        }).done(function(weatherdata){

         console.log(weatherdata);

         $("#profile").html(`
         <div class="row">
         <div class="card" style="width: 18rem;">
         <img class="card-img-top" src="http://openweathermap.org/img/wn/${weatherdata.weather[0].icon}@2x.png">
         <div class="card-body">
         <h5 class="card-title">Weather: ${weatherdata.weather[0].description}</h5>
        <p class="card-text">The Temperature at ${cityname} is = ${weatherdata.main.temp} &#8451; and it feels like it is ${weatherdata.main.feels_like} &#8451;</p>
        <a href="https://www.google.com/search?q=${cityname}" class="btn btn-primary">Learn more about ${cityname}</a>
      </div>
      </div>

         </div>` );
        })
    })
 })