////인원 띄우기
function openCloseToc1() {
  if(document.getElementById('reservation_1_men').style.display === 'block') {
    document.getElementById('reservation_1_men').style.display = 'none';
  } else {
    document.getElementById('reservation_1_men').style.display = 'block';
  }
};
////인원 띄우기
function openCloseToc1M() {
  if(document.getElementById('reservation_11_men').style.display === 'block') {
    document.getElementById('reservation_11_men').style.display = 'none';
  } else {
    document.getElementById('reservation_11_men').style.display = 'block';
  }
};


// ////아코디언 하나만////
// var acc = document.getElementsByClassName("reservation_rooms");
// var i;
        
//   for (i = 0; i < acc.length; i++) {
//     acc[i].addEventListener("click", function() {
//       this.classList.toggle("active");
//       var panel = document.getElementsByClassName("rooms_content");
//       if (panel.style.maxHeight) {
//         panel.style.maxHeight = null;
//       } else {
//         var act = document.querySelectorAll('.reservation_rooms.active');
//         for(j=0; j<act.length; j++){
//             act[j].classList.remove('active');
//             act[j].nextElementSibling.style.maxHeight = null;
//         }
//         this.classList.add('active');
//         panel.style.maxHeight = panel.scrollHeight + "px";
//         } 
//     });
//   }



////////////룸온니 객실/////////////


////객실선택 띄우기(룸온니)

function ROOMONLY() {
  if(document.getElementById('rooms_content_1').style.display === 'block') {
    document.getElementById('rooms_content_1').style.display = 'none';
  } else {
    document.getElementById('rooms_content_1').style.display = 'block';
  }
};
//요금 띄우기(룸온니, 게스트룸)
function openCloseToc11() {
  if(document.getElementById('option1-1').style.display === 'block') {
    document.getElementById('option1-1').style.display = 'none';
  } else {
    document.getElementById('option1-1').style.display = 'block';
  }
};
//요금 띄우기(룸온니, 디럭스룸)
function openCloseToc12() {
  if(document.getElementById('option1-2').style.display === 'block') {
    document.getElementById('option1-2').style.display = 'none';
  } else {
    document.getElementById('option1-2').style.display = 'block';
  }
};
//요금 띄우기(룸온니, 이그젝큐티브)
function openCloseToc13() {
  if(document.getElementById('option1-3').style.display === 'block') {
    document.getElementById('option1-3').style.display = 'none';
  } else {
    document.getElementById('option1-3').style.display = 'block';
  }
};
//요금 띄우기(룸온니, 스위트룸)
function openCloseToc14() {
  if(document.getElementById('option1-4').style.display === 'block') {
    document.getElementById('option1-4').style.display = 'none';
  } else {
    document.getElementById('option1-4').style.display = 'block';
  }
};


////////////조식 객실/////////////


////객실선택 띄우기(조식)
function BREAKFAST() {
  if(document.getElementById('rooms_content_2').style.display === 'block') {
    document.getElementById('rooms_content_2').style.display = 'none';
  } else {
    document.getElementById('rooms_content_2').style.display = 'block';
  }
};
//요금 띄우기(조식, 게스트룸)
function openCloseToc21() {
  if(document.getElementById('option2-1').style.display === 'block') {
    document.getElementById('option2-1').style.display = 'none';
  } else {
    document.getElementById('option2-1').style.display = 'block';
  }
};
//요금 띄우기(조식, 디럭스룸)
function openCloseToc22() {
  if(document.getElementById('option2-2').style.display === 'block') {
    document.getElementById('option2-2').style.display = 'none';
  } else {
    document.getElementById('option2-2').style.display = 'block';
  }
};
//요금 띄우기(조식, 이그젝큐티브)
function openCloseToc23() {
  if(document.getElementById('option2-3').style.display === 'block') {
    document.getElementById('option2-3').style.display = 'none';
  } else {
    document.getElementById('option2-3').style.display = 'block';
  }
};
//요금 띄우기(조식, 스위트룸)
function openCloseToc24() {
  if(document.getElementById('option2-4').style.display === 'block') {
    document.getElementById('option2-4').style.display = 'none';
  } else {
    document.getElementById('option2-4').style.display = 'block';
  }
};

////////////포인트 객실/////////////


