
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const NTLearn = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1b263a] to-[#0c267b]">
      <Navigation />
      
      <section className="pt-[150px] pb-12 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">NT Learn</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Empowering Africa's Next Digital Leaders
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-[#1b263a] mb-8">Coming Soon</h2>
          <p className="text-xl text-gray-600">
            Our education platform is launching soon. Stay tuned for updates!
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NTLearn;
