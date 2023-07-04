const Footer = () => {
    return (
        <section className='px-14 bg-yellow '>
            <div className='container'>
                <div className='flex flex-wrap justify-between'>
                    <div className='sm:gap-10 mb-10 sm:w-60 md:w-60 lg:w-96'>
                        <div className='mt-12 text-32px font-semibold'>
                            BookStore
                        </div>
                        <p className='text-base mt-3'>
                            Lorem ipsum dolor sit amet consectetur. Elementum
                            erat tincidunt nunc id turpis amet sed vitae cursus.
                        </p>
                    </div>
                    <div className='sm:gap-3 mb-10 sm:w-60 md:w-60 lg:w-96'>
                        <div className='mt-12 text-32px font-semibold'>
                            Kategori
                        </div>
                        <div className='text-base mt-3'>
                            <li>Novel</li>
                            <li>Komik</li>
                            <li>Sastra</li>
                            <li>Fiksi</li>
                            <li>Non Fiksi</li>
                        </div>
                    </div>
                    <div className='sm:gap-3 mb-10 sm:w-60 md:w-60 lg:w-96'>
                        <div className='mt-12 text-32px font-semibold'>
                            Sosial Media
                        </div>
                        <div className='flex flex-row gap-1 justify-around mt-3'>
                            <img
                                src='./image/content/spiderman.png'
                                alt='Image Caption'
                                className='w-10 md:w-15 lg:w-15'
                            />
                            <img
                                src='./image/content/spiderman.png'
                                alt='Image Caption'
                                className='w-10 md:w-15 lg:w-15'
                            />
                            <img
                                src='./image/content/spiderman.png'
                                alt='Image Caption'
                                className='w-10 md:w-15 lg:w-15'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
