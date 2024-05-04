var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// store the location in an array. Make sure the array is not in an alphabetical order.
var places = ['Saddar', 'Zoo', 'Agra', 'Eifel Tower', 'Times Square'];
// Print your array in its original order.
console.log('orignal ' + places);
// Print your array in alphabetical order without modifying the actual list.
console.log('copy ' + __spreadArray([], places, true).sort());
// Show that your array is still in its original order by printing it.
console.log('orignal ' + places);
// Print yout array in reverse alphabetical order without changing the order of the original list.
console.log('copy ' + __spreadArray([], places, true).sort().reverse());
// Show that your array is still in its original order by changing it again.
console.log('orignal ' + places);
// Reverse the order of your list.Print the array to show that its order has changed.
console.log('orignal ' + places.reverse());
// Reverse the order of your list again.Print the list to show it's back to it's original order.
console.log('orignal ' + places.reverse());
// Sort your array so it's stored in alphabetical order.Print the array to show that it's order has been changed.
console.log('original ' + places.sort());
// Sort to change your array so it's stored in reverse alphabetical order.Print the list to show that it's order has changed.
console.log('original ' + places.sort().reverse());
