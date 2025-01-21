const warpper = document.querySelector('.sliderWarper');
const items = document.querySelectorAll('.listItems');

const products =[
    {
        id: 1,
        title: "NIKE",
        price: 120,
        colors: [
            {
                code: "white",
                img: "./images/nike.png",
            },
            {
                code: "darkblue",
                img: "./images/bluee.png",
            },
        ],
    },
    {
        id: 2,
        title: "ADIDAS",
        price: 120,
        colors: [
            {
                code: "#FFFFFF",
                img: "./images/adidas.png",
            },
            {
                code: "darkblue",
                img: "./images/darkblue.png",
            },
        ],
    },
    {
        id: 3,
        title: "JORDAN",
        price: 120,
        colors: [
            {
                code: "white",
                img: "./images/jorden.png",
            },
            {
                code: "darkblue",
                img: "./images/blue.png",
            },
        ],
    },
    {
        id: 4,
        title: "SKECHERS",
        price: 120,
        colors: [
            {
                code: "gray",
                img: "./images/puma.png",
            },
            {
                code: "#637fa6",
                img: "./images/lightblue.png",
            },
        ],
    },
    {
        id: 5,
        title: "REEBOK",
        price: 120,
        colors: [
            {
                code: "gray",
                img: "./images/reebok.png",
            },
            {
                code: "red",
                img: "./images/red.png",
            },
        ],
    },
    
    

];
let choosenProducts = products[0]
const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductsizes = document.querySelectorAll(".size");
items.forEach((item, index)=>{
    item.addEventListener("click",()=>{
        //change the current slids
        warpper.style.transform = `translateX(${-100 * index}vw)`;

        //change the choosen product
        choosenProducts = products[index]

        //change the tex of current products
        currentProductTitle.textContent = choosenProducts.title
        currentProductPrice.textContent = "$"+choosenProducts.price
        currentProductImg.src = choosenProducts.colors[0].img

        //changing colors
        currentProductColors.forEach((color, index)=>{
            color.style.backgroundColor   = choosenProducts.colors[index].code;
            
        })


    });
});
currentProductColors.forEach((color,index)=>{
    color.addEventListener("click", ()=>{
        currentProductImg.src = choosenProducts.colors[index].img
    });
});

currentProductsizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentProductsizes.forEach((size)=>{
            size.style.backgroundColor="white";
            size.style.color="black";
        });
            size.style.backgroundColor="black";
            size.style.color="white";
    });
});

const ProductButton = document.querySelector(".productBtn");
const Payment = document.querySelector(".payment");
const Close = document.querySelector(".close");

ProductButton.addEventListener("click",()=>{
    Payment.style.display = "flex"
})
Close.addEventListener("click",()=>{
    Payment.style.display = "none"
})

