var namespace = "http://www.w3.org/2000/svg"
 makeRect(120, 120, 130, 130, "blue", 1)
function checkScore(){
  var score = 0
  var one = document.querySelector("input[name='hi']:checked").value
  if(one == "1"){
    score = score + 1
  }
  var two = document.querySelector("input[name='tru']:checked").value
  if(two == "7"){
    score = score + 1
  }
  var three = document.querySelector("input[name='yo']:checked").value
  if(three == "10"){
  score = score + 1}
  var four = document.querySelector("input[name='blue']:checked").value
  if(four == "12"){
    score = score  + 1
  }
  var five = document.querySelector("input[name='you']:checked").value
  if(five == "19"){
    score = score + 1
  }
  var six = document.querySelector("input[name='nice']:checked").value
  if(six == "22"){
    score = score + 1
  }
  var seven = document.querySelector("input[name='cool']:checked").value
  if(seven == "26"){
    score = score + 1
  }
  var eight = document.querySelector("input[name='awesome']:checked").value
  if(eight == "37"){
    score = score + 1
  }
  var nine = document.querySelector("input[name='sweet']:checked").value
  if(nine == "44"){
    score = score + 1
  }
  var ten = document.querySelector("input[name='hej']:checked").value
  if(ten == "44"){
    score = score + 1
  }
  var eleven = document.querySelector("input[name='da']:checked").value
  if(eleven == "48"){
    score = score + 1
  }
  var twelve = document.querySelector("input[name='natt']:checked").value
  if(twelve == "60"){
    score = score + 1
  }
  var thirteen = document.querySelector("input[name='morgon']:checked").value
  if(thirteen == "62"){
    score = score + 1
  }
  var fourteen = document.querySelector("input[name='mat']:checked").value
  if(fourteen == "65"){
    score = score + 1
  }
  var fifteen = document.querySelector("input[name='god']:checked").value
  if(fifteen == "72"){
    score = score + 1
    alert("Your Score Is")
    alert(score)
  }
}
