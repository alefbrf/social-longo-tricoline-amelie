//PARTES
  //base
  const btnbase = document.getElementById('base');
  btnbase.addEventListener('click', function(e){
    if(window.innerWidth <= 768){
      document.getElementById('acabamentos').style.display = "none";
      document.getElementById('deletebaselabel').style.display = "block";
      document.getElementById('cores').style.visibility = "visible";
      document.getElementById('btncorbtn').style.visibility = "hidden";
      document.getElementById('btncor').style.visibility = "visible";
      document.getElementById('btncorgola').style.visibility = "hidden";
      document.getElementById('btncorvista').style.visibility = "hidden";
      document.getElementById('btncorcarcela').style.visibility = "hidden";
      document.getElementById('coresb').style.visibility = "hidden";
      document.getElementById('coresGE').style.visibility = "hidden";
      document.getElementById('coresGI').style.visibility = "hidden";
      document.getElementById('coresP').style.visibility = "hidden";
      document.getElementById('coresVE').style.visibility = "hidden";
      document.getElementById('coresVD').style.visibility = "hidden";
      document.getElementById('coresBF').style.visibility = "hidden";
      document.getElementById('coresBB').style.visibility = "hidden";
    }else{
    document.getElementById('cores').style.visibility = "visible";
    document.getElementById('coresb').style.visibility = "hidden";
    document.getElementById('coresGE').style.visibility = "hidden";
    document.getElementById('coresGI').style.visibility = "hidden";
    document.getElementById('coresP').style.visibility = "hidden";
    document.getElementById('coresVE').style.visibility = "hidden";
    document.getElementById('coresVD').style.visibility = "hidden";
    document.getElementById('coresBF').style.visibility = "hidden";
    document.getElementById('coresBB').style.visibility = "hidden";}
  });
//base branca
const bntcorbasebranco = document.getElementById('whitebase');
bntcorbasebranco.addEventListener('click', function(e){
  document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#fff");
  document.getElementById('CB').style.backgroundColor = "#fff";
});

//base preta
const btncorbasepreto = document.getElementById('blackbase');
btncorbasepreto.addEventListener('click', function(e){
  document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#dcdbd6");
  document.getElementById('CB').style.backgroundColor = "#dcdbd6";
});
//base azul
const btncorbaseazul = document.getElementById('bluebase');
btncorbaseazul.addEventListener('click', function(e){
  document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#b1c4b9");
  document.getElementById('CB').style.backgroundColor = "#b1c4b9";
});    
//base vermelha
const btncorbasevermelha = document.getElementById('redbase');
btncorbasevermelha.addEventListener('click', function(e){
  document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#b5ac9b");
  document.getElementById('CB').style.backgroundColor = "#b5ac9b";
});  
//base amarela
const btncorbaseamarela = document.getElementById('yellowbase');
btncorbaseamarela.addEventListener('click', function(e){
  document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#7f827d");
  document.getElementById('CB').style.backgroundColor = "#7f827d";
});  
//base verde
const btncorbaseverde = document.getElementById('greenbase');
btncorbaseverde.addEventListener('click', function(e){
  document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#ecb2a6");
  document.getElementById('CB').style.backgroundColor = "#ecb2a6";
});  

document.getElementById('base1').addEventListener('click', function(e){
  document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#86a4bc");
  document.getElementById('CB').style.backgroundColor = "#86a4bc";
});  

document.getElementById('base2').addEventListener('click', function(e){
  document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#2a689d");
  document.getElementById('CB').style.backgroundColor = "#2a689d";
}); 

document.getElementById('base3').addEventListener('click', function(e){
  document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#625b55");
  document.getElementById('CB').style.backgroundColor = "#625b55";
}); 

document.getElementById('base4').addEventListener('click', function(e){
  document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#890513");
  document.getElementById('CB').style.backgroundColor = "#890513";
}); 

document.getElementById('base5').addEventListener('click', function(e){
  document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#000");
  document.getElementById('CB').style.backgroundColor = "#000";
}); 

document.getElementById('base6').addEventListener('click', function(e){
  document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#98161C");
  document.getElementById('CB').style.backgroundColor = "#98161C";
}); 

document.getElementById('base7').addEventListener('click', function(e){
  document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#F2C553");
  document.getElementById('CB').style.backgroundColor = "#F2C553";
}); 

document.getElementById('base8').addEventListener('click', function(e){
  document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#4F5695");
  document.getElementById('CB').style.backgroundColor = "#4F5695";
}); 

document.getElementById('base9').addEventListener('click', function(e){
  document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#3B5E91");
  document.getElementById('CB').style.backgroundColor = "#3B5E91";
}); 

document.getElementById('base10').addEventListener('click', function(e){
  document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#546161");
  document.getElementById('CB').style.backgroundColor = "#546161";
}); 

