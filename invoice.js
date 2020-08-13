var ctx, chart

window.onload = ()=>{

    var vehcName = document.getElementById("vehcName")
    vehcName.textContent = localStorage.getItem("veh");

    //var vehcName = document.getElementById("vehcName")
    //vehcName.textContent = localStorage.getItem("vehcName");

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

    let date = localStorage.getItem("pickUp")
    let finalAmt = (days*1000 + 0.18*(days*1000))

    let payload = {date,finalAmt}
    console.log(payload)
    
    addData(chart, payload)
}
  

ctx = document.getElementById('chart')

chart = new Chart(ctx,{
    type: 'bar',
    data:{
        labels: ['2020-08-05','2020-08-07','2020-08-09'],
        datasets: [{
            label: 'Expenditure',
            data: [ 2000,1500,2500],
            backgroundColor: '#776d8a'
        }
    ],
        borderWidth: 1
    },
    options:{
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true
                    }
                }
            ]
        }
    }
})

function addData(chart,{ date, finalAmt }){
    chart.data.labels.push(date)
    chart.data.datasets[0].data.push(finalAmt)
    chart.update()
}

function random(num){
    return Math.floor( Math.random() * num)
}

function createColor(num){
    return `rgba(${random(255)},${random(255)},${random(255)})`
}
