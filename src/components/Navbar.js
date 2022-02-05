import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import * as FaIcons from 'react-icons/fa';
import { AiOutlineClose as Theicon } from "react-icons/ai";

const PORT = process.env.PORT || 5000;

function Navbar() {

    const [articles, setArticles] = useState(null)

    const [sidebar, setSidebar] = useState(false);

    console.log('sidebar is', sidebar)

    const showSidebar = () => setSidebar(!sidebar)

    useEffect(() => {

        const options = {
            method: 'GET',
            url: `http://localhost:${PORT}/news`
        }

        axios.request(options).then((response) => {
            console.log(response.data);
            setArticles(response.data)
        }).catch((error) => {
            console.error(error);
        });
    }, [])

    const firstEightArticles = articles?.slice(0, 8);

    return (
        <>
            <div className="navbar">
                {sidebar ? <Theicon className="ham" size={36} onClick={showSidebar} /> : 
                        <FaIcons.FaBars className="ham" size={36} onClick={showSidebar} /> 
                }
            </div>
            <nav className={sidebar ? 'nav-menu-active' : 'nav-menu'}>
                {firstEightArticles?.map((article, _index) => (
                    <div className="nav-text" key={_index}>
                        <a href={article.url}><p>{article.title}</p></a>
                    </div>))}
            </nav>
        </>
    )
}

export default Navbar;