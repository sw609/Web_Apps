//Check of specific todos by checking
// $("li").click(function(){
//     // //if li is skyblue
//     // if ($(this).css("color") === "rgb(135, 206, 235)"){
//     //     $(this).css("color", "black");
//     // }
//     //     //turn it black
//     // //else
//     // else{
//     //     //turn it skyblue
//     //     $(this).css({
//     //         color: "skyblue",
//     //         textDecoration: "line-through"
//     //     });
//     // }
//     $(this).toggleClass("completed");
    
// })

$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
})


//click on x to delete todo
// $("span").click(function(event){
//     $(this).parent().fadeOut(500, function(){
//         $(this).remove();
//     });
//     event.stopPropagation();

// })

$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();

})

$("input[type='text']").keypress(function(event){
    if (event.which===13){
        //grabbing new todo text from input
        var todoText = $(this).val();
        $(this).val("");
        //creat new li and add to todo ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> "+todoText+"</li>");

    }
})

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
})