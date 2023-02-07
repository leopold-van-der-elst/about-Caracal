import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';

import Burger from '/public/Burger.svg';
import Logo from '/public/Frame.svg';

interface Props {
	onButtonUpdate: (value: boolean) => void;
}

const Menu = ({ onButtonUpdate }: Props) => {
	const [button, setButton] = useState(true);

	const handleClick = () => {
		setButton(!button);
		onButtonUpdate(button);
	};
	return (
		<div className="p-2">
			<div className="flex justify-between items-center w-full">
				<Image className="hidden md:block z-10" src={Logo} alt="test" width={209.95} height={24.8} />
				<div className="flex items-center w-full justify-end z-10">
					<ul className="flex">
						<li className="hidden md:block text-[#fff] font-bold tracking-[.15em] text-md font-karla mr-10">Home</li>
						<li className="hidden md:block text-[#fff] font-bold tracking-[.15em] text-md font-karla mr-10">About</li>
						<li className="hidden md:block text-[#fff] font-bold tracking-[.15em] text-md font-karla mr-10">History</li>
						<li className="hidden md:block text-[#fff] font-bold tracking-[.15em] text-md font-karla mr-10">Philantropy</li>
					</ul>
					<div className="items-center justify-center hidden md:flex bg-[#fff] rounded-full w-[124px] h-[38px]">
						<span className="font-bold tracking-[.20em] text-sm font-jetbrains text-[#000]">CONTACT</span>
					</div>
				</div>
			</div>
			{/*  mobile version */}
			{button ? (
				<div className="flex justify-between items-center w-full">
					<Image className=" md:hidden z-10" src={Logo} alt="test" width={209.95} height={24.8} />
					<div className="z-10">
						<motion.div
							onClick={() => handleClick()}
							whileHover={{ scale: 1, rotate: 45 }}
							whileTap={{
								scale: 0.8,
								rotate: -45,
								borderRadius: '100%',
							}}
						>
							<Image className=" md:hidden z-10" src={Burger} alt="test" width={50} height={50} />
						</motion.div>
					</div>
				</div>
			) : (
				<div className="flex justify-between items-center w-full ">
					<Image className=" md:hidden z-10" src={Logo} alt="test" width={209.95} height={24.8} />
					<div className="z-10">
						<motion.div
							onClick={() => handleClick()}
							whileHover={{ scale: 1, rotate: 45 }}
							whileTap={{
								scale: 0.8,
								rotate: -45,
								borderRadius: '100%',
							}}
						>
							<Image className=" md:hidden z-10" src={Burger} alt="test" width={50} height={50} />
						</motion.div>
					</div>
					<motion.div
						className="box max-sm:z-0 bg-[#070D31] w-screen h-screen absolute top-[65px] left-0 md:hidden flex flex-col items-center"
						initial={{ opacity: 1, scale: 1 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							duration: 2,
							ease: [0, 0.71, 0.2, 1.01],
						}}
					>
						<ul className="">
							<li className="text-white p-8 border-y border-[#344054] w-screen">Home</li>
							<li className="text-white p-8 border-b border-[#344054] w-screen">About</li>
							<li className="text-white p-8 border-b border-[#344054] w-screen">History</li>
							<li className="text-white p-8 border-b border-[#344054] w-screen">Philanthropy</li>
						</ul>
						<li className="self-center border border-[#9bb6ed p-6 rounded-full items-center w-11/12 justify-between flex mt-8">
							<span className="text-white font-bold ml-3">Démarrer un projet</span>
							<span className="text-white font-bold mr-3">→</span>
						</li>
					</motion.div>
				</div>
			)}
		</div>
	);
};

export default Menu;
