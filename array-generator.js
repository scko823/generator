function* arrayGenerator(array){
	let index=0;
	while(index<array.length){
		yield array[index];
		index++
	}
}

function forEach ( array, cb ){
	//kick start the array generator
	let crusor = arrayGenerator(array)
	//return an object from the generator
	let obj = crusor.next();
	while(!obj.done){
		cb(obj.value);
		//move on the next object from the generator
		obj = crusor.next()
	}
	console.log("all done")
}

//or simply using the of keyword
function forEach(array, cb){
	for (let item of arrayGenerator(array)){
		cb(item)
	}
}