function handleFormSubmit(event){
    event.preventDefault();
    const name =event.target.username.value;
    const email = event.target.email.value;
    const phonenumber = event.target.phone.value;
    const obj = {
        name,
        email,
        phonenumber
    }
    let obj_serialized = JSON.stringify(obj);
    localStorage.setItem("UserDetails",obj_serialized);
    let obj_deserialized = JSON.parse(localStorage.getItem("obj"));
    


}


  