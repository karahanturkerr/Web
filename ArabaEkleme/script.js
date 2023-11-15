var Araba = [];
var Toplam = 0;

let marka = [
    {
        name: "Ford",
        id: 1
    },
    {
        name: "BMW",
        id: 2
    },
    {
        name: "Tofas",
        id: 3
    },
    {
        name: "Renault",
        id: 4
    }
];

var model = [
    {
        name : 'Escort',
        value:1,
        marka:1
    },
    {
        name : 'Mustang',
        value:2,
        marka:1
    },
    {
        name : 'E30',
        value:3,
        marka:2
    },
    {
        name : 'Şahin',
        value:4,
        marka:3
    },
    {
        name : 'Kartal',
        value:5,
        marka:3
    },
    {
        name : 'Doğan',
        value:6,
        marka:3
    },
    {
        name : 'Megane',
        value:7,
        marka:4
    },
    {
        name : 'Clio',
        value:8,
        marka:4
    },
    {
        name : 'M CS',
        value:9,
        marka:2
    },
];

let renk = [
    "kırmızı", "sarı", "yeşil", "siyah", "beyaz", "mavi"
];

function markaSec()
{
    let markaSelect = document.getElementById("markaSelect").value;
    let modelSelect = document.getElementById("modelSelect");


    let guncelMarka = model.filter(function(f){

        return f.marka == markaSelect
        
     }); 

     modelSelect.innerHTML = '';

     guncelMarka.forEach(item => {
        let option = document.createElement("option");
        option.innerHTML = item.name;
        option.value = item.value;
        modelSelect.append(option);
    })


    //1. marka select valuesini al
    //2. Bu value değerine göre filtre uygula
    //3. filter sonucunu bir array ata
    //4.atadığın bu arrayi  select bas
}

function loadBrand() {
    let select = document.getElementById("markaSelect");
    marka.forEach(item => {
        let option = document.createElement("option");
        option.innerHTML = item.name;
        option.value = item.id;
        select.append(option);
    })

}

function ArabaEkle() {

    var secilenMarka = document.getElementById("markaSelect").value;
    var secilenModel = document.getElementById("modelSelect").value;
    var secilenRenk = document.getElementById("renkSelect").value;
    var fiyat = document.getElementById("fiyatEkle").value;

    var x = marka.find(function (f) {
        return f.id== secilenMarka
    });
    var y = model.find(function (f) {
        return f.value== secilenModel
    });
    

    if (model == "" || fiyat == "" || marka == "" || renk == "") {
        alert("lütfen bos yer birakmayiniz")
    }
    else {
        if (fiyat > 100000 || fiyat < 0) {
            alert("fiyat 100.000'den fazla veya 0'dan az olamaz")
        }
        else {

            Araba.push({
                Marka : x.name,
                Model: y.name,
                Renk: secilenRenk,
                Fiyat: fiyat,

            })
            Toplam = Number(Toplam) + Number(fiyat);
            //alert("Araba Eklendi!!!")


            document.getElementById("markaSelect").value = "";
            document.getElementById("modelSelect").value = "";
            document.getElementById("renkSelect").value = "";
            document.getElementById("fiyatEkle").value = null;
            console.log(Araba)

            document.getElementById("toplamArac").value = Araba.length;
            document.getElementById("toplamFiyat").value = null;

            document.getElementById("toplamFiyat").value = Toplam;

        }



    }






}

function loadColor(){
    let select = document.getElementById("renkSelect");

    renk.forEach(item => {
        let option = document.createElement("option");
        option.innerHTML = item;
        option.value = item;
        select.append(option);
    })
}


window.onload = function () {
    loadBrand();
    markaSec();
    loadColor();
}


