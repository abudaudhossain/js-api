const myStore ={
    name: "SD store",
    products: ['modile','loptop', 'smart phone','Computer', 'taplet'],
    owner:{
        name: "Abu Daud",
        prophesion: "Web deploloper"
    },
    address: "taltola road"
}

console.log(myStore);
const strigify = JSON.stringify(myStore);
console.log(strigify);
const convert = JSON.parse(strigify);
console.log(convert);