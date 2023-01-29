let arr = [];
const input = document.getElementById("new-item");
const addBtn = document.getElementById("add-item");
const list = document.getElementById("item-list");

const showItem = () => {
  let html = ``;
  arr = localStorage.getItem("todo_List").split(",");
  console.log(arr);
  arr.forEach((item, i) => {
    html += `
        <div class="item">
        <p>${item}</p>
        <div>
            <span onclick="editItem(${i})"><img src="edit.png" alt="edit"></span>
            <span onclick="deleteItem(${i})"><img src="delete.png" alt="delete"></span>
        </div>
        </div>`;
  });

  list.innerHTML = html;
};

const addItem = () => {
  arr.push(input.value);
  addBtn.innerText = "Add item";

  localStorage.setItem("todo_List", arr.toString());

  showItem();
};

const deleteItem = (index) => {
  const newArr = arr.filter(function (item, i) {
    return index !== i;
  });
  arr = newArr;
  localStorage.setItem("todo_List", arr.toString());
  showItem();
};

const editItem = (index) => {
  addBtn.innerText = "Save";
  input.value = arr[index];
  deleteItem(index);
};

const deleteAll = () => {
  arr = [];
  localStorage.setItem("todo_List", arr.toString());
  showItem();
};

showItem();
