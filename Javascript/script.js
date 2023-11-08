
var Araba = [
]
var Toplam = 0;

function ArabaEkle() {

    var marka = document.getElementById("markaEkle").value;
    var model = document.getElementById("modelEkle").value;
    var renk = document.getElementById("renkEkle").value;
    var fiyat = document.getElementById("fiyatEkle").value;

    if( model == "" || fiyat == "" || marka == "" || renk == "" ){
        alert("lütfen bos yer birakmayiniz")
    }
    else{
        if(fiyat > 100000){
            alert("fiyat 100.000'den fazla olamaz")
        }
        else{
            console.log(marka)

        Araba.push({
            Marka : marka,
            Model : model,
            Renk : renk,
            Fiyat : fiyat,

        })
        Toplam = Number(Toplam) + Number(fiyat);
        //alert("Araba Eklendi!!!")

        
        document.getElementById("markaEkle").value = "";
        document.getElementById("modelEkle").value = "";
        document.getElementById("renkEkle").value = "";
        document.getElementById("fiyatEkle").value = null;
        console.log(Araba)

        document.getElementById("toplamArac").value = Araba.length;
        document.getElementById("toplamFiyat").value = null;

        document.getElementById("toplamFiyat").value = Toplam;

        }


        
}






}

