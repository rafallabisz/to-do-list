class Main extends AddTask {
    constructor() {
        super()
        this.variables = new Variables();
        this.addTask = new AddTask();
        this.removeTask = new RemoveTask();
        this.search = new Search();

        this.variables.form.addEventListener('submit', this.addTask.addTask.bind(this));

        // addEventListener('click', this.removeTask.removeTask.bind(this));
        this.variables.inputSearch.addEventListener('input', this.search.searchTask.bind(this));
    }
}

const main = new Main();