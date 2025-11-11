import { InteractiveShowroom } from '@/components/InteractiveShowroom';

const InteractiveCatalogPage = () => {
	return (
		<div className='min-h-screen'>
			<InteractiveShowroom
				baseImageUrl='https://i.imgur.com/1betuSZ.png'
				maskImageUrl='https://i.imgur.com/oH39Enw.png'
				defaultColor='#8B4513'
				width={800}
				height={600}
				onColorChange={(color) => console.log('Color:', color)}
			/>
		</div>
	);
};

export default InteractiveCatalogPage;
