// exports 뒤엘는 꼭 이름을 사용해서 export 해야 한다.
// named export

exports.PI = 3.14;
exports.min = function() {
    var min = Number.MAX_SAFE_INTEGER;
    Array.from(arguments).forEach(function(e){
        if(e < min) {
            min = e;
        }
    })
    return min;
};

exports.max = function() {
    var max = Number.MIN_SAFE_INTEGER;
    Array.from(arguments).forEach(function(e){
        if(e > max) {
            max = e;
        }
    })
    return max;
}; 