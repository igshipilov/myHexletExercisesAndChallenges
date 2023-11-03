function getX() { return this.x; }
function getY() { return this.y; }

function Point(x, y) {
  this.x = x;
  this.y = y;
  this.getX = getX;
  this.getY = getY;
}

function getBeginPoint() { return this.beginPoint; }
function getEndPoint() { return this.endPoint; }

function Segment(beginPoint, endPoint) {
  this.beginPoint = beginPoint;
  this.endPoint = endPoint;
  this.getBeginPoint = getBeginPoint;
  this.getEndPoint = getEndPoint;
}

const point1 = new Point(1, 2);
const point2 = new Point(3, 4);

console.log('>> points:');
console.log(point1);
console.log(point2);

console.log('\n\n');
console.log('>> point2.getX() // 3');
console.log(point2.getX());

const segment = new Segment(point1, point2);

console.log('\n\n');
console.log('>> segment:');
console.log(segment);

console.log('\n\n');
console.log('>> get points:');
console.log(segment.getBeginPoint());
console.log(segment.getEndPoint());

function reverse(segment) {
  // const currentBegin = segment.getEndPoint();
  // const currentEnd = segment.getBeginPoint();

  // const currentBegin = new segment.getEndPoint();
  // const currentEnd = new segment.getBeginPoint();

  const currentBegin = { ...segment.getEndPoint() };
  const currentEnd = { ...segment.getBeginPoint() };

  return new Segment(currentBegin, currentEnd);
}

const reversedSegment = reverse(segment);

console.log('\n\n');
console.log('>> reversed segment:');
console.log(reversedSegment);

console.log('\n\n');
console.log('>> reversedSegment.beginPoint.x');
console.log(reversedSegment.beginPoint.x);

console.log('\n\n');
console.log('>> reversedSegment.getBeginPoint().getX()');
console.log(reversedSegment.getBeginPoint().getX());
