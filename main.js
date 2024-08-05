
$('.logo').append(`<div class='logo1'>
    <img src="./images/[removal.ai]_2d0a60d2-bd1c-4a38-aafb-c94d586b1ef1_agonlogo.png" alt="" class="agonLogo">
    <h2>agon</h2>
    </div>`);

$('.logo').append(`<div class='logoA'>
    <h3><a href="index.html"> Home</a></h3>
    <h3><a href="shop.html"> Shop</a></h3>
    <h3>Categories</h3>
    <h3>How it work?</h3>
    <h3>Contact us</h3>
    </div>`);

$('.logo').append(`<div class='logoB'>
     <i id="theme" class="fa-solid fa-moon"></i>
    </div>`);

$('.home').append(`<div class='homes'>
    
    </div>`);
    
$('.homes').append(`<div class='homes1'>
    <h2>Exclusive Smart Watch </h2>
    <h1>Let go of the Challenge <br> See yourself better</h1>
    <h4>Connect your conversations with the tools and services that you <br> use to get the job done. With over 1,500 apps and a robust API</h4>
    </div>`);

$('.homes').append(`<div class='homes2'>
    <button class="startBtn"><h3>Get started</h3> <i class="fa-solid fa-arrow-right"></i></button>
    <button class="startBtn1"><h3>How it works</h3> <i class="fa-solid fa-arrow-right"></i></button>
    </div>`);


$('.homes').append(`<div class='homes3'>
    <div class='homesDiv'>
       <div class='homesDiv1'><img src="images/kryg1-removebg-preview.png" alt="" class="krygPhoto"></div>
       <div class='homesDiv2'><h1>+12k</h1> <h3>Projects done</h3></div>
    </div>
    </div>`); 

$('.homes3').append(`<div class='homesDiv'>
        <div class='homesDiv1'><img src="images/kryg2-removebg-preview.png" alt="" class="krygPhoto"></div>
        <div class='homesDiv2'><h1>68k</h1> <h3>Custommers</h3></div>
      </div>`);
  

