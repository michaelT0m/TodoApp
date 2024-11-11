import Home from './Home.jsx';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase/firebase.js';

function App() {
  const [data, setData] = useState([]);

   useEffect(() => {
     const fetchData = async () => {
       try {
         const querySnapshot = await getDocs(collection(db, 'todos'));
         const dataArray = querySnapshot.docs.map((doc) => ({
           ...doc.data(),
         }));
         setData(dataArray);
        //  console.log(dataArray);
       } catch (error) {
         console.error('Error fetching data: ', error);
       }
     };

     fetchData();
   }, []);

  console.log(data);

  return <><Home data={data}/></>;
}

export default App;
