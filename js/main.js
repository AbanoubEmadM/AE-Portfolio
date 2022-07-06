let testimonialsData = [{img:'../imgs/Ellipse 2.png',name:"Tala Aljazzazi",desc:' رائع جدا صبور لأبعد الحدود والأفضل سريع بالعمل',job:'Client in Mostaql'},{img:'../imgs/orix.png',name:'Orix Oman',desc:' ماشاء الله صبور لاقصى حد ف تقبل التعديلات واشكرك من كل قلبي شخص اكثر من رائع واوصي بالتعامل معه مره اخري',job:'Client in Mostaql'}]

let index = 0;

function showTestimonials() {
  document.querySelector(".all-tes").innerHTML = `
<div class="testimonials"> 
  <div class="container">
    <p>TESTIMONIALS</p>
    <h1>What People Says</h1>
    <div class="testi-box">
      <img src="${testimonialsData[index].img}" alt=""/>
      <div class="testimonials-content">
      <p id="desc">${testimonialsData[index].desc} </p>
      <p id="name">${testimonialsData[index].name}</p>
        <p id="job">${testimonialsData[index].job}</p>
      </div>
      <div class="controls">
      <span onclick="prev()" id="prev"><i class="fa-solid fa-arrow-left"></i></span>
        <span onclick="next()" id="next"><i class="fa-solid fa-arrow-right"></i></span>
      </div>
  
    </div>
  </div>
</div>
`
}
showTestimonials()

function next(){
  index++;
  showTestimonials()
  checker()
}

function prev(){
  index--;
  showTestimonials()
  checker()
}

function checker(){
  if(index == testimonialsData.length-1){
    $("#next").css("pointer-events","none")
  }else{
    $("#next").css("pointer-events","all")
  }
  if(index == 0){
    $("#prev").css("pointer-events","none")
  }else{
    $("#prev").css("pointer-events","all")
  }
}
checker()


