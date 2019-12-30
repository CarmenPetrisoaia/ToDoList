// check off specific To dos by clicking

$("ul").on("click", "li", function() {
    $(this).toggleClass("done");
})

// click on the bean to delete To do

$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
})

$("input[type='text']").keypress(function(event) {
    if(event.which === 13) {
        //grabbing new todo text from input
        var todoText = $(this).val();
        $(this).val("");
        //create new li and add it to the ul
        $("ul").append("<li><span><i class=\"fas fa-trash\"></i></span>" + todoText + "</li>");
    }
})

// togle the "add a to-do" field
$(".fa-plus").on("click", function() {
    $("input").slideToggle(100);
})