// Logic for table

const deletePassword = (website) => {
    let data = localStorage.getItem("passwords")
    let arr = JSON.parse(data);
    arrUpdated = arr.filter((e)=>{
        return e.website != website
    })
    localStorage.setItem("passwords", JSON.stringify(arrUpdated))
    alert(`Successfully deleted ${website}'s password`)
    showPassword();

}

const showPassword = () => {

    let tb = document.querySelector("table");
    let data = localStorage.getItem("passwords");
    if (data == null) {
        tb.innerHTML = "No Data To Show"
    } else {
        tb.innerHTML = `<tr>
        <th>Website</th>
        <th>Username</th>
        <th>Password</th>
        <th>Action</th>
      </tr>`
        let arr = JSON.parse(data);
        let str = "";
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];

            str += `<tr>
            <td>${element.website}</td>
            <td>${element.username}</td>
            <td>${element.password}</td>
            <td><button class="btnsm" onclick="deletePassword('${element.website}')">Delete</button></td>
        </tr> `
        }
        tb.innerHTML = tb.innerHTML + str;
    }
    website.value = "";
    username.value = "";
    password.value = "";
}

console.log("Hello World");
showPassword();
document.querySelector(".btn").addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Clicked")
    console.log(username.value, password.value);
    let passwords = localStorage.getItem("passwords");
    console.log(passwords);
    if (passwords == null) {
        let json = [];
        json.push({ website: website.value, username: username.value, password: password.value })
        alert("Password saved");
        localStorage.setItem("passwords", JSON.stringify(json))
    } else {
        let json = JSON.parse(localStorage.getItem("passwords"));
        json.push({ website: website.value, username: username.value, password: password.value });
        alert("Password Saved");
        localStorage.setItem("passwords", JSON.stringify(json));
    }
    showPassword();
})
