var canvas = document.getElementById("canvas");
var gr = canvas.getContext("2d");

gr.fillStyle = "#e5cba1";
gr.lineWidth = 10;

gr.beginPath();

    // gr.arc(10, 10, 10, 180 * Math.PI / 180, 270 * Math.PI / 180, false);
    // gr.lineTo(40, 0);
     gr.arc(40, 10, 10, 270 * Math.PI / 180, 360 * Math.PI / 180, false);
    // gr.lineTo(50, 190);
    gr.arc(40, 180, 10, 270 * Math.PI / 180, 360 * Math.PI / 180, false);
    // gr.lineTo(0, 200);
    // gr.arc(0, 190, 10, 180 * Math.PI / 180, 270 * Math.PI / 180, false);
    // gr.lineTo(0, 10);

gr.stroke();