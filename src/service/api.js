const axios = require('axios');

const fetchTodos = async () => {

    const url = 'https://jsonplaceholder.typicode.com/todos';

    return await axios.get(url)
        .then(res => {
            const result = res.data;
            if (result && result.length !== 0) {
                return result.slice(0, 10);
            }
            return [];
        }).catch(error => {
            console.error(error);
            return [];
        });
};

export default fetchTodos;
