export function BackGround() {
    return (
      <div className="stars">
        {Array.from({ length: 70 }).map((_, index) => (
          <div key={index} className="star"></div>
        ))}
      </div>
    );
  };
