import React from 'react'
import MyTable from './MyTable';
import './Technologies.css'

const Technologies = () => {
    const jsonData1 = [
        { SNo: 1, Technology: 'Design Space Exploration System and Method Thereof Using a Bacterial Foraging Optimization Mechanism', 	'Application Area': 'Computer Science and Engineering' },
        { SNo: 2, Technology: 'Method and System for Automatic Fault Recovery and True Output Extraction during High Level Synthesis', 	'Application Area': 'Computer Science and Engineering' },
        { SNo: 3, Technology: '	Awaaz: Voice for the Vocally Challenged using Sign Language Gesture Recognition and Leap Motion 3D Infrared Camera (Filled), System and Method for Sign Language Gesture Recognition', 	'Application Area': 'Computer Science and Engineering' },
        { SNo: 4, Technology: 'Design Space Exploration of Optimal k-Cycle Transient Fault Tolerant Datapath Based on Multi-Objective Power-Performance Tradeoff', 	'Application Area': 'Computer Science and Engineering' },
        { SNo: 5, Technology: 'Method and Apparatus for Embedded Systems based Intevention for Energy Conservation', 	'Application Area': 'Computer Science and Engineering' },
        { SNo: 6, Technology: 'Improved Schedule Delay Estimation Process for Datapath during High Level Synthesis of Application Specific Processors', 	'Application Area': 'Computer Science and Engineering' },
        { SNo: 7, Technology: '	Design Space Exploration of Optimal K-­?Cycle Transient Fault Secured Data-path System with Intelligent Cut Insertion', 	'Application Area': 'Computer Science and Engineering' },
        { SNo: 8, Technology: '	Design Space Exploration Of An Optimized Hardware Trojan Detectable/Secured Datapath During High Level Synthesis', 	'Application Area': 'Computer Science and Engineering' },
        { SNo: 9, Technology: '	Embedding Watermark based on Multi-Variable Signature Encoding at Behaviour Level for Reusable IP Core Protection', 	'Application Area': 'Computer Science and Engineering' },
        { SNo: 10, Technology: 'Wheelchair equipped with Brain Computer Interface and Gesture Recognition', 	'Application Area': 'Computer Science and Engineering' },
        { SNo: 11, Technology: 'Large Scale Contact Tracing for Covid-19', 	'Application Area': 'Computer Science and Engineering' },
        { SNo: 12, Technology: 'A Multi-Frequency Based Transceiver', 	'Application Area': '	Electrical Engineering' },
        { SNo: 13, Technology: 'P-N Tuned Differential 8T Static Random Access Memory (SRAM) Cell', 	'Application Area': '	Electrical Engineering' },
        { SNo: 14, Technology: 'System and method for emergency services', 	'Application Area': '	Electrical Engineering' },
        { SNo: 15, Technology: 'Achieving super subthreshold swing (< 1 mY/decade) in multiple gate junctionless MOSFET through engineering the back gate position', 	'Application Area': '	Electrical Engineering' },
        { SNo: 16, Technology: 'Method and Apparatus for Recording, Archiving, Media Management and Playing back of a Telephone Call', 	'Application Area': '	Electrical Engineering' },
        { SNo: 17, Technology: 'Low cost, low power, and portable dual transceiver based on software defined radio', 	'Application Area': '	Electrical Engineering' },
        { SNo: 18, Technology: 'Method Device and Apparatus for Managing Phone/Device Profile based on an event', 	'Application Area': '	Electrical Engineering' },
        { SNo: 19, Technology: 'Multiple Gate Tunneling Field Effect Transistor for Capacitorless Dynamic Random Access Memory Applications', 	'Application Area': '	Electrical Engineering' },
        { SNo: 20, Technology: 'Low leakage-high stability differential positive feedback controlled 10T (DPFC10T) SRAM cell', 	'Application Area': '	Electrical Engineering' },
        { SNo: 21, Technology: 'Improved Performance of DG-TFET with Lateral Asymmetric Channel (LAC) Doping Profile an Underlap (UL) Feature', 	'Application Area': '	Electrical Engineering' },
        { SNo: 22, Technology: 'Low cost identification of road congestion for traffic management', 	'Application Area': '	Electrical Engineering' },
        { SNo: 23, Technology: 'Offset Compensated Data Sensing Technique for Low Energy Embedded SRAM', 	'Application Area': '	Electrical Engineering' },
        { SNo: 24, Technology: 'System, method and apparatus for low complexity Non-Orthogonal Multiple Access (NOMA) receiver for mixed Constellation', 	'Application Area': '	Electrical Engineering' },
        { SNo: 25, Technology: 'Programmable Electrical Tester (PET) for ultrafast electrical characterisation of electronic materials and devices".    ', 	'Application Area': '	Electrical Engineering' },
        { SNo: 26, Technology: 'Dual ion beam sputtered cost-effective and non-volatile resistive memory devices', 	'Application Area': '	Electrical Engineering' },
        { SNo: 27, Technology: 'An Ultra Low Power, read decoupled-differential write, 10T SRAm cell with larger read/write noise margin', 	'Application Area': '	Electrical Engineering' },
        { SNo: 28, Technology: 'Read Recharge (RCC) based process variation tolerant 10T Sram Cell', 	'Application Area': '	Electrical Engineering' },
        { SNo: 29, Technology: 'Method and appartus for low complexity Natural Grandient based OFDM Channel Estimator', 	'Application Area': '	Electrical Engineering' },
        { SNo: 30, Technology: 'Method and Apparatus for detection of active taps location in OFDM System', 	'Application Area': '	Electrical Engineering' },
        { SNo: 31, Technology: 'Achieving high concentration of two-dimensional electron gas in capped ZnO based heterostructure for electron mobility transistor', 	'Application Area': '	Electrical Engineering' },
        { SNo: 32, Technology: 'High two-dimensional electron gas density in heterostructure of ternary/quaternary compounds based on Zinc Oxide material', 	'Application Area': '	Electrical Engineering' },
        { SNo: 33, Technology: 'Method and Apparatus for Low Power Source Spectrum Sensing', 	'Application Area': '	Electrical Engineering' },
        { SNo: 34, Technology: 'Method and apparatus for Anti-theft Fingerprint Biometry', 	'Application Area': '	Electrical Engineering' },
        { SNo: 35, Technology: 'Hybrid mesoporous composites gas sensors', 	'Application Area': '	Electrical Engineering' },
        { SNo: 36, Technology: 'Organo-acidified zinc oxide carbon monoxide sensor', 	'Application Area': '	Electrical Engineering' },
        { SNo: 37, Technology: 'Method and Apparatus for secure ear biomteric recognition using single shot fringe projection themography', 	'Application Area': '	Electrical Engineering' },
        { SNo: 38, Technology: 'A Device for Assessment of seed priming treatments using biospeckle analysis', 	'Application Area': '	Electrical Engineering' },
        { SNo: 39, Technology: 'Ultrasensitive nitrogen dioxide sensor based on s, n doped carbon dot functionalized tungsten oxide', 	'Application Area': '	Electrical Engineering' },
        { SNo: 40, Technology: 'Engineered nanophotonic structure based on electrically controlled composite materials for Biochemical sensing', 	'Application Area': '	Electrical Engineering' },
        { SNo: 41, Technology: 'Silicon Compatible memristive crossbar array', 	'Application Area': '	Electrical Engineering' },
        { SNo: 42, Technology: 'Silicon Compatible memristive crossbar array', 	'Application Area': '	Electrical Engineering' },
        { SNo: 43, Technology: 'Silicon Compatible memristive crossbar array', 	'Application Area': '	Electrical Engineering' },
        { SNo: 44, Technology: 'Silicon Compatible memristive crossbar array', 	'Application Area': '	Electrical Engineering' },
        { SNo: 45, Technology: 'Silicon Compatible memristive crossbar array', 	'Application Area': '	Electrical Engineering' },
        { SNo: 46, Technology: 'Silicon Compatible memristive crossbar array', 	'Application Area': '	Electrical Engineering' },
        { SNo: 47, Technology: 'Silicon Compatible memristive crossbar array', 	'Application Area': '	Electrical Engineering' },
        { SNo: 48, Technology: 'Silicon Compatible memristive crossbar array', 	'Application Area': '	Electrical Engineering' },
        { SNo: 49, Technology: 'Silicon Compatible memristive crossbar array', 	'Application Area': '	Electrical Engineering' },
        { SNo: 50, Technology: 'Silicon Compatible memristive crossbar array', 	'Application Area': '	Electrical Engineering' },
        { SNo: 51, Technology: 'Silicon Compatible memristive crossbar array', 	'Application Area': '	Electrical Engineering' },
        { SNo: 52, Technology: 'Silicon Compatible memristive crossbar array', 	'Application Area': '	Electrical Engineering' },
        { SNo: 53, Technology: 'Silicon Compatible memristive crossbar array', 	'Application Area': '	Electrical Engineering' },
        { SNo: 54, Technology: 'Silicon Compatible memristive crossbar array', 	'Application Area': '	Electrical Engineering' },
        { SNo: 55, Technology: 'Silicon Compatible memristive crossbar array', 	'Application Area': '	Electrical Engineering' },
        { SNo: 56, Technology: 'Silicon Compatible memristive crossbar array', 	'Application Area': '	Electrical Engineering' },
        { SNo: 57, Technology: 'Silicon Compatible memristive crossbar array', 	'Application Area': '	Electrical Engineering' },
        { SNo: 58, Technology: 'Silicon Compatible memristive crossbar array', 	'Application Area': '	Electrical Engineering' },
        { SNo: 59, Technology: 'Silicon Compatible memristive crossbar array', 	'Application Area': '	Electrical Engineering' },
        { SNo: 60, Technology: 'Silicon Compatible memristive crossbar array', 	'Application Area': '	Electrical Engineering' },
        { SNo: 61, Technology: 'Silicon Compatible memristive crossbar array', 	'Application Area': '	Electrical Engineering' },
        { SNo: 62, Technology: 'Silicon Compatible memristive crossbar array', 	'Application Area': '	Electrical Engineering' },
        { SNo: 63, Technology: 'Silicon Compatible memristive crossbar array', 	'Application Area': '	Electrical Engineering' },
        { SNo: 64, Technology: 'Silicon Compatible memristive crossbar array', 	'Application Area': '	Electrical Engineering' },
        { SNo: 65, Technology: 'Silicon Compatible memristive crossbar array', 	'Application Area': '	Electrical Engineering' },
        { SNo: 66, Technology: 'Silicon Compatible memristive crossbar array', 	'Application Area': '	Electrical Engineering' },
        { SNo: 67, Technology: 'Silicon Compatible memristive crossbar array', 	'Application Area': '	Electrical Engineering' },
        { SNo: 68, Technology: 'Silicon Compatible memristive crossbar array', 	'Application Area': '	Electrical Engineering' },
        { SNo: 69, Technology: 'Silicon Compatible memristive crossbar array', 	'Application Area': '	Electrical Engineering' },
        { SNo: 70, Technology: 'Silicon Compatible memristive crossbar array', 	'Application Area': '	Electrical Engineering' },
        { SNo: 71, Technology: 'Silicon Compatible memristive crossbar array', 	'Application Area': '	Electrical Engineering' },
        { SNo: 72, Technology: 'Silicon Compatible memristive crossbar array', 	'Application Area': '	Electrical Engineering' },
        { SNo: 73, Technology: 'Silicon Compatible memristive crossbar array', 	'Application Area': '	Electrical Engineering' },
        { SNo: 74, Technology: 'Silicon Compatible memristive crossbar array', 	'Application Area': '	Electrical Engineering' },
        { SNo: 75, Technology: 'Silicon Compatible memristive crossbar array', 	'Application Area': '	Electrical Engineering' },
        { SNo: 76, Technology: 'Silicon Compatible memristive crossbar array', 	'Application Area': '	Electrical Engineering' },

        

        // Add more data as needed
      ];
  return (
    <div className="research-scheme-container-Tech" style={{ marginBottom: '0' }}>
    <h1 className="section-heading-Tech">TECHNOLOGIES AVAILABLE FOR LICENSING & COMMERCIALIZATION</h1>

    <div>
        <MyTable data={jsonData1}></MyTable>
    </div>

   
  </div>
  )
}

export default Technologies;