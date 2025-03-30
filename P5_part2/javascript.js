//Main function - called when show Quote button is clicked

function clickShowQuote() {

    var numbaElement = document.getElementById("quote_num");
    value = numbaElement.options[numbaElement.selectedIndex].text;
  
  
    //select Tony button
    var isTonySelected = document.getElementById("tonyQuote").checked
  
    //select Mike button
    var isMikeSelected = document.getElementById("mikeQuote").checked;
  
    //if tony is selected, call the function tonyQuote(number) with the number selected on the list.
    if (isTonySelected) {
      tonyQuote(value);
      //or if mike is selected, call the mikeQuote() function.	
    } else if (isMikeSelected) {
      mikeQuote(value);
    }
    //if neither tony or mike is selected, call the selectQuote display message. 
    else {
      selectQuote();
    }
  }
  
  
  //function returns random phrase for Mike.
  function getRandomPhraseMike() {
    var mikeStart = ["A warrior with a cause", "Great change always", "Distance",
      "Wikipedia ", "Coffee",
      "Love", "The fifth force"
    ];
    var mikeMid = ["is the most dangerous thing", "makes everything",
      "is the great incentivizer,", "is the water of life,",
      "is the magic of time,", "is the best thing,"
    ];
    var mikeEnd = ["which is cool", "which is beautiful.",
       "in the office.", "drink deeply.", "the greatest of all the magics."
    ];
  
    var random1 = mikeStart[Math.floor(Math.random() * mikeStart.length)];
    var random2 = mikeMid[Math.floor(Math.random() * mikeMid.length)];
    var random3 = mikeEnd[Math.floor(Math.random() * mikeEnd.length)];
  
    return (random1 + " " + random2 + " " + random3 + "<br>");
  }
  
  //function returns a random phrase for Tony.
  function getRandomPhraseStark() {
          
          var tonyStart = ["When I", "If I", "If you", "When you"];
          var tonyMid = [" build neat stuff, got a great girl, occasionally save the world,", " have successfully privatized world peace...",
                       "open your mind", "become a hero"]; 
          
          var tonyEnd = [ "you can find friends in super unexpected places.","you can have peace", "you can be free", "the world will be a better place" ];
  
          var random1 = tonyStart[Math.floor(Math.random() * tonyStart.length)];
          var random2 = tonyMid[Math.floor(Math.random() * tonyMid.length)];
          var random3 = tonyEnd[Math.floor(Math.random() * tonyEnd.length)];
  
          return (random1 + " " + random2 + " " + random3 + "<br>");
      }
  
  
  
  //display tony quote
  function tonyQuote(numberValue) {
    var revealText = ""
    for (i = 0; i < numberValue; i++) {
      revealText += getRandomPhraseStark() + "<br>";
    }
  
    document.getElementById("outputQuote").innerHTML = revealText;
  }
  
  //display mike quote
  function mikeQuote(numberValue) {
    var revealText = ""
    for (i = 0; i < numberValue; i++) {
      revealText += getRandomPhraseMike() + "<br>";
    }
  
    document.getElementById("outputQuote").innerHTML = revealText;
  }
  
  //if neither mike or tony is clicked, display this message
  function selectQuote() {
    document.getElementById("outputQuote").innerHTML = "<span style='color: red;'>Please select the type of quote you would like</span>"
  }
  
  // document.getElementById('dropdown').addEventListener('change', changeSize);

  // function changeSize() {
  //     var outputQuote = document.getElementById('#outputQuote');
  //     var selectbo.x = document.getElementById('quote_num');

  //     var index = selectbox.selectedIndex;
  //     var value = selectbox[index].value;

  //     outputQuote.style.height = (value + 100) + 'px';}
  const btn = document.getElementById('showQuote');

  btn.addEventListener('click', () => window.scrollTo({
  top: 500,
  behavior: 'smooth',
  }));