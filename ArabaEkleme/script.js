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
        name: 'Escort',
        value: 1,
        marka: 1
    },
    {
        name: 'Mustang',
        value: 2,
        marka: 1
    },
    {
        name: 'E30',
        value: 3,
        marka: 2
    },
    {
        name: 'Şahin',
        value: 4,
        marka: 3
    },
    {
        name: 'Kartal',
        value: 5,
        marka: 3
    },
    {
        name: 'Doğan',
        value: 6,
        marka: 3
    },
    {
        name: 'Megane',
        value: 7,
        marka: 4
    },
    {
        name: 'Clio',
        value: 8,
        marka: 4
    },
    {
        name: 'M CS',
        value: 9,
        marka: 2
    },
];

let renk = [
    "kırmızı", "sarı", "yeşil", "siyah", "beyaz", "mavi"
];



function markaSec() {
    let markaSelect = document.getElementById("markaSelect").value;
    let modelSelect = document.getElementById("modelSelect");


    let guncelMarka = model.filter(function (f) {

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
    var plaka = document.getElementById("plakaEkle").value;

    var x = marka.find(function (f) {
        return f.id == secilenMarka
    });
    var y = model.find(function (f) {
        return f.value == secilenModel
    });


    if (model == "" || fiyat == "" || marka == "" || renk == "") {
        alert("lütfen bos yer birakmayiniz")
    }
    else {
        if (fiyat > 100000 || fiyat < 0) {
            alert("fiyat 100.000'den fazla veya 0'dan az olamaz")
        }
        else {


            let guncelPlaka = Araba.filter(function (f) {

                return f.Plaka == plaka
            });

            if (guncelPlaka.length > 0) {
                alert("Aynı plaka eklenemez");
                return;
            }

            Araba.push({
                Marka: x.name,
                Model: y.name,
                Renk: secilenRenk,
                Fiyat: fiyat,
                Plaka: plaka,
                isChecked: false,
                isChecked2: false,

            });


            Toplam = Number(Toplam) + Number(fiyat);
            document.getElementById("toplamArac").value = Araba.length;
            document.getElementById("toplamFiyat").value = null;

            document.getElementById("toplamFiyat").value = Toplam;

        }

        fillTable();


    }

}

function fillTable() {

    var select = document.querySelector("#table1 tbody");
    select.innerHTML = "";

    Araba.forEach(item => {
        var tPlaka = document.createElement("td");
        var tMarka = document.createElement("td");
        var tModel = document.createElement("td");
        var tRenk = document.createElement("td");
        var tFiyat = document.createElement("td");
        var x = document.createElement("INPUT");
        x.setAttribute("type", "checkbox");
        x.classList.add("my-checkbox");

        var y = document.createElement("INPUT");
        y.setAttribute("type", "checkbox");
        y.classList.add("my-checkbox");

        tPlaka.innerHTML = item.Plaka;
        tMarka.innerHTML = item.Marka;
        tModel.innerHTML = item.Model;
        tRenk.innerHTML = item.Renk;
        tFiyat.innerHTML = item.Fiyat;

        let tr = document.createElement("tr");

        tr.append(x);
        tr.append(tPlaka);
        tr.append(tMarka);
        tr.append(tModel);
        tr.append(tRenk);
        tr.append(tFiyat);
        tr.append(y);

        select.append(tr);
        x.addEventListener("click", function (t) {

            item.isChecked = true;
        });

        y.addEventListener("click", function (t) {

            item.isChecked2 = !item.isChecked2;

            fillRow();

            console.log(item.isChecked2);

            document.getElementById("plakaEkle").disabled = item.isChecked2;

            


            // if (item.isChecked2) {
            //     item.isChecked2 = false;
            //     document.getElementById("plakaEkle").disabled = false;


            // } else {
            //     item.isChecked2 = true;
            //     fillRow();
            //     document.getElementById("plakaEkle").disabled = true;
            //     item.isChecked2 = true;
            // }
        });
        


    })


}

function fillRow() {

    let guncelChecked = Araba.filter(function (a) {
        return a.isChecked2 == true;
    });


    if (guncelChecked.length == 1) {

        document.getElementById("markaSelect").value = marka.filter(a => {
            return a.name == guncelChecked[0].Marka;
        })[0].id;
        markaSec();
        document.getElementById("modelSelect").value = model.filter(a => {
            return a.name == guncelChecked[0].Model;
        })[0].value;
        document.getElementById("renkSelect").value = guncelChecked[0].Renk;

        document.getElementById("fiyatEkle").value = guncelChecked[0].Fiyat;
        document.getElementById("plakaEkle").value = guncelChecked[0].Plaka;


    } 
    else if(guncelChecked == 0)
    {
        fillTable();

    }
    
    else {
        alert("birden fazla secim yapıldı!!!");
        fillTable();
        Araba.map(a => {
            a.isChecked2 = false;
        })
    }





}

function updateRow() 
{

    var checkedControl = Araba.filter(function(d){

       return d.isChecked2 == true; 
    });

    if(checkedControl.length == 0){
        alert("araba seç");
        return;
    }
    else{
    GuncelArabaEkle();
    document.getElementById("plakaEkle").disabled = false; 


    }



}
function GuncelArabaEkle() {

    var secilenMarka = document.getElementById("markaSelect").value;
    var secilenModel = document.getElementById("modelSelect").value;
    var secilenRenk = document.getElementById("renkSelect").value;
    var fiyat = document.getElementById("fiyatEkle").value;
    var plaka = document.getElementById("plakaEkle").value;

    var x = marka.find(function (f) {
        return f.id == secilenMarka
    });
    var y = model.find(function (f) {
        return f.value == secilenModel
    });


    if (model == "" || fiyat == "" || marka == "" || renk == "") {
        alert("lütfen bos yer birakmayiniz")
    }
    else {
        if (fiyat > 100000 || fiyat < 0) {
            alert("fiyat 100.000'den fazla veya 0'dan az olamaz")
        }
        else {
            
            var updateObj = {
                Marka: x.name,
                Model: y.name,
                Renk: secilenRenk,
                Fiyat: fiyat,
                Plaka: plaka,
                isChecked: false,
                isChecked2: false,
            };


            var updateIndex = Araba.findIndex(function(da){
                return da.Plaka == updateObj.Plaka;
            });

            
            
            if(updateIndex == -1) return;
            
            console.log(Araba[updateIndex],updateObj);

            Araba[updateIndex] = updateObj;

            Toplam = Number(Toplam) + Number(fiyat);
            document.getElementById("toplamArac").value = Araba.length;
            document.getElementById("toplamFiyat").value = null;

            document.getElementById("toplamFiyat").value = Toplam;

        }

        fillTable();


    }

}


function deleteRow() {
    let guncelChecked = Araba.filter(function (a) {
        return a.isChecked == true
    });

    if (guncelChecked.length > 0) {

        myArray = Araba.filter(item => !guncelChecked.includes(item));
        Araba = myArray;


    } else {
        alert("İşaretli öğe bulunamadi");
    }

    fillTable();


}


function loadColor() {
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


