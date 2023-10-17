import { useState } from "react";


function TextExpander({
  collapsedNumWords = 10,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonColor = "#1f09cd",
  expanded = false,
  className,
  children
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const displayText = isExpanded
    ? children
    : children.split(" ").slice(0, collapsedNumWords).join(" ") + "...";

  const buttonStyle = {
    background: "none",
    border: "none",
    font: "inherit",
    cursor: "pointer",
    marginLeft: "6px",
    color: buttonColor
  };

  return (
    <div className={className}>
      <span>{displayText}</span>
      <button onClick={() => setIsExpanded((exp) => !exp)} style={buttonStyle}>
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}


export default TextExpander;


// example to use
// <TextExpander
// collapsedNumWords={20}
// expandButtonText="Show text"
// collapseButtonText="Collapse text"
// buttonColor="#ff6622"
// >
// Space travel requires some seriously amazing technology and
// collaboration between countries, private companies, and international
// space organizations. And while it's not always easy (or cheap), the
// results are out of this world. Think about the first time humans stepped
// foot on the moon or when rovers were sent to roam around on Mars.
// </TextExpander>

// <TextExpander expanded={true} className="box">
// Space missions have given us incredible insights into our universe and
// have inspired future generations to keep reaching for the stars. Space
// travel is a pretty cool thing to think about. Who knows what we'll
// discover next!
// </TextExpander>



