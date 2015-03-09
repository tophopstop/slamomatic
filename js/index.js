
var pause = false;
var mute = false;

$(document).ready(function(){
    $('#muteBtn').click( function(){
        if( mute == false ) {
            mute = true;
            $(this).text('Muted');
        } else {
            mute = false;
            $(this).text('Mute');
        }
    });
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
    
    // queue up the sounds
    $.each( sounds, function(i,v){ 
        $('#sounds').append( $('<audio id="a'+i+'" src="'+v+'" preload="auto"></audio>'));
    });

    slammer();
});

function playRandomSound() {
    var $t = $('#sounds audio');
    var p = Math.floor(Math.random() * $t.length);
    document.getElementById('a'+p).play();
}

function slammer() {
    ( function autoSlam() {
        if( pause )
            return;
        setTimeout( autoSlam, 5000);
        $('#slams').prepend( $('<div class="panel panel-default"><div class="panel-body">'+slam()+'</div></div>'));

        if( !mute) 
            playRandomSound();

        var $a = $('#slams>div');

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
