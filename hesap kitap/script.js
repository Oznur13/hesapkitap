document.getElementById("listeYillar").addEventListener("change",hesapla);
  alert("merhaba")
       function hesapla(){


           let liste=document.getElementById("listeYillar");
           let secilenYilfiyat=liste.options[liste.selectedIndex].value;

           let sonuc=50/secilenYilfiyat;
           
           document.getElementById("sonuc").innerHTML="seçtiğiğniz yılda 35 tl ile"+sonuc.toFixed(1)+"LT benzin alinabiliyordu.;"


       }