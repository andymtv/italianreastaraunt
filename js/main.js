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

    $('.btn-subscribe-disc').click((e) => {
        e.preventDefault();
        sbscrInput = $('.input-disc').val();
        let at = sbscrInput.indexOf('@');
        let dot = sbscrInput.indexOf('.');
        let lastChar = sbscrInput.charAt(sbscrInput.length - 1);
        let lastCharCode = lastChar.charCodeAt(0);
        let $msg = $('.msg-text');
        if(sbscrInput == null || sbscrInput == "" || sbscrInput == undefined){
            $msg.text('This field cannot be empty! Please type your email!');
            $msg.show(0);
        } else if(at < 1) {
            $msg.text("Email must contain '@'.");
            $msg.show(0);
        } else if(dot < 1) {
            $msg.text("Email must contain '.'.");
            $msg.show(0);
        }else if((lastCharCode >= 97 && lastCharCode <= 122) || (lastCharCode >= 65 && lastCharCode <= 90)) {
            $('.input-disc').val(' ');
            $('.modal').fadeToggle(300);
            $('.modal').addClass('active');
        } else{ 
            $msg.text("Email incorect. Please, type email in format: qwer12@qwe.com");
            $msg.show(0);

        }
    })
});

$('.modal-submit').click(() => {
    $('.modal').removeClass('active');
    $('.modal').fadeToggle(300);
})