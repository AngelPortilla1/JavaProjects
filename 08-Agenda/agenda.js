document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const tel = document.getElementById('phone').value;


    const listItem = document.createElement('li');
    listItem.textContent = `${name} - ${tel}`;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.addEventListener('click', function() {
        listItem.remove();
    })
    listItem.appendChild(deleteButton);


    document.getElementById('contacts').appendChild(listItem);
});



document.getElementById("search").addEventListener("input", function(e) {
    const query = this.value.toLowerCase();
    const contacs = document.querySelectorAll("#contacts li");

    contacs.forEach(contact => {
        if (contact.textContent.toLowerCase().includes(query)) {
            contact.style.display = "";
        } else {
            contact.style.display = "none";
        }

    })
})