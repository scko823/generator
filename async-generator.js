// a very rough example using co to write 
// generator based async code 
let axios = require('axios')
let co = require('co')

let randomPost = () => axios.get(`http://jsonplaceholder.typicode.com/posts/${Math.floor(100*Math.random())}`)
									.then((data)=>data.data)


let myPromises = co(function* get3RandomPosts(){
	let post1 = yield randomPost()
	let post2 = yield randomPost()
	let post3 = yield randomPost()
	return Promise.all([post1, post2, post3])
})

myPromises.then(values => console.log(values))


console.log('this log first')