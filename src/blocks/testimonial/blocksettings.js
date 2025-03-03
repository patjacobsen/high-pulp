import React from "react";
import {InspectorControls} from "@wordpress/block-editor";
import {ColorPalette, ColorPicker, PanelBody, PanelRow} from "@wordpress/components";
import colors from "../../common/colors";

export default function BlockSettings(){

	return (
		<InspectorControls>
			<PanelBody title="Basic" initialOpen={true}>
				<PanelRow>
					<h4>Quote Background Colors</h4>
					<PanelRow>
						<ColorPalette
							colors={colors}
							value={attributes.backgroundColor}
							onChange={backgroundColor => setAttributes({backgroundColor})}
							disableCustomColors={true}
						/>
					</PanelRow>
				</PanelRow>
				<PanelRow>
					<h4>Quote Text Color</h4>
					<PanelRow>
						<ColorPicker
							color={attributes.textColor}
							onChange={textColor => setAttributes({textColor})}
						/>
					</PanelRow>
				</PanelRow>
			</PanelBody>
		</InspectorControls>
	)
}
