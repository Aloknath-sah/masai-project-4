let bookingInfo = []

window.onload = ()=>{
    let form = document.querySelector("form");
    form.addEventListener("submit",()=>{
        renderDailyCharge()
        dropOff()
        console.log(bookingInfo[0].pickUp)
        window.location = "invoice.html"
    })
}
//PickUp & DropOff distinction functionality
const dropOff = ()=>{
    event.preventDefault();
    let vehcName = document.getElementById("inputVehcName").value;
    localStorage.setItem("vehcName",vehcName);
    let pickUpLoc = document.getElementById("inputPickUpLoc").value;
    localStorage.setItem("pickUpLoc",pickUpLoc);
    let dropOffLoc = document.getElementById("inputDropOffLoc").value;
    localStorage.setItem("dropOffLoc",dropOffLoc);
    bookingInfo.push({vehcName,pickUpLoc,dropOffLoc})

    // console.log( pickUpLoc, dropOffLoc )
    if( pickUpLoc == dropOffLoc ){
        let error = document.getElementById("error");
        error.textContent = "Invalid Selection"
    }else{
        return
    }
}


//Function for finding Charge per day
const renderDailyCharge = ()=>{
    event.preventDefault();
    let pickUp = document.getElementById("inputPickUpDate").value;
    let dropOff = document.getElementById("inputDropOffDate").value;

    let startT = new Date(pickUp)
    let endT = new Date(dropOff)

    let days
    let elapsed =  endT.getTime() - startT.getTime()
     if(elapsed >= 1 && startT<endT){
        days = Math.ceil(elapsed/86400000)
     }
     else{
        days = 1
    }
    bookingInfo.push({pickUp,dropOff,days})
    localStorage.setItem("pickUp",pickUp);
    localStorage.setItem("dropOff",dropOff);
    localStorage.setItem("days",days);

}


// Function for Google map with Bangalore Latitude & Longitude
function myMap() {
    var mapProp= {
        center:new google.maps.LatLng(12.9716,77.5946),
        zoom:5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

