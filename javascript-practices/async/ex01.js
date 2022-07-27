const fetch = function(params, callback){
    //
    // 비동기 코드: 파일 시스템 접근, 네트워크, SQL to DB, setTimeout
    //
    setTimeout(function(){
        if(params === 'param-data') {
            callback(null, 'ok');
        } else {
            callback(new Error('fail'), null);    
        }
    }, 2000);
}


// readFile(options, function(error, data){}))

//test01: success
fetch('param-data', function(error, data){
    if(error) {
        console.error(error);
        return;
    }
    
    console.log(data);
    asyncFuntion1("", function(error, data){
        setInterval(function(){

        }, 2000)
    })
});

//test02: fail
fetch('param-error', function(error, data){
    if(error) {
        console.error(error);
        return;
    }
   
    console.log(data);
});


console.log("wait....");