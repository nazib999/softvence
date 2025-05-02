

const Card = () => {
    return (
        <div className='absolute xl:top-[360px] xl:-left-[160px] max-sm:left-0 max-lg:-left-[100px] max-lg:top-[200px] lg:top-[400px] z-10 overflow-hidden bg-white max-w-[467px] rounded-xl px-8 max-lg:p-3 py-10'>
            <div className={'flex items-center justify-between'}><span className='font-semibold text-[50px]  text-[#00245F]'>721+</span><span className='font-semibold text-[50px] text-[#00245F]'>1000+</span></div>
            <h4 className={'text-[28px] font-semibold my-5'}>Growth is our priority.</h4>
            <p>As a full-service business agency, we specialize in helping companies of all sizes optimize their operations</p>
        </div>
    )
}
export default Card
