
import { useState } from 'react';
import './App.css'
import axios from 'axios';
function App() {

  const[post,setPost] = useState ({
    idea: '',
    textarea: ''
  })

  const handleInput = (event) => {
    setPost({...post, [event.target.name]: event.target.value})
  }

  function handleSubmit (event) {
    event.preventDefault();
    axios.post('https://jsonplaceholder.typicode.com/posts', {post})
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })  
  }
  
  return (
    <>
      <div className="flex form-detail gap-3 bg-slate-300 w-full h-full ">
        <div className="w-full">
          <div className='px-7'>
            <h1 className='mt-7 font-bold text-2xl'>Idea Evaluation</h1>
            <p className='mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consectetur repellendus totam natus ab sint neque rem tenetur quae tempora?</p>
          </div>
          <div className='px-7 mt-10'>
            <form onSubmit={handleSubmit }>
              <div>
                <label className="font-bold text-lg">Title of our idea</label>
                <input type="text" name='idea' className=" w-full h-9 flex mt-5 rounded-md " onChange={handleInput}/>
              </div>

              <div className=' mt-20 md:flex-col'>
                <label className="font-bold text-lg">Describe your idea</label>
                <textarea cols="30" rows="10"  name='textarea' onChange={handleInput} className=" w-full h-full flex mt-5 rounded-md"></textarea>
              </div>

              <div className='flex justify-center'>
                <button type="submit" className=" btn bg-blue-900 text-white  mt-6 p-2 m-5 rounded-md">Run Analysics</button>
              </div>
            </form>
          </div>
        </div>
        <div className=" w-full h-full px-7">
          <h1 className='mt-5 text-center'>Your answer</h1>
          <p></p> 
        </div>
      </div>
    </>
  );
}

export default App;
