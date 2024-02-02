// CANVAS SETUP
// ======================

// Initialize canvas
var canvas = new fabric.Canvas('canvas');

// Set dimensions and styling  
canvas.setWidth(550);
canvas.setHeight(712); 
canvas.setBackgroundColor('white');


// BRUSH OPTIONS  
// ======================

// Brush state  
var brush = {
  color: 'black', 
  width: 5,
  eraser: false  
}

// Current applied color
var curColor = brush.color;


// BRUSH CONTROLS 
// ======================  

// Color picker element
const colorPicker = document.querySelector('input[type="color"]');

// On color change, sync brush and current color   
colorPicker.onchange = e => {
  curColor = brush.color = e.target.value;  
  syncBrushColor(); // Defined below
};


// SIZE SLIDER
// =====================

// Size slider element 
const sizeSlider = document.querySelector('input[type="range"]');
 
// On size change, update brush width
sizeSlider.oninput = e => {
  brush.width = parseInt(e.target.value);
};


// PEN TOGGLE

// Get pen button element
const penBtn = document.getElementById('penBtn');

// Toggle free draw mode
penBtn.onclick = () =>  {
  canvas.isDrawingMode = !canvas.isDrawingMode;
};

// ERASER  
// =====================

// Eraser button element 
const eraserBtn = document.querySelector('.eraser-icon');

// Toggle eraser mode   
eraserBtn.onclick = () => {
  brush.eraser = !brush.eraser;
};


// DRAWING HANDLER
// ===================== 

// On path draw, handle brush  
canvas.on('path:created', handleBrush);

// Updates free drawing brush color
function syncBrushColor() {
  if (canvas.freeDrawingBrush) {
    canvas.freeDrawingBrush.color = curColor; 
  }
} 

// Apply current brush options to path  
function handleBrush(e) {
  
  if (brush.eraser) { 
   // Erase path logic

  } else {

    e.path.stroke = curColor;
    e.path.strokeWidth = brush.width;  
    canvas.add(e.path);
  }

}