import {addFilter} from "@wordpress/hooks";

function addBorderAttributes(settings, name) {
	// settings is the object used to declare the block
	// name is the name of the block (if you wanted to apply this only certain blocks)

	// append the settings
	settings.attributes.bcBorderStyle = {
		type: "string",
		default: "",
	};

	settings.attributes.bcPadding = {
		type: "number",
		default: 10,
	};

	settings.attributes.bcBorderWidth = {
		type: "number",
		default: 2,
	};

	settings.attributes.bcBorderRadius = {
		type: "number",
		default: 5,
	};

	settings.attributes.bcBorderColor = {
		type: "string",
		default: "black",
	};

	// (modify any additional settings)

	return settings;
}

addFilter(
	"blocks.registerBlockType",
	"pj/border-control/add-border-attributes",
	addBorderAttributes,
);
