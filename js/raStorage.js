//  <!-- Signing date -->

var showDate = localStorage.getItem("date");
var infoOnDate = document.querySelector("#date");
infoOnDate.innerHTML = `<span><b>Signing date:</b> ${showDate}
                    </span>`;

//  <!-- Seller -->

var showSellerName = localStorage.getItem("sellerName");
var showSellerAddress = localStorage.getItem("sellerAddress");
var showSellerIdNo = localStorage.getItem("sellerIdNo");
var showSellerTaxNo = localStorage.getItem("sellerTaxNo");
var showSellerDirector = localStorage.getItem("sellerDirector");
var infoOnSeller = document.querySelector("#seller");
infoOnSeller.innerHTML = `<p><b>Seller name:</b> ${showSellerName}</p>
<p><b>Seller address:</b> ${showSellerAddress}</p>
<p><b>Seller ID no.:</b> ${showSellerIdNo}</p>
<p><b>Seller tax no.:</b> ${showSellerTaxNo}</p>
<p><b>Seller director:</b> ${showSellerDirector}</p>`;

//  <!-- Buyer -->

var showBuyerName = localStorage.getItem("buyerName");
var showBuyerAddress = localStorage.getItem("buyerAddress");
var showBuyerIdNo = localStorage.getItem("buyerIdNo");
var infoOnBuyer = document.querySelector("#buyer");
infoOnBuyer.innerHTML = `<p><b>Buyer name:</b> ${showBuyerName}</p>
<p><b>Buyer address:</b> ${showBuyerAddress}</p>
<p><b>Buyer ID no.:</b> ${showBuyerIdNo}</p>`;


var showBuyer2Name = localStorage.getItem("buyer2Name");
var showBuyer2Address = localStorage.getItem("buyer2Address");
var showBuyer2IdNo = localStorage.getItem("buyer2IdNo");
var infoOnBuyer2 = document.querySelector("#buyer2");

function addDataOnBuyer2(){  
if (localStorage.getItem("buyer2Name") === null){
    return infoOnBuyer2.innerHTML = ""}
else {
    infoOnBuyer2.innerHTML = `<p><b>Buyer2 name:</b> ${showBuyer2Name}</p>
<p><b>Buyer2 address:</b> ${showBuyer2Address}</p>
<p><b>Buyer2 ID no.:</b> ${showBuyer2IdNo}</p>`;
};
};

addDataOnBuyer2();

//  <!-- Lot -->

var showLotNo = localStorage.getItem("lotNo");
var showCadastreName = localStorage.getItem("cadastreName");
var infoOnLot = document.querySelector("#lot");
infoOnLot.innerHTML = `<p><b>Lot no.:</b> ${showLotNo}</p>
<p><b>Cadastre:</b> ${showCadastreName}</p>`;

//  <!-- Apartment -->

var showApartmentNo = localStorage.getItem("apartmentNo");
var showApartmentSurface = localStorage.getItem("apartmentSurface");
var showApartmentFloorNo = localStorage.getItem("apartmentFloorNo");
var infoOnApartment = document.querySelector("#apartment");
infoOnApartment.innerHTML = `<p><b>Apartment no.:</b> ${showApartmentNo}</p>
<p><b>Surface:</b> ${showApartmentSurface} m2</p>
<p><b>Floor no.:</b> ${showApartmentFloorNo} floor</p>`;

//  <!-- Parking space -->

var showParkingNo = localStorage.getItem("parkingNo");
var showParkingSurface = localStorage.getItem("parkingSurface");
var showParkingLevelNo = localStorage.getItem("parkingLevelNo");
var infoOnParkingSpace = document.querySelector("#parkingSpace");
infoOnParkingSpace.innerHTML = `<p><b>Parking space no.:</b> ${showParkingNo}</p>
<p><b>Surface:</b> ${showParkingSurface} m2</p>
<p><b>Level no.:</b> ${showParkingLevelNo} level</p>`;

//  <!-- Deposit -->

var showDepositAmount = localStorage.getItem("depositAmount");
var infoOnDepositAmount = document.querySelector("#deposit");
infoOnDepositAmount.innerHTML = `<p><b>Deposit:</b> ${showDepositAmount}</p>`;

//  <!-- Payment details -->

var showDeadline = localStorage.getItem("deadline");
var showAccountNo = localStorage.getItem("accountNo");
var showBankName = localStorage.getItem("bankName");
var infoOnPayment = document.querySelector("#paymentDetails");
infoOnPayment.innerHTML = `<p><b>Payment deadline:</b> ${showDeadline} days</p>
<p><b>Seller account no.</b> ${showAccountNo}</p>
<p><b>Bank:</b> ${showBankName}</p>`;

//  <!-- Purchase price -->

var showPrice = localStorage.getItem("price");
var showTotalPrice = localStorage.getItem("totalPrice");
var infoOnPrice = document.querySelector("#price");
infoOnPrice.innerHTML = `<p><b>Purchase price without VAT:</b> ${showPrice}</p>
<p><b>Purchase price with VAT</b> ${showTotalPrice}</p>`;



localStorage.clear();