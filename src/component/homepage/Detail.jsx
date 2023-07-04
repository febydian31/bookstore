const Detail = () => {
    return (
        <section className='px-14'>
            <div className='container'>
                <div className='mb-10'>
                    <h1 className='font-bold mx-4 text-2xl'>Detail Pesanan</h1>
                    <div className='border-collapse shadow-2xl rounded-2xl container mx-auto md:flex md:flex-row sm:justify-evenly mt-5'>
                        <div className='rounded-md '>
                            <img
                                src='./image/content/spiderman.png'
                                alt='Image Caption'
                                className='px-3 py-3 md:w-[5000px] lg:w-[3000px] rounded-3xl'
                            />
                        </div>
                        <div className='my-1 mx-5'>
                            <h2 className='text-2xl sm:text-3xl font-bold my-3'>
                                Spiderman No Way Home
                            </h2>
                            <h3 className='text-xl sm:text-2xl font-bold mb-3'>
                                Sinopsis
                            </h3>
                            <p className='text-base'>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Nesciunt voluptatum molestiae
                                dolore minima amet blanditiis harum ex omnis
                                consequuntur vitae laboriosam provident
                                molestias est, consequatur repellendus delectus
                                magnam voluptatibus necessitatibus atque non,
                                dolorem autem ut optio. Voluptas, ipsam? Hic
                                quidem vero doloribus facere quod quas illum
                                fugiat quasi eaque unde, architecto expedita
                                atque minima mollitia placeat. Impedit id dicta
                                quod eum sint, numquam quae totam eaque
                            </p>
                            <h2 className='text-2xl font-bold my-3 md:mb-10'>
                                Rp. 80.0000
                            </h2>
                            <div className='bg-gray rounded-3xl py-5 px-4 md:w-[500px] md:mb-5 sm:w60'>
                                <h1 className='text-md font-semibold'>
                                    Atur Jumlah Pesanan
                                </h1>
                                <div className='flex flex-row justify-between'>
                                    <div className='shadow-2xl border-solid border-2 border-slate-500 flex space-x-1   justify-between rounded-full px-8 my-3 mx-1'>
                                        <a href='#' className='w-[15px] pt-3 '>
                                            <img
                                                src='./image/content/minus.png'
                                                alt='kurang'
                                            />
                                        </a>
                                        <h1 className='text-md'>2</h1>
                                        <a href='#' className='w-[15px] pt-1'>
                                            <img
                                                src='./image/content/plus.png'
                                                alt='kurang'
                                                className=''
                                            />
                                        </a>
                                    </div>
                                    <div className='mt-3'>
                                        <h3 className='font-medium sm:text-md'>
                                            Stok Total :10
                                        </h3>
                                    </div>
                                </div>
                                <div className='flex flex-row justify-between'>
                                    <div className='py-2'>
                                        <h3 className='font-medium sm:text-md'>
                                            Sub Total
                                        </h3>
                                    </div>
                                    <div className='py-2'>
                                        <h3 className='font-medium sm:text-md'>
                                            Rp. 80.000
                                        </h3>
                                    </div>
                                </div>
                                <div className='justify-center flex shadow-lg rounded-full overflow-hidden'>
                                    <a
                                        href='#'
                                        className='sm:text-md w-full justify-center flex font-bold text-black bg-yellow rounded-full py-2 px-8'
                                    >
                                        Cart
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Detail;