document.getElementById('base110').addEventListener('click', function(e){
  document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#000");
  document.getElementById('CB').style.backgroundColor = "#000";
}); 

  //botoes
  const btnbotoes = document.getElementById('botoes');
  btnbotoes.addEventListener('click', function(e){
    if(window.innerWidth <= 768){
      document.getElementById('acabamentos').style.display = "none";
      document.getElementById('deletebaselabel1').style.display = "block";
      document.getElementById('btncorbtn').style.visibility = "visible";
      document.getElementById('btncor').style.visibility = "hidden";
      document.getElementById('btncorgola').style.visibility = "hidden";
      document.getElementById('btncorvista').style.visibility = "hidden";
      document.getElementById('btncorcarcela').style.visibility = "hidden";
      document.getElementById('cores').style.visibility = "hidden";
      document.getElementById('coresb').style.visibility = "visible";
      document.getElementById('coresGE').style.visibility = "hidden";
      document.getElementById('coresGI').style.visibility = "hidden";
      document.getElementById('coresP').style.visibility = "hidden";
      document.getElementById('coresVE').style.visibility = "hidden";
      document.getElementById('coresVD').style.visibility = "hidden";
      document.getElementById('coresBF').style.visibility = "hidden";
      document.getElementById('coresBB').style.visibility = "hidden";
    }else{
    document.getElementById('cores').style.visibility = "hidden";
    document.getElementById('coresb').style.visibility = "visible";
    document.getElementById('coresGE').style.visibility = "hidden";
    document.getElementById('coresGI').style.visibility = "hidden";
    document.getElementById('coresP').style.visibility = "hidden";
    document.getElementById('coresVE').style.visibility = "hidden";
    document.getElementById('coresVD').style.visibility = "hidden";
    document.getElementById('coresBF').style.visibility = "hidden";
    document.getElementById('coresBB').style.visibility = "hidden";}
  });
  //botoes branco
  const bntcorbotoesbranco = document.getElementById('whitebase1');
  bntcorbotoesbranco.addEventListener('click', function(e){
    document.getElementById('botao').style.fill = "#fff";
    document.getElementById('BT').style.backgroundColor = "#fff";
  });

  //botoes preta
  const btncorbotoespreto = document.getElementById('blackbase1');
  btncorbotoespreto.addEventListener('click', function(e){
    document.getElementById('botao').style.fill = "#dcdbd6";
    document.getElementById('BT').style.backgroundColor = "#dcdbd6";
  });
  //botoes azul
  const btncorbotoesazul = document.getElementById('bluebase1');
  btncorbotoesazul.addEventListener('click', function(e){
    document.getElementById('botao').style.fill = "#b1c4b9";
    document.getElementById('BT').style.backgroundColor = "#b1c4b9";
  });    
  //botoes vermelha
  const btncorbotoesvermelha = document.getElementById('redbase1');
  btncorbotoesvermelha.addEventListener('click', function(e){
    document.getElementById('botao').style.fill = "#b5ac9b";
    document.getElementById('BT').style.backgroundColor = "#b5ac9b";
  });  
  //botoes amarela
  const btncorbotoesamarela = document.getElementById('yellowbase1');
  btncorbotoesamarela.addEventListener('click', function(e){
    document.getElementById('botao').style.fill = "#7f827d";
    document.getElementById('BT').style.backgroundColor = "#7f827d";
  });  
  //botoes verde
  const btncorbotoesverde = document.getElementById('greenbase1');
  btncorbotoesverde.addEventListener('click', function(e){
    document.getElementById('botao').style.fill = "#ecb2a6";
    document.getElementById('BT').style.backgroundColor = "#ecb2a6";
  });  

  document.getElementById('base11').addEventListener('click', function(e){
    document.querySelectorAll(".botao").forEach(v => v.style.fill = "#86a4bc");
    document.getElementById('BT').style.backgroundColor = "#86a4bc";
  });  
  
  document.getElementById('base21').addEventListener('click', function(e){
    document.querySelectorAll(".botao").forEach(v => v.style.fill = "#2a689d");
    document.getElementById('BT').style.backgroundColor = "#2a689d";
  }); 
  
  document.getElementById('base31').addEventListener('click', function(e){
    document.querySelectorAll(".botao").forEach(v => v.style.fill = "#625b55");
    document.getElementById('BT').style.backgroundColor = "#625b55";
  }); 
  
  document.getElementById('base41').addEventListener('click', function(e){
    document.querySelectorAll(".botao").forEach(v => v.style.fill = "#890513");
    document.getElementById('BT').style.backgroundColor = "#890513";
  }); 
  
  document.getElementById('base51').addEventListener('click', function(e){
    document.querySelectorAll(".botao").forEach(v => v.style.fill = "#000");
    document.getElementById('BT').style.backgroundColor = "#000";
  }); 
  
  document.getElementById('base61').addEventListener('click', function(e){
    document.querySelectorAll(".botao").forEach(v => v.style.fill = "#98161C");
    document.getElementById('BT').style.backgroundColor = "#98161C";
  }); 
  
  document.getElementById('base71').addEventListener('click', function(e){
    document.querySelectorAll(".botao").forEach(v => v.style.fill = "#F2C553");
    document.getElementById('BT').style.backgroundColor = "#F2C553";
  }); 
  
  document.getElementById('base81').addEventListener('click', function(e){
    document.querySelectorAll(".botao").forEach(v => v.style.fill = "#4F5695");
    document.getElementById('BT').style.backgroundColor = "#4F5695";
  }); 
  
  document.getElementById('base91').addEventListener('click', function(e){
    document.querySelectorAll(".botao").forEach(v => v.style.fill = "#3B5E91");
    document.getElementById('BT').style.backgroundColor = "#3B5E91";
  }); 
  
  document.getElementById('base101').addEventListener('click', function(e){
    document.querySelectorAll(".botao").forEach(v => v.style.fill = "#546161");
    document.getElementById('BT').style.backgroundColor = "#546161";
  }); 
  
  document.getElementById('base111').addEventListener('click', function(e){
    document.querySelectorAll(".botao").forEach(v => v.style.fill = "#000");
    document.getElementById('BT').style.backgroundColor = "#000";
  }); 


  //gola exterior
  const btngolaE = document.getElementById('gola1');
  btngolaE.addEventListener('click', function(e){
    if(window.innerWidth <= 768){
      document.getElementById('acabamentos').style.display = "none";
      document.getElementById('deletebaselabel2').style.display = "block";
      document.getElementById('btncorbtn').style.visibility = "hidden";
      document.getElementById('btncor').style.visibility = "hidden";
      document.getElementById('btncorgola').style.visibility = "visible";
      document.getElementById('btncorvista').style.visibility = "hidden";
      document.getElementById('btncorcarcela').style.visibility = "hidden";
      document.getElementById('cores').style.visibility = "hidden";
      document.getElementById('coresb').style.visibility = "hidden";
      document.getElementById('coresGE').style.visibility = "visible";
      document.getElementById('coresGI').style.visibility = "hidden";
      document.getElementById('coresP').style.visibility = "hidden";
      document.getElementById('coresVE').style.visibility = "hidden";
      document.getElementById('coresVD').style.visibility = "hidden";
      document.getElementById('coresBF').style.visibility = "hidden";
      document.getElementById('coresBB').style.visibility = "hidden";
    }else{
    document.getElementById('cores').style.visibility = "hidden";
    document.getElementById('coresb').style.visibility = "hidden";
    document.getElementById('coresGE').style.visibility = "visible";
    document.getElementById('coresGI').style.visibility = "hidden";
    document.getElementById('coresP').style.visibility = "hidden";
    document.getElementById('coresVE').style.visibility = "hidden";
    document.getElementById('coresVD').style.visibility = "hidden";
    document.getElementById('coresBF').style.visibility = "hidden";
    document.getElementById('coresBB').style.visibility = "hidden";}
  });
  //Gola exterior branco
  const bntcorgolaEbranco = document.getElementById('whitebase2');
  bntcorgolaEbranco.addEventListener('click', function(e){
    document.getElementById('golaE').style.fill = "#fff";
    document.getElementById('golaEE').style.fill = "#fff";
    document.getElementById('ge').style.backgroundColor = "#fff";
  });
  //Gola exterior preta
  const btncorgolaEpreto = document.getElementById('blackbase2');
  btncorgolaEpreto.addEventListener('click', function(e){
    document.getElementById('golaE').style.fill = "#dcdbd6";
    document.getElementById('golaEE').style.fill = "#dcdbd6";
    document.getElementById('ge').style.backgroundColor = "#dcdbd6";
  });
  //Gola exterior azul
  const btncorgolaEazul = document.getElementById('bluebase2');
  btncorgolaEazul.addEventListener('click', function(e){
    document.getElementById('golaE').style.fill = "#b1c4b9";
    document.getElementById('golaEE').style.fill = "#b1c4b9";
    document.getElementById('ge').style.backgroundColor = "#b1c4b9";
  });    
  //Gola exterior vermelha
  const btncorgolaEvermelha = document.getElementById('redbase2');
  btncorgolaEvermelha.addEventListener('click', function(e){
    document.getElementById('golaE').style.fill = "#b5ac9b";
    document.getElementById('golaEE').style.fill = "#b5ac9b";
    document.getElementById('ge').style.backgroundColor = "#b5ac9b";
  });  
  //Gola exterior amarela
  const btncorgolaEamarela = document.getElementById('yellowbase2');
  btncorgolaEamarela.addEventListener('click', function(e){
    document.getElementById('golaE').style.fill = "#7f827d";
    document.getElementById('golaEE').style.fill = "#7f827d";
    document.getElementById('ge').style.backgroundColor = "#7f827d";
  });  
  //Gola exterior verde
  const btncorgolaEverde = document.getElementById('greenbase2');
  btncorgolaEverde.addEventListener('click', function(e){
    document.getElementById('golaE').style.fill = "#ecb2a6";
    document.getElementById('golaEE').style.fill = "#ecb2a6";
    document.getElementById('ge').style.backgroundColor = "#ecb2a6";
  });  

  document.getElementById('base12').addEventListener('click', function(e){
    document.querySelectorAll(".golaE").forEach(v => v.style.fill = "#86a4bc");
    document.getElementById('ge').style.backgroundColor = "#86a4bc";
  });  
  
  document.getElementById('base22').addEventListener('click', function(e){
    document.querySelectorAll(".golaE").forEach(v => v.style.fill = "#2a689d");
    document.getElementById('ge').style.backgroundColor = "#2a689d";
  }); 
  
  document.getElementById('base32').addEventListener('click', function(e){
    document.querySelectorAll(".golaE").forEach(v => v.style.fill = "#625b55");
    document.getElementById('ge').style.backgroundColor = "#625b55";
  }); 
  
  document.getElementById('base42').addEventListener('click', function(e){
    document.querySelectorAll(".golaE").forEach(v => v.style.fill = "#890513");
    document.getElementById('ge').style.backgroundColor = "#890513";
  }); 
  
  document.getElementById('base52').addEventListener('click', function(e){
    document.querySelectorAll(".golaE").forEach(v => v.style.fill = "#000");
    document.getElementById('ge').style.backgroundColor = "#000";
  }); 
  
  document.getElementById('base62').addEventListener('click', function(e){
    document.querySelectorAll(".golaE").forEach(v => v.style.fill = "#98161C");
    document.getElementById('ge').style.backgroundColor = "#98161C";
  }); 
  
  document.getElementById('base72').addEventListener('click', function(e){
    document.querySelectorAll(".golaE").forEach(v => v.style.fill = "#F2C553");
    document.getElementById('ge').style.backgroundColor = "#F2C553";
  }); 
  
  document.getElementById('base82').addEventListener('click', function(e){
    document.querySelectorAll(".golaE").forEach(v => v.style.fill = "#4F5695");
    document.getElementById('ge').style.backgroundColor = "#4F5695";
  }); 
  
  document.getElementById('base92').addEventListener('click', function(e){
    document.querySelectorAll(".golaE").forEach(v => v.style.fill = "#3B5E91");
    document.getElementById('ge').style.backgroundColor = "#3B5E91";
  }); 
  
  document.getElementById('base102').addEventListener('click', function(e){
    document.querySelectorAll(".golaE").forEach(v => v.style.fill = "#546161");
    document.getElementById('ge').style.backgroundColor = "#546161";
  }); 
  
  document.getElementById('base112').addEventListener('click', function(e){
    document.querySelectorAll(".golaE").forEach(v => v.style.fill = "#000");
    document.getElementById('ge').style.backgroundColor = "#000";
  }); 


  //gola interior
  const btngolaI = document.getElementById('gola2');
  btngolaI.addEventListener('click', function(e){
    if(window.innerWidth <= 768){
      document.getElementById('acabamentos').style.display = "none";
      document.getElementById('deletebaselabel3').style.display = "block";
      document.getElementById('btncorbtn').style.visibility = "hidden";
      document.getElementById('btncor').style.visibility = "hidden";
      document.getElementById('btncorgola').style.visibility = "hidden";
      document.getElementById('btncorvista').style.visibility = "hidden";
      document.getElementById('btncorcarcela').style.visibility = "visible";
      document.getElementById('cores').style.visibility = "hidden";
      document.getElementById('coresb').style.visibility = "hidden";
      document.getElementById('coresGE').style.visibility = "hidden";
      document.getElementById('coresGI').style.visibility = "visible";
      document.getElementById('coresP').style.visibility = "hidden";
      document.getElementById('coresVE').style.visibility = "hidden";
      document.getElementById('coresVD').style.visibility = "hidden";
      document.getElementById('coresBF').style.visibility = "hidden";
      document.getElementById('coresBB').style.visibility = "hidden";
    }else{
    document.getElementById('cores').style.visibility = "hidden";
    document.getElementById('coresb').style.visibility = "hidden";
    document.getElementById('coresGE').style.visibility = "hidden";
    document.getElementById('coresGI').style.visibility = "visible";
    document.getElementById('coresP').style.visibility = "hidden";
    document.getElementById('coresVE').style.visibility = "hidden";
    document.getElementById('coresVD').style.visibility = "hidden";
    document.getElementById('coresBF').style.visibility = "hidden";
    document.getElementById('coresBB').style.visibility = "hidden";}
  });
  //Gola interior branco
  const bntcorgolaIbranco = document.getElementById('whitebase3');
  bntcorgolaIbranco.addEventListener('click', function(e){
    document.getElementById('golaI').style.fill = "#fff";
    document.getElementById('gi').style.backgroundColor = "#fff";
  });
  //Gola interior preta
  const btncorgolaIpreto = document.getElementById('blackbase3');
  btncorgolaIpreto.addEventListener('click', function(e){
    document.getElementById('golaI').style.fill = "#dcdbd6";
    document.getElementById('gi').style.backgroundColor = "#dcdbd6";
  });
  //Gola interior azul
  const btncorgolaIazul = document.getElementById('bluebase3');
  btncorgolaIazul.addEventListener('click', function(e){
    document.getElementById('golaI').style.fill = "#b1c4b9";
    document.getElementById('gi').style.backgroundColor = "#b1c4b9";
  });    
  //Gola interior vermelha
  const btncorgolaIvermelha = document.getElementById('redbase3');
  btncorgolaIvermelha.addEventListener('click', function(e){
    document.getElementById('golaI').style.fill = "#b5ac9b";
    document.getElementById('gi').style.backgroundColor = "#b5ac9b";
  });  
  //Gola interior amarela
  const btncorgolaIamarela = document.getElementById('yellowbase3');
  btncorgolaIamarela.addEventListener('click', function(e){
    document.getElementById('golaI').style.fill = "#7f827d";
    document.getElementById('gi').style.backgroundColor = "#7f827d";
  });  
  //Gola interior verde
  const btncorgolaIverde = document.getElementById('greenbase3');
  btncorgolaIverde.addEventListener('click', function(e){
    document.getElementById('golaI').style.fill = "#ecb2a6";
    document.getElementById('gi').style.backgroundColor = "#ecb2a6";
  });  

  document.getElementById('base13').addEventListener('click', function(e){
    document.querySelectorAll(".gola_2").forEach(v => v.style.fill = "#86a4bc");
    document.getElementById('gi').style.backgroundColor = "#86a4bc";
  });  
  
  document.getElementById('base23').addEventListener('click', function(e){
    document.querySelectorAll(".gola_2").forEach(v => v.style.fill = "#2a689d");
    document.getElementById('gi').style.backgroundColor = "#2a689d";
  }); 
  
  document.getElementById('base33').addEventListener('click', function(e){
    document.querySelectorAll(".gola_2").forEach(v => v.style.fill = "#625b55");
    document.getElementById('gi').style.backgroundColor = "#625b55";
  }); 
  
  document.getElementById('base43').addEventListener('click', function(e){
    document.querySelectorAll(".gola_2").forEach(v => v.style.fill = "#890513");
    document.getElementById('gi').style.backgroundColor = "#890513";
  }); 
  
  document.getElementById('base53').addEventListener('click', function(e){
    document.querySelectorAll(".gola_2").forEach(v => v.style.fill = "#000");
    document.getElementById('gi').style.backgroundColor = "#000";
  }); 
  
  document.getElementById('base63').addEventListener('click', function(e){
    document.querySelectorAll(".gola_2").forEach(v => v.style.fill = "#98161C");
    document.getElementById('gi').style.backgroundColor = "#98161C";
  }); 
  
  document.getElementById('base73').addEventListener('click', function(e){
    document.querySelectorAll(".gola_2").forEach(v => v.style.fill = "#F2C553");
    document.getElementById('gi').style.backgroundColor = "#F2C553";
  }); 
  
  document.getElementById('base83').addEventListener('click', function(e){
    document.querySelectorAll(".gola_2").forEach(v => v.style.fill = "#4F5695");
    document.getElementById('gi').style.backgroundColor = "#4F5695";
  }); 
  
  document.getElementById('base93').addEventListener('click', function(e){
    document.querySelectorAll(".gola_2").forEach(v => v.style.fill = "#3B5E91");
    document.getElementById('gi').style.backgroundColor = "#3B5E91";
  }); 
  
  document.getElementById('base103').addEventListener('click', function(e){
    document.querySelectorAll(".gola_2").forEach(v => v.style.fill = "#546161");
    document.getElementById('gi').style.backgroundColor = "#546161";
  }); 
  
  document.getElementById('base113').addEventListener('click', function(e){
    document.querySelectorAll(".gola_2").forEach(v => v.style.fill = "#000");
    document.getElementById('gi').style.backgroundColor = "#000";
  }); 

    //punho
    /*const btnpunho = document.getElementById('punho');
  btnpunho.addEventListener('click', function(e){
    document.getElementById('cores').style.visibility = "hidden";
    document.getElementById('coresb').style.visibility = "hidden";
    document.getElementById('coresGE').style.visibility = "hidden";
    document.getElementById('coresGI').style.visibility = "hidden";
    document.getElementById('coresP').style.visibility = "visible";
    document.getElementById('coresVE').style.visibility = "hidden";
    document.getElementById('coresVD').style.visibility = "hidden";
    document.getElementById('coresBF').style.visibility = "hidden";
    document.getElementById('coresBB').style.visibility = "hidden";
  });
//punho branca
  const bntcorpunhobranco = document.getElementById('whitebase4');
  bntcorpunhobranco.addEventListener('click', function(e){
    document.getElementById('punho2').style.fill = "#fff";
    document.getElementById('punho1').style.fill = "#fff";
    document.getElementById('PU').style.backgroundColor = "#fff";
  });

  //punho preta
  const btncorpunhopreto = document.getElementById('blackbase4');
  btncorpunhopreto.addEventListener('click', function(e){
    document.getElementById('punho2').style.fill = "#dcdbd6";
    document.getElementById('punho1').style.fill = "#dcdbd6";
    document.getElementById('PU').style.backgroundColor = "#dcdbd6";
  });
  //punho azul
  const btncorpunhoazul = document.getElementById('bluebase4');
  btncorpunhoazul.addEventListener('click', function(e){
    document.getElementById('punho2').style.fill = "#b1c4b9";
    document.getElementById('punho1').style.fill = "#b1c4b9";
    document.getElementById('PU').style.backgroundColor = "#b1c4b9";
  });    
  //punho vermelha
  const btncorpunhovermelha = document.getElementById('redbase4');
  btncorpunhovermelha.addEventListener('click', function(e){
    document.getElementById('punho2').style.fill = "#b5ac9b";
    document.getElementById('punho1').style.fill = "#b5ac9b";
    document.getElementById('PU').style.backgroundColor = "#b5ac9b";
  });  
  //punho amarela
  const btncorpunhoamarela = document.getElementById('yellowbase4');
  btncorpunhoamarela.addEventListener('click', function(e){
    document.getElementById('punho2').style.fill = "#7f827d";
    document.getElementById('punho1').style.fill = "#7f827d";
    document.getElementById('PU').style.backgroundColor = "#7f827d";
  });  
  //punho verde
  const btncorpunhoverde = document.getElementById('greenbase4');
  btncorpunhoverde.addEventListener('click', function(e){
    document.getElementById('punho2').style.fill = "#ecb2a6";
    document.getElementById('punho1').style.fill = "#ecb2a6";
    document.getElementById('PU').style.backgroundColor = "#ecb2a6";
  });

  document.getElementById('base14').addEventListener('click', function(e){
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#86a4bc");
    document.getElementById('CB').style.backgroundColor = "#86a4bc";
  });  
  
  document.getElementById('base24').addEventListener('click', function(e){
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#2a689d");
    document.getElementById('CB').style.backgroundColor = "#2a689d";
  }); 
  
  document.getElementById('base34').addEventListener('click', function(e){
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#625b55");
    document.getElementById('CB').style.backgroundColor = "#625b55";
  }); 
  
  document.getElementById('base44').addEventListener('click', function(e){
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#890513");
    document.getElementById('CB').style.backgroundColor = "#890513";
  }); 
  
  document.getElementById('base54').addEventListener('click', function(e){
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#000");
    document.getElementById('CB').style.backgroundColor = "#000";
  }); 
  
  document.getElementById('base64').addEventListener('click', function(e){
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#98161C");
    document.getElementById('CB').style.backgroundColor = "#98161C";
  }); 
  
  document.getElementById('base74').addEventListener('click', function(e){
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#F2C553");
    document.getElementById('CB').style.backgroundColor = "#F2C553";
  }); 
  
  document.getElementById('base84').addEventListener('click', function(e){
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#4F5695");
    document.getElementById('CB').style.backgroundColor = "#4F5695";
  }); 
  
  document.getElementById('base94').addEventListener('click', function(e){
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#3B5E91");
    document.getElementById('CB').style.backgroundColor = "#3B5E91";
  }); 
  
  document.getElementById('base104').addEventListener('click', function(e){
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#546161");
    document.getElementById('CB').style.backgroundColor = "#546161";
  }); 
  
  document.getElementById('base114').addEventListener('click', function(e){
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#000");
    document.getElementById('CB').style.backgroundColor = "#000";
  }); */

   //vistaE
   const btnvistaE = document.getElementById('vista');
  btnvistaE.addEventListener('click', function(e){
    if(window.innerWidth <= 768){
      document.getElementById('acabamentos').style.display = "none";
      document.getElementById('deletebaselabel4').style.display = "block";
      document.getElementById('btncorbtn').style.visibility = "hidden";
      document.getElementById('btncor').style.visibility = "hidden";
      document.getElementById('btncorgola').style.visibility = "hidden";
      document.getElementById('btncorvista').style.visibility = "visible";
      document.getElementById('btncorcarcela').style.visibility = "hidden";
      document.getElementById('cores').style.visibility = "hidden";
      document.getElementById('coresb').style.visibility = "hidden";
      document.getElementById('coresGE').style.visibility = "hidden";
      document.getElementById('coresGI').style.visibility = "hidden";
      document.getElementById('coresP').style.visibility = "hidden";
      document.getElementById('coresVE').style.visibility = "visible";
      document.getElementById('coresVD').style.visibility = "hidden";
      document.getElementById('coresBF').style.visibility = "hidden";
      document.getElementById('coresBB').style.visibility = "hidden";
    }else{
    document.getElementById('cores').style.visibility = "hidden";
    document.getElementById('coresb').style.visibility = "hidden";
    document.getElementById('coresGE').style.visibility = "hidden";
    document.getElementById('coresGI').style.visibility = "hidden";
    document.getElementById('coresP').style.visibility = "hidden";
    document.getElementById('coresVE').style.visibility = "visible";
    document.getElementById('coresVD').style.visibility = "hidden";
    document.getElementById('coresBF').style.visibility = "hidden";
    document.getElementById('coresBB').style.visibility = "hidden";}
  });
  //vistaE branco
  const bntcorvistaEbranco = document.getElementById('whitebase5');
  bntcorvistaEbranco.addEventListener('click', function(e){
    document.getElementById('vista2').style.fill = "#fff";
    document.getElementById('VE').style.backgroundColor = "#fff";
  });

  //vistaE preta
  const btncorvistaEpreto = document.getElementById('blackbase5');
  btncorvistaEpreto.addEventListener('click', function(e){
    document.getElementById('vista2').style.fill = "#dcdbd6";
    document.getElementById('VE').style.backgroundColor = "#dcdbd6";
  });
  //vistaE azul
  const btncorvistaEazul = document.getElementById('bluebase5');
  btncorvistaEazul.addEventListener('click', function(e){
    document.getElementById('vista2').style.fill = "#b1c4b9";
    document.getElementById('VE').style.backgroundColor = "#b1c4b9";
  });    
  //vistaE vermelha
  const btncorvistaEvermelha = document.getElementById('redbase5');
  btncorvistaEvermelha.addEventListener('click', function(e){
    document.getElementById('vista2').style.fill = "#b5ac9b";
    document.getElementById('VE').style.backgroundColor = "#b5ac9b";
  });  
  //vistaE amarela
  const btncorvistaEamarela = document.getElementById('yellowbase5');
  btncorvistaEamarela.addEventListener('click', function(e){
    document.getElementById('vista2').style.fill = "#7f827d";
    document.getElementById('VE').style.backgroundColor = "#7f827d";
  });  
  //vistaE verde
  const btncorvistaEverde = document.getElementById('greenbase5');
  btncorvistaEverde.addEventListener('click', function(e){
    document.getElementById('vista2').style.fill = "#ecb2a6";
    document.getElementById('VE').style.backgroundColor = "#ecb2a6";
  });

  document.getElementById('base15').addEventListener('click', function(e){
    document.querySelectorAll(".vista2").forEach(v => v.style.fill = "#86a4bc");
    document.getElementById('VE').style.backgroundColor = "#86a4bc";
  });  
  
  document.getElementById('base25').addEventListener('click', function(e){
    document.querySelectorAll(".vista2").forEach(v => v.style.fill = "#2a689d");
    document.getElementById('VE').style.backgroundColor = "#2a689d";
  }); 
  
  document.getElementById('base35').addEventListener('click', function(e){
    document.querySelectorAll(".vista2").forEach(v => v.style.fill = "#625b55");
    document.getElementById('VE').style.backgroundColor = "#625b55";
  }); 
  
  document.getElementById('base45').addEventListener('click', function(e){
    document.querySelectorAll(".vista2").forEach(v => v.style.fill = "#890513");
    document.getElementById('VE').style.backgroundColor = "#890513";
  }); 
  
  document.getElementById('base55').addEventListener('click', function(e){
    document.querySelectorAll(".vista2").forEach(v => v.style.fill = "#000");
    document.getElementById('VE').style.backgroundColor = "#000";
  }); 
  
  document.getElementById('base65').addEventListener('click', function(e){
    document.querySelectorAll(".vista2").forEach(v => v.style.fill = "#98161C");
    document.getElementById('VE').style.backgroundColor = "#98161C";
  }); 
  
  document.getElementById('base75').addEventListener('click', function(e){
    document.querySelectorAll(".vista2").forEach(v => v.style.fill = "#F2C553");
    document.getElementById('VE').style.backgroundColor = "#F2C553";
  }); 
  
  document.getElementById('base85').addEventListener('click', function(e){
    document.querySelectorAll(".vista2").forEach(v => v.style.fill = "#4F5695");
    document.getElementById('VE').style.backgroundColor = "#4F5695";
  }); 
  
  document.getElementById('base95').addEventListener('click', function(e){
    document.querySelectorAll(".vista2").forEach(v => v.style.fill = "#3B5E91");
    document.getElementById('VE').style.backgroundColor = "#3B5E91";
  }); 
  
  document.getElementById('base105').addEventListener('click', function(e){
    document.querySelectorAll(".vista2").forEach(v => v.style.fill = "#546161");
    document.getElementById('VE').style.backgroundColor = "#546161";
  }); 
  
  document.getElementById('base115').addEventListener('click', function(e){
    document.querySelectorAll(".vista2").forEach(v => v.style.fill = "#000");
    document.getElementById('VE').style.backgroundColor = "#000";
  }); 


  //vistaD
  const btnvistaD = document.getElementById('vista1');
  btnvistaD.addEventListener('click', function(e){
    document.getElementById('coresb').style.visibility = "hidden";
    document.getElementById('cores').style.visibility = "hidden";
    document.getElementById('coresGE').style.visibility = "hidden";
    document.getElementById('coresGI').style.visibility = "hidden";
    document.getElementById('coresP').style.visibility = "hidden";
    document.getElementById('coresVE').style.visibility = "hidden";
    document.getElementById('coresVD').style.visibility = "visible";
    document.getElementById('coresBF').style.visibility = "hidden";
    document.getElementById('coresBB').style.visibility = "hidden";
  });
  //vistaD branco
  const bntcorvistaDbranco = document.getElementById('whitebase6');
  bntcorvistaDbranco.addEventListener('click', function(e){
    document.getElementById('vista3').style.fill = "#fff";
    document.getElementById('VD').style.backgroundColor = "#fff";
  });

  //vistaD preta
  const btncorvistaDpreto = document.getElementById('blackbase6');
  btncorvistaDpreto.addEventListener('click', function(e){
    document.getElementById('vista3').style.fill = "#dcdbd6";
    document.getElementById('VD').style.backgroundColor = "#dcdbd6";
  });
  //vistaD azul
  const btncorvistaDazul = document.getElementById('bluebase6');
  btncorvistaDazul.addEventListener('click', function(e){
    document.getElementById('vista3').style.fill = "#b1c4b9";
    document.getElementById('VD').style.backgroundColor = "#b1c4b9";
  });    
  //vistaD vermelha
  const btncorvistaDvermelha = document.getElementById('redbase6');
  btncorvistaDvermelha.addEventListener('click', function(e){
    document.getElementById('vista3').style.fill = "#b5ac9b";
    document.getElementById('VD').style.backgroundColor = "#b5ac9b";
  });  
  //vistaD amarela
  const btncorvistaDamarela = document.getElementById('yellowbase6');
  btncorvistaDamarela.addEventListener('click', function(e){
    document.getElementById('vista3').style.fill = "#7f827d";
    document.getElementById('VD').style.backgroundColor = "#7f827d";
  });  
  //vistaD verde
  const btncorvistaDverde = document.getElementById('greenbase6');
  btncorvistaDverde.addEventListener('click', function(e){
    document.getElementById('vista3').style.fill = "#ecb2a6";
    document.getElementById('VD').style.backgroundColor = "#ecb2a6";
  });



  //Bolso Faixa
  const btnbolsoF = document.getElementById('bolsobtn');
  btnbolsoF.addEventListener('click', function(e){
    document.getElementById('coresb').style.visibility = "hidden";
    document.getElementById('cores').style.visibility = "hidden";
    document.getElementById('coresGE').style.visibility = "hidden";
    document.getElementById('coresGI').style.visibility = "hidden";
    document.getElementById('coresP').style.visibility = "hidden";
    document.getElementById('coresVE').style.visibility = "hidden";
    document.getElementById('coresVD').style.visibility = "hidden";
    document.getElementById('coresBF').style.visibility = "visible";
    document.getElementById('coresBB').style.visibility = "hidden";
  });
  //Bolso Faixa branco
  const bntcorbolsoFbranco = document.getElementById('whitebase7');
  bntcorbolsoFbranco.addEventListener('click', function(e){
    document.getElementById('bolsofaixa').style.fill = "#fff";
    document.getElementById('BSF').style.backgroundColor = "#fff";
  });

  //Bolso Faixa preta
  const btncorbolsoFpreto = document.getElementById('blackbase7');
  btncorbolsoFpreto.addEventListener('click', function(e){
    document.getElementById('bolsofaixa').style.fill = "#dcdbd6";
    document.getElementById('BSF').style.backgroundColor = "#dcdbd6";
  });
  //Bolso Faixa azul
  const btncorbolsoFazul = document.getElementById('bluebase7');
  btncorbolsoFazul.addEventListener('click', function(e){
    document.getElementById('bolsofaixa').style.fill = "#b1c4b9";
    document.getElementById('BSF').style.backgroundColor = "#b1c4b9";
  });    
  //Bolso Faixa vermelha
  const btncorbolsoFvermelha = document.getElementById('redbase7');
  btncorbolsoFvermelha.addEventListener('click', function(e){
    document.getElementById('bolsofaixa').style.fill = "#b5ac9b";
    document.getElementById('BSF').style.backgroundColor = "#b5ac9b";
  });  
  //Bolso Faixa amarela
  const btncorbolsoFamarela = document.getElementById('yellowbase7');
  btncorbolsoFamarela.addEventListener('click', function(e){
    document.getElementById('bolsofaixa').style.fill = "#7f827d";
    document.getElementById('BSF').style.backgroundColor = "#7f827d";
  });  
  //Bolso Faixa verde
  const btncorbolsoFverde = document.getElementById('greenbase7');
  btncorbolsoFverde.addEventListener('click', function(e){
    document.getElementById('bolsofaixa').style.fill = "#ecb2a6";
    document.getElementById('BSF').style.backgroundColor = "#ecb2a6";
  });



  //Bolso Faixa
  const btnbolsoB = document.getElementById('bolso1');
  btnbolsoB.addEventListener('click', function(e){
    document.getElementById('coresb').style.visibility = "hidden";
    document.getElementById('cores').style.visibility = "hidden";
    document.getElementById('coresGE').style.visibility = "hidden";
    document.getElementById('coresGI').style.visibility = "hidden";
    document.getElementById('coresP').style.visibility = "hidden";
    document.getElementById('coresVE').style.visibility = "hidden";
    document.getElementById('coresVD').style.visibility = "hidden";
    document.getElementById('coresBF').style.visibility = "hidden";
    document.getElementById('coresBB').style.visibility = "visible";
  });
  //Bolso Faixa branco
  const bntcorbolsoBbranco = document.getElementById('whitebase8');
  bntcorbolsoBbranco.addEventListener('click', function(e){
    document.getElementById('bolso12').style.fill = "#fff";
    document.getElementById('BB').style.backgroundColor = "#fff";
  });

  //Bolso Faixa preta
  const btncorbolsoBpreto = document.getElementById('blackbase8');
  btncorbolsoBpreto.addEventListener('click', function(e){
    document.getElementById('bolso12').style.fill = "#dcdbd6";
    document.getElementById('BB').style.backgroundColor = "#dcdbd6";
  });
  //Bolso Faixa azul
  const btncorbolsoBazul = document.getElementById('bluebase8');
  btncorbolsoBazul.addEventListener('click', function(e){
    document.getElementById('bolso12').style.fill = "#b1c4b9";
    document.getElementById('BB').style.backgroundColor = "#b1c4b9";
  });    
  //Bolso Faixa vermelha
  const btncorbolsoBvermelha = document.getElementById('redbase8');
  btncorbolsoBvermelha.addEventListener('click', function(e){
    document.getElementById('bolso12').style.fill = "#b5ac9b";
    document.getElementById('BB').style.backgroundColor = "#b5ac9b";
  });  
  //Bolso Faixa amarela
  const btncorbolsoBamarela = document.getElementById('yellowbase8');
  btncorbolsoBamarela.addEventListener('click', function(e){
    document.getElementById('bolso12').style.fill = "#7f827d";
    document.getElementById('BB').style.backgroundColor = "#7f827d";
  });  
  //Bolso Faixa verde
  const btncorbolsoBverde = document.getElementById('greenbase8');
  btncorbolsoBverde.addEventListener('click', function(e){
    document.getElementById('bolso12').style.fill = "#ecb2a6";
    document.getElementById('BB').style.backgroundColor = "#ecb2a6";
  });


  //bolso on/off
  const bolsoligadesliga = document.getElementById('switch-shadow');
  bolsoligadesliga.addEventListener('click', function(e){
    if(document.getElementById('switch-shadow').checked){
      document.getElementById('bolsofrente').style.visibility = "visible";
      document.getElementById('bolso12').style.visibility = "visible";
      document.getElementById('bolsofaixa').style.visibility = "visible";
    }else {
      document.getElementById('bolsofrente').style.visibility = "hidden";
      document.getElementById('bolso12').style.visibility = "hidden";
      document.getElementById('bolsofaixa').style.visibility = "hidden";
    }
  });
  

  document.getElementById('switch-shadow3').addEventListener('click', function(e){
    if(document.getElementById('switch-shadow3').checked){
      document.getElementById('frente4').style.visibility = "visible";
      document.getElementById('lapela').style.visibility = "visible";
      document.getElementById('frente3').style.visibility = "hidden";
    }else {
      document.getElementById('frente4').style.visibility = "hidden";
      document.getElementById('lapela').style.visibility = "hidden";
      document.getElementById('frente3').style.visibility = "visible";
    }
  });


  // download
