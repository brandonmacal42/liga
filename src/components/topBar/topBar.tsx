import "./topBar.scss";

interface TopBarProps {
  text?: string;
}

function TopBar({ text = "Liga" }: TopBarProps) {
  return (
    <div className="topBar">
      <h1>{text}</h1>
    </div>
  );
}

export default TopBar;
