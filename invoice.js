window.onload = ()=>{
    var vehcName = document.getElementById("vehcName")
    vehcName.textContent = localStorage.getItem("vehcName");

    var pickUpLoc = document.getElementById("pickUpLoc")
    pickUpLoc.textContent = localStorage.getItem("pickUpLoc");

    var pickUpDate = document.getElementById("pickUpDate")
    pickUpDate.textContent = localStorage.getItem("pickUp");

    var dropOffLoc = document.getElementById("dropOffLoc")
    dropOffLoc.textContent = localStorage.getItem("dropOffLoc");

    var dropOffDate = document.getElementById("dropOffDate")
    dropOffDate.textContent = localStorage.getItem("dropOff");

    var fare = document.getElementById("fare")
    var days = localStorage.getItem("days");
    fare.textContent = `₹${days*1000}`

    var gst = document.getElementById("gst")
    gst.textContent = `₹${0.18*(days*1000)}`

    var final = document.getElementById("final")
    final.textContent = `₹${days*1000 + 0.18*(days*1000)}`

}