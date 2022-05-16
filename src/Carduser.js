import React, {useState, useEffect} from 'react';
import './App.css';

let api = "https://jsonplaceholder.typicode.com/posts"
function Carduser() {
const [post, setPost] = useState([]);
const [inputVal, setInputVal]= useState("");
function getData(){
   fetch (api)
   .then((res)=> res.json())
   .then((data)=>{
       setPost(data);
       console.log(post);
   });

}
useEffect(()=>{
    getData();

},[]);
let inputData;
const inputHandler = (e)=>{
   // setInputVal(e.target.value.toLowerCase());
   inputData = e.target.value.toLowerCase();
   // console.log(inputVal);
};

const doFilter = () => {
    setInputVal(inputData);
};


  return (
    <div>
        <h1 className='header'>Users-Conentent</h1>
      <div>
          <input type='text' placeholder='search name' onChange={inputHandler}/>
          <button onClick={doFilter}>Search</button>
      </div>
      <div className='content'>
          {post.filter((item,i)=>item.body.includes(inputVal))
          .map((item,i)=>(
              <div key={i} className="post-box">
                  <li>title:&nbsp;&nbsp;&nbsp;{item.title}</li>
                  <li>body:&nbsp;&nbsp;&nbsp;{item.body}</li>
              </div>
          ))}
      </div>
     </div>
  );
}

export default Carduser



