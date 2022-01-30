import React, { useEffect } from 'react';
import './App.css';
import PostContainer from './components/PostContainer';
import { useAppDispatch, useAppSelector } from './hooks/hook';
import { fetchUsers } from './store/reducers/ActionCreators';


function App() {
  const dispatch = useAppDispatch();
  const {users, isLoading, error} = useAppSelector(state => state.userReducer);

  useEffect(() => {
     dispatch(fetchUsers())
  }, [])
  
  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>error</p>
  }

  return (
    <div className="App">
       <PostContainer />
       {users.map(u => {
         return (
           <div>{u.email}</div>
         )
       })}
    </div>
  );
}

export default App;
