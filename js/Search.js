class Search extends Variables {
    constructor() {
        super()
    }

    searchTask() {
        let text = this.toDoList.filter(item =>
            item.textContent.toLowerCase().includes(this.inputSearch.value.toLowerCase())
        )
        this.ul.textContent = "";
        text.forEach(item => this.ul.appendChild(item));
        this.panel.textContent = text.length;

    }
}