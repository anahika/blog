import React from "react";

export const renderContent = (text) => {
  const lines = text
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line !== "");

  return lines.map((line, index) => {
    // Handle headings
    const headingLevel = line.match(/^(#+)\s+(.*)$/);
    if (headingLevel) {
      const level = headingLevel[1].length;
      const content = headingLevel[2];
      return React.createElement(`h${level}`, { key: index }, content);
    }

    // Handle bold text using replace
    const formattedLine = line.split(/\*\*(.*?)\*\*/g).map((part, i) => {
      if (i % 2 === 1) {
        return (
          <strong key={i} style={{ fontWeight: "bold", color: "#990000" }}>
            {part}
          </strong>
        );
      }
      return part;
    });

    return <p key={index}>{formattedLine}</p>;
  });
};

export const limitRenderedContent = (elements, limit) => {
  const limitedElements = [];
  let characterCount = 0;

  // Function to extract text from React children
  const extractText = (child) => {
    if (typeof child === "string") return child;
    if (React.isValidElement(child)) {
      return React.Children.map(child.props.children, extractText).join("");
    }
    return "";
  };

  // Iterate through each element to count characters
  for (const element of elements) {
    const textContent = extractText(element);
    const textLength = textContent.length;

    // Check if adding this element exceeds the limit
    if (characterCount + textLength > limit) {
      const remaining = limit - characterCount;
      const truncatedText = textContent.slice(0, remaining);

      // If there's truncated text, push it into the array
      if (truncatedText) {
        limitedElements.push(
          <span key={limitedElements.length}>{truncatedText}</span>
        );
      }
      // Add ellipsis if we've truncated text
      limitedElements.push(<span key="ellipsis">...</span>);
      break;
    }

    // If we haven't exceeded the limit, add the entire element
    limitedElements.push(element);
    characterCount += textLength;

    if (characterCount >= limit) {
      break;
    }
  }

  return limitedElements;
};
