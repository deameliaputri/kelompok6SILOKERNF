function login(){
    let user = document.getElementById("Username");
    let pass = document.getElementById("passwordinput");

    console.log("username : " + user.value);
    console.log("password : " + pass.value);
    if (user.value == "admin" && pass.value == "admin") {
        alert("Selamat Datang Admin");
        window.location.href = "admin/dashboard.html";
    }else{
        alert("Username atau Password salah!");
    }
}