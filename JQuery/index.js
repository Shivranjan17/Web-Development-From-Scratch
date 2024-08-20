//$("h1").css("color","orange")
//alert("OK")
$("h1").addClass("big-title margin-50")
$("buttton")

$("h1").text("Jay Gajanan")
$("button").html("<em> Jay</em>")


//$("img").attr("src"); // failed because no img in folder 
//$("a").attr("href", "https://www.yahoo.com")//we can set the attribute for img search


$("h1").click(function(){
    $("h1").css("color","orange");
});


//add eventlistner 
for(var i = 0;i<5;i++){
    $("button").click(function(){
        $("h1").css("color","yellow");
    })

}

$("input").keypress(function(){
    console.log(event.key);//which key got pressed 
    $("h1").text(event.key);
})


$("h1").on("mouseover",function(){
    $("h1").css("color","purple");//when we mouseiver on h1 the color will change
});

$("h1").before("<button>New</button>")
$("h1").after("<button>New</button>")
$("h1").prepend("<button>New</button>")
$("h1").append("<button>New</button>")


// $("button").on("click",function(){
//     $("h1").hide();

// })

// $("button").on("click",function(){
//     $("h1").toggle();
    
// })


// $("button").on("click",function(){
//     $("h1").animate({opacity : 0.5});
    
// })


$("button").on("click",function(){
    $("h1").slideUp().slideDown().animate({opacity : 0.5});
    
})



