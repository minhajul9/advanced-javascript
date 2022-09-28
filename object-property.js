const students = [
    {id:11, name: 'Omor Sunny'}, 
    {id:21, name: 'Moyouri'},
    {id:31, name: 'Manna'},
    {id:71, name: 'Deepjol'}
]

// const names = [];
// for(let i = 0; i<students.length; i++){
//     const element = students[i].name;
//     names.push(element);
// }

// console.log(names);
//This was the normal way

// Now lets how we can do it with ponditi way
const names = students.map(s => s.name);
const ids = students.map(x => x.id);
console.log(names); 
console.log(ids);

const specificStudent = students.find( x => x.id == 71);
console.log(specificStudent);

const useFilter = students.filter( s => s.id>30);
console.log(useFilter);