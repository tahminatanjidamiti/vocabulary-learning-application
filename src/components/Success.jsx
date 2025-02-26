import CountUp from 'react-countup';

const Success = () => {
    return (
        <div className='w-8/12 mx-auto py-10 my-20 bg-blue-100 rounded-3xl flex justify-center items-center relative'>
            <div className="absolute inset-0 animate-neon-glow -z-10"></div>
            <div className="stats stats-vertical lg:stats-horizontal shadow">
            <div className="stat">
                <div className="stat-title">Users</div>
                <div className="stat-value">
                    <CountUp start={0} end={1820} duration={5} />
                </div>
                <div className="stat-desc">↗︎ 60 (22%)</div>
            </div>
            <div className="stat">
                <div className="stat-title">Lessons</div>
                <div className="stat-value">
                    <CountUp start={0} end={7} duration={5} />
                </div>
                <div className="stat-desc">↗︎ 50 (71%)</div>
            </div>
            <div className="stat">
                <div className="stat-title">Vocabulary</div>
                <div className="stat-value">
                    <CountUp start={0} end={40} duration={5} />
                </div>
                <div className="stat-desc">↗︎ 40 (40%)</div>
            </div>
            <div className="stat">
                <div className="stat-title">Tutorials</div>
                <div className="stat-value">
                    <CountUp start={0} end={6} duration={5} />
                </div>
                <div className="stat-desc">↗︎ 60 (67%)</div>
            </div>

        </div>
        </div>
    );
};

export default Success;