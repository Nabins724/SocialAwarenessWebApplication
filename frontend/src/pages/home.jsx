import { useState } from "react";

import Posts from "../components/common/Posts.jsx";

import CreatePost from "../pages/home/CreatePost.jsx";
import NavBar from "../pages/home/NavBar.jsx";
import LeftPanel from "../components/common/LeftPanel.jsx";


const HomePage = () => {
    const [feedType, setFeedType] = useState("forYou");



    return (
        <>
            <NavBar />
            <div className="flex min-h-screen"> {/* Sidebar */} <div className="w-1/4 bg-gray-800 p-3">
                {
                    <LeftPanel />}

            </div> {/* Main Content */} <div className="flex-1 border-r border-gray-700"> {/* Header */}
                    <div className="flex w-full border-b border-gray-700">
                        <div className="flex justify-center flex-1 p-3 hover:bg-secondary transition duration-300 cursor-pointer relative"
                            onClick={() => setFeedType("forYou")} >
                            CAMPAIGNS FEED {feedType === "forYou" &&
                                (<div className="absolute bottom-0 w-10 h-1 rounded-full bg-primary"></div>)}
                        </div> 

                    </div>
                    {/* CREATE POST INPUT */}
                    <CreatePost />
                    {/* POSTS */}
                    <Posts />
                </div>
            </div>
        </>
    );
};
export default HomePage;