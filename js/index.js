
var pause = false;

$(document).ready(function(){
    $('#pauseBtn').click( function(){
        if( $(this).text() == 'Paused' ) {
            $(this).text('Pause');
            pause = false;
            slammer();
        } else {
            $(this).text('Paused');
            pause = true;
        } 
    });

    slammer();
});

function slammer() {
    ( function autoSlam() {
        setTimeout( autoSlam, 5000);
        if( pause )
            return;
        $('#slams').prepend( $('<p class="slam">'+slam()+'</p>'));

        var $a = $('#slams p');

        // clear special classes
        $a.removeClass('last');
        $a.removeClass('secondLast');
        // give first element a special
        $a.first().addClass('last');
        if( $a.eq(1) )
            $a.eq(1).addClass('secondLast');

        // pop off last
        if( $a.length > 5 ) {
            $a.last().remove();
        }

    } )();
}

function slam () {
    var t = 'You ';
    t += getRandom( t1 );
    t += ' ';
    t += getRandom( t2 );
    t += ' of ';
    t += getRandom( t3 );
    t += ', may your ';
    t += getRandom( t4 );
    t += ' ';
    t += getRandom( t5 );
    t += '!';
    return t;
}

function getRandom( a ) {
    return a[Math.floor(Math.random() * a.length)];
}
