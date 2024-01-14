const handleMaxString=(s)=>{
    maximumnumberofoccurence=0;
    let maxstring;
    for(i=0;i<s.length;i++)
    {
      let c=s[i];
      if(!isNaN(c))
      {
       
      }else{
       currentstring=c;
       maxocc=s.split(c).length-1;

       if(maxocc>maximumnumberofoccurence){     
           maximumnumberofoccurence=maxocc;
           maxstring=c;
       }  
      }     
    }  
    return console.log(maxstring + " " + maximumnumberofoccurence);  
}
handleMaxString("abcde2d3451333ddghjjDD");


