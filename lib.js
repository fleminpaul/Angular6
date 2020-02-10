function forEach(elems, action) {
    for (var index = 0; index < elems.length; index++) {
        action(elems[index]);
    }
}

function filter(elems, predicate) {
    var result = [];
    forEach(elems, function (elem) {
        if (predicate(elem)) {
            result.push(elem)
        }
    })
    return result;
}

//transforms
function map(elems, mapper) {
    var result = [];
    forEach(elems, function (e) {
        result.push(mapper(e));
    });
    return result;
}