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