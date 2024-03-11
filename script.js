const kiloInput = document.querySelector("#kiloInput");
const select = document.querySelector("select");
const btnHesapla = document.querySelector("#btnHesapla");
const img = document.querySelector("#for-img");
const sonuc = document.querySelector("#sonuc");

const hesapla = () => {
    let kilo = Number(kiloInput.value);
    kilo = kilo / 9.81;

    let gezegen = select.value;

    if(kiloInput.value != "" && select.value != "Bir seçim yapınız"){
        if(gezegen == "Dünya"){
            img.setAttribute("src","img/earth.png");
            sonuc.innerHTML = `Seçtiğiniz gezegen ${gezegen}. Bu gezegendeki ağırlığınız : ${(kilo * 9.81).toFixed(2)}kg.`
        }else if(gezegen == "Jüpiter"){
            img.setAttribute("src","img/jupiter.png");
            sonuc.innerHTML = `Seçtiğiniz gezegen ${gezegen}. Bu gezegendeki ağırlığınız : ${(kilo * 24.80).toFixed(2)}kg.`
        }else if(gezegen == "Mars"){
            img.setAttribute("src", "img/mars.png");
            sonuc.innerHTML = `Seçtiğiniz gezegen ${gezegen}. Bu gezegendeki ağırlığınız : ${(kilo * 3.71).toFixed(2)}kg.`
        }else if (gezegen == "Merkür") {
            img.setAttribute("src", "img/mercury.png");
            sonuc.innerHTML = `Seçtiğiniz gezegen ${gezegen}. Bu gezegendeki ağırlığınız : ${(kilo * 3.7).toFixed(2)}kg.`
        }else if (gezegen == "Ay") {
            img.setAttribute("src", "img/moon.png");
            sonuc.innerHTML = `Seçtiğiniz gezegen ${gezegen}. Bu gezegendeki ağırlığınız : ${(kilo * 1.62).toFixed(2)}kg.`
        } else if (gezegen == "Neptün") {
            img.setAttribute("src", "img/neptune.png");
            sonuc.innerHTML = `Seçtiğiniz gezegen ${gezegen}. Bu gezegendeki ağırlığınız : ${(kilo * 11.15).toFixed(2)}kg.`
        } else if (gezegen == "Plüton") {
            img.setAttribute("src", "img/pluto.png");
            sonuc.innerHTML = `Seçtiğiniz gezegen ${gezegen}. Bu gezegendeki ağırlığınız : ${(kilo * 0.62).toFixed(2)}kg.`
        } else if (gezegen == "Satürn") {
            img.setAttribute("src", "img/saturn.png");
            sonuc.innerHTML = `Seçtiğiniz gezegen ${gezegen}. Bu gezegendeki ağırlığınız : ${(kilo * 10.44).toFixed(2)}kg.`
        } else if (gezegen == "Uranüs") {
            img.setAttribute("src", "img/uranus.png");
            sonuc.innerHTML = `Seçtiğiniz gezegen ${gezegen}. Bu gezegendeki ağırlığınız : ${(kilo * 8.87).toFixed(2)}kg.`
        } else if (gezegen == "Venüs") {
            img.setAttribute("src", "img/venus.png");
            sonuc.innerHTML = `Seçtiğiniz gezegen ${gezegen}. Bu gezegendeki ağırlığınız : ${(kilo * 8.87).toFixed(2)}kg.`
        }
    }else{
        sonuc.innerHTML = `Bir seçim yapmak zorundasınız.`
        sonuc.classList.remove("text-white");
        sonuc.classList.add("text-danger");
    }
}





btnHesapla.addEventListener("click", hesapla);