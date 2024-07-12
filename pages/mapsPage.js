import React from 'react';
import {useRouter} from "next/router";
import GoogleMapComponent from '@/components/GoogleMap';

const MapsPage=() => {
  const router=useRouter();
  const center={lat:40.680, lng:-73.998};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black bg-opacity-25">
      <div className="w-full max-w-md overflow-hidden bg-white rounded-lg shadow-lg">
        <GoogleMapComponent />
        <div className="p-4">
          <h1 className="mb-2 text-xl font-bold underline font-kyiv">Chelsea & Lil's Stoop Sale</h1>
          <p className="mb-2 text-gray-600">
            <span className="inline-block mr-1">📍</span>
            Court Street & 2nd Pl, Brooklyn</p><br/>
          <p className="mb-4 text-black">Accessible by:</p>
          <br/><br/><br></br>
          <button
            className="text-blue-500 hover:underline"
            onClick={() => router.back()}>Return Home</button>
        </div>
      </div>
    </div>
  );
};

export default MapsPage;