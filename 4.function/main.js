function countWords(message){
  // wirte your code here
	var word=0,num=0;
	for(var i=0;i<message.length;i++)
	{
		if(' '==message[i])
		{
			word=0;
		}
		else if(0==word)
		{
			word=1;
			num++;
		}
		
	}
	return num;
}
countWords('Good morning, I love JavaScript. yse or no?'); // should return 5