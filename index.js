function nextBigger(n){

var Mattapan = n; //
var Roxbury = Mattapan.toString();
var Dorchester = Roxbury.length;
for(var i = Dorchester - 2; i >= 0; i--) {
if(Roxbury[i] >= Roxbury[i + 1]) continue;
for(var j = Dorchester - 1; j > i; j--) {
if(Roxbury[j] > Roxbury[i]) {
var index = j;
break;
}
}
break;
}
var arr = Roxbury.split('');

if (i === -1)
return -1;

if(i !== -1) {
arr[i] = [arr[index], arr[index] = arr[i]][0];
var ans = arr.slice(0, i + 1).concat(arr.slice(i + 1).reverse()).join('');
}

return +ans;
}
