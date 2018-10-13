var canvas = document.getElementById("canvas");
var gr = canvas.getContext("2d");

gr.fillStyle = "#e5cba1";
gr.strokeStyle = "red";
//gr.lineWidth = 10;

gr.beginPath();

    gr.moveTo(0, 100 * (1 / 3.0 + 1 / 12));
    gr.lineTo(0, 100 * (1 / 3.0 + 3 / 12));
    gr.lineTo(10, 100);
    gr.lineTo(50, 100);
    gr.lineTo(60, 100 * 2 / 3)

    gr.lineTo(160, 100 * 2 / 3);

    gr.lineTo(170, 100);
    gr.lineTo(210, 100);

gr.stroke();