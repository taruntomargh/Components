import React, { useState } from 'react'

function Comment({ handleAddReply, key, comment }){
    // console.log(comment);
    return (
        <div>
            <div className='flex gap-2'>
            {comment.title}
            <button className="text-md text-white bg-blue-800 rounded-md p-2">Add Reply</button>
            
        </div>
        <li key={key}>
        {comment && comment.children && comment.children.length > 0 ? comment.children.map(childComment=><Comment handleAddReply={handleAddReply} key={childComment.id} comment={childComment} />) : ''}
    </li>
        </div>
    )
}

const NestedComments = () => {

    const [inputValue, setInputValue] = useState();
    const [comments, setComments] = useState([
        {
            id: 1,
            title: "First Comment",
            children: [],
        },
        {
            id: 2,
            title: "Second Comment",
            children: [
                {
                    id: 20,
                    title: "1st sub-comment of second comment",
                    children: []
                },
                {
                    id: 21,
                    title: "2nd sub-comment of second comment",
                    children: []
                },
                {
                    id: 22,
                    title: "3rd sub-comment of second comment",
                    children: []
                },
            ],
        },
        {
            id: 3,
            title: "Third Comment",
            children: [],
        },
        {
            id: 4,
            title: "Fourth Comment",
            children: [],
        },
        {
            id: 5,
            title: "Fifth Comment",
            children: [],
        }
    ]);

    function handleAddReply(){}

  return (
    <div>
        <h1 className="text-2xl text-center bg-green-200 w-full">Nested Comments</h1>
        <div className='flex flex-col items-center gap-2 mt-4'>
            <textarea name="" id="" cols="50" rows="5" className='border-gray-400 border-2 outline-none' />
            <ul>
                {
                    comments.map(comment=><Comment handleAddReply={handleAddReply} key={comment.id} comment={comment}/>)
                }
            </ul>
        </div>
    </div>
  )
}

export default NestedComments