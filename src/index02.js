var done = true;
var str = '';
var number = 0;
var arr = [2, [32, 4], { 's': 'hh' }];
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
var c = Color.red;
console.log(c);
