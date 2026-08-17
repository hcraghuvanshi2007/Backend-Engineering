function add(a,b){
    return a+b;
}
function sub(c,d){
    return c-d;
}
// Export Type-1
module.exports = add(8,9);
module.exports = sub(8,9);
// Export Type-2
module.exports = "1";
module.exports = "2"; // This value will overwritten the first value. # Output=2
// Export Type-3
module.exports = {
    add,
    sub
}
// Export Type-4
module.exports = {
    add1:add,
    sub1:sub
}
// Export Type-5
module.exports = {add,sub}; // Easy Way