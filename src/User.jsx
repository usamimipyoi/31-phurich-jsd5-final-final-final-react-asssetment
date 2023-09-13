import { mockEmployees } from './Home';
import Home from './Home';

const User = () => {
    return (
        <div>
            <Home />
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