////객실선택 띄우기(포인트)
function POINT() {
  if(document.getElementById('rooms_content_3').style.display === 'block') {
    document.getElementById('rooms_content_3').style.display = 'none';
  } else {
    document.getElementById('rooms_content_3').style.display = 'block';
  }
};
//요금 띄우기(포인트, 게스트룸)
function openCloseToc31() {
  if(document.getElementById('option3-1').style.display === 'block') {
    document.getElementById('option3-1').style.display = 'none';
  } else {
    document.getElementById('option3-1').style.display = 'block';
  }
};
//요금 띄우기(포인트, 디럭스룸)
function openCloseToc32() {
  if(document.getElementById('option3-2').style.display === 'block') {
    document.getElementById('option3-2').style.display = 'none';
  } else {
    document.getElementById('option3-2').style.display = 'block';
  }
};
//요금 띄우기(포인트, 이그젝큐티브)
function openCloseToc33() {
  if(document.getElementById('option3-3').style.display === 'block') {
    document.getElementById('option3-3').style.display = 'none';
  } else {
    document.getElementById('option3-3').style.display = 'block';
  }
};
//요금 띄우기(포인트, 스위트룸)
function openCloseToc34() {
  if(document.getElementById('option3-4').style.display === 'block') {
    document.getElementById('option3-4').style.display = 'none';
  } else {
    document.getElementById('option3-4').style.display = 'block';
  }
};
/////////////달력///////////////
$.datepicker.setDefaults({
  dateFormat: 'yy-mm-dd',
  prevText: '이전 달',
  nextText: '다음 달',
  monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
  monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
  dayNames: ['일', '월', '화', '수', '목', '금', '토'],
  dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
  dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
  showMonthAfterYear: true,
  yearSuffix: '년'
});

$("#main_IN").datepicker({
minDate:0,
onSelect: function(selected) {
$("#main_OUT").datepicker("option","minDate", selected)}
});

$("#main_OUT").datepicker({
onSelect: function(selected) {
$("#main_IN").datepicker("option","maxDate", selected)}
});
//////////////////인원카운트//////////////////////

function resAdult(type)  {
  const resultElement = document.querySelector('#resAdultResult');

  let number = resultElement.innerText;

  if(type === 'plus') {
    number = parseInt(number) + 1;
  }else if(type === 'minus' && number>0)  {
    number = parseInt(number) - 1;
  }
  resultElement.innerText = number;
}

function resChild(type)  {
  const resultElement = document.querySelector('#resChildResult');
  
  let number = resultElement.innerText;

  if(type === 'plus') {
    number = parseInt(number) + 1;
  }else if(type === 'minus' && number>0)  {
    number = parseInt(number) - 1;
  }

  resultElement.innerText = number;
}
function printName()  {
  const name1 = document.getElementById('resAdultResult').innerText;
  document.getElementById("valueInputA").value = name1;
  const name2 = document.getElementById('resChildResult').innerText;
  document.getElementById("valueInputC").value = name2;
  document.getElementById('reservation_1_men').style.display = "none";
}
//////////////////인원카운트M//////////////////////
function resAdult2(type)  {
  const resultElement = document.querySelector('#resAdultResult2');

  let number = resultElement.innerText;

  if(type === 'plus2') {
    number = parseInt(number) + 1;
  }else if(type === 'minus2' && number>0)  {
    number = parseInt(number) - 1;
  }
  resultElement.innerText = number;
}

function resChild2(type)  {
  const resultElement = document.querySelector('#resChildResult2');
  
  let number = resultElement.innerText;

  if(type === 'plus2') {
    number = parseInt(number) + 1;
  }else if(type === 'minus2' && number>0)  {
    number = parseInt(number) - 1;
  }

  resultElement.innerText = number;
}
function printName2()  {
  const name1 = document.getElementById('resAdultResult2').innerText;
  document.getElementById("valueInputAM").value = name1;
  const name2 = document.getElementById('resChildResult2').innerText;
  document.getElementById("valueInputCM").value = name2;
  document.getElementById('reservation_11_men').style.display = "none";
}
////TOP으로 이동하는 JS//////////
var locationSidebar = document.getElementById("location_side");
window.onscroll = function () {
  scrollFunction();
};
locationSidebar.style.display = "none";
function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    locationSidebar.style.display = "flex";
  } else {
    locationSidebar.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


