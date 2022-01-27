const page = document.querySelector(".page");
const createTodoListForm = (...arg) => new TodoListForm(...arg);
const createTodoListItem = (...arg) => new TodoListItem(...arg);

const config = {
  baseUrl: "https://api-test.pa7lux.ru/streams",
  header: {
    "Content-Type": "application/json",
  },
};

const api = new Api(config);
api.getTasks().then((res) => {
  const todoList = new TodoList(
    res,
    createTodoListForm,
    createTodoListItem,
    api
  );
  todoList.render(page);
});
