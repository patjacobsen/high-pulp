import { addFilter } from "@wordpress/hooks";

function addBorderDiv(element, blockType, attributes) {
  let divStyles = {
	  borderStyle: attributes.bcBorderStyle || "none",
	  borderWidth: (attributes.bcBorderWidth || 2) + "px",
	  borderRadius: (attributes.bcBorderRadius || 0 + "px"),
	  borderColor: "black",
	  padding: (attributes.bcPadding || 10) + "px",
  };

  // WARNING!!!
  // This will invalidate all existing blocks, because now you've
  // changed their save content. Only do this for blocks
  // within your namespace.

  // This also only works for static blocks.
  return (
    <div className="border-control" style={divStyles}>
      {element}
    </div>
  );
}

addFilter(
  "blocks.getSaveElement",
  "pj/border-control/add-border-element",
  addBorderDiv,
);
