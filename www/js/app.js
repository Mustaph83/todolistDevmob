function addTask(){
    var dt = new Date();
    var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
    let item = document.createElement('li');
    item.appendChild(document.createTextNode(task.value+' start--> '+time));
    $(item).css('background-color', 'rgb(5, 131, 5)');
    $(item).css('color','white');
    $(taskList).append(item);
    $(taskList).listview('refresh');


        $('li').on('swiperight', function(){
            $(this).toggleClass('task-done');
            let dt = new Date();
            let time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
            $(item).css('background-color', 'rgb(236, 19, 19)');
            $(item).css('color','white');
            $(this).append('  stop -->  '+ time);
        });
        $('li').on('swipeleft', function(){
            let sureToRemove = true;
            if($(this).hasClass('task-done') == 0){
                sureToRemove = confirm("Are you sure to remove it!")
            }
            if(sureToRemove){
                $(this).slideUp("slow", function(){
                    $(this).remove();
                });
            }
            
        });
}