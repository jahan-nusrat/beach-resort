import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeatureRoom from '../components/FeatureRoom';

function Home () {
	return (
		<>
		<Hero>
			<Banner>
				<Link to="/rooms" className="btn-primary">
					our rooms
				</Link>
			</Banner>
		</Hero>
		<Services />
		<FeatureRoom />
		</>
	);
}

export default Home;
