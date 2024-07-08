import React from 'react'
import thumbnail from"../images/bout.jpg"
import { Link } from 'react-router-dom';
import PostAuthor from '../components/PostAuthor';


const PostDetail = () => {
  return (
   
    
   <section className="post_detail">
    <div className="container post-detail_container">
      <div className="post-detail_header">
        <PostAuthor/>
        <div>
        <Link to= {'/post/sdfsdf/edit'} className='btn btn-primary'>edit</Link>
        <Link to= {'/post/sdfsdf/delete'} className='btn btn-danger'>delete</Link>
      </div>
      </div>
   
    <h1>Boutique</h1>
    <div className="post-detail_thumbnail">
      <img src={thumbnail} alt="thumbnail" />
    </div>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem voluptates optio cumque expedita, eos vitae quod atque vero, natus voluptas laboriosam. Omnis perspiciatis, expedita libero, quas velit error non, modi earum suscipit animi voluptatum vitae sed aliquam commodi ipsum deleniti ipsa laudantium ducimus illo sint! Dolorum quisquam omnis laudantium, assumenda odio vero vel dolorem dicta iste voluptate optio ut, odit tempora placeat sint! Consequuntur iure libero commodi eius, sit accusantium ut similique odio vero at ipsa sequi voluptates, voluptatibus ullam minima totam aut veniam nihil doloribus amet nostrum. Tenetur, explicabo laudantium facere, velit blanditiis ipsa praesentium aut vitae unde molestiae, exercitationem eveniet magnam! Ad iure neque tempore iste illum dolores quaerat, veniam, excepturi, quibusdam enim similique. Quibusdam, temporibus optio. Explicabo necessitatibus soluta aliquid consequatur, dignissimos voluptas nesciunt cum. Rerum qui, molestiae, quam quidem sint consectetur odit nisi recusandae rem aut accusamus.</p>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam officia pariatur temporibus cumque, cupiditate voluptatibus, quos, incidunt quas est quo repellendus nostrum expedita similique perspiciatis voluptates nisi fuga laborum quasi doloremque? Eos nemo repellat excepturi assumenda consequatur aliquid beatae corporis!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis corporis atque vero ad magnam consequatur exercitationem sapiente tenetur necessitatibus quod!</p>  
    </div>
   </section>
    
  
  )
}

export default PostDetail