$(document).ready(function(){
  $("#download").click(function(){
    domtoimage.toBlob(document.getElementById('social_masculino')).then(function(blob){
      window.saveAs(blob, "Uniformizar.png");
      
    })
  })
 });

 //upload
 var deleteIcon = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Ebene_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='595.275px' height='595.275px' viewBox='200 215 230 470' xml:space='preserve'%3E%3Ccircle style='fill:%23F44336;' cx='299.76' cy='439.067' r='218.516'/%3E%3Cg%3E%3Crect x='267.162' y='307.978' transform='matrix(0.7071 -0.7071 0.7071 0.7071 -222.6202 340.6915)' style='fill:white;' width='65.545' height='262.18'/%3E%3Crect x='266.988' y='308.153' transform='matrix(0.7071 0.7071 -0.7071 0.7071 398.3889 -83.3116)' style='fill:white;' width='65.544' height='262.179'/%3E%3C/g%3E%3C/svg%3E";

var imga = document.createElement('img');
imga.src = deleteIcon;

  var canvas = new fabric.Canvas('list');
  let uploader = document.getElementById("uploader");
  uploader.addEventListener('change',function(e){
var reader = new FileReader();
reader.onload = function(e) {
  var image = new Image();
  image.src = e.target.result;
  image.onload = function() {
    var img = new fabric.Image(image);
    img.set({
      left: 100,
      top: 60
    });
    img.scaleToWidth(200);
    canvas.add(img).setActiveObject(img).renderAll();
    }
}
reader.readAsDataURL(e.target.files[0]);
setTimeout(() => {
  document.getElementById("uploader").value = "";
}, 1)
});
fabric.Object.prototype.controls.deleteControl = new fabric.Control({
  x: 0.5,
  y: -0.5,
  offsetY: 16,
  cursorStyle: 'pointer',
  mouseUpHandler: deleteObject,
  render: renderIcon,
  cornerSize: 24
});


