window.onload = pageLoadedHandler;
function pageLoadedHandler() {
    alert("Instructions: In case there is only one buyer, just insert and submit data. If there is second buyer, first press button to add another buyer. Please make sure you insert and submit data first for the second buyer and then insert and submit data for the first buyer. When you insert and submit all data, please just print the document.");
}

function renderInfoOnDate() {
    var date = "";
    date = document.getElementById("date").value;

    var data = {
        date: document.getElementById("date").value
    };

    function renderInfoOnDate() {
        var infoOnDate = document.querySelector("#infoOnDate");
        infoOnDate.innerHTML = `<span>This Reservation Agreement (hereinafter: the "Agreement") is entered into on  ${date}  in Belgrade, bу and between:
                    </span>`;
    }
    renderInfoOnDate();
}

function renderInfoOnSeller() {
    var sellerName = "";
    var sellerAddress = "";
    var sellerIdNo = "";
    var sellerTaxNo = "";
    var sellerDirector = "";

    sellerName = document.getElementById("sellerName").value;
    sellerAddress = document.getElementById("sellerAddress").value;
    sellerIdNo = document.getElementById("sellerIdNo").value;
    sellerTaxNo = document.getElementById("sellerTaxNo").value;
    sellerDirector = document.getElementById("sellerDirector").value;

    var data = {
        sellerName: document.getElementById("sellerName").value,
        sellerAddress: document.getElementById("sellerAddress").value,
        sellerIdNo: document.getElementById("sellerIdNo").value,
        sellerTaxNo: document.getElementById("sellerTaxNo").value,
        sellerDirector: document.getElementById("sellerDirector").value,
    };

    function renderAllInfoOnSeller() {
        var infoOnSeller = document.querySelector("#infoOnSeller");
        infoOnSeller.innerHTML = `<span>${sellerName}, with registered seat in  ${sellerAddress}, company registration no.: ${sellerIdNo}, tax identification no.: ${sellerTaxNo}, represented by director ${sellerDirector}
            (hereinafter: „the Seller“)
                    </span>`;
        var SellerSignature = document.createElement("p");
        SellerSignature.innerHTML = `<p>${sellerDirector}, director</p>`;
        document.getElementById("sellerSignature").appendChild(SellerSignature);
    }
    renderAllInfoOnSeller();
}

function renderInfoOnBuyer() {
    var buyerName = "";
    var buyerAddress = "";
    var buyerIdNo = "";

    buyerName = document.getElementById("buyerName").value;
    buyerAddress = document.getElementById("buyerAddress").value;
    buyerIdNo = document.getElementById("buyerIdNo").value;

    function validate(buyerIdNo) {
        if (buyerIdNo.length === 13) {
            return buyerIdNo;
        }
        else if (buyerIdNo > 13 || buyerIdNo < 12) {
            return alert("Please refresh page and insert 13 digits")
        }
    }
    validate(buyerIdNo);

    var data = {
        buyerName: document.getElementById("buyerName").value,
        buyerAddress: document.getElementById("buyerAddress").value,
        buyerIdNo: document.getElementById("buyerIdNo").value,
    };

    function renderAllInfoOnBuyer() {
        var infoOnBuyer = document.querySelector("#infoOnBuyer");
        infoOnBuyer.innerHTML = `<span>${buyerName}, with address in  ${buyerAddress}, personal ID no.: ${buyerIdNo}
            (hereinafter: „the Buyer“)
                    </span>`;
        var BuyerSignature = document.createElement("p");
        BuyerSignature.innerHTML = `<p>${buyerName}</p>`;
        document.getElementById("buyerSignature").appendChild(BuyerSignature);
    }
    renderAllInfoOnBuyer();
}

function addBuyer() {
    var par = document.createElement("p");
    par.innerHTML = `<p id="infoOnBuyer2"><input type="text" name="buyer2Name" id="buyer2Name"
value="" />, with address in <input type="text"
name="buyer2Address" id="buyer2Address" value="" />, personal ID
no.: <input type="number" name="buyer2IdNo" id="buyer2IdNo" value="" />
(hereinafter: „the Buyer“)
<input type="button" value="Submit data"
onclick="renderInfoOnBuyer2();" />
</p>`;
    document.getElementById("buyer2").appendChild(par);
}

function renderInfoOnBuyer2() {
    var buyer2Name = "";
    var buyer2Address = "";
    var buyer2IdNo = "";

    buyer2Name = document.getElementById("buyer2Name").value;
    buyer2Address = document.getElementById("buyer2Address").value;
    buyer2IdNo = document.getElementById("buyer2IdNo").value;

    buyer2Name = document.getElementById("buyer2Name").value;
    buyer2Address = document.getElementById("buyer2Address").value;
    buyer2IdNo = document.getElementById("buyer2IdNo").value;

    function validate(buyer2IdNo) {
        if (buyer2IdNo.length === 13) {
            return buyer2IdNo;
        }
        else if (buyer2IdNo > 13 || buyer2IdNo < 12) {
            return alert("Please refresh page and insert 13 digits")
        }
    }
    validate(buyer2IdNo);

    var data = {
        buyer2Name: document.getElementById("buyer2Name").value,
        buyer2Address: document.getElementById("buyer2Address").value,
        buyer2IdNo: document.getElementById("buyer2IdNo").value,
    };

    function renderAllInfoOnBuyer2() {
        var infoOnBuyer2 = document.querySelector("#infoOnBuyer2");
        infoOnBuyer2.innerHTML = `<span>${buyer2Name}, with address in  ${buyer2Address}, personal ID no.: ${buyer2IdNo}
            (hereinafter: „the Buyer“)
                    </span>`;
        var Buyer2Signature = document.createElement("p");
        Buyer2Signature.innerHTML = `<p>${buyer2Name}</p><p>__________________________</p>`;
        document.getElementById("buyerSignature").appendChild(Buyer2Signature);
    }
    renderAllInfoOnBuyer2();
}

