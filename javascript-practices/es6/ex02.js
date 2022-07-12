/**
 * const: Block Scope의 상수
 * 
 */

//1. block scope 확인
try {
    if(true) {
        const num = 10;
    }

    console.log(num);
} catch(e) {
    console.error("[error] " + e);
}

//2. 대입(Assigment) 에러
try {
    const o = {};
    o.name = '둘리'; // 에러X

    o = {};          // 에러O
} catch(e) {
    console.error("[error] " + e);
}
