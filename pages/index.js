import { useState } from 'react';
import List from "../components/List";
import ListImage from "../components/ListImage";

import { v4 as uuidv4 } from 'uuid';

export default function Index() {

  const [murashax, setMurashax] = useState({ id: "", name: "", count: 0 });

  // uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

  const addMurashax = (e) => {
    e.preventDefault();




  };



  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-12 w-auto"
          src="somalia.svg"
          alt="Workflow"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Xisaabi Codadka</h2>

      </div>

      {/* <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"> */}

      {/* <List /> */}
      <ListImage />
      {/* </div> */}
      {/* </div> */}
    </div>
  );
}
