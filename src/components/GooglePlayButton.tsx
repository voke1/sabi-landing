import { playStoreUrl } from "../data/site-data";

type GooglePlayButtonProps = {
	className?: string;
	label?: string;
};

export function GooglePlayButton({ className = "", label = "Google Play" }: GooglePlayButtonProps) {
	return (
		<a className={`google-play-button ${className}`.trim()} href={playStoreUrl} target="_blank" rel="noreferrer">
			<span className="play-mark" aria-hidden="true">
				<span className="play-mark-green" />
				<span className="play-mark-blue" />
				<span className="play-mark-yellow" />
				<span className="play-mark-red" />
			</span>
			<span className="play-button-copy">
				<span>Get it on</span>
				<strong>{label}</strong>
			</span>
		</a>
	);
}
