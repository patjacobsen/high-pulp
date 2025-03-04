import React from "react";
import {InspectorControls, PanelColorSettings} from "@wordpress/block-editor";
import {ColorPalette, ColorPicker, PanelBody, PanelRow} from "@wordpress/components";
import colors from "../../common/colors";

export default function BlockSettings({attributes, setAttributes}){

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
				<PanelColorSettings
					title="Color"
					colorSettings={[
						{
							value: attributes.textColor,
							onChange: textColor => setAttributes({textColor}),
							label: "Text",
						},
						{
							value: attributes.backgroundColor,
							onChange: backgroundColor => setAttributes({backgroundColor}),
							label: 'Background',
						},
					]}
				/>
			</PanelBody>
		</InspectorControls>
	)
}
