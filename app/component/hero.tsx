import Image from 'next/image';
import Callnow from './callnow';

export default function Hero() {
  return (
    <div className="h-[90vh] w-full flex flex-col">
      <div className="flex h-full justify-end flex-col-reverse md:flex-row items-center text-center md:text-left md:flex-grow">
        <div className="flex flex-1 flex-col justify-center items-center p-2">
          <div className="flex flex-col items-center bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text text-transparent">
            <h2 className="text-4xl font-bold">FOCUS POINT</h2>
            <h2 className="text-4xl font-bold">DRIVING SCHOOL</h2>
          </div>
          <div className="mt-4 px-5 max-w-lg text-gray-700">
            <p>
              Focus Point Driving School is dedicated to helping you become a confident, safe, and skilled driver. We offer clear, personalized lessons in a supportive environment to make learning to drive easy and stress-free. Your journey to safe driving starts here.
            </p>
          </div>
          <Callnow/>
        </div>
        <div className="flex flex-1 justify-center items-end p-0 m-0">
          <Image
            src="/logo.png"
            alt="lOGO-here"
            width={400}
            height={400}
            className="w-1/1 h-auto md:w-2/5 mt-5 md:mt-0 rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
