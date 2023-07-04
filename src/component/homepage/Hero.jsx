const Hero = () => {
    return (
        <section className='px-14'>
            <div className='container'>
                <div className='flex flex-wrap'>
                    <div className='w-full self-center px-1 lg:w-1/2'>
                        <h1 className='font-bold text-5xl md:text-6xl'>
                            Segala jenis buku tersedia
                        </h1>
                        <p className='font-normal text-xl pt-4 mb-9'>
                            kami menyediakan berbagai jenis buku teraru
                            <span className='block'>
                                untuk segala kalangan usia
                            </span>
                        </p>
                        <a
                            href='#'
                            className='text-base font-bold text-black bg-orange-600 rounded-full py-3 px-8'
                        >
                            Explore Now
                        </a>
                    </div>
                    <div className='w-full self-end px-1 lg:w-1/2 lg:object-right'>
                        <div className='mt-5'>
                            <img
                                className=''
                                src='./image/content/buku.png'
                                alt='book'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
