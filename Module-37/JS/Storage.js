

const handleAddToStorage = () => {
    const ID = document.getElementById('id').value;
    const NAME = document.getElementById('name').value;
    // console.log(name);

    const data = {ID, NAME};
    // console.log(data);
    localStorage.setItem(ID, JSON.stringify(data));

    // setItem('insert the Key', insert the Value )
    // localStorage.setItem(ID, NAME);

    // get item from localStorage
    const storedItem = localStorage.getItem(ID);
    console.log(JSON.parse(storedItem));
}


const ClearLocalStorage = () => {
    localStorage.clear();
}