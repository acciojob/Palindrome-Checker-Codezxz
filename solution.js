// complete the given function

function palindrome(str){
  int n = str.legnth();
  String rev="";
  for(int i = n-1 ; i >= 0 ; i--){
    rev = rev+n.charAt(i);
  }
  if(n.equals(rev)){
    System.out.print("true");
  }else{
    System.out.print("false");
  }
}
module.exports = palindrome
