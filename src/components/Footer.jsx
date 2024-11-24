const Footer = () => {
    return (
        <footer className="mx-5 sm:mx-5 flex flex-col pb-24 md:mx-auto max-w-[62rem] justify-between" id="contact">
            <div className="">
                <div className="space-y-4">
                    <h1 className="text-3xl font-bold ">Get in touch</h1>
                    <p>Do you have a job opportunity or idea you'd like to discuss? Feel free to reach me at
                        <a href='mailto:singhlovepreet1209@gmail.com'>
                        <span className="font-bold bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">{` @singhlovepreet1209@gmail.com`}</span>
                        </a>
                        . You can also find me on
                    <a href='https://x.com/Dev_013_' target="_blank">
                        <span className="font-bold bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">{` Twitter`}</span>
                    </a>,
                    <a href='https://github.com/Lovepreet013' target="_blank">
                    <span className="font-bold bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">{` Github `}</span>
                    </a>
                    and
                    <a href='https://www.linkedin.com/in/lovepreetsingh013/' target="_blank">
                    <span className="font-bold bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">{` Linkedin`}</span>.
                    </a>
                    </p>
                </div>
            </div>
            <div className="border-t-gray-200 border-t-[1px] mt-16">
                <h1 className="text-sm mt-8">Build with React.js and Tailwind CSS🔥🔥</h1>
            </div>
        </footer>
    )
}

export default Footer