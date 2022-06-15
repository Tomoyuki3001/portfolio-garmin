const freeGroundBox = document.getElementById("free-ground-part");

function makingFreeGroundPart() {
  const freeGround = document.createElement("div");
  freeGround.classList.add("free-ground");
  freeGround.innerHTML = `
    <div class="free-ground-shipping">
    <span>FREE GROUND SHIPPING ON ORDERS $25 AND UP</span>
    </div>
    <div class="free-ground-imagesText">
    <div class="free-ground-images">
    <img src="https://static.garmincdn.com/gdc/home-page/banners/2022/45069-1-D.jpg"
    alt="free-ground-images"
    >
    </div>
    <div class="free-ground-text-box">
    <div class="free-ground-first-sentence">NEW TRUCKING HEADSETS</div>
    <div class="free-ground-second-sentence">Life on the road never sounded so good</div>
    <button type="button" class="free-ground-button">
    <span>SHOP</span>
    </button>
    </div>
    </div>
    <div class="free-ground-featured">
    <span>FEATURED</span>
    </div>
    <div class="free-ground-triangle-box">
    <div class="free-ground-triangle"></div>
    </div>
    `;
  freeGroundBox.appendChild(freeGround);
}

makingFreeGroundPart();
