function palindrome(message){
  // wirte your code here
  var len = message.length;
    for(var i=0; i<len;i++){if(message.charAt(i)!=message.charAt(len-1-i)){
            return false;
        }else{
            console.log("true")
			return true;
        }
    }
}
palindrome('hello'); // should return false
palindrome('abcba'); // should return true