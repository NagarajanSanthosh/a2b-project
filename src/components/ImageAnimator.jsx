import React from 'react';

const ImageAnimator = () => {
    return (
        <div className='center'>
            <div className="h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1>Today's Delight</h1>
                    <div className="flex flex-wrap justify-start items-start">
                        <div className="w-full md:w-1/2 px-4">
                            <h6>Image content</h6>
                        </div>
                        <div className="w-full md:w-1/2 px-4">

                            <strong>Title of image</strong>
                            <div>
                                Description of image
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ImageAnimator;
