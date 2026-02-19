import "./topBar.scss";

interface TopBarProps {
  text1?: string;
  text2?: string;
}

function TopBar({
  text1 = "Envíos gratis en compras mayores a $999",
  text2 = "Nueva colección disponible ahora",
}: TopBarProps) {
  return (
    <div className="topBar">
      <div className="scroll-box">
        <div className="scroll-content">
          <span>{text1}</span>
          <span className="separator">•</span>
          <span>{text2}</span>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
