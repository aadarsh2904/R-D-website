import React, { useState, useEffect } from 'react';

const data = [
    { id: 1, title: 'Ashish Giri and Kaustav Bakshi,  Geometrically Nonlinear Bending of Stiffened Composite Skewed Cylindrical Shells Under Transverse Pressure,  The Journal of Strain Analysis for Engineering Design,  2024', fundingagency: 'AICTE', year: '2024', publicationtype: 'Journal', facultyMember: 'Faculty 1', department: 'x', link: 'https://example.com/project1' },
    { id: 2, title: 'Manojkumar Kokare, Swaminathan R, and Sumit Gautam,  Performance of Multiple IRS-enabled V2V Communication over Double Generalized Gamma Fading Channel,  Proceedings of IEEE COMSNETS ,  2024', fundingagency: 'O', year: '2090', publicationtype: 'Conference', facultyMember: 'Faculty 2', department: 'Electrical Engineering', link: 'https://example.com/project2' },
    { id: 3, title: 'Timbadiya, P. V., Singh, V. P., Patel, P. L., and Sharma, P. J. (Eds.),  Hydrology and Hydrologic Modelling,  Proceedings of 26th International Conference on Hydraulics, Water Resources and Coastal Engineering (HYDRO 2021). Springer, Singapore,  2023', fundingagency: 'AICTE', year: '9', publicationtype: 'Book', facultyMember: 'Faculty 1', department: 'Computer Science', link: 'https://example.com/project1' },
    { id: 4, title: 'Sujeet Kumar Chaubey, Kapil Gupta, Neelesh Kumar Jain,  A comparative study of different materials for manufacturing of miniature spur gears by spark erosion wire cutting process,  Applied Science and Engineering Progress,  2024', fundingagency: 'hh', year: '2024', publicationtype: 'bb', facultyMember: 'Faculty 1', department: 'jh', link: 'https://example.com/project1' },
    { id: 5, title: 'Khan, M. A., Ranjan and Talukdar, A.,  A Study of Modal Logic With Semantics Based on Rough Set Theory,  Journal of Applied Non-Classical Logics,  2024', fundingagency: 'Au', year: '2024', publicationtype: 'k', facultyMember: 'Faculty 1', department: 'Comp', link: 'https://example.com/project1' },
    { id: 6, title: 'Moirangthem Johnson Singh, Anshul Kaushik, Gyanesh Patnaik, Dong-Sheng Xu, Wei-Qiang Feng, Abhishek Rajput, Guru Prakash & Lalit Borana,  Machine learning-based approach for predicting the consolidation characteristics of soft soil,  Marine Georesources & Geotechnology,  2023', fundingagency: 'E', year: '2023', publicationtype: 'B', facultyMember: 'Faculty 1', department: 'Compu', link: 'https://example.com/project1' },
    { id: 7, title: 'Dipendu Pramanik; Santanu Manna,  Love-like wave dispersion in a highly non-homogeneous viscoelastic orthotropic layer under the effect of non-local elasticity,  Mathematical Methods in the Applied Sciences (WILEY),  2023', fundingagency: 'h', year: '2023', publicationtype: 'Book', facultyMember: 'Faculty 1', department: 'Com', link: 'https://example.com/project1' },
    { id: 8,  title: 'Bhupendra, Kriz Moses, Ankur Miglani, Pavan Kumar Kankar,  Deep-CNN based damage classification of milled rice grains using a high-magnification image dataset,  Computers and Electronics in Agriculture,  2022', fundingagency: 'AICTE', year: '2', publicationtype: 'B', facultyMember: 'Ankur Miglani', department: 'C', link: 'https://example.com/project1' },
    { id: 9,  title: 'Nagendra Singh Ranawat, Ankur Miglani, Pavan Kumar Kankar,  Performance of centrifugal pump over a range of composite wear ring clearance,  Journal of the Brazilian Society of Mechanical Sciences and Engineering,  2022', fundingagency: 'AICTE', year: '2', publicationtype: 'B', facultyMember: 'Ankur Miglani', department: 'C', link: 'https://example.com/project1' },
    { id: 10, title: 'Chakraborty, S., Datta, A., Ray, S., Ayyagari, D., Paul, A.,,  Comparative studies of ionospheric models with GNSS and NavIC over the Indian longitudinal sector during geomagnetic activities,  Advances in Space Research,  2020', fundingagency: 'AICTE', year: '2', publicationtype: 'B', facultyMember: 'Abhirup Dutta', department: 'C', link: 'https://example.com/project1' },
    { id: 11, title: 'Arnab Chakraborty, Nirupam Roy, Y. Wang, Abhirup Datta, H. Beuther, Medina, S. -N. X.; Menten, K. M.; Urquhart, J. S.; Brunthaler, A.; Dzib, S. A. ,  Characterization of unresolved and unclassified sources detected in radio continuum surveys of the Galactic plane,  Monthly Notices of Royal Astronomical Society,  2020', fundingagency: 'AICTE', year: '2', publicationtype: 'B', facultyMember: 'Abhirup Dutta', department: 'C', link: 'https://example.com/project1' },
    { id: 12, title: 'Manimala Chakraborti, Dipankar Das, Nivedita Ghosh, Samadrita Mukherjee, Ipsita Saha,  New physics implications of vector boson fusion searches exemplified through the Georgi-Machacek model,  Physical Review D,  2024', fundingagency: 'AICTE', year: '2', publicationtype: 'B', facultyMember: 'F', department: 'Physics', link: 'https://example.com/project1' },
    { id: 13, title: 'Kulbhushan Mishra, P. A. Bhobe,  Magnetic properties and identification of Griffiths-like phase in Mn2FeSi Heusler antiferromagnet,  Journal of Alloys and Compounds,  2023', fundingagency: 'AICTE', year: '2', publicationtype: 'B', facultyMember: 'F', department: 'Physics', link: 'https://example.com/project1' },
    { id: 14, title: 'Bera, Nabakumar ; Lenka, Bhabani; König, Burkhard; Sarkar, Debayan ,  Riboflavin Photocatalyzed Dearomative Spiro-etherification of Naphthols,  Journal of Organic Chemistry, ACS,  2023', fundingagency: 'A', year: '2', publicationtype: 'B', facultyMember: 'F', department: 'Chemistry', link: 'https://example.com/project1' },
    { id: 15, title: 'S Nath, E Yadav, A Raghuvanshi, AK Singh,  Ru (II) Complexes with Protic-and Anionic-Naked-NHC Ligands for Cooperative Activation of Small Molecules,  Chemistry-A European Journal,  2023', fundingagency: 'A', year: '2', publicationtype: 'B', facultyMember: 'F', department: 'Chemistry', link: 'https://example.com/project1' },

  ];

