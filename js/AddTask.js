class AddTask extends Variables {
    constructor() {
        super()

    }

    addTask(e) {
        e.preventDefault();
        if (!this.inputTask.value) return;

        this.li = document.createElement("li");
        this.li.innerHTML = this.inputTask.value + '<i class="exit fas fa-trash-alt"></i>';
        this.toDoList.push(this.li);
        this.panel.textContent = this.toDoList.length;
        this.inputTask.value = "";
        this.inputSearch.value = "";
        this.toDoList.forEach((item, index) => {
            item.dataset.index = index;
            this.ul.appendChild(item);

        })

        this.li.querySelector('.exit').addEventListener('click', this.removeTask.removeTask.bind(this));
    }
}