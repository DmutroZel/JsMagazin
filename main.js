
$('.logo').append(`<div class='logo1'>
    <img src="./images/[removal.ai]_2d0a60d2-bd1c-4a38-aafb-c94d586b1ef1_agonlogo.png" alt="" class="agonLogo">
    <h2>agon</h2>
    </div>`);

$('.logo').append(`<div class='logoA'>
    <h3><a href="index.html">Home</a></h3>
    <h3><a href="shop.html">Shop</a></h3>
    <h3><a href="categories.html">Categories</a></h3>
    <h3><a href="howUse.html">How it work?</a></h3>
    <h3><a href="contact.html">Contact us</a></h3>
    </div>`);

$('.logo').append(`<div class='logoB'>
     <i id="theme" class="fa-solid fa-moon"></i>
      <div class="cartContainer">
      <div class="cart"><i class="fa-solid fa-cart-shopping" id="shopCart"></i></div>
      <div class="counter">0</div>
         </div>
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
            localStorage.setItem('colorTheme', '#333');
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








 
     let db = [
        {
            id: 1,
            company: "Sony",
            firstname: "4K TV Game Mini Arcade",
            secondname:"Rocker Console 32GB/64GB",
            price: "$29.80",
            photo: "<img src='./images/timeWhite-removebg-preview.png' alt='' class='photoCard'>",
            miniPhoto:  "<img src='./images/timeWhite-removebg-preview.png' alt='' class='miniPhotoCard'>",
        },
        {
            id: 2,
            company: "Goggle",
            firstname: "4K TV Game Mini Arcade",
            secondname:"Rocker Console 32GB/64GB",
            price: "$39.80",
            photo: "<img src='./images/blackNavush.png' alt='' class='photoCard'>",
            miniPhoto: "<img src='./images/blackNavush.png' alt='' class='miniPhotoCard'>",
        },
        {
            id: 3,
            company: "Apple",
            firstname: "T500BT Original Wireless",
            secondname:"Bluetooth Headphone Deep",
            price: "$96.50",
            photo: "<img src='./images/blueNavush.png' alt='' class='photoCard'>",
            miniPhoto: "<img src='./images/blueNavush.png' alt='' class='miniPhotoCard'>"
        },
        {
            id: 4,
            company: "Toshiba",
            firstname: "Black Walnut Wood &",
            secondname:"Aluminum Headphone Stand",
            price: "$70.80",
            photo: "<img src='./images/blackHeadPhones.png' alt='' class='photoCard'>",
            miniPhoto: "<img src='./images/blackHeadPhones.png' alt='' class='miniPhotoCard'>"
        },
        {
            id: 5,
            company: "Sony",
            firstname: "4K TV Game Mini Arcade",
            secondname:"Rocker Console 32GB/64GB",
            price: "$29.80",
            photo: "<img src='./images/greenWhiteNavush.png' alt='' class='photoCard'>",
            miniPhoto: "<img src='./images/greenWhiteNavush.png' alt='' class='miniPhotoCard'>",
        },
        {
            id: 6,
            company: "Goggle",
            firstname: "4K TV Game Mini Arcade",
            secondname:"Rocker Console 32GB/64GB",
            price: "$39.80",
            photo: "<img src='./images/187315ca60b144c47b5c3b928ba45561.png' alt='' class='photoCard'>",
            miniPhoto: "<img src='./images/187315ca60b144c47b5c3b928ba45561.png' alt='' class='miniPhotoCard'>",
        },
        {
            id: 7,
            company: "Apple",
            firstname: "T500BT Original Wireless",
            secondname:"Bluetooth Headphone Deep",
            price: "$96.50",
            photo: "<img src='./images/blackTime.png' alt='' class='photoCard'>",
            miniPhoto: "<img src='./images/blackTime.png' alt='' class='miniPhotoCard'>",
        },
        {
            id: 8,
            company: "Toshiba",
            firstname: "Black Walnut Wood &",
            secondname:"Aluminum Headphone Stand",
            price: "$70.80",
            photo: "<img src='./images/blueHeadPhones.png' alt='' class='photoCard'>",
            miniPhoto: "<img src='./images/blueHeadPhones.png' alt='' class='miniPhotoCard'>",
        },
        {
            id: 9,
            company: "Sony",
            firstname: "4K TV Game Mini Arcade",
            secondname:"Rocker Console 32GB/64GB",
            price: "$29.80",
            photo: "<img src='./images/10a2c1bc56236042b0ad8bea11ae3b69.png' alt='' class='photoCard'>",
            miniPhoto: "<img src='./images/10a2c1bc56236042b0ad8bea11ae3b69.png' alt='' class='miniPhotoCard'>"
        },
        {
            id: 10,
            company: "Goggle",
            firstname: "4K TV Game Mini Arcade",
            secondname:"Rocker Console 32GB/64GB",
            price: "$39.80",
            photo: "<img src='./images/grayNavush.png' alt='' class='photoCard'>",
            miniPhoto: "<img src='./images/grayNavush.png' alt='' class='miniPhotoCard'>"
        },
        {
            id: 11,
            company: "Apple",
            firstname: "T500BT Original Wireless",
            secondname:"Bluetooth Headphone Deep",
            price: "$96.50",
            photo: "<img src='./images/toster.png' alt='' class='photoCard'>",
            miniPhoto: "<img src='./images/toster.png' alt='' class='miniPhotoCard'>"
        },
        {
            id: 12,
            company: "Toshiba",
            firstname: "Black Walnut Wood &",
            secondname:"Aluminum Headphone Stand",
            price: "$70.80",
            photo: "<img src='./images/gamePAd.png' alt='' class='photoCard'>",
            miniPhoto: "<img src='./images/gamePAd.png' alt='' class='miniPhotoCard'>"
        },
    ];
    
 
    
    for (let el of db) {
        $('.shopContainer').append(`<div class='shopCard'>
              <h5>${el.photo}</h5>
              <h5>${el.company}</h5> 
              <h3>${el.firstname}</h3> 
              <h3>${el.secondname}</h3>
              <p><span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star" id="grayStar"></i></span></p>
              <h3 class="add"><span class="price">${el.price}</span> <button class='addBtn' id=${el.id}>Add</button></h3>  
            </div>`);
        }
      
     



        let shoppingTexCart = JSON.parse(localStorage.getItem('shoppingTexCart')) || [];
        $('.counter').text(shoppingTexCart.length)
        
        let openPoppup = false;
        $('.addBtn').click(function (e) {
        
            $('.cartPopup').css('display', 'none');
            let ID = e.target.id;
        
            for (let el of db) {
                if (el.id == ID) {
                    console.log(el);
                    shoppingTexCart.push(el);
                    localStorage.setItem('shoppingTexCart', JSON.stringify(shoppingTexCart));
                    $('.counter').text(shoppingTexCart.length)
                   
                }
            }
        })
        
        $('.cart').click(function () {
            if (openPoppup == false) {
                $('.cartPopup').css('display', 'flex');
                showPopup();
                openPoppup = true;
            } else {
                $('.cartPopup').css('display', 'none');
                openPoppup = false;
            }
        
        
        })
        
        
        function showPopup() {
            shoppingTexCart = JSON.parse(localStorage.getItem('shoppingTexCart'));
            $('.cartPopupList').empty();
            for (let el of shoppingTexCart) {
                $('.cartPopup').append(`<div class='popupItem'>
                    <h5>${el.miniPhoto}</h5>
                    <h6>${el.firstname}</h6>
                    <h6>${el.secondname}</h6>
                    <h5>${el.price}</h5>
                    
                 
                    </div>`);
            }
        }
        
        // $('#delete').click(function (e) {
        //     let updCart = [];
        //     if ((e.target.id).substring(0, 6) == 'delete') {
        //         let ID = (e.target.id).substring(6);
        
        //         for (let el of shoppingTexCart) {
        //             console.log(el);
        //             if (el.id != ID) {
        //                 updCart.push(el);
        //             }
        //         }
        //     }
           
        //     shoppingTexCart = JSON.parse(localStorage.getItem('shoppingTexCart'));
           
        
        // })

        // $(document).ready(function() {
        //     $('#delete').on('click', function() {
        //         localStorage.removeItem('shoppingTexCart');
                
        //     });
        // });
        // <button class="deleteBtn" id="delete${el.id}">Delete</button>
        // 






$('.categoriesDiv').append(`<div class='categoriesDiv1'>
    <div class="popularCategories">
    <h2>Popular Categories</h2>
    <div class="infoCategories">
        <h4>Computer - Laptop</h4> <div class="krugNumber">10</div>
       </div>
       <div class="infoCategories">
       <h4>Smart phone & Tablets</h4> <div class="krugNumber">12</div>
       </div>
       <div class="infoCategories">
        <h4>Fashion & Accessories</h4> <div class="krugNumber">14</div>
       </div>
       <div class="infoCategories">
        <h4>Halth & Beauty</h4> <div class="krugNumber">8</div>
       </div>
      </div>
    </div>`);







$('.categoriesDiv').append(`<div class='categoriesDiv2'>
    <div class='categories1'>
      <div class='categoriesCard'>
       <div class='categoriesCardKrug'><i class="fa-solid fa-desktop"></i></div>
       <h5>Computer for Designer, Art</h5></div>
      <div class='categoriesCard'>
      <div class='categoriesCardKrug'><i class="fa-solid fa-dumbbell"></i></div>
       <h5>Computer for Designer, Art</h5>
      </div>
     </div>
    <div class='categories2'>
      <div class='categoriesCard'>
       <div class='categoriesCardKrug'><i class="fa-solid fa-laptop"></i></div>
       <h5>Computer for Designer, Art</h5>
      </div>
      <div class='categoriesCard'>
       <div class='categoriesCardKrug'><i class="fa-solid fa-book"></i></div>
       <h5>Computer for Designer, Art</h5>
      </div>
    </div>
    </div>`);

   









    let bd1 = [
        {
            id: 1,
            icon:"<i class='fa-solid fa-lightbulb'></i>",
            info: "Start Plan",
            firstInfo: "Choose any of <br> our packages",        
        },
        {
            id: 2,
            icon:"<i class='fa-solid fa-circle-nodes'></i>",
            info: "Connect",
            firstInfo: "Receive concepts <br> In 24 hours", 
        },
        {
            id: 3,
            icon:"<i class='fa-solid fa-headphones'></i>",
            info: "Match",
            firstInfo: "Development <br> Stage",
        },
    ];
 
    
    for (let el of bd1) {
        $('.howItWork').append(`<div class='tutorialCard'>
              <div class="whiteIcon"><h5>${el.icon}</h5></div>
              <h2>${el.info}</h2> 
              <h4>${el.firstInfo}</h4> 
            </div>`);
        }
        

        
    let bd2 = [
        {
            id: 4,
            icon:"<i class='fa-solid fa-house-chimney'></i>",
            info: "Complete",
            firstInfo: "After-release <br> Support",
        },
        {
            id: 5,
            icon:"<i class='fa-solid fa-repeat'></i>",
            info: "Review",
            firstInfo: "Project launch <br> and checkout",     
        },
    ];

    
    for (let el of bd2) {
        $('.howItWork2').append(`<div class='tutorialCard'>
              <div class="whiteIcon"><h5>${el.icon}</h5></div>
              <h2>${el.info}</h2> 
              <h4>${el.firstInfo}</h4>  
            </div>`);
        }
    







 $('.contactContainer').append(`<div class='contact'>
    <div class='newsletter'>
       <div class='infoNewsletter'>
            <h1>Subscribe our newsletter</h1> 
            <h4>By clicking the button, you are agreeing with our Term & <br>Conditions</h4>
            <div class="input-container">
                <input type="text" class="input-field" placeholder="Enter you mail...">
                <button class="input-button">→</button>
            </div>
       </div>

      <div class='photoNewsletter'> <img src="./images/depositphotos_56582953-Business-people-looking-at-laptop.jpg" alt="" class="photoNewsletter2"></div>

     </div>
    </div>`);
                    








 $('.contactContainer').append(`<div class='contactInfo'>
    <div class='contactFullInfo'>
        <div class='contactFullInfoLogo'>
         <div class='contactFullInfoLogoLogo'> 
         <img src="./images/[removal.ai]_2d0a60d2-bd1c-4a38-aafb-c94d586b1ef1_agonlogo.png" alt="" class="agonLogo2">
         <h2>agon</h2></div> 
         <div class='contactFullInfoLogoAcc'> 
            <button class="btn1"><h3>Ready to get started?</h3></button>
            <button  class="btn2"><h3>How it works</h3> <i class="fa-solid fa-arrow-right"></i></button>
         </div> 
        </div>


        <div class='contactFullInfo100'>
        <div class='contactFullInfoText'>
        <h3>Contact</h3>
        <p class="grayInfo">4517 Washington Ave.</p>
        <p class="grayInfo">Manchester, Kentucky 39495</p>
        <p class="phoneNumber">(239) 555-0108</p>
        <p class="gmail">contact@gmail.com</p>
        <span>
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-x-twitter"></i>
        <i class="fa-brands fa-discord"></i>
        </div>
        <div class='contactFullInfoText'>
            <h3>About us</h3>
            <p class="grayInfo">About V1</p>
            <p class="grayInfo">About V2</p>
            <p class="grayInfo">About V3</p>
            <p class="grayInfo">Service V1</p>
            <p class="grayInfo">Service V2</p>
            
         </div>
        <div class='contactFullInfoText'>
            <h3>Discover</h3>
            <p class="grayInfo">Our Blog V1</p>
            <p class="grayInfo">Our Blog V2</p>
            <p class="grayInfo">Our Blog V3</p>
            <p class="grayInfo">Blog Single V1</p>
            <p class="grayInfo">Page 404</p>
         </div>
        <div class='contactFullInfoText'>
            <h3>Support</h3>
            <p class="grayInfo">FAQs</p>
            <p class="grayInfo">FAQ V2 </p>
            <p class="grayInfo">Career </p>
            <p class="grayInfo">Career Detail </p>
            <p class="grayInfo">Contact </p>
         </div>
        <div class='contactFullInfoText'>
            <h3>Useful links</h3>
            <p class="grayInfo">Shop</p>
            <p class="grayInfo">Shop V2</p>
            <p class="grayInfo">Pricing V1 </p>
            <p class="grayInfo">Pricing V2 </p>
            <p class="grayInfo">Terms & Conditions</p>
         </div>
        </div>


        
    
        <div class='contactFullInfoOfficial'>
          <div class='contactFullInfoOfficial1'>
          <h3>@Agon Official 2024</h3>
          </div> 
          <div class='contactFullInfoOfficial2'>
           <p class="grayInfo">Privacy policy</p>
           <p class="grayInfo">Cookies</p>
           <p class="grayInfo">Terms of service</p>
          </div>  
        </div>

        
     </div>
    </div>`);

    $(document).click(function (e) {
        let updCart = [];
        if ((e.target.id).substring(0, 6) == 'delete') {
            let ID = (e.target.id).substring(6);
    
            for (let el of shoppingTexCart) {
                console.log(el);
                if (el.id != ID) {
                    updCart.push(el);
                }
            }
        }
        shoppingTexCart = JSON.parse(localStorage.getItem('shoppingTexCart'));

    
    })
    $('#orderBtn').click(function () {
        shoppingTexCart = JSON.parse(localStorage.getItem('shoppingTexCart'));
        let data = {
            name: $('#username').val(),
            phone: $('#phone').val(),
            list: shoppingTexCart
        };
    
        let message = `Name: ${data.name}, Phone: ${data.phone} `;
    
        for (let el of shoppingTexCart) {
            message += el.firstname + '|';
        }
    
        $('#cartList').val(message);
    
    
        fetch('https://formspree.io/f/xdknlnza', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json'
            }
        })
            .then(res => {
                showNotification('Відправлено');
                $('#username').val('');
                $('#phone').val('');
                $('.cartPopup').css('display', 'none');
                $('.counter').text(shoppingTexCart.length);
            })
    })
    
    
    
    function showNotification(message) {
        $('.notification').css('display', 'flex');
        $('.notification').text(message);
    
        setTimeout(function () {
            $('.notification').css('display', 'none');
        }, 3000)
    }