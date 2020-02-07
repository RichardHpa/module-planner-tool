$( function() {

    const url = 'http://localhost:3000';
    const testPlan = '5e3a2fafd1641533227c45f7';

    // if(localStorage.items){
    //     const items = JSON.parse(localStorage.items)
    //     $('#classList').html(items);
    // } else {
    //     const classesNum = 50;
    //     let temp = $('#classCardTemplate');
    //     for (var i = 1; i <= classesNum; i++) {
    //         let temp = $('#classCardTemplate').clone();
    //         var node = temp.prop('content');
    //         var content = $(node).find('li');
    //         content.find('.card').text('Class ' + (i));
    //         $('#classList').append(content);
    //     }
    //     temp.remove();
    // }

    $.ajax({
        url: `${url}/plans/${testPlan}`,
        type: 'GET',
        success:function(data){
            // console.log(data.data);
            // const items = JSON.parse(data.data);
            $('#classList').html(data.data);
            $('#classList').sortable({
                items: "li:not(.workshop)",
                helper: 'clone'
            });
            $( "#classList" ).disableSelection();

            $('.card').dblclick(function(){
                const newTitle = prompt('New Topic', $(this).text());
                if (newTitle === null) {
                    return; //break out of the function early
                }
                $(this).text(newTitle)
            });

            setInterval(function(){
                const items = JSON.stringify($('#classList').html());
                updateToMongo($('#classList').html().trim());
                // localStorage.setItem('items', items);
                console.log('autosaved at ' +  new Date($.now()));
            }, 60000);
            // autosave every minute


            $('#saveBtn').click(function(e){
                e.preventDefault();
                const items = JSON.stringify($('#classList').html());
                addToMongo($('#classList').html().trim());
                localStorage.setItem('items', items);
            });
        },
        error: function(error){
            console.log(error);
            console.log('something went wrong with getting this plan');
        }
    })





    addToMongo = (data) => {
        if(testPlan){
            updateToMongo($('#classList').html().trim());
        } else {
            $.ajax({
                url: `${url}/plans`,
                type: 'POST',
                data: {
                    itemString: data
                },
                success:function(success){
                    console.log(success);
                },
                error:function(error){
                    console.log(error);
                    console.log('something went wrong with sending the data');
                }
            })
        }

    }

    updateToMongo = (data) => {
        $.ajax({
            url: `${url}/plans/${testPlan}`,
            type: 'PATCH',
            data: {
                itemString: data
            },
            success:function(success){
                console.log(success);
            },
            error:function(error){
                console.log(error);
                console.log('something went wrong with sending the data');
            }
        })
    }
} );
