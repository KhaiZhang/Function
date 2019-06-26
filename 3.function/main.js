function alphabetSort(message){
  // wirte your code here
	var arr=[];
	for(let i=0;i<message.length;i++){
		arr[i]=message.charAt(i);
	}
	arr.sort();
	message="";
	for(let i=0;i<arr.length;i++){
		message+=arr[i];
	}
	console.log(message);
	return message;
}
alphabetSort('hello'); // should return 'ehllo'