import { useState } from "react";

function LikeButton() {
  // 1. State variable banaya jo like count yaad rakhega
  const [likes, setLikes] = useState(0);

  // 2. Event Handler function jo click hone par count +1 karega
  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div style={{ margin: "20px 0" }}>
      <button
        onClick={handleLike}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        ❤️ Like: {likes}
      </button>
    </div>
  );
}

export default LikeButton;
