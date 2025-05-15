import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Cards from "./Cards";


//create your first component
const Home = () => {
	return (

		<div> 
			<Navbar/>
			<Jumbotron/>
			<div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
			<Cards titulo="First Photo Random" imagen="https://picsum.photos/200/300?random=1" text="I didn’t plan this, and that’s the best part. Some of the greatest adventures begin with no expectations — just curiosity, a camera, and an open mind. Where to next?
#Wanderlust #RandomAdventures #LostAndLovingIt" />
			<Cards titulo="Second Photo Random" imagen="https://picsum.photos/200/300?random=2" text="A splash of color, a dash of light, and a moment you’ll never quite recreate. This photo wasn’t staged — it just happened. That’s the kind of magic I live for.
#CapturedChaos #VisualPoetry #RandomBeauty" />
			<Cards titulo="Third Photo Random" imagen="https://picsum.photos/200/300?random=3" text="I had absolutely no idea what I was doing here, but I looked cool doing it — and that’s what really matters. Life’s too short to take seriously all the time.
#RandomButCool #IDidMyBest #UnplannedPerfection" />
			<Cards titulo="Fourth Photo Random" imagen="https://picsum.photos/200/300?random=4" text="Sometimes the most random moments become the most unforgettable memories. Life isn't always about plans — it's about being present, embracing the unexpected, and finding beauty in the chaos. Here's to the little things that make life feel big.
#LiveInTheMoment #RandomVibes #GratefulHeart" />
			</div>
		</div>
	);
};

export default Home;