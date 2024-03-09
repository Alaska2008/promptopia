'use client';

import { useState, useEffect } from 'react';
import PromptCard from './PromptCard';


const PromptCardList = ({ data, handleTagClick }) =>{
  return (
    <div className='mt-16 prompt_layout'>
      {data.map((post) =>(
        <PromptCard 
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  )
}

const Feed = () => {
  const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState([]);

  
    
  const filteredData = posts.filter((item) => {
    const lowerCaseSearchTerm =searchText.toLowerCase();
    return (
      item.prompt.toLowerCase().includes(lowerCaseSearchTerm) ||
      item.tag.toLowerCase().includes(lowerCaseSearchTerm) ||
      item?.creator?.username.toLowerCase().includes(lowerCaseSearchTerm)||
      item?.creator?.email.toLowerCase().includes(lowerCaseSearchTerm)
    );
  })  
    

  useEffect(() =>{
    const fetchPosts = async () =>{
      const response = await fetch('/api/prompt');
      const data = await response.json();
      setPosts(data);
    }
    fetchPosts()
  },[])

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input 
          type='test'
          placeholder='Search for a tag or a username'
          value={searchText}
          onChange ={(e)=>{setSearchText(e.target.value)}}
          required
          className='search_input peer'
        />
      </form>
      {searchText? (
          <PromptCardList 
            data = {filteredData}
            handleTagClick={()=>{}}
            // handleTagClick={()=>{setSearchText(e.target.value)}}
          />
        )
        : 
        (
          <PromptCardList 
            data = {posts}
            handleTagClick={()=>{}}
            // handleTagClick={()=>{setSearchText(e.target.value)}}
          />
        )
      }
      
    </section>
  )
}

export default Feed