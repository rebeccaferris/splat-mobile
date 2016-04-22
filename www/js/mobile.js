var mobile = function(mobile){

  mobile.swipe = function(obj){
    console.log(obj);
    var distance = 10;
    var time = 100; //milliseconds
    var mouseX;
    var mouseY;
    obj.addEventListener("mousedown", function(e){
      console.log(e.clientX); //mouse position on the screen
      var startX = e.clientX;
      var startY = e.clientY;

      var moveEvent = document.addEventListener("mousemove", getMouse);
        function getMouse(e){
          mouseX = e.clientX;
          mouseY = e.clientY;
          //console.log(mouseX);
        }

      var swipeTimeout = setTimeout(function(){
        var diffX = mouseX - startX;
        var diffY = mouseY - startY;

        document.removeEventListener("mousemove", getMouse);
        console.log(diffX , diffY);

        var swipeX = 0;
        var swipeY = 0;

        if (Math.abs(diffX) > Math.abs(diffY)){
          if (diffX <- distance){ //if diff is less than distance swipe is -1
            swipeX = -1;
          }
          if (diffX > distance){ //if diff is greater than distance swipe is 1
            swipeX = 1;
          }
        }else{
          if (diffY <- distance){
            swipeY = -1;
          }
          if (diffY > distance){
            swipeY = 1;
          }
        }
        var e = new Event("swipe");
        e.swipeX = swipeX;
        e.swipeY = swipeY;
        obj.dispatchEvent(e);

      }, time); //end of swipeTimeout function

    });//end of object eventListener(mousedown)

  }//end of mobile swipe function

  mobile.shuffle = function(array) {
      if (array == null) return;
      var i = array.length, j, temp;
      if (i == 0) return array;
      while(--i) {
          j = Math.floor(Math.random()*(i+1));
          temp=array[i];
          array[i]=array[j];
          array[j]=temp;
      }
      return array;
  }//end of im shuffle function

  return mobile;
}(mobile || {})
