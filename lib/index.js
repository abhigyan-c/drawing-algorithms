"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bresenhamCircleDrawing = bresenhamCircleDrawing;
exports.bresenhamLineDrawing = bresenhamLineDrawing;
exports.ddaLineDrawing = ddaLineDrawing;
exports.midPointCircleDrawing = midPointCircleDrawing;
exports.midPointEllipseDrawing = midPointEllipseDrawing;
exports.midPointLineDrawing = midPointLineDrawing;
// index.js

// DDA Line Drawing Algorithm
function ddaLineDrawing(start, end) {
  var points = [];
  var dx = end.x - start.x;
  var dy = end.y - start.y;
  var steps = Math.max(Math.abs(dx), Math.abs(dy));
  var xIncrement = dx / steps;
  var yIncrement = dy / steps;
  var x = start.x;
  var y = start.y;
  points.push({
    x: Math.round(x),
    y: Math.round(y)
  });
  for (var i = 0; i < steps; i++) {
    x += xIncrement;
    y += yIncrement;
    points.push({
      x: Math.round(x),
      y: Math.round(y)
    });
  }
  return points;
}

// Mid Point Line Drawing Algorithm
function midPointLineDrawing(start, end) {
  var points = [];
  var dx = end.x - start.x;
  var dy = end.y - start.y;
  var d = dy - dx / 2;
  var x = start.x;
  var y = start.y;
  points.push({
    x: x,
    y: y
  });
  while (x < end.x) {
    x++;
    if (d < 0) {
      d += dy;
    } else {
      y++;
      d += dy - dx;
    }
    points.push({
      x: x,
      y: y
    });
  }
  return points;
}

// Bresenham Line Drawing Algorithm
function bresenhamLineDrawing(start, end) {
  var points = [];
  var dx = Math.abs(end.x - start.x);
  var dy = Math.abs(end.y - start.y);
  var sx = start.x < end.x ? 1 : -1;
  var sy = start.y < end.y ? 1 : -1;
  var err = dx - dy;
  var x = start.x;
  var y = start.y;
  while (true) {
    points.push({
      x: x,
      y: y
    });
    if (x === end.x && y === end.y) break;
    var e2 = 2 * err;
    if (e2 > -dy) {
      err -= dy;
      x += sx;
    }
    if (e2 < dx) {
      err += dx;
      y += sy;
    }
  }
  return points;
}

// Mid Point Circle Drawing Algorithm
function midPointCircleDrawing(center, radius) {
  var points = [];
  var x = radius;
  var y = 0;
  var p = 1 - radius;
  while (x >= y) {
    points.push({
      x: center.x + x,
      y: center.y + y
    });
    points.push({
      x: center.x - x,
      y: center.y + y
    });
    points.push({
      x: center.x + x,
      y: center.y - y
    });
    points.push({
      x: center.x - x,
      y: center.y - y
    });
    points.push({
      x: center.x + y,
      y: center.y + x
    });
    points.push({
      x: center.x - y,
      y: center.y + x
    });
    points.push({
      x: center.x + y,
      y: center.y - x
    });
    points.push({
      x: center.x - y,
      y: center.y - x
    });
    y++;
    if (p <= 0) {
      p += 2 * y + 1;
    } else {
      x--;
      p += 2 * (y - x) + 1;
    }
  }
  return points;
}

// Bresenham Circle Drawing Algorithm
function bresenhamCircleDrawing(center, radius) {
  var points = [];
  var x = 0;
  var y = radius;
  var d = 3 - 2 * radius;
  while (y >= x) {
    points.push({
      x: center.x + x,
      y: center.y + y
    });
    points.push({
      x: center.x - x,
      y: center.y + y
    });
    points.push({
      x: center.x + x,
      y: center.y - y
    });
    points.push({
      x: center.x - x,
      y: center.y - y
    });
    points.push({
      x: center.x + y,
      y: center.y + x
    });
    points.push({
      x: center.x - y,
      y: center.y + x
    });
    points.push({
      x: center.x + y,
      y: center.y - x
    });
    points.push({
      x: center.x - y,
      y: center.y - x
    });
    x++;
    if (d > 0) {
      y--;
      d = d + 4 * (x - y) + 10;
    } else {
      d = d + 4 * x + 6;
    }
  }
  return points;
}

// Mid Point Ellipse Drawing Algorithm
function midPointEllipseDrawing(center, rx, ry) {
  var points = [];
  var x = 0;
  var y = ry;
  var rxSq = rx * rx;
  var rySq = ry * ry;
  var p1 = rySq - rxSq * ry + 0.25 * rxSq;
  var px = 0;
  var py = 2 * rxSq * y;
  while (px < py) {
    points.push({
      x: center.x + x,
      y: center.y + y
    });
    points.push({
      x: center.x - x,
      y: center.y + y
    });
    points.push({
      x: center.x + x,
      y: center.y - y
    });
    points.push({
      x: center.x - x,
      y: center.y - y
    });
    x++;
    px += 2 * rySq;
    if (p1 < 0) {
      p1 += rySq + px;
    } else {
      y--;
      py -= 2 * rxSq;
      p1 += rySq + px - py;
    }
  }
  var p2 = rySq * ((x + 0.5) * (x + 0.5)) + rxSq * ((y - 1) * (y - 1)) - rxSq * rySq;
  while (y >= 0) {
    points.push({
      x: center.x + x,
      y: center.y + y
    });
    points.push({
      x: center.x - x,
      y: center.y + y
    });
    points.push({
      x: center.x + x,
      y: center.y - y
    });
    points.push({
      x: center.x - x,
      y: center.y - y
    });
    y--;
    py -= 2 * rxSq;
    if (p2 > 0) {
      p2 += rxSq - py;
    } else {
      x++;
      px += 2 * rySq;
      p2 += rxSq - py + px;
    }
  }
  return points;
}