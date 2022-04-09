import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Care Respect Lust Anger Pain Sacrifice</span>
        <span className="mid">in</span>
        <span className="headerTitleLg">LOVE</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/4065880/pexels-photo-4065880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
    </div>
  );
}
