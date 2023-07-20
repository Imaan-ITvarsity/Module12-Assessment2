function displayContacts() {
    var contactsDiv = document.getElementById("contacts");
    contactsDiv.innerHTML = "";
  
    for (var i = 0; i < contacts.length; i++) {
      var contact = contacts[i];
  
      var contactDiv = document.createElement("div");
      contactDiv.classList.add("contact");
  
      var nameHeading = document.createElement("h3");
      nameHeading.textContent = contact.name;
  
      var emailParagraph = document.createElement("p");
      emailParagraph.textContent = "Email: " + contact.email;
  
      var phoneParagraph = document.createElement("p");
      phoneParagraph.textContent = "Phone: " + contact.phone;
  
      var imageTag = document.createElement("img");
      imageTag.src = "path/to/image.jpg"; // Replace "path/to/image.jpg" with the actual path to your image
  
      contactDiv.appendChild(nameHeading);
      contactDiv.appendChild(emailParagraph);
      contactDiv.appendChild(phoneParagraph);
      contactDiv.appendChild(imageTag); // Append the image tag to the contact div
  
      contactsDiv.appendChild(contactDiv);
    }
  }
  