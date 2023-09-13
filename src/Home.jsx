import { useEffect, useState } from 'react';
export const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: 'mocklastname',
    position: "Manager"
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer"
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer"
  },
]

const Home = () => {

/*   const [sector, setSector] = useState(''); */

/*   useEffect(() => {}, [sector, mockEmployees]); */

  return (
    <div>
      <div>
        <div>
{/*       <header>
            <h1>Generation Thailand <br />React - Assessment</h1>
          </header> */}
          <a href="/User"><button>User Home Sector</button></a>
          <a href="/Admin"><button>Admin Home Sector</button></a>
          <button
            onClick={() => console.log(sector)}
          >Test sector</button>
        </div>
      </div>
    </div>
  )
}

export default Home