const Publication = () => {
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({
    publicationtype:'',
    year:'',
    facultyMember: '',
    department: '',
  });

  useEffect(() => {
    setOriginalData(data);
    setFilteredData(data);
  }, []);

  useEffect(() => {
    applyFilters();
  }, [filters]);

  const applyFilters = () => {
    let filteredResult = [...originalData];

    Object.keys(filters).forEach((filter) => {
      if (filters[filter] !== '') {
        filteredResult = filteredResult.filter((item) => item[filter] === filters[filter]);
      }
    });

    setFilteredData(filteredResult);
  };

  const handleFilterChange = (filterName, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [filterName]: value }));
  };

  const handleResetFilters = () => {
    setFilters({
    publicationtype:'',
    year:'',
    facultyMember: '',
    department: '',
    });
  };

  return (
  
    <div className="w-90 mx-auto box-border">
      <header className="bg-cover bg-center bg-gradient-to-r from-cyan-500 to-blue-500 bg-opacity-80 text-center p-6 w-full relative h-1/4 mt-0">
        <h1 className="text-4xl text-white">Consultancy Projects</h1>
      </header>
      <div
        className="flex-grow bg-cover bg-center relative"
        style={{
          backgroundImage: "url('./abhinandan1ed.jpg')", // Replace with your background image path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.1)', // Adjust opacity and color as needed
        }}
      >
      <nav className="flex justify-between items-center  p-4 w-full">
        <label className="mr-8">
          <select
            value={filters.publicationtype}
            onChange={(e) => handleFilterChange('publicationtype', e.target.value)}
            className="p-2 text-base bg-white transition duration-300 hover:bg-gray-300 focus:outline-none focus:shadow-outline-blue"
          >
            <option value="">Publication Type</option>
            <option value="Journal">Journal</option>
            <option value="Conference">Conference</option>
            <option value="Book">Book</option>
            
          </select>
        </label>
        <label className="mr-8">
          <select
            value={filters.year}
            onChange={(e) => handleFilterChange('year', e.target.value)}
            className="p-2 text-base bg-white transition duration-300 hover:bg-gray-300 focus:outline-none focus:shadow-outline-blue"
          >
            <option value="">Year</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            
          </select>
        </label>
        

        <label className="mr-8">
          <select
            value={filters.facultyMember}
            onChange={(e) => handleFilterChange('facultyMember', e.target.value)}
            className="p-2 text-base bg-white transition duration-300 hover:bg-gray-300 focus:outline-none focus:shadow-outline-blue"
          >
            <option value=""> Faculty Member</option>
            <option value="Ankur Miglani">Ankur Miglani</option>
            <option value="Abhirup Dutta">Abhirup Dutta</option>
          </select>
        </label>

        <label>
          <select
            value={filters.department}
            onChange={(e) => handleFilterChange('department', e.target.value)}
            className="p-2 text-base bg-white transition duration-300 hover:bg-gray-300 focus:outline-none focus:shadow-outline-blue"
          >
            <option value=""> Department</option>
            <option value="Physics">Physics</option>
            <option value="Chemistry">Chemistry</option>
          </select>
        </label>

        <button onClick={handleResetFilters} className="p-2 text-base cursor-pointer bg-blue-500 text-white rounded-md">
          Reset
        </button>
      </nav>
      
      

      <table className="w-full border-collapse mt-4  bg-white bg-opacity-60 text-gray-700 ">
        <thead>
          <tr className="border">
            <th className="border p-2 text-left font-extrabold bg-gray-200">S.No</th>
            <th className="border p-2 text-left font-extrabold bg-gray-200">Publication Details</th>

            <th className="border p-2 text-left font-extrabold bg-gray-200">View</th>
          </tr>
        </thead>
        <tbody>
          {filters.year  || filters.facultyMember || filters.department || filters.publicationtype
            ? filteredData.map((item, index) => (
                <tr key={index} className="border-t hover:bg-neutral-400">
                  <td className="border p-2 text-black">{index + 1}</td>
                  <td className="border p-2 text-black">{item.title}</td>
                 
                  <td className="border p-2 text-black">
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      <button className="bg-blue-500 text-white p-2 rounded-md">View</button>
                    </a>
                  </td>
                </tr>
              ))
            : originalData.map((item, index) => (
                <tr key={index} className="border-t hover:bg-neutral-400">
                  <td className="border p-2 text-black">{index + 1}</td>
                  <td className="border p-2 text-black">{item.title}</td>
            
                  <td className="border p-2 text-black">
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      <button className="bg-blue-500 text-white p-2 rounded-md">View</button>
                    </a>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Publication;
