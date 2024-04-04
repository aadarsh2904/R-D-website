import React from 'react';
import MyTable from './MyTable';

// Functional component for Continuing Education Programme (CEP)
const Cep = () => {
  // Sample JSON data representing CEP details
  const jsonData = [
    { SNo: 1, Period: '19-23 November 2012', Particulars: 'Advances in Gear Engineering' },
    { SNo: 2, Period: '22-23 February 2013', Particulars: 'Workshop on Modern Spectroscopic Techniques' },
    { SNo: 3, Period: '06-07 July 2013', Particulars: 'Workshop on Modern Spectroscopic Techniques' },
    { SNo: 4, Period: '06-07 July 2013', Particulars:'Short Term Course on Introduction to Research' },
    { SNo: 5, Period: '15-19 July 2013', Particulars: 'Short Term Course on Mechatronics & Robotics' },
    { SNo: 6, Period: '17-19 October 2013', Particulars: '	Nanoscience and Nanotechnology: From concepts to applications' },
    { SNo: 7, Period: '06-07 March 2014', Particulars: 'Molecular Charecterization Techniques' },
    { SNo: 8, Period: '	21-23 March 2014', Particulars: 'Bearing & Gear Fault Diagnosis' },
    { SNo: 9, Period: '11-12 July 2014', Particulars:'Scientific Writing'},
    { SNo: 10, Period: '30-31 May 2014', Particulars: 'CEP on Measurement Techniques in Thermal Engineering: Recent Advances' },
    { SNo: 11, Period: '23-25 June 2014', Particulars: 'Nanoscale Science and Engineering' },
    { SNo: 12, Period: '12-14 May 2014', Particulars: 'Applied Econometrics' },
    { SNo: 13, Period: '7-11 July 2014', Particulars: 'Metatronics, MEMS and Micro-Fabrication' },
    { SNo: 14, Period: '20-22 March 2015', Particulars: 'CEP on Flow Cytometry Master Training' },
    { SNo: 15, Period: '12-13 December 2014', Particulars: 'Scientific Communication' },
    { SNo: 16, Period: '6-10 July 2015', Particulars: 'CEP Mechatronics,MSME & Mirco-Fabrication 2' },
    { SNo: 17, Period: '30-31 May 2015', Particulars: 'CEP Signal and Image Processing'},
    { SNo: 18, Period: '10-11 December 2015', Particulars: 'Recent Advances in Network & Cloud Security' },
    { SNo: 19, Period: '21-23 December 2015', Particulars: 'Condition Monitoring of Rotation Mahine Elements' },
    { SNo: 20, Period: '27-28 June 2016', Particulars: 'Condition Monitoring of Mechanical Systems using advanced signal processing' },
    { SNo: 21, Period: '19-23 December 2016', Particulars: 'Metatronics, MEMS and Micro-Fabrication' },
    { SNo: 22, Period: '6-7 March 2017', Particulars: 'Condition Monitoring of Mechanical Systems using advanced signal processing'},
    { SNo: 23, Period: '15-26 May 2017', Particulars: 'Spacecraft and Payload Pointing and Control' },
    { SNo: 24, Period: '11-14 December 2017', Particulars: 'Differential Equations: Theory, Computation and Applications' },
    { SNo: 25, Period: '8-10 March 2018', Particulars: 'Information Communication Technologies (ICT): Concepts, Implementations and Prospects' },
    { SNo: 26, Period: '8-10 March 2018', Particulars: '	Recent Advances in Geotechnical and Structural Engineering' },
    { SNo: 27, Period: '	6-10 March 2018', Particulars: 'Autonomous Mobile Robots'},
    { SNo: 28, Period: '10-11 March 2018', Particulars:'Advanced Signal Processing Techniques for Fault Detection of Mechanical and Electrical Systems' },
    { SNo: 29, Period: '17-19 May 2018', Particulars:'Advanced Biological and Chemical Understanding of Disease Diagnostics and Therapeutics' },
    
  ];
  return (
  <div className="mx-auto p-8 lg:max-w-15xl">
      {/* Heading */}
      <h1 className="text-4xl text-center text-blue-900 mb-8">Continuing Education Programme (CEP)</h1>
      {/* Description */}
      <div className="text-lg text-gray-800 max-w-8xl mx-auto mb-8">
        IIT Indore has organized several Continuing Education Programmes (CEPs) and Short Courses for working professionals in industry, institutions and universities across India, to enable them to update their knowledge and skills, and also to train them in state-of-the-art facilities. The details of CEPs organized at IIT Indore are listed below:
      </div>
      {/* Displaying CEP details using MyTable component */}
      <div className="mt-8">
        <MyTable className='text-lg' data={jsonData} />
      </div>
    </div>
  );
};

export default Cep;

