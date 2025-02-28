import React from 'react';

const PracticeSection = () => {
    const pronounceWord = (word) => {
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'ja-JP';
        window.speechSynthesis.speak(utterance);
    };
    return (
        <div className='my-10 py-5 relative'>
            <div className="absolute inset-0 animate-neon-glow -z-10"></div>
            <div className='text-center items-center'>
                <h1 className="text-5xl font-bold">Practice Makes Perfect</h1>
                <p className="py-5 w-10/12 mx-auto">
                    Practice amplifies word power, sharpens memory, and elevates fluency and consistent repetition transforms learning into seamless communication.
                </p>
            </div>
            <div className='space-y-5 w-8/12 mx-auto'>
            <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-xl font-medium">Hello, how are you?</div>
                    <div className="collapse-content">
                        <p onClick={() => pronounceWord('こんにちは お元気ですか')}>こんにちは お元気ですか？</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">I am Good!</div>
                    <div className="collapse-content">
                        <p onClick={() => pronounceWord('私は元気です')}>私は元気です！</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">Thank You.</div>
                    <div className="collapse-content">
                        <p onClick={() => pronounceWord('ありがとう')}>ありがとう.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PracticeSection;