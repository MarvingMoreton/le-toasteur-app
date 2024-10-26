import clsx from "clsx";
import Marquee from "../magicui/marquee";
import Image from "next/image";

const reviews = [
	{
		name: "Max Eccles",
		username: "@maxecc",
		body: "Marving's audit was game-changing for Remote Marketer Jobs. Precise, actionable, and efficient insights that propelled our brand's reach!",
		img: "https://images.prismic.io/marvingg/ZsfM80aF0TcGJUei_maxecl.jpg?auto=format,compress",
	},
	{
		name: "Pascal Dupeyrat",
		username: "",
		body: "Square, efficient and professional! A real pleasure to work with Marving",
		img: "https://images.prismic.io/marvingg/ZsfOX0aF0TcGJUgO_pascal-dupeyrat-relians.jpeg?auto=format,compress",
	},
	{
		name: "Jeremy Comparato",
		username: "",
		body: "Having worked alongside Marving in the SEO trenches, I can attest to his deep expertise and innovative approach.",
		img: "https://images.prismic.io/marvingg/ZsfOYEaF0TcGJUgP_jeremy-comparato-seo.jpeg?auto=format,compress",
	},
	// Additional reviews here...
];

const firstRow = reviews.slice(0, Math.floor(reviews.length / 2));
const secondRow = reviews.slice(Math.floor(reviews.length / 2));

const ReviewCard = ({ img, name, username, body }) => {
	return (
		<figure
			className={clsx(
				"relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
				"border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
				"dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
			)}
		>
			<div className="flex flex-row items-center gap-2">
				{typeof img === "string" ? (
					<Image
						className="rounded-full"
						width="32"
						height="32"
						alt=""
						src={img}
					/>
				) : (
					<img
						className="rounded-full"
						width="32"
						height="32"
						alt=""
						src={img}
					/>
				)}
				<div className="flex flex-col">
					<figcaption className="text-sm font-medium dark:text-zinc-50">
						{name}
					</figcaption>
					<p className="text-xs font-medium dark:text-zinc-50/40">{username}</p>
				</div>
			</div>
			<blockquote className="mt-2 text-sm">{body}</blockquote>
		</figure>
	);
};

const TestimonialsMarquee = () => {
	return (
		<section className="my-20">
			<div className="mx-auto max-w-2xl text-center">
				<h2 className="dark:text-white mt-6 text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:mt-8 lg:text-5xl">
					{"Real results, real stories"}
				</h2>
			</div>

			<div className="mt-10 relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg ">
				<Marquee pauseOnHover className="[--duration:20s]">
					{firstRow.map((review, index) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<ReviewCard key={index} {...review} />
					))}
				</Marquee>
				<Marquee reverse pauseOnHover className="[--duration:20s]">
					{secondRow.map((review, index) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<ReviewCard key={index} {...review} />
					))}
				</Marquee>
				<div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r dark:from-black from-white" />
				<div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l dark:from-black from-white" />
			</div>

		</section>
	);
};

export default TestimonialsMarquee;