function deleteObject(eventData, transform) {
      var target = transform.target;
      var canvas = target.canvas;
          canvas.remove(target);
      canvas.requestRenderAll();
  };

function renderIcon(ctx, left, top, styleOverride, fabricObject) {
  var size = this.cornerSize;
  ctx.save();
  ctx.translate(left, top);
  ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
  ctx.drawImage(imga, -size/2, -size/2, size, size);
  ctx.restore();
};



///////////Responsivo
///////Celular
const lado = document.getElementById('switch-shadow2');
  lado.addEventListener('click', function(e){
    if(document.getElementById('switch-shadow2').checked){
      document.getElementById('frente').style.display = "none";
      document.getElementById('costas').style.display = "block";
      document.getElementById('bolsofrente').style.visibility = "hidden";
      document.getElementById('bolso12').style.visibility = "hidden";
      document.getElementById('bolsofaixa').style.visibility = "hidden";
      document.getElementById('switch-shadow').disabled = true;
    }else {
      document.getElementById('switch-shadow').disabled = false;
      document.getElementById('frente').style.display = "block";
      document.getElementById('costas').style.display = "none"; 
      document.getElementById('bolsofrente').style.visibility = "hidden";
      document.getElementById('bolso12').style.visibility = "hidden";
      document.getElementById('bolsofaixa').style.visibility = "hidden";;
      if(document.getElementById('switch-shadow').checked){
        document.getElementById('bolsofrente').style.visibility = "visible";
      document.getElementById('bolso12').style.visibility = "visible";
      document.getElementById('bolsofaixa').style.visibility = "visible";
    }else {
      document.getElementById('bolsofrente').style.visibility = "hidden";
      document.getElementById('bolso12').style.visibility = "hidden";
      document.getElementById('bolsofaixa').style.visibility = "hidden";
    }
  }
});


