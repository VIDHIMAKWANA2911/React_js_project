import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Main() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
   const [searchQuery, setSearchQuery] = useState("");
  const categories = [
    "All", "Live", "Music", "Mixes", "Indian Premier League", "Gaming", 
    "Indian soap operas", "Arijit Singh", "Computer programming", 
    "Dramedy", "Grammar"
  ];

   const videos = [
    {
      title: "React Basics",
      channel: "Code with Harry",
      views: "1.2M views",
      time: "2 days ago",
      thumbnail: "https://i.ytimg.com/vi/Ke90Tje7VS0/maxresdefault.jpg"
    },
    {
      title: "JavaScript in 1 Hour",
      channel: "Traversy Media",
      views: "900K views",
      time: "1 week ago",
      thumbnail: "https://i.ytimg.com/vi/PkZNo7MFNFg/maxresdefault.jpg"
    },
    {
      title: "Node.js Crash Course",
      channel: "Academind",
      views: "500K views",
      time: "5 days ago",
      thumbnail: "https://i.ytimg.com/vi/TlB_eWDSMt4/maxresdefault.jpg"
    },
    {
      title: "CSS Grid vs Flexbox",
      channel: "Web Dev Simplified",
      views: "800K views",
      time: "3 days ago",
      thumbnail: "https://i.ytimg.com/vi/3YW65K6LcIA/maxresdefault.jpg"
    },
    {
      title: "Python for Beginners",
      channel: "Programming with Mosh",
      views: "1.5M views",
      time: "2 weeks ago",
      thumbnail: "https://i.ytimg.com/vi/rfscVS0vtbw/maxresdefault.jpg"
    },
    {
      title: "CSS Grid vs Flexbox",
      channel: "Web Dev Simplified",
      views: "800K views",
      time: "3 days ago",
      thumbnail: "https://i.ytimg.com/vi/3YW65K6LcIA/maxresdefault.jpg"
    },
    {
      title: "Python for Beginners",
      channel: "Programming with Mosh",
      views: "1.5M views",
      time: "2 weeks ago",
      thumbnail: "https://i.ytimg.com/vi/rfscVS0vtbw/maxresdefault.jpg"
    },{
      title: "CSS Grid vs Flexbox",
      channel: "Web Dev Simplified",
      views: "800K views",
      time: "3 days ago",
      thumbnail: "https://i.ytimg.com/vi/3YW65K6LcIA/maxresdefault.jpg"
    },
    {
      title: "Python for Beginners",
      channel: "Programming with Mosh",
      views: "1.5M views",
      time: "2 weeks ago",
      thumbnail: "https://i.ytimg.com/vi/rfscVS0vtbw/maxresdefault.jpg"
    },
    {
      title: "CSS Grid vs Flexbox",
      channel: "Web Dev Simplified",
      views: "800K views",
      time: "3 days ago",
      thumbnail: "https://i.ytimg.com/vi/3YW65K6LcIA/maxresdefault.jpg"
    },
    {
      title: "Python for Beginners",
      channel: "Programming with Mosh",
      views: "1.5M views",
      time: "2 weeks ago",
      thumbnail: "https://i.ytimg.com/vi/rfscVS0vtbw/maxresdefault.jpg"
    },
    {
      title: "Python for Beginners",
      channel: "Programming with Mosh",
      views: "1.5M views",
      time: "2 weeks ago",
      thumbnail: "https://i.ytimg.com/vi/rfscVS0vtbw/maxresdefault.jpg"
    },
     {
      title: "Python for Beginners",
      channel: "Programming with Mosh",
      views: "1.5M views",
      time: "2 weeks ago",
      thumbnail: "https://i.ytimg.com/vi/rfscVS0vtbw/maxresdefault.jpg"
    },
    {
      title: "Python for Beginners",
      channel: "Programming with Mosh",
      views: "1.5M views",
      time: "2 weeks ago",
      thumbnail: "https://i.ytimg.com/vi/rfscVS0vtbw/maxresdefault.jpg"
    },
     {
      title: "Python for Beginners",
      channel: "Programming with Mosh",
      views: "1.5M views",
      time: "2 weeks ago",
      thumbnail: "https://i.ytimg.com/vi/rfscVS0vtbw/maxresdefault.jpg"
    },
    {
      title: "Python for Beginners",
      channel: "Programming with Mosh",
      views: "1.5M views",
      time: "2 weeks ago",
      thumbnail: "https://i.ytimg.com/vi/rfscVS0vtbw/maxresdefault.jpg"
    },
    {
      title: "CSS Grid vs Flexbox",
      channel: "Web Dev Simplified",
      views: "800K views",
      time: "3 days ago",
      thumbnail: "https://i.ytimg.com/vi/3YW65K6LcIA/maxresdefault.jpg"
    },
    {
      title: "Python for Beginners",
      channel: "Programming with Mosh",
      views: "1.5M views",
      time: "2 weeks ago",
      thumbnail: "https://i.ytimg.com/vi/rfscVS0vtbw/maxresdefault.jpg"
    },
  ];


  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

   const filteredVideos = videos.filter(video => video.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div style={{ background: "#181818", height: "100%", color: "#fff", margin: "0", padding: "0", display: "flex" ,width:"100%"}}>
    {/* Sidebar */}
<div
  style={{
    width: isSidebarOpen ? "240px" : "80px", 
    transition: "width 0.3s ease",
    background: "#202020",
    padding: "10px 15px",
    height: "100vh",
    position: "fixed",
    top: "80px",
    left: "0",
    display: "flex",
    flexDirection: "column",
    alignItems: isSidebarOpen ? "flex-start" : "center",
    overflowY: "auto",
  }}
>
  {/* Main Navigation */}
  <div style={{ width: "100%" }}>
    <div style={{
      display: "flex",
      alignItems: "center",
      gap: "15px",
      padding: "10px",
      borderRadius: "10px",
      background: "#303030",
      cursor:"pointer"
    }}>
      <img src="https://img.icons8.com/m_sharp/200/FFFFFF/home.png" alt="Home" width="25" />
      {isSidebarOpen && <span style={{ fontSize: "16px", color: "white" }}>Home</span>}
    </div>
    
    <div style={{ display: "flex", alignItems: "center", gap: "15px", padding: "10px" ,}}>
      <img src="https://img.icons8.com/m_outlined/600/FFFFFF/youtube-shorts.png" alt="Shorts" width="25" />
      {isSidebarOpen && <span >Shorts</span>}
    </div>
    
    <div style={{ display: "flex", alignItems: "center", gap: "15px", padding: "10px" }}>
      <img src="https://img.icons8.com/ios7/512/FFFFFF/youtube-play--v2.png" alt="Subscriptions" width="25" />
      {isSidebarOpen && <span>Subscriptions</span>}
    </div>
  </div>

  {/* Divider */}
  <hr style={{ width: "100%", borderColor: "#444", margin: "10px 0" }} />

  {/* You Section */}
  <div style={{ width: "100%" }}>
    {isSidebarOpen && <span style={{ padding: "10px", display: "block", fontSize: "14px", color: "#bbb" }}>You</span>}
    
    <div style={{ display: "flex", alignItems: "center", gap: "15px", padding: "10px" }}>
      <i class="fa-solid fa-rotate-right"></i>
      {isSidebarOpen && <span>History</span>}
    </div>

    <div style={{ display: "flex", alignItems: "center", gap: "15px", padding: "10px" }}>
      <img src="https://www.pngkey.com/png/full/2-23318_white-music-notes-png-white-musical-notes-png.png" alt="Playlists" width="25" />
      {isSidebarOpen && <span>Playlists</span>}
    </div>

    <div style={{ display: "flex", alignItems: "center", gap: "15px", padding: "10px" }}>
      <img src="https://cdn4.iconfinder.com/data/icons/interface-vol-3/16/time-watch-later-clock-512.png" alt="Watch Later" width="25" />
      {isSidebarOpen && <span>Watch Later</span>}
    </div>

    <div style={{ display: "flex", alignItems: "center", gap: "15px", padding: "10px" }}>
      <img src="https://cdn-icons-png.flaticon.com/512/126/126473.png" alt="Liked videos" width="25" />
      {isSidebarOpen && <span>Liked Videos</span>}
    </div>

    <div style={{ display: "flex", alignItems: "center", gap: "15px", padding: "10px" }}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6rgTRjjTSgxXi4fPwK4UILj2blSyaly0oFg&s" alt="Downloads" width="25" />
      {isSidebarOpen && <span>Downloads</span>}
    </div>
  </div>

  {/* Divider */}
  <hr style={{ width: "100%", borderColor: "#444", margin: "10px 0" }} />

  {/* Subscriptions Section */}
  <div style={{ width: "100%" }}>
    {isSidebarOpen && <span style={{ padding: "10px", display: "block", fontSize: "14px", color: "#bbb" }}>Subscriptions</span>}
    
    <div style={{ display: "flex", alignItems: "center", gap: "15px", padding: "10px" }}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7559vKRmi40KNXq4C-LxgMXYetaPD0UrVug&s" alt="Chintan Khokhar" width="30" style={{ borderRadius: "50%" ,width:"40px",height:"40px"}} />
      {isSidebarOpen && <span style={{fontSize:"18px"}}>Chintan Khokhar</span>}
    </div>

    <div style={{ display: "flex", alignItems: "center", gap: "15px", padding: "10px" }}>
      <img src="https://play-lh.googleusercontent.com/6Mk8gH2BwpMFm4FEQ4VB3EkLCQq0Jk2viu4tXfSEPQaTJO5hqYDK7TC-NJ2TXwvoKaRd" alt="VG Study Point" width="30" style={{ borderRadius: "50%",width:"40px",height:"40px" }} />
      {isSidebarOpen && <span style={{fontSize:"18px"}}>VG Study Point</span>}
    </div>

    <div style={{ display: "flex", alignItems: "center", gap: "15px", padding: "10px" }}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgaILfyMN-voEqzfxls8D_Z3M8c96Uc6UKUA&s" alt="Red & White" width="30" style={{ borderRadius: "50%",width:"30px",height:"45px" }} />
      {isSidebarOpen && <span style={{fontSize:"18px"}}>Red & White</span>}
    </div>
  </div>
</div>


      <div style={{ flex: 1, marginLeft: isSidebarOpen ? "240px" : "100px" }}>
        {/* Header */}
          <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 20px",
          background: "#000",
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          height: "60px",
          zIndex: "100",
               }}
      >
        {/* Left Side - Menu & Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <img
            src="https://img.icons8.com/ios7/600/FFFFFF/menu.png"
            alt="Menu"
            style={{ width: "30px", cursor: "pointer" }}
            onClick={toggleSidebar}
          />
          <img
            src="https://betanews.com/wp-content/uploads/2017/08/new-youtube-logo.jpg"
            alt="YouTube"
            style={{ width: "120px", objectFit: "contain" }}
          />
        </div>

        {/* Center - Search Bar */}
      <div style={{ display: "flex", alignItems: "center", width: "750px" }}>
  <input
    type="text"
    placeholder="Search"
    style={{
      width: "100%",
      padding: "10px 20px",
      fontSize: "14px",
      borderRadius: "20px 0 0 20px",
      border: "1px solid rgba(255, 255, 255, 0.6)",
      outline: "none",
      background: "#121212",
      color: "white",
      borderRight: "none"
    }}
    onChange={(e) => setSearchQuery(e.target.value)}
    value={searchQuery}
  />
  <button
    onClick={() => {
      // Optional: handle search click
      console.log("Searching:", searchQuery);
    }}
    style={{
      background: "#303030",
      border: "1px solid rgba(255, 255, 255, 0.6)",
      borderLeft: "none",
      borderRadius: "0 20px 20px 0",
      padding: "10px 16px",
      cursor: "pointer"
    }}
  >
    <i
      className="fa-solid fa-magnifying-glass"
      style={{ color: "#fff" }}
    ></i>
  </button>
