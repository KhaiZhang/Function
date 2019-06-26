function reverseString(message){
	var result="";
	for(let i=message.length;i>=0;i--){
		result+=message.charAt(i);
	}
	console.log(result);
	return result;
}
reverseString('hello'); // should return 'olleh'