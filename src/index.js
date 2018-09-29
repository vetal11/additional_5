module.exports = function check(str, bracketsConfig) {
  // your solution

	let stack = [];
	for(let i = 0; i<str.length; i++){
	  	for(let j = 0; j<bracketsConfig.length; j++){
	  		if (str[i] === bracketsConfig[j][0] && str[i] === bracketsConfig[j][1]) {
	  			if (stack[stack.length-1] === str[i]){
	  					stack.pop();
	  			} else{
	  				stack.push(str[i]);
	  			} 
	  		}
	  		else if (str[i] === bracketsConfig[j][0]) {
	  			stack.push(j+1);
	  		}
	  		else if (str[i] === bracketsConfig[j][1]){
	  			if ((stack[stack.length-1] - (j+1)) === 0){
	  				stack.pop();
	  			} 
	  			else {
	  				return false;
	  			}
	  		}
	  	}
	}
	return stack.length === 0 ? true : false;
}