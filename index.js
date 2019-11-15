// add solution here
function theBeatlesPlay(musician, instrument)
{
  var vararry = {};
  
  for(var i=0; i<musician.length; i++)
  {
    var empty = '${musician[i]} Plays ${instrument[i]}';
    vararry[i]=empty;
    
  }
  return vararry
  
}