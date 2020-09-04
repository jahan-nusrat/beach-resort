import React, { Component } from 'react';
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

class Services extends Component {
	state = {
		services : [
			{
				icon  : <FaCocktail />,
				title : 'Free Cocktails',
				info  : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam possimus.'
			},
			{
				icon  : <FaHiking />,
				title : 'Endless Hikings',
				info  : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam possimus.'
			},
			{
				icon  : <FaShuttleVan />,
				title : 'Free Shuttles',
				info  : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam possimus.'
			},
			{
				icon  : <FaBeer />,
				title : 'Strongest Beer',
				info  : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam possimus.'
			}
		]
	};
	render () {
		return (
			<section className="services">
				<Title title="services" />
				<div className="services-center">
					{this.state.services.map((items, index) => {
						return (
							<article key={index} className="service">
								<span>{items.icon}</span>
								<h6>{items.title}</h6>
								<p>{items.info}</p>
							</article>
						);
					})}
				</div>
			</section>
		);
	}
}

export default Services;
