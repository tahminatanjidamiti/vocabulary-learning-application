import 'animate.css';

const User = () => {
    return (
        <div className='my-20'>
            <div className='text-center items-center  animate__animated animate__fadeInDown'>
                <h1 className="text-5xl font-bold">Learn Our User Experience</h1>
                <p className="py-5 w-10/12 mx-auto">
                    Transform learning with interactive lessons, gamified challenges, real-life context, personalized progress tracking, and seamless vocabulary mastery—engaging, effective, unforgettable!
                </p>
            </div>
            <div className='md:container mx-auto mt-5 space-y-5 bg-teal-50 px-5 py-10 rounded-lg'>
                <div className="card card-side bg-base-100 shadow-x lg:w-6/12 mx-auto animate__animated animate__fadeInDown">
                    <figure className='h-[200px]'>
                        <img className='w-full h-full object-cover'
                            src="https://i.ibb.co.com/FXZ4KYm/unique-barn-1.jpg"
                            alt="User pic" />
                    </figure>
                    <div className="card-body w-8/12">
                        <h2 className="card-title">Finally, a vocabulary app that works! The gamified challenges and contextual usage examples make words stick. Perfect for boosting confidence and fluency!</h2>
                        <div className="rating">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-amber-400" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-amber-400" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-amber-400" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-amber-400" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-amber-400" />
                        </div>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl lg:w-6/12 mx-auto animate__animated animate__fadeInDown">
                    <div className="card-body w-8/12">
                        <h2 className="card-title">Lingo Bingo makes vocabulary fun! Interactive lessons, real-life examples, and progress tracking keep me motivated!</h2>
                        <div className="rating">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-amber-400" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-amber-400" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-amber-400" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-amber-400" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-amber-400" />
                        </div>
                    </div>
                    <figure className='h-[200px]'>
                        <img className='w-full h-full object-cover'
                            src="https://i.ibb.co.com/S715M86/unique-barn-3.jpg"
                            alt="User pic!" />
                    </figure>
                </div>
            </div>
        </div>
    );
};

export default User;