function decimalToBinary(num) {
  //Write you code here
	let ans="";
	while(num!=0){
		ans+=num%2+"";
		num=parseInt(num/2);
	}
	return ans.reverse();
  
}

window.decimalToBinary = decimalToBinary;
