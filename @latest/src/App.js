import React,{ useEffect, useState } from 'react';
import TableHead from './components/TableHead';
import TableBody from './components/TableBody';
import SearchBar from './components/SearchBar';




function App() {
const [transactions,setTransactions] = useState([]);

useEffect(() => {
  fetch(' https://banks-ij3u.onrender.com/transactions')
  .then(res => res.json())
  .then(data => setTransactions(data));
},[])

useEffect(() => {
  console.log("Updated transactions:", transactions);
}, [transactions]);


async function handleDelete(id){
  try {
    const updatedData = transactions.filter(data => data.id !== id);
    setTransactions(updatedData)
  } catch (error) {

    console.error('Error deleting transactions:', error);
    
  }
}


 function updateParentState(newState){
   console.log(newState);
   setTransactions(newState)
   console.log(transactions);
 }
  return (
    <>
    {console.log(transactions)}
    <section className='addSection'>
      <TableHead
      onUpdateState = {updateParentState}
     transactions={transactions} 
     setTransactions={setTransactions}
      />
    </section>
    <section>
      <SearchBar />
    </section>
    <main>
      <TableBody
      handleDelete={handleDelete}
      transactions={transactions}
      />
    </main>
    </>
  );
}

export default App;