function sizeOfThings() {
    if (window.innerWidth > 768){
        document.getElementById('costas').style.display = "block";
        document.getElementById('frente').style.visibility = "visible";
        document.getElementById('acabamentos').style.display = "block";
        document.getElementById('cores').style.visibility = "visible";
    }else{
        document.getElementById('costas').style.display = "none";
        document.getElementById('acabamentos').style.display = "none";
        document.getElementById('cores').style.visibility = "hidden";
        document.getElementById('coresb').style.visibility = "hidden";
        document.getElementById('coresGE').style.visibility = "hidden";
        document.getElementById('coresGI').style.visibility = "hidden";
        document.getElementById('coresP').style.visibility = "hidden";
        document.getElementById('coresVE').style.visibility = "hidden";
        document.getElementById('coresVD').style.visibility = "hidden";
        document.getElementById('coresBF').style.visibility = "hidden";
        document.getElementById('coresBB').style.visibility = "hidden";

    }
 };
window.addEventListener('resize', function(){
	sizeOfThings();
});
 

document.getElementById('botaocor').addEventListener('click', function(e){
  console.log('teste')
});

document.getElementById('btnacabalabel').addEventListener('click', function(e){
  document.getElementById('acabamentos').style.display = "block";
  document.getElementById('deletelabel').style.display = "block";
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresb').style.visibility = "hidden";
  document.getElementById('coresGE').style.visibility = "hidden";
  document.getElementById('coresGI').style.visibility = "hidden";
  document.getElementById('coresP').style.visibility = "hidden";
  document.getElementById('coresVE').style.visibility = "hidden";
  document.getElementById('coresVD').style.visibility = "hidden";
  document.getElementById('coresBF').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "hidden";
})

