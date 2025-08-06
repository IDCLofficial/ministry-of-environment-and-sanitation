import Image from "next/image";

export default function FarmerEmpowermentProgram() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[40vh] sm:h-[50vh] md:h-[60vh]">
                <div className="absolute inset-0">
                    <Image
                        src="/hero_section.png"
                        alt="Agricultural landscape"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 flex items-center h-full">
                    <div className="max-w-8xl px-4 sm:px-6 lg:px-20">
                        <div className="max-w-7xl">
                            <p className="text-sm text-white/80 mb-2">August 15, 2024</p>
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold text-white mb-4 sm:mb-6 leading-tight">
                                Lorem ipsum dolor sit amet
                            </h1>
                            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded font-semibold transition-colors">
                                Read More
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Image */}
            <section className="py-8">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-20">
                    <div className="w-full h-80 md:h-96 relative rounded-lg overflow-hidden">
                        <Image
                            src="/assets/no-image.png"
                            alt="Industrial facility"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <section className="py-8">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-20">
                    <div className="prose max-w-none">
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consequat varius consequat. Fusce dapibus tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Header 1</h2>
                        
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Sed posuere consectetur est at lobortis.
                        </p>

                        <div className="bg-gray-50 border-l-4 border-green-500 p-6 mb-6">
                            <p className="text-gray-700 italic">
                                &#34;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget urna mollis ornare vel eu leo. Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod.&#34;
                            </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-8">
                            Donec ullamcorper nulla non metus auctor fringilla. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                        </p>

                        {/* Second Image */}
                        <div className="w-full h-64 md:h-80 relative rounded-lg overflow-hidden mb-8">
                            <Image
                                src="/assets/no-image.png"
                                alt="Industrial facility interior"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                            Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Header 1</h2>
                        
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Sed posuere consectetur est at lobortis.
                        </p>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nullam id dolor id nibh ultricies vehicula ut id elit. Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget urna mollis ornare vel eu leo. Donec sed odio dui.
                        </p>

                        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nulla non metus auctor fringilla.</li>
                            <li>Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</li>
                            <li>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</li>
                            <li>Sed posuere consectetur est at lobortis.</li>
                        </ul>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            Donec ullamcorper nulla non metus auctor fringilla. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget urna mollis ornare vel eu leo. Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod.
                        </p>
                    </div>
                </div>
            </section>

        </div>
    );
}
