$( function() {

    const classesNum = 50;
    let temp = $('#classCardTemplate');
    for (var i = 1; i <= classesNum; i++) {
        let temp = $('#classCardTemplate').clone();
        var node = temp.prop('content');
        var content = $(node).find('li');

        content.find('.card').text('Class ' + (i));


        $('#classList').append(content);
    }
    $('#classList').sortable({
        items: "li:not(.workshop)",
        helper: 'clone'
    });
    $( "#classList" ).disableSelection();

    $('.card').dblclick(function(){
        const newTitle = prompt('New Topic');
        $(this).text(newTitle)
        console.log();
    });
} );
