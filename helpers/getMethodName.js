module.exports = function getMethodName(method) {
    return method.name || method.toString().match(/^function\s*([^\s(]+)/)[1];
};
