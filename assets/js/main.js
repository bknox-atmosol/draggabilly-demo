$(document).ready(function(){
  CodeMirror.fromTextArea(document.getElementById("example-1-code"),{
    lineNumbers: true 
  });
  CodeMirror.fromTextArea(document.getElementById("example-2-code"),{
    lineNumbers: true 
  });
});

//This is example 1
$(document).ready(function(){
  //Select the droppable area in the DOM
  var deleteDropSpot = $('.delete-draggie .drop-spot')[0];
  //This creates the doppable area
  var deleteDroppable = new Droppable(deleteDropSpot,{
       onDrop: function(instance, draggie) {
	 $(draggie).remove();
       }
     }
  );
  //Initialize the draggable divs with the above droppable area
  $('#example-1 .draggie').each(function(){
     new Draggable(this, [deleteDroppable],{});
  });
});

//This is example 2
$(document).ready(function(){
  var dropSpots = [];
  //Find each of the DOM elements for drop areas
  $('#example-2 .drop-spot').each(function(){
     dropSpots.push(new Droppable(this,{}));
  });
  //Initialize the draggable divs with the above drop areas
  $('#example-2 .draggie').each(function(){
     new Draggable(this, dropSpots,{
       onStart : function() {
         //Open the sliding drop areas
         var d = $('#example-2 .droppers');
	     d.removeClass('hide')
	      .addClass('animated fadeInUp');
       },
       onEnd : function(wasDropped) {
         var dropAreaTimeout;
	 //Cloase the drop area.
	 var afterDrop = function(){
           var d = $('#example-2 .droppers');
	       d.addClass('hide')
	        .removeClass('animated fadeInUp');
         };
	 //Check to see if the draggable was dropped.
         if(!wasDropped) {
	   afterDrop();
          } else {
	   clearTimeout( dropAreaTimeout );
   	   dropAreaTimeout = setTimeout( afterDrop, 400 );
         }
       }
     });
  });
});
