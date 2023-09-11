import vector from '../../public/images/Vector.png'
import Egol from '../../public/images/Egol.svg'
import Image from "next/image";
import {SocialIcon} from 'react-social-icons'


export default function Footer() {

    return (
        <div className={'bg-[#090413] w-full h-[150px] flex justify-center items-center flex-col '}>
            <Image src={vector} alt={'vector'} className={'w-full absolute top-0 z-50'}/>
            <Image src={Egol} alt={'Egol'} className={'h-36 absolute top-[-70px] right-0'}/>
            <div className={'flex justify-center items-center w-full text-[#CBD5E1] flex-col mt-3 gap-2'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="118" height="24" viewBox="0 0 118 24" >
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M7.77789 2.37997C10.0124 1.86202 12.337 1.86202 14.5715 2.37997C15.8601 1.56774 16.8566 1.19617 17.5822 1.03938C17.9749 0.954524 18.2862 0.933088 18.5181 0.938211C18.6339 0.940768 18.729 0.949919 18.8037 0.960766C18.841 0.966183 18.8731 0.972007 18.9 0.977603C18.9135 0.9804 18.9257 0.983138 18.9365 0.985736L18.9518 0.989516L18.9587 0.991308L18.962 0.992176L18.9636 0.992602C18.9644 0.992813 18.9652 0.993024 18.739 1.81728L18.9652 0.993024C19.2131 1.06023 19.4178 1.23416 19.5231 1.46714C20.0639 2.66367 20.166 4.00473 19.822 5.25991C20.7105 6.34197 21.2017 7.69969 21.2031 9.107V9.10787C21.2031 11.9045 20.3694 13.7933 18.9578 15.0081C17.9283 15.8941 16.6659 16.3545 15.3988 16.6042C15.4116 16.6586 15.4228 16.714 15.4322 16.7706C15.4882 17.104 15.482 17.4997 15.4761 17.8804C15.4744 17.996 15.4726 18.1103 15.4726 18.2211V22.2081C15.4726 22.68 15.0877 23.0625 14.613 23.0625C14.1383 23.0625 13.7534 22.68 13.7534 22.2081V18.2211C13.7534 18.011 13.7559 17.8417 13.758 17.7005C13.7624 17.3954 13.765 17.2216 13.7365 17.0515C13.7132 16.9128 13.6705 16.7839 13.4321 16.5469C13.1981 16.3143 13.1192 15.9687 13.2294 15.6584C13.3396 15.3481 13.6192 15.1283 13.9484 15.0933C15.4958 14.9285 16.8577 14.5553 17.8325 13.7163C18.7704 12.9092 19.4838 11.5516 19.484 9.10874C19.4828 7.96936 19.0356 6.87516 18.237 6.05779C18.0051 5.82046 17.9319 5.47141 18.0491 5.16178C18.3526 4.3597 18.3824 3.48598 18.1427 2.67284C18.0841 2.68182 18.019 2.69364 17.9474 2.70911C17.4141 2.82433 16.5099 3.14403 15.2044 4.00906C15.0005 4.1442 14.7482 4.18637 14.511 4.12497C12.3233 3.55866 10.0261 3.55866 7.83841 4.12497C7.6012 4.18637 7.34891 4.1442 7.14495 4.00906C5.8395 3.14403 4.93525 2.82433 4.40198 2.70911C4.33039 2.69364 4.26533 2.68182 4.20672 2.67284C3.96696 3.48597 3.99677 4.3597 4.30032 5.16178C4.41751 5.47141 4.34432 5.82046 4.11244 6.05779C3.31392 6.87506 2.8667 7.96909 2.86542 9.10831C2.86551 11.5515 3.57897 12.9091 4.51689 13.7163C5.49173 14.5553 6.85364 14.9285 8.401 15.0933C8.73015 15.1283 9.00981 15.3481 9.11999 15.6584C9.23018 15.9687 9.15132 16.3143 8.91724 16.5469C8.68801 16.7748 8.60353 16.9647 8.56616 17.1579C8.52211 17.3855 8.53311 17.6682 8.58932 18.1151C8.59374 18.1503 8.59595 18.1857 8.59595 18.2211V19.9251C8.59597 19.9281 8.59597 19.9311 8.59595 19.9341V22.2081C8.59595 22.68 8.21111 23.0625 7.73637 23.0625C7.26164 23.0625 6.8768 22.68 6.8768 22.2081V21.0288C6.02547 21.1812 5.28279 21.1543 4.62524 20.9715C3.68736 20.7108 3.0297 20.1623 2.53196 19.5934C2.22178 19.2388 1.92019 18.8027 1.67231 18.4443C1.55974 18.2815 1.45824 18.1348 1.37206 18.0189C1.17805 17.7582 1.02235 17.589 0.887601 17.4814L0.475321 17.2765C0.0771301 17.0786 -0.103155 16.6113 0.0598441 16.1996C0.222843 15.7878 0.67518 15.5679 1.10228 15.6927C1.35586 15.7668 1.58091 15.8798 1.78173 16.0154L6.8768 18.5474V18.2736C6.8217 17.8233 6.78252 17.3283 6.87794 16.8352C6.89326 16.7559 6.91181 16.6778 6.93371 16.6008C5.67232 16.3504 4.41652 15.8902 3.39156 15.0081C1.98002 13.7933 1.14626 11.9045 1.14626 9.10787L1.14626 9.107C1.14771 7.69969 1.63887 6.34197 2.52737 5.25991C2.18338 4.00473 2.28544 2.66367 2.82632 1.46714C2.93163 1.23416 3.1363 1.06023 3.38422 0.993024L3.61039 1.81728C3.38422 0.993024 3.385 0.992813 3.38578 0.992602L3.38737 0.992176L3.39065 0.991308L3.39756 0.989516L3.41286 0.985736C3.42372 0.983138 3.43587 0.9804 3.44934 0.977603C3.47627 0.972007 3.50838 0.966183 3.5457 0.960766C3.62041 0.949919 3.71551 0.940768 3.83126 0.938211C4.06323 0.933088 4.37448 0.954524 4.76718 1.03938C5.49284 1.19617 6.48927 1.56774 7.77789 2.37997Z"
                              fill="#CBD5E1"/>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M38.7148 2.84835C39.9872 1.62485 41.713 0.9375 43.5125 0.9375H47.0525C47.5413 0.9375 47.9375 1.31849 47.9375 1.78846V6.32692C47.9375 6.7969 47.5413 7.17789 47.0525 7.17789H43.5125C43.4343 7.17789 43.3592 7.20777 43.3039 7.26097C43.2486 7.31416 43.2175 7.38631 43.2175 7.46154V8.87981H47.0525C47.325 8.87981 47.5823 9.00054 47.7501 9.20708C47.9178 9.41362 47.9772 9.68294 47.9111 9.93716L46.7311 14.4756C46.6326 14.8544 46.2786 15.1202 45.8725 15.1202H43.2175V22.2115C43.2175 22.6815 42.8213 23.0625 42.3325 23.0625H37.6125C37.1237 23.0625 36.7275 22.6815 36.7275 22.2115V15.1202H34.0725C33.5837 15.1202 33.1875 14.7392 33.1875 14.2692V9.73077C33.1875 9.2608 33.5837 8.87981 34.0725 8.87981H36.7275V7.46154C36.7275 5.73126 37.4423 4.07184 38.7148 2.84835ZM43.5125 2.63942C42.1824 2.63942 40.9069 3.14747 39.9664 4.05179C39.0259 4.95611 38.4975 6.18263 38.4975 7.46154V9.73077C38.4975 10.2007 38.1013 10.5817 37.6125 10.5817H34.9575V13.4183H37.6125C38.1013 13.4183 38.4975 13.7993 38.4975 14.2692V21.3606H41.4475V14.2692C41.4475 13.7993 41.8437 13.4183 42.3325 13.4183H45.1815L45.919 10.5817H42.3325C41.8437 10.5817 41.4475 10.2007 41.4475 9.73077V7.46154C41.4475 6.93493 41.6651 6.42989 42.0523 6.05752C42.4396 5.68516 42.9648 5.47596 43.5125 5.47596H46.1675V2.63942H43.5125Z"
                              fill="#CBD5E1"/>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M82.4166 3.02414C80.754 1.58753 78.518 1.63432 76.5798 2.33374C74.3291 3.14591 72.8193 5.15121 72.8496 7.47568V7.74799C69.6184 7.58172 66.776 6.04938 64.8776 3.49394C64.6984 3.25275 64.4038 3.11648 64.0964 3.13261C63.7891 3.14875 63.5116 3.31506 63.3607 3.57358L64.1454 3.99906C63.3607 3.57358 63.3604 3.57399 63.3602 3.57444L63.3595 3.57551L63.358 3.57825L63.3535 3.58609L63.3393 3.61115C63.3276 3.63197 63.3116 3.66097 63.2918 3.69774C63.2523 3.77127 63.1978 3.87605 63.1333 4.00886C63.0045 4.27416 62.8348 4.65317 62.6648 5.11982C62.3266 6.04832 61.9774 7.34961 61.9625 8.80628C61.9475 10.2696 62.2704 11.9043 63.2924 13.4603C64.1041 14.6962 65.3302 15.8419 67.0955 16.806C65.3992 17.7193 63.7121 18.2452 61.7793 18.1727C61.3614 18.1571 60.9873 18.4207 60.8762 18.8092C60.7651 19.1977 60.9462 19.6088 61.3134 19.8017C65.4367 21.9675 70.0113 22.7558 74.0419 21.6283L74.0421 21.6282C78.6223 20.346 82.3992 17.0265 83.8434 12.0723L83.8446 12.0681C84.2585 10.6204 84.47 9.12611 84.4738 7.62485C84.4744 7.62344 84.4751 7.622 84.4758 7.62054C84.5159 7.53231 84.5792 7.40592 84.6657 7.24016C84.7605 7.0583 84.8687 6.85665 84.9886 6.63295C85.0929 6.43855 85.2061 6.22749 85.3272 5.99829C85.8095 5.08608 86.4024 3.91971 86.6228 3.08817C86.6447 3.01292 86.6562 2.93414 86.6562 2.85365V2.8525C86.6562 2.41398 86.3168 2.04438 85.8651 1.99117C85.6711 1.96833 85.4827 2.0069 85.3221 2.09205C84.5085 2.47136 83.7322 2.67623 82.8542 2.90794C82.7112 2.94567 82.5656 2.98411 82.4166 3.02414ZM84.1625 4.35683C83.8414 4.44883 83.5255 4.53194 83.2184 4.61277C82.9406 4.68586 82.67 4.75708 82.4089 4.83132C82.0739 4.9266 81.7119 4.82653 81.4802 4.57457C80.4798 3.48668 78.9428 3.33419 77.2113 3.959C75.6294 4.52985 74.6283 5.90471 74.6504 7.4581L74.6505 7.47V8.62698C74.6505 9.09758 74.2612 9.4824 73.7731 9.49443C70.0985 9.58501 66.7681 8.17998 64.3786 5.65479C64.3738 5.66801 64.3689 5.68132 64.364 5.69472C64.0678 6.50766 63.7757 7.61426 63.7633 8.82342C63.751 10.0259 64.0147 11.315 64.8141 12.5322C65.6122 13.7473 66.9865 14.9553 69.3076 15.9304C69.6096 16.0573 69.8156 16.3331 69.8447 16.6494C69.8737 16.9657 69.7212 17.272 69.4469 17.448C68.0555 18.3413 66.6242 19.0874 65.0579 19.5177C67.9853 20.5056 70.937 20.6897 73.5397 19.9617C77.5549 18.8376 80.8418 15.9495 82.109 11.6051C82.491 10.2682 82.6807 8.88697 82.6727 7.50026L83.5732 7.49546L82.6728 7.50243C82.6713 7.32818 82.724 7.17955 82.7395 7.13572L82.7407 7.13222C82.7658 7.06122 82.7967 6.98898 82.8264 6.92373C82.8866 6.79157 82.9676 6.63143 83.0567 6.46058C83.1516 6.27863 83.2701 6.05759 83.397 5.82078C83.5026 5.62378 83.614 5.41586 83.7226 5.21045C83.8737 4.92469 84.023 4.63655 84.1625 4.35683Z"
                              fill="#CBD5E1"/>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M100.906 3.59777C100.106 3.59777 99.4571 4.24636 99.4571 5.04643V18.9536C99.4571 19.7536 100.106 20.4022 100.906 20.4022H114.813C115.613 20.4022 116.262 19.7536 116.262 18.9536V5.04643C116.262 4.24636 115.613 3.59777 114.813 3.59777H100.906ZM97.7188 5.04643C97.7188 3.28627 99.1456 1.85938 100.906 1.85938H114.813C116.573 1.85938 118 3.28627 118 5.04643V18.9536C118 20.7137 116.573 22.1406 114.813 22.1406H100.906C99.1456 22.1406 97.7188 20.7137 97.7188 18.9536V5.04643Z"
                              fill="#CBD5E1"/>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M103.25 9.23438C103.759 9.23438 104.172 9.61536 104.172 10.0853V15.7584C104.172 16.2284 103.759 16.6094 103.25 16.6094C102.741 16.6094 102.328 16.2284 102.328 15.7584V10.0853C102.328 9.61536 102.741 9.23438 103.25 9.23438Z"
                              fill="#CBD5E1"/>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M103.25 7.39062C103.759 7.39062 104.172 7.59563 104.172 7.84851V7.85462C104.172 8.1075 103.759 8.3125 103.25 8.3125C102.741 8.3125 102.328 8.1075 102.328 7.85462V7.84851C102.328 7.59563 102.741 7.39062 103.25 7.39062Z"
                              fill="#CBD5E1"/>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M108.32 9.23438C109.084 9.23438 109.703 9.61536 109.703 10.0853V15.7584C109.703 16.2284 109.084 16.6094 108.32 16.6094C107.557 16.6094 106.938 16.2284 106.938 15.7584V10.0853C106.938 9.61536 107.557 9.23438 108.32 9.23438Z"
                              fill="#CBD5E1"/>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M107.883 10.1483C108.488 9.56311 109.308 9.23438 110.164 9.23438C111.02 9.23438 111.84 9.56311 112.446 10.1483C113.051 10.7334 113.391 11.527 113.391 12.3546V15.7584C113.391 16.2284 112.997 16.6094 112.511 16.6094C112.025 16.6094 111.631 16.2284 111.631 15.7584V12.3546C111.631 11.9784 111.476 11.6177 111.201 11.3517C110.926 11.0857 110.553 10.9363 110.164 10.9363C109.775 10.9363 109.402 11.0857 109.127 11.3517C108.852 11.6177 108.697 11.9784 108.697 12.3546C108.697 12.8245 108.303 13.2055 107.817 13.2055C107.331 13.2055 106.938 12.8245 106.938 12.3546C106.938 11.527 107.277 10.7334 107.883 10.1483Z"
                              fill="#CBD5E1"/>
                    </svg>
                <p>
                    © Copyright 2023, Lidor Lazar
                </p>
            </div>

        </div>
    )
}