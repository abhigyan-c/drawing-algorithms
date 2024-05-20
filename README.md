# Drawing Algorithms

A JavaScript library for various drawing algorithms.

## Installation

```bash
npm install drawing-algorithms
```
## Usage

In package.json, set the following:

"type":"module",

```javascript
import { 
    ddaLineDrawing, 
    midPointLineDrawing, 
    bresenhamLineDrawing, 
    midPointCircleDrawing, 
    bresenhamCircleDrawing, 
    midPointEllipseDrawing 
} from 'drawing-algorithms';

const start = { x: 0, y: 0 };
const end = { x: 10, y: 10 };
const points = ddaLineDrawing(start, end);
console.log(points);

```
## Functions

### ddaLineDrawing(start, end)
Returns an array of points for a line from start to end using the DDA algorithm.

### midPointLineDrawing(start, end)
Returns an array of points for a line from start to end using the Mid Point Line Drawing algorithm.

### bresenhamLineDrawing(start, end)
Returns an array of points for a line from start to end using the Bresenham Line Drawing algorithm.

### midPointCircleDrawing(center, radius)
Returns an array of points for a circle with a given center and radius using the Mid Point Circle Drawing algorithm.

### bresenhamCircleDrawing(center, radius)
Returns an array of points for a circle with a given center and radius using the Bresenham Circle Drawing algorithm.

### midPointEllipseDrawing(center, rx, ry)
Returns an array of points for an ellipse with a given center, rx, and ry using the Mid Point Ellipse Drawing algorithm.