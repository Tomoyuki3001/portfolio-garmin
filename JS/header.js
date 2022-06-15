const headerBox = document.getElementById("header-part");

function makingHeaderPart() {
  function makingHeaderUpper() {
    const headerUpper = document.createElement("div");
    headerUpper.classList.add("header-part-upper");
    headerUpper.innerHTML = `
<img
          src="./Images/img_header_logo.png"
          alt="garmin_logo"
          class="header-logo"
        />
        <div class="header-icons">
          <span
            class="iconify"
            data-icon="ei:question"
            style="color: black; font-size: 20px"
          ></span>
        </div>
        <div class="header-support">Support</div>
        <div class="header-icons">
          <span
            class="iconify"
            data-icon="ant-design:search-outlined"
            style="color: black; font-size: 20px"
          ></span>
          </div>
          <div class="header-icons">
          <span class="iconify" data-icon="healthicons:ui-user-profile-outline" style="color: black; font-size: 20px;"></span>
          </div>
          <div class="header-icons">
          <span class="iconify" data-icon="carbon:shopping-cart" style="color: black; font-size: 20px;"></span>
          </div>
`;
    headerBox.appendChild(headerUpper);
  }

  function makingNav() {
    const headerNav = document.createElement("nav");
    headerNav.classList.add("header-part-nav");
    headerNav.innerHTML = `
    <span class="header-nav-span">WEARABLES</span>
        <span class="header-nav-span"> SPORTS & FITNESS</span>
        <span class="header-nav-span">OUTDOOR RECREATION</span>
        <span class="header-nav-span">AUTOMOTIVE </span>
        <span class="header-nav-span">MARINE</span>
        <span class="header-nav-span">AVIATION</span>
        <span class="header-nav-span">SALE</span>
    `;
    headerBox.appendChild(headerNav);
  }
  makingHeaderUpper();
  makingNav();
}

makingHeaderPart();
