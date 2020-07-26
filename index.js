// $(body).ready(function(){
//             $(".content").mCustomScrollbar(
//               {
//                 theme: 'dark-2'
//               }
//             );
//         });


function isMobile() {
return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (isMobile()) {
  //INIZIO rotazione immagine background

  $(document).ready(function(){
    var backgrounds = new Array(
      "foto-lavori/Antuofermo-Sestu-foto-1-mobile.jpg",
      "foto-lavori/Antuofermo-Sestu-foto-2-mobile.jpg",
      "foto-lavori/Antuofermo-Sestu-foto-3-mobile.jpg",
      "foto-lavori/blive1-mobile.jpg",
      "foto-lavori/blive4-mobile.jpg",
      "foto-lavori/aurelio3-mobile.jpg",
      "foto-lavori/aurelio9-mobile.jpg",
      "foto-lavori/aurelio11-mobile.jpg",
      "foto-lavori/oww9background.jpg",
      "foto-lavori/oww7-mobile.jpg",
      "foto-lavori/quartucciu1-mobile.jpg",
      "foto-lavori/quartucciu3-mobile.jpg",
      "foto-lavori/quartucciu12-mobile.jpg"
    );
    var current = 0;

    function nextBackground() {
      current++;
      current = current % backgrounds.length;
      $(".rotating-background").css('background-image', "url('" + backgrounds[current] + "')");
  }
  setInterval(nextBackground, 5000);

  $(".home-page").css('background-image', backgrounds[0]);
  });
  //FINE rotazione immagine background
}else {
  //INIZIO rotazione immagine background
  $(document).ready(function(){
    var backgrounds = new Array(
      "foto-lavori/Antuofermo Sestu foto 1.jpg",
      "foto-lavori/Antuofermo Sestu foto 2.jpg",
      "foto-lavori/Antuofermo Sestu foto 3.jpg",
      // "foto-lavori/foto stadio 3.jpg",
      // "foto-lavori/stadio foto 1.jpg",
      // "foto-lavori/stadio foto 2.jpg",
      // "foto-lavori/stadio foto 4.JPG",
      "foto-lavori/blive1.jpg",
      "foto-lavori/blive2.jpg",
      "foto-lavori/blive3.jpg",
      "foto-lavori/oww9background.jpg",
      "foto-lavori/stadio foto 5.jpg"
    );
    var current = 0;

    function nextBackground() {
      current++;
      current = current % backgrounds.length;
      $(".rotating-background").css('background-image', "url('" + backgrounds[current] + "')");
  }
  setInterval(nextBackground, 5000);

  $(".home-page").css('background-image', backgrounds[0]);
  });
  //FINE rotazione immagine background
}





// INIZIO animazioni menu
$(".menu-icon").click(function(){
  $(".menu").fadeIn();
  $(".home-page-body").fadeOut(500);
  $(".i-nostri-lavori").fadeOut(500);
  $(".contacts").fadeOut(500);
  $(".info").fadeOut(500);
  $(".grey-layer").css("background-color","rgba(93,94,96,0.70)");
});

// $(".close-menu").click(function(){
//   $(".menu").fadeOut();
//   $(".home-page-body").fadeIn(1000);
// });

// $(".button-lavori").click(function(){
//   $(".i-nostri-lavori").slideToggle();
//   $(".menu").fadeToggle(500);
// });

// $(".button-info").click(function(){
//   $(".info").slideToggle();
//   $(".menu").fadeToggle(500);
//   $('.grey-layer').animate({backgroundColor: "rgba(93,94,96,0.85)",}, 'slow');
// });

// $(".button-contacts").click(function(){
//   $(".contacts").slideToggle();
//   $(".menu").fadeToggle(500);
// });
// FINE animazioni menu

// INIZIO rotazione immagine lavori 1 (Antuofermo)
$(document).ready(function(){
  var foto_1 = new Array(
    "foto-lavori/Antuofermo Sestu foto 1.jpg",
    "foto-lavori/Antuofermo Sestu foto 2.jpg",
    "foto-lavori/Antuofermo Sestu foto 3.jpg"
  );
  var current_1 = 0;

  function nextBackground_1() {
    current_1++;
    current = current_1 % foto_1.length;
    $("img.foto-lavori.1").attr('src',foto_1[current]);
}
setInterval(nextBackground_1, 5000);

$("img.foto-lavori.1").attr('src', foto_1[0]);
});
// FINE rotazione immagine lavori 1 (Antuofermo)



// INIZIO rotazione immagine lavori 2 (Stadio)
// FINE rotazione immagine lavori 2 (Stadio)


// INIZIO rotazione immagine lavori 3 (Blive)
$(document).ready(function(){
  var foto_3 = new Array(
    "foto-lavori/blive1.jpg",
    "foto-lavori/blive2.jpg",
    "foto-lavori/blive3.jpg"
  );
  var current_3 = 0;

  function nextBackground_3() {
    current_3++;
    current = current_3 % foto_3.length;
    $("img.foto-lavori.3").attr('src',foto_3[current]);
}
setInterval(nextBackground_3, 5000);

$("img.foto-lavori.3").attr('src', foto_3[0]);
});
// FINE rotazione immagine lavori 3 (Blive)
// INIZIO rotazione immagine lavori 4 (OWW)
$(document).ready(function(){
  var foto_4 = new Array(
    "foto-lavori/oww1.jpg",
    "foto-lavori/oww2.jpg",
    "foto-lavori/oww3.jpg",
    "foto-lavori/oww4.jpg",
    "foto-lavori/oww5.jpg",
    "foto-lavori/oww6.jpg",
    "foto-lavori/oww7.jpg",
    "foto-lavori/oww8.jpg",
    "foto-lavori/oww9.jpg",
    "foto-lavori/oww10.jpg"
  );
  var current_4 = 0;

  function nextBackground_4() {
    current_4++;
    current = current_4 % foto_4.length;
    $("img.foto-lavori.4").attr('src',foto_4[current]);
}
setInterval(nextBackground_4, 5000);

$("img.foto-lavori.4").attr('src', foto_4[0]);
});
// FINE rotazione immagine lavori 4 (OWW)
// INIZIO rotazione immagine lavori 5 (Shi's Aurelia)
$(document).ready(function(){
  var foto_5 = new Array(
    "foto-lavori/aurelio1.jpg",
    "foto-lavori/aurelio2.jpg",
    "foto-lavori/aurelio3.jpg",
    "foto-lavori/aurelio4.jpg",
    "foto-lavori/aurelio5.jpg",
    "foto-lavori/aurelio6.jpg",
    "foto-lavori/aurelio7.jpg",
    "foto-lavori/aurelio8.jpg",
    "foto-lavori/aurelio9.jpg",
    "foto-lavori/aurelio10.jpg",
    "foto-lavori/aurelio11.jpg",
    "foto-lavori/aurelio12.jpg"
  );
  var current_5 = 0;

  function nextBackground_5() {
    current_5++;
    current = current_5 % foto_5.length;
    $("img.foto-lavori.5").attr('src',foto_5[current]);
}
setInterval(nextBackground_5, 5000);

$("img.foto-lavori.5").attr('src', foto_5[0]);
});
// FINE rotazione immagine lavori 5 (Shi's Aurelia)
// INIZIO rotazione immagini lavori 6 (Shi's Aurelia)
$(document).ready(function(){
  var foto_6 = new Array(
    "foto-lavori/quartucciu1.jpg",
    "foto-lavori/quartucciu2.jpg",
    "foto-lavori/quartucciu3.jpg",
    "foto-lavori/quartucciu4.jpg",
    "foto-lavori/quartucciu5.jpg",
    "foto-lavori/quartucciu6.jpg",
    "foto-lavori/quartucciu7.jpg",
    "foto-lavori/quartucciu8.jpg",
    "foto-lavori/quartucciu9.jpg",
    "foto-lavori/quartucciu10.jpg",
    "foto-lavori/quartucciu11.jpg",
    "foto-lavori/quartucciu12.jpg",
    "foto-lavori/quartucciu13.jpg"
  );
  var current_6 = 0;

  function nextBackground_6() {
    current_6++;
    current = current_6 % foto_6.length;
    $("img.foto-lavori.6").attr('src',foto_6[current]);
}
setInterval(nextBackground_6, 5000);

$("img.foto-lavori.6").attr('src', foto_6[0]);
});
// FINE rotazione immagini LAVORI 6 (Shi's Aurelia)

$('.video').parent().click(function () {
    if($(this).children(".video").get(0).paused){
        $(this).children(".video").get(0).play();
        $(this).children(".playpause").fadeOut();
    }else{
       $(this).children(".video").get(0).pause();
        $(this).children(".playpause").fadeIn();
    }
});


$(document).ready(function() {
    $('.selezione').select2();
});



$('.selezione').select2({
  placeholder: "Aggiungi articolo",
  allowClear: true
});




// $(document).ready(function() {
//     $("button").click(function(){
//         var products = [];
//         $.each($(".selezione option:selected"), function(){
//             products.push($(this).val());
//         });
//         // alert("Hai selezionato i prodotti " + products.join(", "));
//         console.log(products);
//         var i;
//         for (i in products){
//           var ul = document.getElementById("list");
//           var li = document.createElement("li");
//           li.appendChild(document.createTextNode(products[i]));
//           li.setAttribute("id", "element"); // added line
//           ul.appendChild(li);
//           console.log(products[i]);
//         }
//         // li.appendChild(document.createTextNode(products));
//         // li.setAttribute("id", "element4"); // added line
//         // ul.appendChild(li);
//         $('.selezione').val(null).trigger("change");
//     });
// });

var preventivo = [[],[],[]];
var catalogo = [["Punto Luce Serie Light (Generico)", "Punto Luce Serie Light (punto presa Bipasso)", "Punto Luce Serie Light (punto presa Shuko)",
"Punto Luce Serie Light (punto presa TV)", "Punto Luce Serie Light (punto presa SAT)", "Punto Luce Serie Light (punto suoneria con tirante)",
"Centralina TV Terrestre", "Parabola in Alluminio completa di staffa", "Antenna Terrestre completa di staffa"],[29.28, 29.28, 35.38, 48.80, 48.80, 48.80 ,122, 366, 183]];
$(document).ready(function() {
    $(".add").click(function(){
      var curr_products = [];
      $.each($(".selezione option:selected"), function(){
        if (preventivo[0].includes($(this).val())){
          alert("Attenzione! "+ $(this).val() + " è già presente nell'ordine. Prova a modificarne la quantità.");
        }else{
          preventivo[0].push($(this).val());
          curr_products.push($(this).val());
        }
      });
      var i;
      event.preventDefault();
      for (i in curr_products){
        var newRow = jQuery('<tr><td class="articolo nome">' + curr_products[i] + '</td><td class="articolo"><span>Quantità</span><span><div class="wrapper-quantity"><select class="quantity" name="num"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option></select></div><img class="trash-icon" src="foto-lavori/trash-bin" alt=""></span></td></tr>"');
        jQuery('table.products-list').append(newRow);
      }
      $('.selezione').val(null).trigger("change");
      $('.quantity').select2();
      $('.totale').remove();
      // console.log(preventivo[0])
  });
});


$("table").on("click", "img.trash-icon", function(){
  if (preventivoCalcolato == true){
    $(".totale").remove();
    preventivoCalcolato = false;
  }
  $(this).closest("tr").remove();
  var content = $(this).closest("tr").find(".nome").text();
  var index;
  for (var i in preventivo[0]){
    if(content == preventivo[0][i]){
      index = i;
      console.log(index);
    }
  }
  preventivo[0].splice(index, 1);
});

var preventivoCalcolato = false;
$("body").on("click", ".calcola", function(){
  if (preventivoCalcolato == true){
    $(".totale").remove();
    preventivoCalcolato = false;
  }
  for (var j in preventivo[0]){
    for (var i in catalogo[0]){
      if (preventivo[0][j] == catalogo[0][i]){
        preventivo[1][j] = catalogo[1][i];
      }
    }
  }
  $("tr").each(function(){
    var nome = $(this).find("td.articolo.nome").html();
    var quantity = parseInt($(this).find(".quantity option:selected").html());
    for (var k in preventivo[0]){
      if (preventivo[0][k] == nome){
        preventivo[2][k] = quantity;
      }
    }
  });
  var totale = 0;
  for (var n in preventivo[0]){
    totale = totale + (preventivo[1][n] * preventivo[2][n]);
    console.log(totale);
  }
  var htmlTotale ="<div class='totale'> Il prezzo stimato è di " + Math.round(totale) + " euro</div>";
  preventivoCalcolato = true;
  jQuery('.total-price').append(htmlTotale);
});

$(document).ready(function() {
    $(".reset").click(function(){
      window.location.reload(true);
  });
});
