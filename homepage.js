var data=[]

window.onload = ()=>{
    var i20 = document.getElementById("i20")
    i20.addEventListener("click",handlei20=()=>{
        v_name = localStorage.setItem("veh","MODEL NAME-i20")
        window.location = "booking.html"
    })

    var swift = document.getElementById("swift")
    swift.addEventListener("click",handleswift=()=>{
        v_name = localStorage.setItem("veh","MODEL NAME-swift")
        window.location = "booking.html"
    })

    var eco = document.getElementById("eco")
    eco.addEventListener("click",handleeco=()=>{
        v_name = localStorage.setItem("veh","MODEL NAME-Ford ecosport")
        window.location = "booking.html"
    })

    var baleno = document.getElementById("baleno")
    baleno.addEventListener("click",handlebaleno=()=>{
        v_name = localStorage.setItem("veh","MODEL NAME-Maruti suzuki Baleno")
        window.location = "booking.html"
    })

    var nexon = document.getElementById("nexon")
    nexon.addEventListener("click",handlenexon=()=>{
        v_name = localStorage.setItem("veh","MODEL NAME-TATA NEXON")
        window.location = "booking.html"
    })

    var polo = document.getElementById("polo")
    polo.addEventListener("click",handlepolo=()=>{
        v_name = localStorage.setItem("veh","MODEL NAME-Volkswagen polo")
        window.location = "booking.html"
    })

    var kuv = document.getElementById("kuv")
    kuv.addEventListener("click",handlekuv=()=>{
        v_name = localStorage.setItem("veh","MODEL NAME-Mahindra KUV")
        window.location = "booking.html"
    })

    var creta = document.getElementById("creta")
    creta.addEventListener("click",handlecreta=()=>{
        v_name = localStorage.setItem("veh","MODEL NAME-Hyundai Creta")
        window.location = "booking.html"
    })

    var r_form = document.getElementById("register_form")
    r_form.addEventListener("submit", handleRegForm)

    var l_form = document.getElementById("login_form")
    l_form.addEventListener("submit", handleLogForm)
}

const handleRegForm=()=>{
    event.preventDefault()
    var email = document.getElementById("r_email").value
    var password = document.getElementById("r_password").value
    if(data.length == 0 && localStorage.getItem("registration").length == 0){
        data.push({email,password})
        var a = JSON.stringify(data)
        localStorage.setItem("registration",a)
        console.log(data)
    }
}

const handleLogForm=()=>{
    event.preventDefault()
    var l_email = document.getElementById("l_email").value
    var l_password = document.getElementById("l_password").value
    var b = localStorage.getItem("registration")
    var res = JSON.parse(b)
    console.log(res)
    if(res[0].email == l_email && res[0].password == l_password){
        var btn = document.getElementById("login")
        btn.innerHTML = "logout"
    }
    // if(data[0].email == l_email && data[0].password == l_password){
    //     data.pop()
    // }
    // else{
    //     handleError()
    // }
}

const handleError=()=>{
    let error = document.getElementById("error")
    error.textContent = "Enter correct email and password!"
}