import React, { useEffect, useState } from 'react'

const Sort = () => {

    const [users, setUsers] = useState([]);
    const [sort, setSort] = useState("");
    const [loading, setLoading] = useState(false);

    async function fetchListOfUsers(){
        try {
            setLoading(true);
            const response = await fetch('https://dummyjson.com/users');
            const result = await response.json();
            console.log(result);

            if(result && result.users && result.users.length > 0){
                setLoading(false);
                setUsers(result.users);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchListOfUsers();
    },[]);

    useEffect(()=>{
        let cpyUsers = [...users];
        console.log(cpyUsers);

        if(sort === "ascending"){
            cpyUsers = cpyUsers.sort((firstUser, secondUser)=>
                firstUser.firstName > secondUser.firstName ? 1 : -1
            );
        } else if(sort === "descending"){
            cpyUsers = cpyUsers.sort((firstUser, secondUser)=>
                firstUser.firstName > secondUser.firstName ? -1 : 1
            );
        } else if(sort === ""){
            setUsers(cpyUsers);
        }

        setUsers(cpyUsers);

    },[sort]);

    console.log(users);

  return (
    <div>
        <h1 className="text-2xl text-center bg-green-200 w-full">
        Sort Data
      </h1>
      <div className='flex flex-col items-center gap-2 mt-4'>
        <select value={sort} onChange={(event)=>setSort(event.target.value)} name="sort" id="" className='bg-slate-200 rounded-md p-2 outline-none'>
            <option value="" id="">Please Select option</option>
            <option value="ascending" id='ascending'>Sort A - Z</option>
            <option value="descending" id='descending'>Sort Z - A</option>
        </select>
        <ul>
            {
                users.map(userItem=><li key={userItem.id}>{userItem.firstName}</li>)
            }
        </ul>
      </div>
    </div>
  )
}

export default Sort