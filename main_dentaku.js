'use strict';

{

  $(document).ready(function(){

    var r = 0;   // = (イコール)後と入力中の扱いを0/1で切替。  =後は、前回結果を初期化。（演算は継続可）
    var $display = $('.calculator-output');
   
    $('input').click( e => {
        if (e.target.value == "=") {
          if (!$display.val()) {   // 開始時に入力禁止
            return;  
          } else if (eval($display.val()) === Infinity) {
            return;
          } else if (isNaN(eval($display.val()))) {
            return;
          } 
      
          $display.val(Math.round(eval($display.val())*1000000000000)/1000000000000);   //小数13桁目にて四捨五入= 小数12桁表示    ※ 0が12、小数点が1、１の位が1の計14行表示。

          r = 1;
          return;
  
      } else if (e.target.value == "AC") {
          $display.val("");
  
          r = 0;
          return;
  
      } else if (e.target.value == "×") {
          if (!$display.val() || !eval($display.val()) && !eval($display.val()) == "0") {
            return;
          } 
  
          if ($display.val().length >= "14") {
            alert('文字数上限を超えています');
            return;
          }
  
          e.target.value = "*";
          r = 0;
  
      } else if (e.target.value == "÷") {
          if(!$display.val() || !eval($display.val()) && !eval($display.val()) == "0"){
            return;
          } 
  
          if ($display.val().length >= "14") {
            alert('文字数上限を超えています');
            return;
          }
  
          e.target.value = "/";
          r = 0;
  
      } else if (e.target.value == "+") {
          if(!eval($display.val()) && !eval($display.val()) == "0"){
            return;
          } 
  
          if ($display.val().length >= "14") {
            alert('文字数上限を超えています');
            return;
          }
          
          r = 0;
  
      } else if (e.target.value == "-") {
          if ($display.val().substring($display.val().length -1, $display.val().length) == "-") {
            return;
          }
  
          if ($display.val().length >= "14") {
            alert('文字数上限を超えています');
            return;
          } 
  
          r = 0;
          
      } else if (e.target.value == "00") {
          if (!$display.val() ||   
            $display.val() == "0") {   // 初期時、0 (+00) 防止
            return; 
          } 
  
          if (($display.val().substring($display.val().length -1, $display.val().length) == "+" ||
          $display.val().substring($display.val().length -1, $display.val().length) == "-"  ||
          $display.val().substring($display.val().length -1, $display.val().length) == "*"  ||
          $display.val().substring($display.val().length -1, $display.val().length) == "/")) {
            return;
          }
  
          if (($display.val().substring($display.val().length -2, $display.val().length) == "+0" ||
          $display.val().substring($display.val().length -2, $display.val().length) == "-0"  ||
          $display.val().substring($display.val().length -2, $display.val().length) == "*0"  ||
          $display.val().substring($display.val().length -2, $display.val().length) == "/0" )) {
            return;
          }
  
          if (r == "1") {                     // =後、00 => "0"に変換
            $display.val("0");
            r = "0";
            return;
          }
  
          if ($display.val().length >= "14") {
            alert('文字数上限を超えています');
            return;
          }
  
      } else if (e.target.value == "1" || 
                e.target.value == "2" || 
                e.target.value == "3" || 
                e.target.value == "4" || 
                e.target.value == "5" || 
                e.target.value == "6" || 
                e.target.value == "7" || 
                e.target.value == "8" || 
                e.target.value == "9") {
  
          if ($display.val() == "0") {
            $display.val( e.target.value);
            r = 0;
            return;
          }
  
          if (($display.val().substring($display.val().length -2, $display.val().length) == "+0" ||
          $display.val().substring($display.val().length -2, $display.val().length) == "-0"  ||
          $display.val().substring($display.val().length -2, $display.val().length) == "*0"  ||
          $display.val().substring($display.val().length -2, $display.val().length) == "/0" )) {
          
            $display.val($display.val().substring( 0, $display.val().length - 1)  + e.target.value);
  
            return;
          }
          
          if (r == "1") {
            $display.val(e.target.value);
            r = "0";
            return;
          }
  
          if ($display.val().length >= "14") {
            alert('文字数上限を超えています');
            return;
          }
  
      } else if (e.target.value == "0") {
          if ($display.val() == "0") {
            return;
          }
  
          if (($display.val().substring($display.val().length -2, $display.val().length) == "+0" ||
          $display.val().substring($display.val().length -2, $display.val().length) == "-0"  ||
          $display.val().substring($display.val().length -2, $display.val().length) == "*0"  ||
          $display.val().substring($display.val().length -2, $display.val().length) == "/0" )) {
            return;
          }
  
          if (r == "1") {
            $display.val(e.target.value);
            r = "0";
            return;
          }
  
          if ($display.val().length >= "14") {
            alert('文字数上限を超えています');
            return;
          }

          if ($display.val().substring($display.val().length -1, $display.val().length) == "/") {
            alert('0で割ることはできません');
            return;
          }
  
      } else if (e.target.value == "." ) {
          if (!$display.val()) {
            $display.val("0.");
            r = 0;
            return;
          }
  
          if ($display.val().substring($display.val().length -1, $display.val().length) == "+" ||
          $display.val().substring($display.val().length -1, $display.val().length) == "-"  ||
          $display.val().substring($display.val().length -1, $display.val().length) == "*"  ||
          $display.val().substring($display.val().length -1, $display.val().length) == "/" ) {
            $display.val($display.val() + "0.");
            r = 0;
            return;
          }
          
          if (r == "1") {
            $display.val("0.");
            r = 0;
            return;   
          }
  
          if ($display.val().length >= "14") {
            alert('文字数上限を超えています');
            return;
          }
  
          if(!eval($display.val() + e.target.value) && !eval($display.val()) == "0"){
            return;
          }
       
          r = 0; 
  
      } 
  
      $display.val($display.val() + e.target.value);
      document.dentaku.multi_btn.value = "×";
      document.dentaku.div_btn.value = "÷";
      
    });


    $('.batsu').click( () => {
      $display.val($display.val().slice(0, -1));
  
      if (r == "1") {
        $display.val("");
        r = 0;
      } 
    });


  });


}