function renderInfoOnLot() {
    var lotNo = "";
    var cadastreName = "";

    lotNo = document.getElementById("lotNo").value;
    cadastreName = document.getElementById("cadastreName").value;

    var data = {
        lotNo: document.getElementById("lotNo").value,
        cadastreName: document.getElementById("cadastreName").value,
    };

    function renderAllInfoOnLot() {
        var infoOnLot = document.querySelector("#infoOnLot");
        infoOnLot.innerHTML = `<span>•	The Seller is the investor of the business and residential complex which is being constructed on the cadastral lot no. ${lotNo} Cadastral Municipality  ${cadastreName} which is owned by the Seller (hereinafter:  “the  Complex”);
                    </span>`;
    }
    renderAllInfoOnLot();
}

function renderInfoOnApartment() {
    var apartmentNo = "";
    var apartmentSurface = "";
    var apartmentFloorNo = "";

    apartmentNo = document.getElementById("apartmentNo").value;
    apartmentSurface = document.getElementById("apartmentSurface").value;
    apartmentFloorNo = document.getElementById("apartmentFloorNo").value;

    var data = {
        apartmentNo: document.getElementById("apartmentNo").value,
        apartmentSurface: document.getElementById("apartmentSurface").value,
        apartmentFloorNo: document.getElementById("apartmentFloorNo").value,
    };

    function renderAllInfoOnApartment() {
        var infoOnApartment = document.querySelector("#infoOnApartment");
        infoOnApartment.innerHTML = `<span>i.	 apartment marked in the main design i.e. project design documentation as apartment no.                       
                ${apartmentNo}   with  projected surface of  ${apartmentSurface} m2 and located on the ${apartmentFloorNo} floor  of  the  Facility 
                (hereinafter: “the Apartment”),
                        </span>`;
    }
    renderAllInfoOnApartment();
}

function renderInfoOnParking() {
    var parkingNo = "";
    var parkingSurface = "";
    var parkingLevelNo = "";

    parkingNo = document.getElementById("parkingNo").value;
    parkingSurface = document.getElementById("parkingSurface").value;
    parkingLevelNo = document.getElementById("parkingLevelNo").value;

    var data = {
        parkingNo: document.getElementById("parkingNo").value,
        parkingSurface: document.getElementById("parkingSurface").value,
        parkingLevelNo: document.getElementById("parkingLevelNo").value,
    };

    function renderAllInfoOnParking() {
        var infoOnParking = document.querySelector("#infoOnParking");
        infoOnParking.innerHTML = `<span>ii.	parking space marked in the main design i.e. project design documentation as parking space no.                       
                ${parkingNo}    with projected surface of  ${parkingSurface} m2 and located on the ${parkingLevelNo} level of   the  underground garage within the Facility 
                (hereinafter: “the Parking space”).
                        </span>`;
    }
    renderAllInfoOnParking();
}

function renderInfoOnPrice() {
    var price = "";
    var totalPrice = "";

    price = document.getElementById("price").value;
    totalPrice = document.getElementById("totalPrice").value;

    var data = {
        price: document.getElementById("price").value,
        totalPrice: document.getElementById("totalPrice").value,
    };

    function renderAllInfoOnPrice() {
        var infoOnPrice = document.querySelector("#infoOnPrice");
        infoOnPrice.innerHTML = `<span>The purchase price for the Real Property is ${price} EUR without VAT, where the total is
                 ${totalPrice} EUR increased for applicable VAT rate.
                        </span>`;
    }
    renderAllInfoOnPrice();
}

function renderInfoOnPayment() {
    var deadline = "";
    var accountNo = "";
    var bankName = "";

    deadline = document.getElementById("deadline").value;
    accountNo = document.getElementById("accountNo").value;
    bankName = document.getElementById("bankName").value;

    var data = {
        deadline: document.getElementById("deadline").value,
        accountNo: document.getElementById("accountNo").value,
        bankName: document.getElementById("bankName").value,
    };

    function renderAllInfoOnPayment() {
        var infoOnPayment = document.querySelector("#infoOnPayment");
        infoOnPayment.innerHTML = `<span>The Buyer undertakes to pay within                      
                ${deadline}   calendar days from the date of the conclusion of this Agreement amount of Deposit in RSD countervalue at middle exchange rate of NBS оn the day of payment to the followiпg  Seller’s account no. ${accountNo} at the business bank ${bankName}.
                        </span>`;
    }
    renderAllInfoOnPayment();
}

function renderInfoOnDeadlineForConclusion() {
    var deadlineForConclusion = "";

    deadlineForConclusion = document.getElementById("deadlineForConclusion").value;

    var data = {
        deadlineForConclusion: document.getElementById("deadlineForConclusion").value
    };

    function renderAllInfoOnDeadlineForConclusion() {
        var infoOnDeadlineForConclusion = document.querySelector("#infoOnDeadlineForConclusion");
        infoOnDeadlineForConclusion.innerHTML = `<span>The Buyer shall conclude  with the Seller the Preliminary Agreement for sale of the Real Property (if it would be concluded), i.e. the Sale and Purchase Agreement for the Real Property before the competent civil law notary in the form as provided by law within ${deadlineForConclusion}
                days from the date when the Deposit was paid in, whereas the Seller may unilaterally extend the stated deadline for additional 30 (thirty) days as its own discretion by informing the Buyer about this in the written from at the address from this Agreement (hereinafter: „the Execution Period“).  
                </span>`;
    }
    renderAllInfoOnDeadlineForConclusion();
}

