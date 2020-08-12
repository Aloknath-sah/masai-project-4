var data=[]

window.onload = ()=>{
    
    var r_form = document.getElementById("register_form")
    r_form.addEventListener("submit", handleRegForm)

    var l_form = document.getElementById("login_form")
    l_form.addEventListener("submit", handleLogForm)
}

const handleRegForm=()=>{
    event.preventDefault()
    var email = document.getElementById("r_email").value
    var password = document.getElementById("r_password").value
    data.push({email,password})
    console.log(data)
}

const handleLogForm=()=>{
    event.preventDefault()
    var l_email = document.getElementById("l_email").value
    var l_password = document.getElementById("l_password").value
    if(data[0].email == l_email && data[0].password == l_password){
        data.pop()
        window.location = "booking.html"
    }
    else{
        handleError()
    }
}

const handleError=()=>{
    let error = document.getElementById("error")
    error.textContent = "Enter correct email and password!"
}