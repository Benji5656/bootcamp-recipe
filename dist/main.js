const handlebars= function (element, idHTML, data) {
    const source = $(element).html();
    const template = Handlebars.compile(source);
    const newHTML = template({data});
    $(idHTML).empty().append(newHTML)
}


const showRecipe = function () {
    input = $("#order").val()
    $.get(`/recipe/${input}`, function(data) {
        handlebars('#listing','.container',data)    
        console.log(data)
    })
}

//DOM Traversal --> didn't work
$("h4").click(function() {
    console.log("clicked")
})
