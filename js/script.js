$( function() {

    if(localStorage.items){
        const items = JSON.parse(localStorage.items)
        $('#classList').html(items);
    } else {
        const classesNum = 50;
        let temp = $('#classCardTemplate');
        for (var i = 1; i <= classesNum; i++) {
            let temp = $('#classCardTemplate').clone();
            var node = temp.prop('content');
            var content = $(node).find('li');
            content.find('.card').text('Class ' + (i));
            $('#classList').append(content);
        }
        temp.remove();
    }
    $('#classList').sortable({
        items: "li:not(.workshop)",
        helper: 'clone'
    });
    $( "#classList" ).disableSelection();

    $('.card').dblclick(function(){
        const newTitle = prompt('New Topic');
        if (newTitle === null) {
            return; //break out of the function early
        }
        $(this).text(newTitle)
    });

    setInterval(function(){
        const items = JSON.stringify($('#classList').html());
        localStorage.setItem('items', items);
    }, 300000);
    //autosave every 5 minutes


    $('#saveBtn').click(function(e){
        e.preventDefault();
        const items = JSON.stringify($('#classList').html());
        localStorage.setItem('items', items);
    });
} );
