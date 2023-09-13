import { mockEmployees } from './Home';
import Home from './Home';

const User = () => {
    return (
        <div>
            <div>
                <header>
                    <h1>Generation Thailand <br />React - User Sector</h1>
                </header>
                <a href="/User"><button>User Home Sector</button></a>
                <a href="/Admin"><button>Admin Home Sector</button></a>
                <button
                    onClick={() => console.log(sector)}
                >Test sector (check dev log)</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Position</th>
                    </tr>
                </thead>
                <tbody>
                    {mockEmployees.map((item) => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.lastname}</td>
                        <td>{item.position}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default User