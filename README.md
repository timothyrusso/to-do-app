# REST API DEMO

Connecting the TODO app to REST API.

## Getting Started

Here's an address of a fake server with an API: `https://api-test.pa7lux.ru/streams`

To configure a fake server with the REST API, in the terminal, enter the following command:
```
npm install -g json-server
```

Create a db.json file with the following code structure:
```
{
  "tasks": [
    {
      "name": "First task",
      "id": 1
    }
  ]
}
```

In the db.json file, use the following command in the terminal:
```
json-server --watch db.json
```

Read the official documentation on JSON Server here: [https://github.com/typicode/json-server](https://github.com/typicode/json-server)

