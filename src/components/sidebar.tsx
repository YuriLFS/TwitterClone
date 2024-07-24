import { useLocation } from "react-router-dom"
import { TwitterLogo } from "../icons/twitterLogo"
import { House, Hash, Bell, Envelope, BookmarkSimple, FileText, User, DotsThreeCircle } from "@phosphor-icons/react"
import TweetBox from "./tweetBox"
import { useState } from "react"

export default function SideBar() {

    const [ twtShow, setTwtShow ] = useState(false)

    const onShow = () => {
        setTwtShow(true)
    }

    const onClose = () => {
        setTwtShow(false);
    };

    const location = useLocation()

    const isHomePage = location.pathname === "/"

    const isExplorePage = location.pathname === "/explore"

    const isNotificationPage = location.pathname === "/notifications"

    const isMessage = location.pathname === "/message"

    const isBookmarks = location.pathname === "/bookmarks"

    const isList = location.pathname === "/lists"

    const isProfile = location.pathname === "/profile"

    const isMore = location.pathname === "/more"

    return(
        <>
            <div className="h-full flex-col pl-6 pt-4 pr-4 pb-4 space-y-8 border-r border-gray-600">
                <TwitterLogo />
                <div className="font-semibold space-y-5">                
                    <div>
                        <button>
                            <a href="/" className={`flex items-center text-2xl gap-2 ${isHomePage ? "text-blue-500" : ""}`}>
                                {isHomePage ?
                                <House weight="fill"/>                            
                                :
                                <House />
                                }
                                Home
                            </a>
                        </button>
                    </div>
                    <div>
                        <button>
                            <a href="/explore" className={`flex items-center text-2xl gap-2 ${isExplorePage ? "text-blue-500" : ""}`}>
                                <Hash />
                                Explore
                            </a>
                        </button>
                    </div>
                    <a href="/notifications" className={`flex items-center text-2xl gap-2 ${isNotificationPage ? "text-blue-500" : ""}`}>
                        {isNotificationPage ? 
                        <Bell weight="fill"/>
                        :
                        <Bell />
                        }
                        
                        Notifications
                    </a>
                    <div>
                        <button>
                        <a href="/message" className={`flex items-center text-2xl gap-2 ${isMessage ? "text-blue-500" : ""}`}>
                                <Envelope />
                                Message
                            </a>
                        </button>
                    </div>
                    <div>
                        <button>
                            <a href="/bookmarks" className={`flex items-center text-2xl gap-2 ${isBookmarks ? "text-blue-500" : ""}`}>
                                {isBookmarks ?
                                <BookmarkSimple weight="fill"/>
                                :
                                <BookmarkSimple />
                                }                            
                                Bookmarks
                            </a>
                        </button>
                    </div>
                    <div>
                        <button>
                            <a href="/lists" className={`flex items-center text-2xl gap-2 ${isList ? "text-blue-500" : ""}`}>
                                <FileText />
                                Lists
                            </a>
                        </button>
                    </div>
                    <div>
                        <button>
                            <a href="/profile" className={`flex items-center text-2xl gap-2 ${isProfile ? "text-blue-500" : ""}`}>
                                <User />
                                Profile
                            </a>
                        </button>
                    </div>
                    <div>
                        <button>
                            <a href="/more" className={`flex items-center text-2xl gap-2 ${isMore ? "text-blue-500" : ""}`}>
                                <DotsThreeCircle />
                                More
                            </a>
                        </button>
                    </div>
                </div>
                <div className={isHomePage ? '' : 'hidden'} >
                    <button onClick={onShow} className="w-64 h-12 bg-azul-twitter rounded-full text-xl font-semibold text-white hover:brightness-90">Tweet</button>
                </div>
            </div>
            <div className={`absolute top-1/4 left-1/3 ${twtShow ? "block" : "hidden"}`}>
                <TweetBox onClose={onClose}/>
            </div>
        </>
    )
}