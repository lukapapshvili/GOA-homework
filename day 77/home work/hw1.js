// შექმენით ფუნქცია რომელიც იღებს key-ები და value-ების მასივებს. თქვენი მიზანია დააბრუნოთ ობიექტი შესაბამისი key-value-ბით.
function createObject(keys, values) {
    let obj = {};
    for (let i = 0; i < keys.length; i++) {
        obj[keys[i]] = values[i];
    }
    return obj;
}1