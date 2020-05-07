


function NextComment0_1() {

  var elem = document.getElementById("PrevButton");
  elem.removeAttribute("onclick");
  elem.setAttribute("onclick","PrevComment1_0()");

  var elem = document.getElementById("NextButton");
  elem.removeAttribute("onclick");
  elem.setAttribute("onclick","NextComment1_2()");

  var elem = document.getElementById("NameOfComment");
  elem.innerHTML ="Лина Аксенчик";

  var elem = document.getElementById("PhotoOfComment");
  elem.innerHTML = "<img class='CommentatorImage' src='images/person2.jpg' alt='' '>";

  var elem = document.getElementById("TextOfCommentShow");
  var elemCopyDescription = document.getElementById("TextOfComment1");
  elem.innerHTML = elemCopyDescription.innerHTML;
}

function PrevComment1_0() {

  var elem = document.getElementById("PrevButton");
  elem.removeAttribute("onclick");
  elem.setAttribute("onclick","PrevComment0_2()");

  var elem = document.getElementById("NextButton");
  elem.removeAttribute("onclick");
  elem.setAttribute("onclick","NextComment0_1()");

  var elem = document.getElementById("NameOfComment");
  elem.innerHTML ="НАТАЛЬЯ СВИРИДОВА";

  var elem = document.getElementById("PhotoOfComment");
  elem.innerHTML = "<img class='CommentatorImage' src='images/person1.jpg' alt='' '>";

  var elem = document.getElementById("TextOfCommentShow");
  var elemCopyDescription = document.getElementById("TextOfComment0");
  elem.innerHTML = elemCopyDescription.innerHTML;
}

function NextComment1_2() {

  var elem = document.getElementById("PrevButton");
  elem.removeAttribute("onclick");
  elem.setAttribute("onclick","PrevComment2_1()");

  var elem = document.getElementById("NextButton");
  elem.removeAttribute("onclick");
  elem.setAttribute("onclick","NextComment2_0()");

  var elem = document.getElementById("NameOfComment");
  elem.innerHTML ="Владимир Яровенко";

  var elem = document.getElementById("PhotoOfComment");
  elem.innerHTML = "<img class='CommentatorImage' src='images/person3.jpg' alt='' '>";

  var elem = document.getElementById("TextOfCommentShow");
  var elemCopyDescription = document.getElementById("TextOfComment2");
  elem.innerHTML = elemCopyDescription.innerHTML;
}

function PrevComment0_2() {

  var elem = document.getElementById("PrevButton");
  elem.removeAttribute("onclick");
  elem.setAttribute("onclick","PrevComment2_1()");

  var elem = document.getElementById("NextButton");
  elem.removeAttribute("onclick");
  elem.setAttribute("onclick","NextComment2_0()");

  var elem = document.getElementById("NameOfComment");
  elem.innerHTML ="Владимир Яровенко";

  var elem = document.getElementById("PhotoOfComment");
  elem.innerHTML = "<img class='CommentatorImage' src='images/person3.jpg' alt='' '>";

  var elem = document.getElementById("TextOfCommentShow");
  var elemCopyDescription = document.getElementById("TextOfComment2");
  elem.innerHTML = elemCopyDescription.innerHTML;
}

function NextComment2_0() {

  var elem = document.getElementById("PrevButton");
  elem.removeAttribute("onclick");
  elem.setAttribute("onclick","PrevComment0_2()");

  var elem = document.getElementById("NextButton");
  elem.removeAttribute("onclick");
  elem.setAttribute("onclick","NextComment0_1()");

  var elem = document.getElementById("NameOfComment");
  elem.innerHTML ="НАТАЛЬЯ СВИРИДОВА";

  var elem = document.getElementById("PhotoOfComment");
  elem.innerHTML = "<img class='CommentatorImage' src='images/person1.jpg' alt='' '>";

  var elem = document.getElementById("TextOfCommentShow");
  var elemCopyDescription = document.getElementById("TextOfComment0");
  elem.innerHTML = elemCopyDescription.innerHTML;
}

function PrevComment2_1() {

  var elem = document.getElementById("PrevButton");
  elem.removeAttribute("onclick");
  elem.setAttribute("onclick","PrevComment1_0()");

  var elem = document.getElementById("NextButton");
  elem.removeAttribute("onclick");
  elem.setAttribute("onclick","NextComment1_2()");

  var elem = document.getElementById("NameOfComment");
  elem.innerHTML ="Лина Аксенчик";

  var elem = document.getElementById("PhotoOfComment");
  elem.innerHTML = "<img class='CommentatorImage' src='images/person2.jpg' alt='' '>";

  var elem = document.getElementById("TextOfCommentShow");
  var elemCopyDescription = document.getElementById("TextOfComment1");
  elem.innerHTML = elemCopyDescription.innerHTML;
}
//cars cars cars cars cars cars cars cars cars cars cars cars cars
//cars cars cars cars cars cars cars cars cars cars cars cars cars
//cars cars cars cars cars cars cars cars cars cars cars cars cars
//cars cars cars cars cars cars cars cars cars cars cars cars cars
//cars cars cars cars cars cars cars cars cars cars cars cars cars
//cars cars cars cars cars cars cars cars cars cars cars cars cars
//cars cars cars cars cars cars cars cars cars cars cars cars cars




