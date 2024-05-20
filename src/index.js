/**
 * Represents a point with x and y coordinates.
 * @typedef {Object} Point
 * @property {number} x - The x-coordinate of the point.
 * @property {number} y - The y-coordinate of the point.
 */

/**
 * Draws a line from the start point to the end point using the DDA algorithm.
 * @param {Point} start - The starting point of the line.
 * @param {Point} end - The ending point of the line.
 * @returns {Point[]} An array of points representing the line.
 */

// DDA Line Drawing Algorithm
export function ddaLineDrawing(start, end) {
    const points = [];
    const dx = end.x - start.x;
    const dy = end.y - start.y;
    const steps = Math.max(Math.abs(dx), Math.abs(dy));
    const xIncrement = dx / steps;
    const yIncrement = dy / steps;

    let x = start.x;
    let y = start.y;
    points.push({ x: Math.round(x), y: Math.round(y) });

    for (let i = 0; i < steps; i++) {
        x += xIncrement;
        y += yIncrement;
        points.push({ x: Math.round(x), y: Math.round(y) });
    }

    return points;
}

/**
 * Draws a line from the start point to the end point using the Mid Point Line algorithm.
 * @param {Point} start - The starting point of the line.
 * @param {Point} end - The ending point of the line.
 * @returns {Point[]} An array of points representing the line.
 */
// Mid Point Line Drawing Algorithm
export function midPointLineDrawing(start, end) {
    const points = [];
    let dx = end.x - start.x;
    let dy = end.y - start.y;

    let d = dy - (dx / 2);
    let x = start.x;
    let y = start.y;

    points.push({ x, y });

    while (x < end.x) {
        x++;
        if (d < 0) {
            d += dy;
        } else {
            y++;
            d += (dy - dx);
        }
        points.push({ x, y });
    }

    return points;
}

/**
 * Draws a line from the start point to the end point using the Bresenham Line algorithm.
 * @param {Point} start - The starting point of the line.
 * @param {Point} end - The ending point of the line.
 * @returns {Point[]} An array of points representing the line.
 */
// Bresenham Line Drawing Algorithm
export function bresenhamLineDrawing(start, end) {
    const points = [];
    const dx = Math.abs(end.x - start.x);
    const dy = Math.abs(end.y - start.y);
    const sx = start.x < end.x ? 1 : -1;
    const sy = start.y < end.y ? 1 : -1;
    let err = dx - dy;

    let x = start.x;
    let y = start.y;

    while (true) {
        points.push({ x, y });
        if (x === end.x && y === end.y) break;
        const e2 = 2 * err;
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

/**
 * Draws a circle with the given center and radius using the Mid Point Circle algorithm.
 * @param {Point} center - The center point of the circle.
 * @param {number} radius - The radius of the circle.
 * @returns {Point[]} An array of points representing the circle.
 */
// Mid Point Circle Drawing Algorithm
export function midPointCircleDrawing(center, radius) {
    const points = [];
    let x = radius;
    let y = 0;
    let p = 1 - radius;

    while (x >= y) {
        points.push({ x: center.x + x, y: center.y + y });
        points.push({ x: center.x - x, y: center.y + y });
        points.push({ x: center.x + x, y: center.y - y });
        points.push({ x: center.x - x, y: center.y - y });
        points.push({ x: center.x + y, y: center.y + x });
        points.push({ x: center.x - y, y: center.y + x });
        points.push({ x: center.x + y, y: center.y - x });
        points.push({ x: center.x - y, y: center.y - x });
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

/**
 * Draws a circle with the given center and radius using the Bresenham Circle algorithm.
 * @param {Point} center - The center point of the circle.
 * @param {number} radius - The radius of the circle.
 * @returns {Point[]} An array of points representing the circle.
 */
// Bresenham Circle Drawing Algorithm
export function bresenhamCircleDrawing(center, radius) {
    const points = [];
    let x = 0;
    let y = radius;
    let d = 3 - 2 * radius;

    while (y >= x) {
        points.push({ x: center.x + x, y: center.y + y });
        points.push({ x: center.x - x, y: center.y + y });
        points.push({ x: center.x + x, y: center.y - y });
        points.push({ x: center.x - x, y: center.y - y });
        points.push({ x: center.x + y, y: center.y + x });
        points.push({ x: center.x - y, y: center.y + x });
        points.push({ x: center.x + y, y: center.y - x });
        points.push({ x: center.x - y, y: center.y - x });
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

/**
 * Draws an ellipse with the given center, horizontal radius, and vertical radius using the Mid Point Ellipse algorithm.
 * @param {Point} center - The center point of the ellipse.
 * @param {number} rx - The horizontal radius of the ellipse.
 * @param {number} ry - The vertical radius of the ellipse.
 * @returns {Point[]} An array of points representing the ellipse.
 */
// Mid Point Ellipse Drawing Algorithm
export function midPointEllipseDrawing(center, rx, ry) {
    const points = [];
    let x = 0;
    let y = ry;
    let rxSq = rx * rx;
    let rySq = ry * ry;
    let p1 = rySq - (rxSq * ry) + (0.25 * rxSq);
    let px = 0;
    let py = 2 * rxSq * y;

    while (px < py) {
        points.push({ x: center.x + x, y: center.y + y });
        points.push({ x: center.x - x, y: center.y + y });
        points.push({ x: center.x + x, y: center.y - y });
        points.push({ x: center.x - x, y: center.y - y });
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

    let p2 = (rySq * ((x + 0.5) * (x + 0.5))) + (rxSq * ((y - 1) * (y - 1))) - (rxSq * rySq);

    while (y >= 0) {
        points.push({ x: center.x + x, y: center.y + y });
        points.push({ x: center.x - x, y: center.y + y });
        points.push({ x: center.x + x, y: center.y - y });
        points.push({ x: center.x - x, y: center.y - y });
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
