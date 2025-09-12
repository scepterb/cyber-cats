import { useState } from "react";

/* New TS type alias that combines all the normal <a> props (href, target...) with "tooltip" */
type TooltipLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    tooltip: string;
};

export default function TooltipLink({tooltip, children, ...props}: TooltipLinkProps) {
  // defaults to false so that the tooltip is not visible:
  const [visible, setVisible] = useState(false);     
  const [pos, setPos] = useState({ x: 0, y: 0});

  const show = () => setVisible(true);
  const hide = () => setVisible(false);
  const move = (e: React.MouseEvent) => {
    setPos({x: e.pageX, y: e.pageY})
  };

  return (
    <>
      <a
        {...props}
        onMouseEnter={show}
        onMouseLeave={hide}
        onMouseMove={move}
        style={ {position: "relative"} }
      >
        {children}
      </a>

      { /* Credit: ChatGPT */ }
      {visible && (
        <span 
          className="tooltip"
          style={{position: "absolute", left: pos.x + 12, top: pos.y + 12}}
        > 
          {tooltip} 
        </span>
      )}
    </>
  )
}