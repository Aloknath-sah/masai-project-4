window.onload = ()=>{
    
}






//Function for finding Charge per day
function dayCharge(startDate ,endDate,dailyCharge){
    let startT = new Date(startDate)
    let endT = new Date(endDate)

    let elapsed =   endT.getTime() - startT.getTime()
    let day = Math.ceil(elapsed/86400000)
    let charge = day*dailyCharge

    return charge
}

// Function for Google map with Bangalore Latitude & Longitude
function myMap() {
    var mapProp= {
        center:new google.maps.LatLng(12.9716,77.5946),
        zoom:5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}