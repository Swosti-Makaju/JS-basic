const fetchData = async () => {
      
    const response=await  fetch ('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json));
      
    console.log("responses:",response);
      return response;
    };

    async function fetchData2(params) {
      
    }

    const data = fetchData();
    console.log(data);

