import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import Col from '../comps/Layout/Col';
import Container from '../comps/Layout/Container';
import Menu from '../comps/Menu';

import Image2 from '/public/cta.svg';
import Image1 from '/public/Pano2.jpg';

const Page: NextPage = () => {
	let topSpacing = 'mt-3';

	const handleButton = (value: boolean) => {
		topSpacing = '';
	};

	return (
		<div className="bg-[#070D31]">
			<Head>
				<title>Caracal Agency</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Container className="flex relative max-sm:overflow-hidden">
				{/* MENU COMP */}
				<Col colStart={[2, 2, 2, 2]} colEnd={[26, null, 26, 26]}>
					<Menu onButtonUpdate={handleButton} />
				</Col>
				{/* DESKTOP SCREEN */}
				<Col className="hidden md:block mt-[15vh]" colStart={[2, null, 3, 3]} colEnd={[26, null, 19, 19]}>
					<h1 className="text-[#fff] text-[72px] leading-[79px] font-bold font-jetbrains">NEARLY A CENTURY DRIVEN BY A PASSION FOR EXCELLENCE</h1>
				</Col>
				{/* PHONE SCREEN */}
				<Col className="hidden max-sm:block mt-[5vh]" colStart={[2, null, 3, 3]} colEnd={[26, null, 19, 19]}>
					<h1 className="text-[#fff] w-[360px] text-[56px] leading-[61px] font-bold font-jetbrains">NEARLY A CENTURY DRIVEN BY A PASSION FOR EXCELLENCE</h1>
				</Col>
				{/* DESKTOP SCREEN */}
				<Col className="hidden mt-[10vh] md:block" colStart={[null, null, null, null, 15, 14]} colEnd={[null, null, null, null, 22, 22]}>
					<h2 className="text-[#fff] leading-[56px] font-bold text-[48px] tracking-[-.03em] font-jetbrains">OUR VISION</h2>
				</Col>
				{/* PHONE SCREEN */}
				<Col className="hidden max-sm:block mt-[5vh]" colStart={[1, 1, 2, 2]} colEnd={[27]}>
					<Image className="w-full h-[235px] w-[554px] h-[376px]" src={Image1} alt="image" />
				</Col>
				{/* ALL SCREEN */}
				<Col className="md:mt-[10vh]" colStart={[2, 2, 2, 2]} colEnd={[24, 24, 26, 26]}>
					<div className="flex max-sm:flex-col">
						{/*DESKTOP SCREEN */}
						<Image className="hidden lg:block w-[554px] h-[376px]" src={Image1} alt="image" />
						{/* PHONE SCREEN */}
						<h2 className=" md:hidden mt-[5vh] text-[#fff] leading-[56px] font-bold text-[40px] tracking-[-.03em] font-jetbrains">OUR VISION</h2>
						{/* MAC SCREEN */}
						<div className="w-[111px] hidden xl:max-2xl:block h-[1px] bg-[#fff] mt-3" style={{ marginLeft: 'calc((100vw / 27) * 2)' }}></div>
						{/* Imac SCREEN */}
						<div className="w-[111px] hidden 2xl:block h-[1px] bg-[#fff] mt-3" style={{ marginLeft: 'calc((100vw / 27) * 1.6)' }}></div>
						{/* PHONE SCREEN */}
						<div className="w-[111px] hidden max-sm:block h-[2px] h-[1px] bg-[#fff] mt-[3vh]"></div>
						<div className="md:block md:w-[443px]">
							{/* Imac SCREEN */}
							<h2
								className="hidden 2xl:block text-[#8BC0F1] leading-[36px] font-normal text-[26px] tracking-[-.02em] font-karla w-[443px]"
								style={{ marginLeft: 'calc((100vw / 27) * 0.8)' }}
							>
								Our corporate vision for the future is based on the secure foundation of experience and tradition.
							</h2>
							{/* MAC SCREEN */}
							<h2
								className="hidden xl:max-2xl:block text-[#8BC0F1] leading-[36px] font-normal text-[26px] tracking-[-.02em] font-karla w-[443px]"
								style={{ marginLeft: 'calc((100vw / 27) * 1.1)' }}
							>
								Our corporate vision for the future is based on the secure foundation of experience and tradition.
							</h2>
							{/* PHONE SCREEN */}
							<h2 className="hidden max-sm:block mt-[3vh] text-[#8BC0F1] leading-[34px] font-normal text-[24px] tracking-[-.02em] font-karla">
								Our corporate vision for the future is based on the secure foundation of experience and tradition.
							</h2>
							{/* Imac SCREEN */}
							<p className="hidden 2xl:block mt-[50px] text-[#C9D6DD] leading-[28px] font-normal text-[16px] font-karla w-[443px]" style={{ marginLeft: 'calc((100vw / 27) * 0.8)' }}>
								Flexibility and adaptability are vital to our company’s future. We will invest in new technologies where appropriate and adopt an evolutionary approach for our tools
								and services. Our aim is to respond efficiently and effectively to new markets in a multicultural context.
							</p>
							{/* MAC SCREEN */}
							<p
								className="hidden xl:max-2xl:block mt-[50px] text-[#C9D6DD] leading-[28px] font-normal text-[16px] font-karla w-[443px]"
								style={{ marginLeft: 'calc((100vw / 27) * 1.1)' }}
							>
								Flexibility and adaptability are vital to our company’s future. We will invest in new technologies where appropriate and adopt an evolutionary approach for our tools
								and services. Our aim is to respond efficiently and effectively to new markets in a multicultural context.
							</p>
							{/* PHONE SCREEN */}
							<p className="hidden max-sm:block mt-[3vh] text-[#C9D6DD] leading-[28px] font-normal text-[16px] font-karla w-[360px]">
								Flexibility and adaptability are vital to our company’s future. We will invest in new technologies where appropriate and adopt an evolutionary approach for our tools
								and services. Our aim is to respond efficiently and effectively to new markets in a multicultural context.
							</p>
						</div>
					</div>
				</Col>
				{/* DESKTOP SCREEN */}
				<Col className="hidden lg:block mt-[10vh]" colStart={[3]} colEnd={[27]}>
					<div className="flex items-center bg-[#8BC0F1] w-full h-[242px]">
						<div className="flex items-center bg-[#8BC0F1] w-full h-[242px]">
							<div className="flex items-center">
								<div className="w-[1px] h-[134px] bg-[#488BBC] mt-3" style={{ marginLeft: 'calc((100vw / 27) * 2)' }}></div>
								<h2 className="w-[515px] text-[#fff] leading-[40px] font-normal text-[32px] tracking-[-.02em] font-karla" style={{ marginLeft: 'calc((100vw / 27) * 1)' }}>
									Are you looking for a reference partner to develop your mobility activities?
								</h2>
							</div>
							<Image style={{ marginLeft: 'calc((100vw / 27) * 4)' }} src={Image2} width={254} height={62} alt="arrow" />
						</div>
					</div>
				</Col>
				{/* PHONE SCREEN */}
				<Col className="hidden max-sm:block mt-[5vh]" colStart={[1]} colEnd={[27]}>
					<div className="flex bg-[#8BC0F1] w-full flex-col">
						<div className="flex items-center mt-[5vh]">
							<div className="w-[1px] h-[134px] bg-[#488BBC] mt-3" style={{ marginLeft: 'calc((100vw / 27) * 2)' }}></div>
							<h2 className="w-[300px] text-[#fff] leading-[40px] font-normal text-[32px] tracking-[-.02em] font-karla" style={{ marginLeft: 'calc((100vw / 27) * 1)' }}>
								Are you looking for a reference partner to develop your mobility activities?
							</h2>
						</div>
						<Image className="mt-[5vh] mb-[5vh]" style={{ marginLeft: 'calc((100vw / 27) * 2)' }} src={Image2} width={254} height={62} alt="arrow" />
					</div>
				</Col>
			</Container>
		</div>
	);
};

export default Page;

// calc((100vw / 27) * 2)
