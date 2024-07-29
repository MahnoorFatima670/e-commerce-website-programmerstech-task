
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("shopNowBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the Add to Cart button
var addToCartBtn = document.getElementById("addToCartBtn");

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Handle Add to Cart button click
addToCartBtn.onclick = function() {
    var price = document.getElementById("itemPrice").textContent;
    var quality = document.getElementById("itemQuality").textContent;
    var quantity = document.getElementById("quantity").value;
    var selectedColor = document.querySelector('input[name="color"]:checked');

    if (selectedColor) {
        var color = selectedColor.value;
      //  alert(Added to cart:\nPrice: ${price}\nQuality: ${quality}\nColor: ${color}\nQuantity: ${quantity});
    } else {
        alert('Please select a color.');
    }
}


document.querySelectorAll('.btn1').forEach(button => {
    button.addEventListener('click', function() {
      this.classList.toggle('active');
    });
  });

  document.querySelectorAll('.btn2').forEach(button => {
    button.addEventListener('click', function() {
      this.classList.toggle('active');
    });
  });

  document.querySelectorAll('.btn3').forEach(button => {
    button.addEventListener('click', function() {
      this.classList.toggle('active');
    });
  });
  var modal = document.getElementById("myModal");
  var btn = document.getElementById("shopNowBtn1");
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  
  // Get the Add to Cart button
  var addToCartBtn = document.getElementById("addToCartBtn");
  
  // When the user clicks the button, open the modal
  btn.onclick = function() {
      modal.style.display = "block";
  }
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
  
  // Handle Add to Cart button click
  addToCartBtn.onclick = function() {
      var price = document.getElementById("itemPrice").textContent;
      var quality = document.getElementById("itemQuality").textContent;
      var quantity = document.getElementById("quantity").value;
      var selectedColor = document.querySelector('input[name="color"]:checked');
  
      if (selectedColor) {
          var color = selectedColor.value;
        //  alert(Added to cart:\nPrice: ${price}\nQuality: ${quality}\nColor: ${color}\nQuantity: ${quantity});
      } else {
          alert('Please select a color.');
      }
  }
  
  
  document.querySelectorAll('.btn1').forEach(button => {
      button.addEventListener('click', function() {
        this.classList.toggle('active');
      });
    });
  
    document.querySelectorAll('.btn2').forEach(button => {
      button.addEventListener('click', function() {
        this.classList.toggle('active');
      });
    });
  
    document.querySelectorAll('.btn3').forEach(button => {
      button.addEventListener('click', function() {
        this.classList.toggle('active');
      });
    });
  
  


    var modal = document.getElementById("myModal");

  // Get the button that opens the modal
  var btn = document.getElementById("shopNowBtn2");
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  
  // Get the Add to Cart button
  var addToCartBtn = document.getElementById("addToCartBtn");
  
  // When the user clicks the button, open the modal
  btn.onclick = function() {
      modal.style.display = "block";
  }
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
  
  // Handle Add to Cart button click
  addToCartBtn.onclick = function() {
      var price = document.getElementById("itemPrice").textContent;
      var quality = document.getElementById("itemQuality").textContent;
      var quantity = document.getElementById("quantity").value;
      var selectedColor = document.querySelector('input[name="color"]:checked');
  
      if (selectedColor) {
          var color = selectedColor.value;
        //  alert(Added to cart:\nPrice: ${price}\nQuality: ${quality}\nColor: ${color}\nQuantity: ${quantity});
      } else {
          alert('Please select a color.');
      }
  }
  
  
  document.querySelectorAll('.btn1').forEach(button => {
      button.addEventListener('click', function() {
        this.classList.toggle('active');
      });
    });
  
    document.querySelectorAll('.btn2').forEach(button => {
      button.addEventListener('click', function() {
        this.classList.toggle('active');
      });
    });
  
    document.querySelectorAll('.btn3').forEach(button => {
      button.addEventListener('click', function() {
        this.classList.toggle('active');
      });
    });


  function changeColor(color)
  {
const img=document.getElementById('shoeImage');
img.src=color+'-shoe.jpeg';

  }

  function changeColor1(color)
  {
const img=document.getElementById('bagImage');
img.src=color+'-bag.jpeg';

  }
  function changeColor2(color)
  {
const img=document.getElementById('jeansImage');
img.src=color+'-jeans.jpeg';

  }

  function changeColor3(color)
  {
const img=document.getElementById('bracImage');
img.src=color+'-brac.jpeg';

  }

  function changeColor4(color)
  {
const img=document.getElementById('bracImage1');
img.src=color+'-brac1.jpeg';

  }

  function changeColor5(color)
  {
const img=document.getElementById('teeImage');
img.src=color+'-tee.jpeg';

  }



  document.querySelectorAll('.icon').forEach(icon => {
    icon.addEventListener('click', () => {
        // Remove the 'thrilled' class from all icons to reset any previous animations
        document.querySelectorAll('.icon').forEach(i => i.classList.remove('thrilled'));

        // Add the 'thrilled' class to the clicked icon
        icon.classList.add('thrilled');

        // Remove the 'thrilled' class after the animation completes
        setTimeout(() => {
            icon.classList.remove('thrilled');
        }, 500); // Duration of the animation
    });
});






document.addEventListener('DOMContentLoaded', () => {
  const containers = document.querySelectorAll('.container');

  const scrollAnimation = () => {
      containers.forEach(container => {
          const containerPosition = container.getBoundingClientRect().top;
          const screenPosition = window.innerHeight;

          if (containerPosition < screenPosition) {
              const img = container.querySelector('img');
              img.classList.add('animate');
          }
      });
  };

  window.addEventListener('scroll', scrollAnimation);
});


function showFirstClick()
{
const firstClick=document.getElementById('firstClick');
firstClick.style.display='block';
const secondClick=document.getElementById('secondClick');
secondClick.style.display='none';
const thirdClick=document.getElementById('thirdClick');
thirdClick.style.display='none';
}

function showSecondClick()
{
const secondClick=document.getElementById('secondClick');
secondClick.style.display='block';
const firstClick=document.getElementById('firstClick');
firstClick.style.display='none';
const thirdClick=document.getElementById('thirdClick');
thirdClick.style.display='none';
}


function showThirdClick()
{
const secondClick=document.getElementById('secondClick');
secondClick.style.display='none';
const firstClick=document.getElementById('firstClick');
firstClick.style.display='none';
const thirdClick=document.getElementById('thirdClick');
thirdClick.style.display='block';
}


document.addEventListener('DOMContentLoaded',()=>
{
  showFirstClick();
});



function moneyBac() {
  const moneyBack = document.getElementById('moneyBack');
  moneyBack.style.display = 'block';
  const freeShipping = document.getElementById('freeShipping');
  freeShipping.style.display = 'none';
  const specialSales = document.getElementById('specialSales');
  specialSales.style.display = 'none';
}

function freeShip() {
  const freeShipping = document.getElementById('freeShipping');
  freeShipping.style.display = 'block';
  const moneyBack = document.getElementById('moneyBack');
  moneyBack.style.display = 'none';
  const specialSales = document.getElementById('specialSales');
  specialSales.style.display = 'none';
}

function specialSal() {
  const specialSales = document.getElementById('specialSales');
  specialSales.style.display = 'block';
  const moneyBack = document.getElementById('moneyBack');
  moneyBack.style.display = 'none';
  const freeShipping = document.getElementById('freeShipping');
  freeShipping.style.display = 'none';
}

function sideBar()
{
  const sideBar=document.getElementById('sideBar');
  sideBar.style.width="14rem";
  sideBar.style.height="10rem";
  sideBar.style.padding="3rem";
}

function closeButton()
{
  
  sideBar=document.getElementById('sideBar');
  sideBar.style.width="0";
  sideBar.style.height="0";
  sideBar.style.padding="0";
}

function flip2()
{
  sideBar=document.getElementById('sideBar');
  sideBar.style.width="0";
  sideBar.style.height="0";
  sideBar.style.padding="0";

}
