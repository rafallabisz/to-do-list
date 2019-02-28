class RemoveTask extends Variables {
    constructor() {
        super()
    }

    removeTask(e) {
        this.toDoList.splice(e.target.parentNode.dataset.index, 1);
        this.panel.textContent = this.toDoList.length;
        this.inputSearch.value = "";
        this.ul.textContent = "";
        this.toDoList.forEach((item, index) => {
            item.dataset.index = index;
            this.ul.appendChild(item);
        })
    }
}