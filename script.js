var addDragNDrop = function(elem){

    var ball = document.getElementById("ball");

    ball.ondragstart = function() {

        return false;

    };

    ball.onmousedown = function(e) {

        ball.style.position = "absolute";
        moveAt(e);
        document.body.appendChild(ball);

        var coords = getCoords(ball);
        var shiftX = e.pageX - coords.left;
        var shiftY = e.pageY - coords.top;

        ball.style.zIndex = 1000;

        function moveAt(e) {

            ball.style.left = e.pageX - shiftX + 'px';
            ball.style.top = e.pageY - shiftY + 'px';

        };

        document.onmousemove = function(e) {

            moveAt(e);

        };

        ball.onmouseup = function() {

            document.onmousemove = null;
            ball.onmouseup = null;

        };

    };

};