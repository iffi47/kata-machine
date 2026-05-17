export default function binary_search(haystack: number[], needle: number): boolean {
  let lo=0;
  let v=0;
  let hi= haystack.length;
  do{
    let m= lo+(hi-lo)/2;
    v = haystack[m];
    if(v=== needle){
      return true;
    }else if(v>m){
      lo= m+1;
    }else{
      hi=m;
    }
  }while(lo<hi){
    return false;
  }
}