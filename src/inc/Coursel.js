import React from "react";
import { Link } from 'react-router-dom';
import { Slideshow, Slide, TextoSlide } from '../controllers/Slideshow';
import '../styles/Coursel.css';
import img1 from '../img/1.jpg';
import img2 from '../img/2.jpg';
import img3 from '../img/3.jpg';
import img4 from '../img/4.jpg';

const Coursel = () => {
	return (
		<main>
			<Slideshow controles={true} autoplay={true} velocidad="3000" intervalo="5000">
				<Slide>
					< Link to="/products">
						<img src={img1} alt="" />
					</Link>

					<TextoSlide colorFondo="navy">
						<div>15% descuento en productos Apple</div>
					</TextoSlide>
				</Slide>
				<Slide>
					< Link to="/products">
						<img src={img2} alt="" />
					</Link>

					<TextoSlide>
						<p>15% descuento en productos Apple</p>
					</TextoSlide>
				</Slide>
				<Slide>
					< Link to="/products">
						<img src={img3} alt="" />
					</Link>

					<TextoSlide>
						<p>15% descuento en productos Apple</p>
					</TextoSlide>
				</Slide>
				<Slide>
					< Link to="/products">
						<img src={img4} alt="" />
					</Link>

					<TextoSlide>
						<p>15% descuento en productos Apple</p>
					</TextoSlide>
				</Slide>
			</Slideshow>
		</main>
	);
}


export default Coursel;