</div>
        {/* Right Side - Icons */}
        <div style={{ display: "flex", alignItems: "center", gap: "15px" ,marginRight:"70px"}}>
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/free-mic-icon-download-in-svg-png-gif-file-formats--audio-sound-recording-user-interface-pack-icons-1325560.png"
            alt="Microphone"
            width="40"
            style={{ cursor: "pointer" ,border:"1px solid grey" ,height:"40px",borderRadius:"50px"}}
          />
          <div
          style={{
            background: "#303030",
            borderRadius: "20px",
            padding: "8px 16px",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <img
            src="https://img.icons8.com/ios-filled/25/ffffff/plus-math.png"
            alt="Create"
            style={{ width: "20px", height: "20px", marginRight: "8px" }}
          />
          <span style={{ color: "white", fontWeight: "bold", fontSize: "16px" }}>
            Create
          </span>
        </div>
          <img
            src="https://img.icons8.com/ios7/600/FFFFFF/appointment-reminders.png"
            alt="Notifications"
            width="30"
            style={{ cursor: "pointer" }}
          />
          <div
            style={{
              background: "#008080",
              borderRadius: "50%",
              width: "35px",
              height: "35px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              fontSize: "18px",
              fontWeight: "bold",
              cursor:"pointer"
            }}
          >
            V
          </div>
        </div>
        </div>
        
       {/* Categories Bar */}
        <div style={{
          display: "flex", overflowX: "auto", padding: "80px 10px 10px",
          background: "#181818", marginLeft: isSidebarOpen ? "50px" : "100px", transition: "margin-left 0.3s ease",
          fontFamily:"cursive"
        }}>
          {categories.map((category, index) => (
            <Link 
              key={index} 
               to={category === "All" ? "/all" : `/search?q=${encodeURIComponent(category)}`} 
              style={{ textDecoration: "none", color: "white" }}
            >
              <div style={{
                padding: "8px 15px", margin: "5px", background: "#303030",
                borderRadius: "20px", cursor: "pointer", whiteSpace: "nowrap"
              }}>
                {category}
              </div>
            </Link>
          ))}
        </div>
        {/* Main Content */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))", gap: "20px", marginTop: "20px", background: "#181818", paddingBottom: "20px",marginLeft:"50px",overflowX:"hidden" }}>
          {videos.map((video, index) => (
            <div key={index} style={{ background: "#202020", padding: "10px", borderRadius: "10px" }}>
              <img src={video.thumbnail} alt={video.title} style={{ width: "100%", borderRadius: "10px" ,height:"200px"}} />
              <h3 style={{ fontSize: "25px", marginTop: "10px" }}>{video.title}</h3>
              <p style={{ fontSize: "20px", color: "#bbb" }}>{video.channel}</p>
              <p style={{ fontSize: "18px", color: "#888" }}>{video.views} • {video.time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}