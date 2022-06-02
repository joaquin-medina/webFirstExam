class Product {
    constructor (name, brand, description, img_source ){
        this.name = name;
        this.brand = brand;
        this.description = description;
        this.img_source = img_source;
    }
}

//WHEYPROTEIN
const product1 = new Product(
    "Whey Protein (2Lbs) - $3.800", 
    "STAR NUTRITION", 
    "Proteinas de la mejor digestibilidad y absorcion. \nIdeales para utilizar en tus colaciones o en tu ingesta de alimentos post entrenamiento.", 
    "wheystar");

const product2 = new Product(
    "Whey Protein (1Kg) - $3.300", 
    "MERVICK", 
    "Proteinas de excelente absorcion y digestibilidad. \nIdeal para uso en colaciones siendo una excelente ayuda para alcanzar las 6 comidas diarias requeridas.", 
    "wheymer");

const product3 = new Product(
    "Whey Pro (1Kg) - $2.500",
    "NUTRILAB", 
    "Proteínas concentradas de suero lácteo, ideales para su uso en batidos post entrenamiento o como colaciones.", 
    "wheynutri");
const set1 = [product1, product2, product3];

//CREATINE
const product4 = new Product(
    "Creatina monohidrato (300 gr) - $6.500", 
    "STAR NUTRITION", 
    "Fuente inmediata y directa de energía para las células musculares, aumento de fuerza, resistencia y recuperación.", 
    "creastar");

const product5 = new Product(
    "Creatine Premium (20 Serv) - $4.500", 
    "MERVICK", 
    "Es un suplemento dietario en base a Creatina, Dextrosa, Taurina y Glutamina, favorece la recuperación muscular y retrasa el cansancio.", 
    "creamer");

const product6 = new Product(
    "Creatina monohidrato (300 Gramos) - $2.800", 
    "NUTRILAB", 
    "Aumenta la capacidad de realizar ejercicios de alta intensidad y recuperarse en lapsos cortos, logrando mejores entrenamientos.", 
    "creanutri");    
const set2 = [product4, product5, product6];

//GAINER
const product7 = new Product(
    "Mutant Mass (1.5 Kg) - $3.000", 
    "STAR NUTRITION", 
    "Carbohidratos, proteínas de suero y vitaminas.\nIdeales como escudo anticatabolico en ciclos de hipertrofia de alto rendimiento.", 
    "gainstar");

const product8 = new Product(
    "Gainer Fortificado (1.5 Kg) - $2.700", 
    "MERVICK", 
    "Suplemento dietario a base de proteínas concentradas de suero lácteo y gran carga de carbohidratos, ideal para prevenir fases de catabolismo muscular.", 
    "gainmer");

const product9 = new Product(
    "Mass Builder (1.6 Kg - $2500", 
    "NUTRILAB", 
    "Suplemento de proteínas y carbohidratos, que mejoran el rendimiendo y aumenta el volumen de masa muscular.", 
    "gainnutri");    
const set3 = [product7, product8, product9];

//PREWORK
const product10 = new Product(
    "Pump V8 (30 Serv) - $2.000", 
    "STAR NUTRITION", 
    "Contiene los 8 ingredientes activos necesarios para entrenar intensamente, por más tiempo y con mayor volumen de sangre en los músculos.", 
    "prestar");

const product11 = new Product(
    "Pre War Fruit (20 Serv) - $1.800", 
    "ENA", 
    "Favorece la concentración, el aumento de energía, la fuerza, el tamaño muscular y la recuperación.", 
    "preena");

const product12 = new Product(
    "PRE Explosive Energy (30 Servicios) - $1.500", 
    "NUTRILAB", 
    "Vitaminas, minerales, aminoácidos, carbohidratos y extractos vegetales, pensado para ser consumido 30 minutos antes del entrenamiento.", 
    "prenutri");
const set4 = [product10, product11, product12];

//POSTWORK
const product13 = new Product(
    "Hydro Plus (700 Gramos) - $2.000", 
    "STAR NUTRITION", 
    "Proteína, aminoácidos, carbohidratos, sales minerales y vitaminas. Con aminoácidos ramificados BCAA y glutamina.", 
    "posthydro");

const product14 = new Product(
    "Glutamina (300 Gramos) - $2.200", 
    "STAR NUTRITION", 
    "Favorece la recuperación y crecimiento muscular, evita la oxidación muscular y regenera tejidos.", 
    "poststar");

const product15 = new Product(
    "Post Recovery (30 Servicios) - $2.000", 
    "NUTRILAB", 
    "Proteínas concentradas de suero lácteo y gran carga de BCAA, Creatina, Taurina y Glutamina.", 
    "postnutri");

const set5 = [product13, product14, product15];

const products = [set1, set2, set3, set4, set5];

window.addEventListener("DOMContentLoaded", () => {

    const productsButton = document.querySelectorAll("li[card-change]"); 
    const cards = document.querySelectorAll("div.card");

    productsButton.forEach(item => { 
        item.addEventListener("click", (event) => { 
            const setSelector = event.currentTarget.getAttribute("card-change"); 
            cards.forEach((card, index) => { 
                let set = setSelector[setSelector.length - 1] - 1; 
                const setSelected = products[set]; 
                const cardImg = card.querySelector(".box-img").children.item(0); 
                cardImg.setAttribute("src",`./images/${setSelected[index].img_source}.png`);
                card.querySelector("h4").innerText = setSelected[index].name; 
                card.querySelector("h5").innerText = setSelected[index].brand; 
                card.querySelector("p").innerText = setSelected[index].description; 
            })
        })
    })

})