function NextCar0_1() {

  var elem = document.getElementById("PrevButtonCar");
  elem.removeAttribute("onclick");
  elem.setAttribute("onclick","PrevCar1_0()");

  var elem = document.getElementById("NextButtonCar");
  elem.removeAttribute("onclick");
  elem.setAttribute("onclick","NextCar1_2()");

  var elem = document.getElementById("carName");
  elem.innerHTML ="АВТО ИНСТРУКТОРА";

  var elem = document.getElementById("car1mob");
  elem.style.setProperty("display","none");

  var elem = document.getElementById("car2mob");
  elem.style.setProperty("display","block");

  var elem = document.getElementById("carDescription");
  var elemCopyDescription = document.getElementById("carDescription1");
  elem.innerHTML = elemCopyDescription.innerHTML;
}

function NextCar1_2() {

  var elem = document.getElementById("PrevButtonCar");
  elem.removeAttribute("onclick");
  elem.setAttribute("onclick","PrevCar2_1()");

  var elem = document.getElementById("NextButtonCar");
  elem.removeAttribute("onclick");
  elem.setAttribute("onclick","NextCar2_0()");

  var elem = document.getElementById("carName");
  elem.innerHTML ="КАРШЕРИНГ";

  var elem = document.getElementById("car2mob");
  elem.style.setProperty("display","none");

  var elem = document.getElementById("car3mob");
  elem.style.setProperty("display","block");

  var elem = document.getElementById("carDescription");
  var elemCopyDescription = document.getElementById("carDescription2");
  elem.innerHTML = elemCopyDescription.innerHTML;
}

function NextCar2_0() {

  var elem = document.getElementById("PrevButtonCar");
  elem.removeAttribute("onclick");
  elem.setAttribute("onclick","PrevCar0_2()");

  var elem = document.getElementById("NextButtonCar");
  elem.removeAttribute("onclick");
  elem.setAttribute("onclick","NextCar0_1()");

  var elem = document.getElementById("carName");
  elem.innerHTML ="СВОЕ АВТО";

  var elem = document.getElementById("car3mob");
  elem.style.setProperty("display","none");

  var elem = document.getElementById("car1mob");
  elem.style.setProperty("display","block");

  var elem = document.getElementById("carDescription");
  var elemCopyDescription = document.getElementById("carDescription0");
  elem.innerHTML = elemCopyDescription.innerHTML;
}

function PrevCar0_2() {

  var elem = document.getElementById("PrevButtonCar");
  elem.removeAttribute("onclick");
  elem.setAttribute("onclick","PrevCar2_1()");

  var elem = document.getElementById("NextButtonCar");
  elem.removeAttribute("onclick");
  elem.setAttribute("onclick","NextCar2_0()");

  var elem = document.getElementById("carName");
  elem.innerHTML ="КАРШЕРИНГ";

  var elem = document.getElementById("car1mob");
  elem.style.setProperty("display","none");

  var elem = document.getElementById("car3mob");
  elem.style.setProperty("display","block");

  var elem = document.getElementById("carDescription");
  var elemCopyDescription = document.getElementById("carDescription2");
  elem.innerHTML = elemCopyDescription.innerHTML;
}

function PrevCar2_1() {

  var elem = document.getElementById("PrevButtonCar");
  elem.removeAttribute("onclick");
  elem.setAttribute("onclick","PrevCar1_0()");

  var elem = document.getElementById("NextButtonCar");
  elem.removeAttribute("onclick");
  elem.setAttribute("onclick","NextCar1_2()");

  var elem = document.getElementById("carName");
  elem.innerHTML ="АВТО ИНСТРУКТОРА";

  var elem = document.getElementById("car3mob");
  elem.style.setProperty("display","none");

  var elem = document.getElementById("car2mob");
  elem.style.setProperty("display","block");

  var elem = document.getElementById("carDescription");
  var elemCopyDescription = document.getElementById("carDescription1");
  elem.innerHTML = elemCopyDescription.innerHTML;
}

function PrevCar1_0() {

  var elem = document.getElementById("PrevButtonCar");
  elem.removeAttribute("onclick");
  elem.setAttribute("onclick","PrevCar0_2()");

  var elem = document.getElementById("NextButtonCar");
  elem.removeAttribute("onclick");
  elem.setAttribute("onclick","NextCar0_1()");

  var elem = document.getElementById("carName");
  elem.innerHTML ="СВОЕ АВТО";

  var elem = document.getElementById("car2mob");
  elem.style.setProperty("display","none");

  var elem = document.getElementById("car1mob");
  elem.style.setProperty("display","block");

  var elem = document.getElementById("carDescription");
  var elemCopyDescription = document.getElementById("carDescription0");
  elem.innerHTML = elemCopyDescription.innerHTML;
}
