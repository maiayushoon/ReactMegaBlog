import React, { useState, useEffect } from 'react'
import appwriteService from '../appwrite/config'
import { Container, PostCard } from '../components'

function AllPost() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await appwriteService.getPosts()
        if (response) {
          setPosts(response.documents)
        }
      } catch (error) {
        console.error('Error fetching posts:', error)
      }
    }

    fetchPosts()
  }, [])

  return (
    <div className='w-full py-8'>
      <Container>
        <div className='flex flex-wrap'>
          {posts.map((post) => (
            <div className='p-2 w-1/4' key={post.$id}>
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default AllPost
