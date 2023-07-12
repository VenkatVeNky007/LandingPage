

function Home(){


    return(<>
    <div className="mhomecur">
        <div className="intro">
            <h1 class="text-danger text-center ">Tourism.Co</h1>
            <p class="text-center">Travel and experience extravagant mix of cultures in scenic landscapes and historic wonders .. </p>
            <p class="introp">Our team of travel experts will help you book your dream vacation in by considering all your travel needs. We can offer you the best package at the lowest price. Pack your bags now , and travel solo , with family and friends. </p>
            <img className="introimg" src="./tourism.png"/>
           
        </div>

    {/* corousel */}
<div className="homecur">
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel" >
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="500">
      <img src="https://e0.pxfuel.com/wallpapers/804/502/desktop-wallpaper-top-10-most-visited-tourist-places-in-india-popular-indian-tourism.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="500">
      <img src="./himg0.webp" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="./himg2.avif" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="./himg3.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="./himg4.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
</div>


    <h1 class="text-center mt-4">why Choose Us</h1>

    <div class="bg-primary bg-gradient">
<div class="container pt-5">
  <div class="row ">
    <div class="col border rounded m-1 p-1 bg-light bg-gradient shadow p-3 mb-5 bg-body rounded">
    <img src="./ita.png" class="gridimg"/>
    <h6 class="text-center d-inline-block ms-5">IATA Certified Travel Agent</h6>
    <p class="mt-3">We are a IATA certified Travel Agent with more than 10+ of experience in Tour & Travel Industry. You can trust our team to provide you best custom deals.</p>
    </div>
    <div class="col border rounded m-1 p-1 bg-light bg-gradient shadow p-3 mb-5 bg-body rounded ">
    <img src="./exp.png" class="gridimg"/>
    <h6 class="text-center d-inline-block ms-5">10+ Year of Travel Experience</h6>
    <p class="mt-3">We are a IATA certified Travel Agent with more than 10+ of experience in Tour & Travel Industry. You can trust our team to provide you best custom deals.</p>
    </div>
    <div class="col border rounded m-1 p-1 bg-light bg-gradient shadow p-3 mb-5 bg-body rounded">
    <img src="./pro.png" class="gridimg"/>
    <h6 class="text-center d-inline-block ms-5">Professional Team</h6>
    <p class="mt-3">Our Team of Expert Travel Consultants are available 24/7 either through chat, email or phone support to answer all your travel queries.</p>
    </div>
   
  </div>

  <div class="row">
    <div class="col border rounded m-1 p-1 bg-light bg-gradient shadow p-3 mb-5 bg-body rounded ">
    <img src="./tailor.png" class="gridimg"/>
    <h6 class="text-center d-inline-block ms-5">Tailor Made Travel Packages</h6>
    <p class="mt-3">We understand that every indidual is different and so are our tailor made travel packages to suit your specific travel asks and save unnecessary spends.</p>
    </div>
    <div class="col border rounded m-1 p-1 bg-light bg-gradient shadow p-3 mb-5 bg-body rounded">
    <img src="./comp.png" class="gridimg"/>
    <h6 class="text-center d-inline-block ms-5">Comprehesive Travel Support</h6>
    <p class="mt-3">We do not just plan & book your travel package, we also ensure that while you are on vacation, our team is in constant touch with you to provide all kind of support.</p>
    </div>
    <div class="col border rounded m-1 p-1 bg-light bg-gradient shadow p-3 mb-5 bg-body rounded">
    <img src="./easy.png" class="gridimg"/>
    <h6 class="text-center d-inline-block ms-5">Easy Payment Options</h6>
    <p class="mt-3">Pay only 10% advance to let our travel expert book your travel itenary.  Pay rest once you we book your complete travel itneary. Cancel any time, 100% refund. </p>
    </div>
   
  </div>
</div>
</div>
    </>)
}

export default Home