/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {PlainText, RichText, useBlockProps} from '@wordpress/block-editor';
import StarRating from "../../components/StarRating"
/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save({attributes}) {
	// building stars
	let stars='';
	for(let i=0; i < attributes.stars; i++){
		stars += '★'
	}
	const divStyles = {
		'--pj-testimonial-bg-color': attributes.backgroundColor,
		color: attributes.textColor,
	}
	return (
		<div {...useBlockProps.save({style: divStyles})} >
			<div className="stars">{ stars }</div>
			<RichText.Content
				tagName="div"
				className="quote"
				value={attributes.quote}
			/>
			<div className="quote-profile">
				<div className="photo">
					<img src={attributes.avatarURL} alt={"Photo of " + attributes.author}/></div>
				<div className="text">
					<p className="author">{attributes.author}</p>
					<p className="location">Point Place, Wi</p>
				</div>
			</div>
		</div>
	);
}