document.getElementById('deleteb').addEventListener('click', function(e){
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('deletebase').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresb').style.visibility = "hidden";
  document.getElementById('coresGE').style.visibility = "hidden";
  document.getElementById('coresGI').style.visibility = "hidden";
  document.getElementById('coresP').style.visibility = "hidden";
  document.getElementById('coresVE').style.visibility = "hidden";
  document.getElementById('coresVD').style.visibility = "hidden";
  document.getElementById('coresBF').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('deletebaselabel1').style.display = "none";
  document.getElementById('deletebaselabel2').style.display = "none";
  document.getElementById('deletebaselabel3').style.display = "none";
  document.getElementById('deletebaselabel4').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('botaocor').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "visible";
  document.getElementById('coresb').style.visibility = "hidden";
  document.getElementById('coresGE').style.visibility = "hidden";
  document.getElementById('coresGI').style.visibility = "hidden";
  document.getElementById('coresP').style.visibility = "hidden";
  document.getElementById('coresVE').style.visibility = "hidden";
  document.getElementById('coresVD').style.visibility = "hidden";
  document.getElementById('coresBF').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "block";
  document.getElementById('deletebaselabel1').style.display = "none";
  document.getElementById('deletebaselabel2').style.display = "none";
  document.getElementById('deletebaselabel3').style.display = "none";
  document.getElementById('deletebaselabel4').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('botaocorbotoes').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresb').style.visibility = "visible";
  document.getElementById('coresGE').style.visibility = "hidden";
  document.getElementById('coresGI').style.visibility = "hidden";
  document.getElementById('coresVE').style.visibility = "hidden";
  document.getElementById('coresVD').style.visibility = "hidden";
  document.getElementById('coresBF').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('deletebaselabel1').style.display = "block";
  document.getElementById('deletebaselabel2').style.display = "none";
  document.getElementById('deletebaselabel3').style.display = "none";
  document.getElementById('deletebaselabel4').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('botaocorgola').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresb').style.visibility = "hidden";
  document.getElementById('coresGE').style.visibility = "visible";
  document.getElementById('coresGI').style.visibility = "hidden";
  document.getElementById('coresVE').style.visibility = "hidden";
  document.getElementById('coresVD').style.visibility = "hidden";
  document.getElementById('coresBF').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('deletebaselabel1').style.display = "none";
  document.getElementById('deletebaselabel2').style.display = "block";
  document.getElementById('deletebaselabel3').style.display = "none";
  document.getElementById('deletebaselabel4').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('botaocorvista').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresb').style.visibility = "hidden";
  document.getElementById('coresGE').style.visibility = "hidden";
  document.getElementById('coresGI').style.visibility = "hidden";
  document.getElementById('coresVE').style.visibility = "visible";
  document.getElementById('coresVD').style.visibility = "hidden";
  document.getElementById('coresBF').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('deletebaselabel1').style.display = "none";
  document.getElementById('deletebaselabel2').style.display = "none";
  document.getElementById('deletebaselabel3').style.display = "none";
  document.getElementById('deletebaselabel4').style.display = "block";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('botaocorcarcela').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresb').style.visibility = "hidden";
  document.getElementById('coresGE').style.visibility = "hidden";
  document.getElementById('coresGI').style.visibility = "visible";
  document.getElementById('coresVE').style.visibility = "hidden";
  document.getElementById('coresVD').style.visibility = "hidden";
  document.getElementById('coresBF').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('deletebaselabel1').style.display = "none";
  document.getElementById('deletebaselabel2').style.display = "none";
  document.getElementById('deletebaselabel3').style.display = "block";
  document.getElementById('deletebaselabel4').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});


