// $(function(){
//     $('#fullpage').fullpage();
//     verticalCentered:false
// });
$(function(){
    $('#fullpage').fullpage({
        sectionsColor : ['#75ad9c', '#008d7c', '#455b84','#a69367'],
        continuousVertical: true,
        'navigation': true,        
    });

    setInterval(function(){
        $.fn.fullpage.moveSectionDown();
    }, 9000);
});
