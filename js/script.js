

$("#hmbrgr").click(function(){
    $("#sidebarUl").addClass("open_sidebar");
    $("#sidebarUl").removeClass("close_sidebar")
})

$("#crossNav").click(function(){
    $("#sidebarUl").addClass("close_sidebar");
    $("#sidebarUl").removeClass("open_sidebar")
})

$(".seachIng").click(function(){

    $("#searchBr").toggleClass('seachBr')
    $("#searchNav").toggleClass('srcInput')

})

$("#searchNav").keydown(function () { 
    
    var srchi = $(".seachBr i");
    $(srchi).css({
        'right':'20px !important',
    })

});



$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {
        $('header').css({
            'position': 'fixed',
            'top': '0',
            'width':'100%',
            'z-index':'999999',
            'right': '0',
            'padding':'0.4rem 1rem !important',
            'transition':'all 0.3s ease',
            'background-color': '#fff',
            'box-shadow': '0 4px 8px rgba(0,0,0,0.2)'
        });
    } else {
        $('header').css('position','static');
    }
});



$('.progress-bar').each(function() {
    var $this = $(this);
    var percentage = $this.data('percentage');

    $this.find('.bar').animate({
        width: percentage + '%'
    }, {
        duration: 9000,
        step: function(now) {
            $this.find('.percentage').text(Math.round(now) + '%');
        }
    });
});


