
import { IoIosArrowRoundForward } from 'react-icons/io';



export default function ContactMe(){


    return(
        <div className={'flex flex-col bg-[#090413] h-full w-full gap-10 py-10'}>
            <div className={'flex justify-center items-center flex-col text-center gap-10'}>
                <span>
                    <h1 className={'text-[#2F2249] opacity-[0.2] text-7xl'}>
                        Contact
                    </h1>
                </span>

                <p className={'text-white text-4xl'}>
                    Have a project ? <br/>
                    Let’s discuss !
                </p>
                <p className={'text-white px-20'}>
                    Thank you for getting in touch! Kindly fill the form, have a great day!
                </p>
            </div>
            <div className={'flex justify-center flex-col items-center w-full gap-5'}>
                <input placeholder={'Your Name'} className={"text-lg h-full w-10/12 peer bg-transparent border-b border-white outline outline-0 transition-all disabled:border-0 disabled:bg-blue-gray-50 focus:border-[#FF3D00]"}/>
                <input placeholder={'Your Email'} className={"text-lg h-full w-10/12 peer bg-transparent border-b border-white outline outline-0 transition-all disabled:border-0 disabled:bg-blue-gray-50 focus:border-[#FF3D00]"}/>
                <input placeholder={'Your Phone'} className={"text-lg h-full w-10/12 peer bg-transparent border-b border-white outline outline-0 transition-all disabled:border-0 disabled:bg-blue-gray-50 focus:border-[#FF3D00]"}/>
                <textarea placeholder={'Message'} className={"text-lg h-full w-10/12 peer bg-transparent border-b border-white outline outline-0 transition-all disabled:border-0 disabled:bg-blue-gray-50 focus:border-[#FF3D00]"}/>
                <button className={'w-10/12 h-12 rounded-full text-white bg-[#FF3D00] shadow-buttonSubmit '}>Submit </button>
            </div>

        </div>
    )

}