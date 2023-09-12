import vector from '../../public/images/Vector.png'
import Egol from '../../public/images/Egol.svg'
import Image from "next/image";
import { FiGithub, FiFacebook, FiTwitter } from 'react-icons/fi';
import { TbBrandLinkedin } from 'react-icons/tb';




export default function Footer() {

    return (
        <div className={' absolute bg-[#090413] w-full h-[200px] flex justify-end items-center flex-col '}>
            <Image src={vector} alt={'vector'} className={'w-full relative top-32 z-50 stroke-2'}/>
            <Image src={Egol} alt={'Egol'} className={'h-36 relative top-16 right-[-163px]'}/>
            <div className={'flex items-center w-full text-[#CBD5E1] flex-col mt-3 p-5 gap-2'}>
            <div className={'flex-row flex'}>
                <FiGithub size={25}/>
                <TbBrandLinkedin size={25}/>
                <FiFacebook size={25}/>
                <FiTwitter size={25}/>
            </div>
                <p>
                    © Copyright 2023, Lidor Lazar
                </p>
            </div>

        </div>
    )
}