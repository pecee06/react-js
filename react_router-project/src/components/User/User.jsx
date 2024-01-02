import "./style.css"
import { useParams } from "react-router-dom"
import useFetchData from "../../hooks/useFetchData";

export default function User(){
    const {user} = useParams();
    const url = `https://api.github.com/users/${user}`;
    const data = useFetchData(url);
    // Imp keys - avatar_url, name, public_repos
    return (
        <>
            <div className="user-heading">
                <h2>User Info</h2>
                <img src="../../github.svg" alt="" />
            </div>
            <div className="user-container">
                <img src={data.avatar_url} alt="user-photo" />
                <div>
                    <h3>{data.name}</h3>
                    <p>Github repositories: {data.public_repos}</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus harum blanditiis, quis excepturi vel nihil.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum odio nesciunt non? Culpa odit totam temporibus.</p>
                </div>
            </div>
        </>
    )
}