$('.akchiya').append(`<div class='cartAkchiya'> <div class='cartPhoto'></div>
    <div class='cartText'>
    <h3>4K TV Game Mini Arcade </h3>
    <h3>Rocker Console 32GB/64GB </h3>
    <h4 class="china">$29.80 </h4>
     </div>   
    </div>

    <div class='cartAkchiya'> <div class='cartPhoto2'></div>
    <div class='cartText'>
    <h3>Cancelling Headset Music </h3>
    <h3>Sport Deep Bass </h3>
    <h4 class="china">$420.00 </h4>
    </div>
    </div>
    
    <div class='cartAkchiya'> <div class='cartPhoto3'></div>
    <div class='cartText'>
    <h3>T500BT Original Wireless </h3>
    <h3>Bluetooth Headphone Deep </h3>
    <h4 class="china">$96.50 </h4>
    </div>
    </div>` 
);
$('.home').append(`<div class='homePhoto'>
    
    </div>`);
            

    let colorTheme = localStorage.getItem('colorTheme') || 'white';

    if (colorTheme == 'white') {
        $('.wrap').css('backgroundColor', colorTheme);
        $('.wrap').css('color', 'black');
        $('#theme').removeClass('fa-sun');
        $('#theme').addClass('fa-moon');
    } else {
        $('.wrap').css('backgroundColor', colorTheme);
        $('.wrap').css('color', 'white');
        $('#theme').removeClass('fa-moon');
        $('#theme').addClass('fa-sun');
    }
    
    $('#theme').click(function () {
        console.log(colorTheme);
        if (colorTheme == 'white') {
            localStorage.setItem('colorTheme', 'black');
            colorTheme = localStorage.getItem('colorTheme');
            $('.wrap').css('backgroundColor', colorTheme);
            $('.wrap').css('color', 'white');
            $('#theme').removeClass('fa-moon');
            $('#theme').addClass('fa-sun');
            $('.cartAkchiya').css('border', '1px solid white');
            $('.textLogo').css('backgroundColor', 'colorTheme');
            $('.textLogo').css('color', 'white');
        } else {
            localStorage.setItem('colorTheme', 'white');
            colorTheme = localStorage.getItem('colorTheme');
            $('.wrap').css('backgroundColor', colorTheme);
            $('.wrap').css('color', 'black');
            $('#theme').removeClass('fa-sun');
            $('#theme').addClass('fa-moon');
            $('.cartAkchiya').css('border', '1px solid black');
            $('.textLogo').css('backgroundColor', 'colorTheme');
            $('.textLogo').css('color', 'black');
        }
    })








   























    
     const db = [
        {
            id: 1,
            company: "Sony",
            firstname: "4K TV Game Mini Arcade",
            secondname:"Rocker Console 32GB/64GB",
            price: "$29.80",
            photo: "<img src='./images/timeWhite-removebg-preview.png' alt='' class='photoCard'>"
        },
        {
            id: 2,
            company: "Goggle",
            firstname: "4K TV Game Mini Arcade",
            secondname:"Rocker Console 32GB/64GB",
            price: "$39.80",
            photo: "<img src='./images/blackNavush.png' alt='' class='photoCard'>"
        },
        {
            id: 3,
            company: "Apple",
            firstname: "T500BT Original Wireless",
            secondname:"Bluetooth Headphone Deep",
            price: "$96.50",
            photo: "<img src='./images/blueNavush.png' alt='' class='photoCard'>"
        },
        {
            id: 4,
            company: "Toshiba",
            firstname: "Black Walnut Wood &",
            secondname:"Aluminum Headphone Stand",
            price: "$70.80",
            photo: "<img src='./images/blackHeadPhones.png' alt='' class='photoCard'>"
        },
        {
            id: 5,
            company: "Sony",
            firstname: "4K TV Game Mini Arcade",
            secondname:"Rocker Console 32GB/64GB",
            price: "$29.80",
            photo: "<img src='./images/greenWhiteNavush.png' alt='' class='photoCard'>"
        },
        {
            id: 6,
            company: "Goggle",
            firstname: "4K TV Game Mini Arcade",
            secondname:"Rocker Console 32GB/64GB",
            price: "$39.80",
            photo: "<img src='./images/187315ca60b144c47b5c3b928ba45561.png' alt='' class='photoCard'>"
        },
        {
            id: 7,
            company: "Apple",
            firstname: "T500BT Original Wireless",
            secondname:"Bluetooth Headphone Deep",
            price: "$96.50",
            photo: "<img src='./images/blackTime.png' alt='' class='photoCard'>"
        },
        {
            id: 8,
            company: "Toshiba",
            firstname: "Black Walnut Wood &",
            secondname:"Aluminum Headphone Stand",
            price: "$70.80",
            photo: "<img src='./images/blueHeadPhones.png' alt='' class='photoCard'>"
        },
        {
            id: 9,
            company: "Sony",
            firstname: "4K TV Game Mini Arcade",
            secondname:"Rocker Console 32GB/64GB",
            price: "$29.80",
            photo: "<img src='./images/10a2c1bc56236042b0ad8bea11ae3b69.png' alt='' class='photoCard'>"
        },
        {
            id: 10,
            company: "Goggle",
            firstname: "4K TV Game Mini Arcade",
            secondname:"Rocker Console 32GB/64GB",
            price: "$39.80",
            photo: "<img src='./images/grayNavush.png' alt='' class='photoCard'>"
        },
        {
            id: 11,
            company: "Apple",
            firstname: "T500BT Original Wireless",
            secondname:"Bluetooth Headphone Deep",
            price: "$96.50",
            photo: "<img src='./images/toster.png' alt='' class='photoCard'>"
        },
        {
            id: 12,
            company: "Toshiba",
            firstname: "Black Walnut Wood &",
            secondname:"Aluminum Headphone Stand",
            price: "$70.80",
            photo: "<img src='./images/gamePAd.png' alt='' class='photoCard'>"
        },
    ];
    
 
    
    for (let el of db) {
        $('.shopContainer').append(`<div class='shopCard'>
              <h5>${el.photo}</h5>
              <h5>${el.company}</h5> 
              <h3>${el.firstname}</h3> 
              <h3>${el.secondname}</h3>
              <p><span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star" id="grayStar"></i></span></p>
              <h3 class="add"><span class="price">${el.price}</span> <button class="btnAdd">Add <span class="plus">+</span></button></h3>  
            </div>`);
    }












    // $('.wrap').click(function (e) {
    //     let ID = (e.target.id).substring(0, 4);
    //     if (ID == 'user') {
    //         let currentID = (e.target.id).substring(4);
    //         for (let el of db) {
    //             if (el.id == currentID) {
    //                 // console.log(el);
    //                 $('.popup').css('display', 'flex');
    //                 $('.popupContainer').text(el.position);
    //                 $('.wrap').css('filter', 'blur(10px)')
    //             }
    //         }
    //     }
    // })
    
    // $('#close').click(function () {
    //     $('.popup').css('display', 'none');
    // })
    // <p><span><i class="fa-regular fa-user"></i></span>${el.age}</p>
    //             <p><span><i class="fa-solid fa-location-dot"></i></span>${el.country}</p
    // <button class='btn' id="user${el.id}">More</button>