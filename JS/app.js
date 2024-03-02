// Async Function Understand

// Async is some minutes wait for any one part promice result but at a same time another part processing promice result.

const a = 29;
const b = 89;

console.log('Hi')
const sum = a + b;


const test = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/news/category/01')

    console.log(res);
}
test();

console.log(sum)


/**
 
Result:

1.Hi

3.118

// no 2 printed result but lately print but next parts printed thats call async

2.Response {type: 'cors', url: 'https://openapi.programming-hero.com/api/news/category/01', redirected: false, status: 200, ok: true, …}



// .json use for convert sting to parse

// when you know result come lately those places you should be use async function

* 
 */