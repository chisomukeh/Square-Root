function sqrt(n){
  //repeated subtraction method
  
  let squareroot = 0;
  let odd = 1;
  
  while(n){
    n = n - odd; //(*)
    odd = odd + 2;
    squareroot = squareroot + 1; //(**)
  }
  return squareroot;
}

