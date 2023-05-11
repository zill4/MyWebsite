import avatar from '../Assets/avatar.jpg'
import logo from '../Assets/zill4_logo.png'
import youtube_logo from '../Assets/youtube_logo.png'
import linkedin_logo from '../Assets/Linkedin-logo.png'
import github_logo from '../Assets/github-logo.png'
import darkdimension_logo from '../Assets/DarkDimension_logo.png'


export default function PitchSection() {
    return (
        <div className="lg:py-32 py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-4">
                        <div className="relative px-6 pb-9 pt-64  h-fit">
                            <img
                                className="absolute inset-2 h-fit w-full object-cover brightness-125 saturate-50 border-2 border-black shadow-2xl"
                                src={avatar}
                                alt=""
                            />
                            <img src={logo} alt="" className="absolute lg:-bottom-96 lg:h-48 w-auto h-32" />
                        </div>
                    </div>
                    <div>
                        <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
                            <h1 className="text-3xl font-mono font-bold tracking-tight text-gray-900 sm:text-4xl">
                                On a Quest to Achieve...
                            </h1>
                            <div className="max-w-xl">
                                <p className="mt-6 text-black text-lg font-semibold font-mono indent-8 text-left">
                                    As student of software and an admirer of art, I find game development to be the center of my attention.
                                    My most recent project Dark Dimension is a living project, where I aim to showcase my skills that I've gained throughout my career.
                                </p>
                                <p className="mt-8 text-black text-lg font-semibold font-mono indent-8 text-left">
                                    I was fortunate during my time at Shotcall to have cut my teeth working on many complex problems across development.
                                    From working on and managing a large project full of features; messaging, server-side watermarking, social feed, HLS video streaming, auctions, and events, to name a few.
                                    I've grown to appreciate the complexity and ironically the sublte simplicity required to build great software.
                                </p>
                                <p className="mt-8 text-black text-lg font-semibold font-mono indent-8 text-left">
                                    Thank you for taking the time to visit my website, also an active project. My objective is build great games that people, enjoy and may consider as art.
                                </p>
                            </div>
                        </div>
                        <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-black pt-10 sm:grid-cols-4">

                        <div className='flex flex-col items-center'>
                                <dt className="text-sm font-semibold leading-6 text-gray-600">LinkedIn</dt>
                                <img className="mt-2  h-16" src={linkedin_logo}/>
                            </div>
                            <div className='flex flex-col items-center'>
                                <dt className="text-sm font-semibold leading-6 text-gray-600">Github</dt>
                                <img className="mt-2  h-16" src={github_logo}/>
                            </div>                  
                            <div className='flex flex-col items-center'>
                                <dt className="text-sm font-semibold leading-6 text-gray-600">YouTube</dt>
                                <img className="mt-2  h-16" src={youtube_logo}/>
                            </div>                 
                            <div className='flex flex-col items-center'>
                                <dt className="text-sm font-semibold leading-6 text-gray-600">Dark Dimension</dt>
                                <img className="mt-2  h-16" src={darkdimension_logo}/>
                            </div>
                        </dl>

                    </div>
                </div>
            </div>
        </div>
    )
}
