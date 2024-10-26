import React from "react";
import clsx from "clsx";
import Marquee from "../../components/ui/magicui/marquee";
import Image from "next/image";

const reviews = [
	{
		name: "Francois Douillette",
		body: "Déjeuner tellement délicieux! Frais, goûteux, présentation superbe. Situé dans un beau petit quartier. Service 🤩Terrasse, belle atmosphère.",
		img: "https://lh3.googleusercontent.com/a/ACg8ocK0VF4K3gSqWlIu0sxJ9oKNXu0xfkhUA86SU7FporlZFowTfw=w132-h132-p-rp-mo-br100",
	},
	{
		name: "Virginie Côté - Kinésiologue & Posturologue",
		body: "Honnêtement, c’est le meilleur resto déjeuner de MTL! La nourriture est savoureuse et originale, les employés sont souriants et efficaces, et l’endroit est chaleureux. J’aime particulièrement les oeufs bénédictines. Les poutines dejs sont également un régal!",
		img: "https://lh3.googleusercontent.com/a-/ALV-UjVk9pbKPfIebCfa0r0bHpx5Lrf_pi9AZXj42fnbDKV2TMAWlTb3=w132-h132-p-rp-mo-ba3-br100",
	},
	{
		name: "Tristan",
		body: "Ça fait maintenant plus de 10 fois que je viens et que je commande des trucs différents, et c’est vraiment trop bon à chaque fois. Ils innovent avec des plats qui changent. Mon restaurant de brunch préféré! ❤️",
		img: "https://lh3.googleusercontent.com/a/ACg8ocIdIX0qLgotKGJttgo9h2qjPrJzqQJDB1QB_tlmQFwOTWl1Ydz7=w132-h132-p-rp-mo-ba5-br100",
	},
	{
		name: "Marie-Carmen Dallaire",
		body: "Nous avons essayé cet endroit pour la première fois et c’était délicieux. Les plats sont originaux et succulents, sans oublier le café qui était très bon. L’accueil était chaleureux et le service était super.",
		img: "https://lh3.googleusercontent.com/a-/ALV-UjVU7dxzjVKNkzRr23uVILEIjb69p7PvPva1XWqyZMqBALrc7Sgi=w132-h132-p-rp-mo-ba2-br100",
	},
	{
		name: "Capucine",
		body: "Malgré une loooongue attente, il faut s’y attendre pour un brunch le dimanche. Personnel très agréable, plats généreux et délicieux! Café filtre à volonté et déco vraiment cute.",
		img: "https://lh3.googleusercontent.com/a-/ALV-UjWNjRqF9FKu3B0aQq7hRABYvxmJSAVtfJ13MhN9xQ1-sgRbJFpo=w132-h132-p-rp-mo-ba4-br100",
	},

	{
		name: "Jean-Francois",
		body: "Tout est excellent : menu varié, trucs différents, mocktails du matin, bon café, patates à se jeter par terre, wow!",
		img: "https://lh3.googleusercontent.com/a/ACg8ocLkOXk9ItRu1syy0onPxWzYYQkj6hiYPROdVGXa18liiMG9qQ=w132-h132-p-rp-mo-ba5-br100",
	},
	{
		name: "Marie Soleil",
		body: "Très bon resto de brunch! Le menu change à chaque deux mois, ce qui crée beaucoup de variété. La nourriture est excellente, tout comme le service. Le resto est relativement petit, donc il faut arriver tôt sinon l'attente peut être longue.",
		img: "https://lh3.googleusercontent.com/a-/ALV-UjVlLkIb52XwH2enTLVxW7jmvSy3_35w5RvgUxYkSmowWLRi7opt=w132-h132-p-rp-mo-br100",
	},
	{
		name: "Alysee",
		body: "Superbe place de brunchs! Le menu change très souvent selon les saisons et c'est toujours aussi bon. Des produits frais et toujours faits avec le coeur!",
		img: "https://lh3.googleusercontent.com/a/ACg8ocICuYE8cd2T5VHNe_yTwOiSr6ZMEVaU6M49cP-mtFsmF-Wwaiw=w132-h132-p-rp-mo-ba3-br100",
	},
	{
		name: "Tetiana Azarenko",
		body: "Very good place to have breakfast. The food is very fresh and tasty, with many options on the menu. In the morning it’s quite busy, which is probably why it took 45 minutes to get our food, but it was worth it. The latte is huge, and I had a great croissant sandwich.",
		img: "https://lh3.googleusercontent.com/a-/ALV-UjUip7hlcKFwjOiXpCv7ZWuwHaXBG4Np1aGcB1TiiAfHSTE_xwuz=w79-h79-p-rp-mo-ba3-br100",
	},
	{
		name: "Elisa",
		body: "This is the perfect inviting and friendly neighborhood restaurant for breakfast or brunch. The menu rotates and offers tasty flavors for everyone, including vegans. The lattes were a hit! The food was beautifully plated and delicious. I look forward to my next brunch here!",
		img: "https://lh3.googleusercontent.com/a-/ALV-UjUmAmcGN752xMSwcP2DBmcOjwjH7etujs5LPaz_soMudI1eVELV=w66-h66-p-rp-mo-ba5-br100",
	},
	{
		name: "Lashaan Balasingam",
		body: "A remarkable and welcoming spot offering breakfast and brunch! The dishes are mouth-watering and beautifully presented. Service was wonderful, making me want to return every day! Their seasonal menus with creative options are even more tempting!",
		img: "https://lh3.googleusercontent.com/a-/ALV-UjV6DIcKolkLyoskDnz9_3lh2yAo968UEYfOx_Sd70NTkyKj9SdS=w66-h66-p-rp-mo-ba3-br100",
	},
	{
		name: "Sabreena",
		body: "We went for breakfast on a Saturday morning. It was busy, so we waited 30 minutes, but it was totally worth it! The food was AMAZING, and the drinks were delightful. This is my new go-to breakfast spot!",
		img: "https://lh3.googleusercontent.com/a-/ALV-UjWdcNfjWujmWHJk_5X1EMHNedtaVDeK3l43DNFcz9-M5GT7qbCu=w66-h66-p-rp-mo-ba4-br100",
	},
	{
		name: "Norah Galea",
		body: "I’ve switched accounts just to leave another review! This place has only gotten better. My current recommendation is the pumpkin spice latte—it’s absolutely delicious. You can’t go wrong with any food choice here!",
		img: "https://lh3.googleusercontent.com/a/ACg8ocKBoMEc7CxP0hncsVjpbnRYTG97fyjAj2sWWimyzQGn658A=w66-h66-p-rp-mo-br100",
	},
	{
		name: "Dorina R",
		body: "Amazing breakfast spot in Villeray! The food is excellent and changes with the seasons. Staff are super friendly, and their lavender latte is so delicious! Only downside is it’s tiny and gets packed fast.",
		img: "https://lh3.googleusercontent.com/a/ACg8ocJbN3kBmKSGlCxAGnHfbbROGcRmFfCFJmtwmNAc8VGLmqGoAA=w66-h66-p-rp-mo-ba3-br100",
	},
	{
		name: "Shadee",
		body: "Small & cute restaurant with impeccable service. The waitress made sure we had everything we needed. The food tasted amazing, with fresh ingredients and interesting flavors. I think I’ve found my new go-to brunch spot in the area.",
		img: "https://lh3.googleusercontent.com/a-/ALV-UjVtHzKyV7RixgfwL_YUb3liCuDqBHk6BNm2ydFH4nkpmCPRrw=w66-h66-p-rp-mo-ba4-br100",
	},
	{
		name: "Priscillia Gilbert-Paquin",
		body: "They have a whole vegan menu, and everything we tried was delicious! Fresh ingredients, great portions, and creative dishes. My parents were also happy with the omnivore selection. I will definitely be back.",
		img: "https://lh3.googleusercontent.com/a-/ALV-UjU5AGuqE967fGnbZ94MW9Lv1rn1e2aOVW5jcBNniJXnZ3NrakoCBQ=w66-h66-p-rp-mo-ba2-br100",
	},
	// Add additional reviews here if needed.
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
/**
 * @typedef {import("@prismicio/client").Content.TestimonialsMarqueeSlice} TestimonialsMarqueeSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TestimonialsMarqueeSlice>} TestimonialsMarqueeProps
 * @param { TestimonialsMarqueeProps }
 */
const TestimonialsMarquee = ({ slice }) => (
	<section className="my-20 mb-34">
		<div className="mx-auto max-w-2xl text-center">
			<h2 className="dark:text-white mt-6 text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:mt-8 lg:text-5xl">
				{slice.primary.title}
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

export default TestimonialsMarquee;
