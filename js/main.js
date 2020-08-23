window.addEventListener('DOMContentLoaded', function() {
    console.log('Happy using! ;)');
    
    let lists = document.querySelectorAll('.list');

    lists.forEach(item => {
        item.addEventListener('click', e => {
            
            if(e.target.classList.contains('antipasti')){
                    let $item = $('.list-antipasti > .list-title ~ li');
                    $item.fadeToggle(300);
                    $item.css({"list-style-type" : "none", "display" : "flex"})
            } else if(e.target.classList.contains('meat')){
                let $item = $('.list-meat > .list-title ~ li');
                    $item.fadeToggle(300);
                    $item.css({"list-style-type" : "none", "display" : "flex"})
            } else if(e.target.classList.contains('pasta')){
                let $item = $('.list-pasta > .list-title ~ li');
                    $item.fadeToggle(300);
                    $item.css({"list-style-type" : "none", "display" : "flex"})
            } else if(e.target.classList.contains('pizza')){
                let $item = $('.list-pizza > .list-title ~ li');
                    $item.fadeToggle(300);
                    $item.css({"list-style-type" : "none", "display" : "flex"})
            } else if(e.target.classList.contains('drink')){
                let $item = $('.list-drink > .list-title ~ li');
                    $item.fadeToggle(300);
                    $item.css({"list-style-type" : "none", "display" : "flex"})
            }
        })
    })
});