//*let scroll_to_top = document.getElementById('top');
//µtoTop.onclick = function () {
    //document.body.scrollTop = 0;
    //document.documentElement.scrollTop = 0;}

    let button = document.getElementById('scrollTop')

    button.onclick = function(e){
        // window.scrollTo(0,0);
        e.preventDefault();;
        window.scrollTo({
            top : 0, 
            behavior : "smooth"
        });
    }