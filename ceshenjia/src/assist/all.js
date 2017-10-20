(function(window){

    var createNamespace = function (name) {
        var arr = name.split('.'),
            space = window;
        arr.forEach(function (a) {
            !space[a] && (space[a] = {});
            space = space[a];
        });
        return space;
    };

    var define = function (name, fn) {
            var index = name.lastIndexOf('.'),
                ns = createNamespace(name.substring(0, index));
            ns[name.substring(index + 1)] = fn;
    };

    define('guazi.ceshenjia.urlToObj', function(){
        var str = location.href, ret = {}, 
            end = str.indexOf('#')>0?str.indexOf('#'):(str.length - 1);
        var query = str.substring(str.indexOf('?')+1, end);
        query.split('&').map(function(item, index){
            var q = item.split('=');
            if(q.length<2) return null;
            ret[q[0]] = q[1];
        })
        return ret;
    }());

})(window)
   


