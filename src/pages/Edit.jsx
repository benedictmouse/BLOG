import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

function Edit() {

  const [title,setTitle] = useState('')
  const [category,setCategory] = useState('uncategorized')
  const [description,setDescription] =useState('')
  const [thumbnail,setThumbnail] = useState ('')

  const modules = {
    toolbar: [
      [{ 'header': [1, 2,3,4,5, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent':'+1'}],
      ['link', 'image'],
      ['clean'],
    ]
  }

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]


  const POST_CATEGORY = [
    "Agriculture","Entertainment","Education","Business"
  ]

  return (
   <section className='create-post'>
    <div className='container'>
      <h2>Edit post</h2>
      <form  className="form create-post_form">
        <input type='text' placeholder='title' value={title} onChange={e => setTitle(e.target.value)}/>
        <select name="category" id="category" value={category} onChange={e => setCategory (e.target.value)}>
          {
            POST_CATEGORY.map(cat => <option key={cat}>{cat}</option>)
          }
        </select>
        <ReactQuill modules={modules} formats={formats} value={description} onChange={setDescription}/>
        <input type='file'  onChange={e => setThumbnail(e.target.files[0])} accept='png,jpg,jpeg'/>
        <button className='btn btn-primary'>Edit Post</button>
      </form>
    </div>
   </section>
  )
}

export default Edit