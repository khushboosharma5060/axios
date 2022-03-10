const axios = require('axios');


let token;
async function getToken(){
   const response = await axios.post('http://localhost:3000/login',{"username": "khushboo", "password": "khushboo123"});
    token = response.data
    // console.log(token);
};

async function getStudents() {
    const response = await axios.get('http://localhost:3000', {headers:{Authorization:`Bearer ${token}`}})
    // console.log(response.data);
};

 
 putStudent = async() => {
     const id = '62164d554e9737e9d43c7c6c';
     const body = {location:'dubai', name: 'Arya' }
   const {data} = await axios.put(`http://localhost:3000/${id}`,body, {headers:{Authorization:`Bearer ${token}`}})
   console.log(data);
}


deleteDeta = async() => {
    const id = '62164d9a4e9737e9d43c7c6d'
    const response = await axios.delete(`http://localhost:3000/${id}`, {headers:{Authorization:`Bearer ${token}`}})
    console.log(response.data)
}



const main = async() => { 
    await getToken();
     await getStudents();
    await putStudent();
     await deleteDeta();
 };
 main(); 
 


