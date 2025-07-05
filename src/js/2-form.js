const localStorageKey = "feedback-form-state";

const formData = { email: "", message: "" };

const form = document.querySelector(".feedback-form");

checkStorage();

form.addEventListener("input", handleInput);
form.addEventListener("submit", handleSubmit);

function handleInput(event) {
    const key = event.target.name;
    const value = event.target.value.trim();

    formData[key] = value;
    localStorage.setItem(localStorageKey, JSON.stringify(formData)); 
}

function checkStorage() {
    const savedMsg = JSON.parse(localStorage.getItem(localStorageKey));

    if(savedMsg) {
        formData.email = savedMsg.email || "";
        formData.message = savedMsg.message || "";

        form.elements.email.value = formData.email;
        form.elements.message.value = formData.message;
    }
    
}

function handleSubmit(event) {
    event.preventDefault();

   if(formData.email === "" || formData.message === "") {
        console.log("Fill please all fields");
        return;
      } 
      
        console.log(formData);
      

      form.reset();
      formData.email = "";
      formData.message = "";
      localStorage.removeItem(localStorageKey);
}
