import AnkitTiwari from './Teamimg/Ankit Photo.jpg'
import TraptiJain from './Teamimg/TraptiJ.jpg'
import RajeevPandey from './Teamimg/Rajeev Pandey_1.jpg'
import Nisha from './Teamimg/Nisha.jpg'
import Bodhisatwa from './Teamimg/Dr. Bodhisatwa Mazumdar.jpg'
import Drplani from './Teamimg/DRPlani.jpg'
import AnilSawle from './Teamimg/WhatsApp Image 2024-01-23 at 3.40.13 PM.jpeg'
import Prashant from './Teamimg/Prashant.jpeg'
import Chetan from './Teamimg/Chetan.jpeg'
import Jitendra from './Teamimg/Jitendra.jpeg'
import Amit from './Teamimg/Amit.jpeg'
import Jayprakash from './Teamimg/Jayprakash.jpg'
import Archana from './Teamimg/IMG_20230824_094941.jpg'


export const CombinedData = [
    {
      id: 1,
      name: 'Mr. Amit Kumar',
      position: 'Junior Assistant',
      email: 'amitkumar [at] iiti.ac.in',
      phone: '+91-731-6603131',
      image_url: Amit,
      role: 'Finance'
    },
    {
      id: 2,
      name: 'Mr. Ankit Tiwari',
      position: 'Junior Assistant',
      email: 'dm2rnd [at] iiti.ac.in',
      phone: '+91-731-6603423',
      image_url: AnkitTiwari,
      role: 'Finance'
    },
    {
      id: 3,
      name: 'Mr. Chetan Verma',
      position: 'Junior Assistant',
      email: 'ja2rnd [at] iiti.ac.in',
      phone: '+91-731-6603423',
      image_url: Chetan,
      role: 'Finance'
    },
    {
      id: 4,
      name: 'Mr. Yogesh Rathore',
      position: 'Junior Assistant',
      email: 'ja3rnd [at] iiti.ac.in',
      phone: '+91-731-6603563',
      image_url: '',
      role: 'Finance'
    },
    {
      id: 5,
      name: 'Mr. Jitendra Kadam',
      position: 'Junior Assisstant',
      email: 'jitendrakadam [at] iiti.ac.in',
      phone: '+91-731-6603563',
      image_url: Jitendra,
      role: 'Finance'
    },
    {
      id: 6,
      name: 'Prof. I. A. Palani',
      position: 'Dean, R&D',
      email: 'dean.rnd [at] iiti.ac.in',
      phone: '+91-731-6603232',
      image_url: Drplani,
      role: 'OFFICE'
    },
    {
      id: 7,
      name: 'Prof. Trapti Jain',
      position: 'Associate Dean-I, R&D',
      email: 'adord1 [at] iiti.ac.in',
      phone: '+91-731-6603249',
      image_url: TraptiJain,
      role: 'OFFICE'
    },

    {id: 8,
    name: 'Dr. Bodhisatwa Mazumdar',
    position: 'Associate Dean-II, R&D',
    email: 'adord2 [at] iiti.ac.in',
    phone: '+91-731-6603249',
    image_url: Bodhisatwa,
    role: 'OFFICE'
  },
  {
    id: 9,
    name: 'Mr. Rajeev Pandey',
    position: 'Assistant Registrar',
    email: 'arrnd [at] iiti.ac.in',
    phone: '+91-731-6603586',
    image_url: RajeevPandey,
    role: 'People'
  },
  {
    id: 10,
    name: 'Ms. Nisha Choudhary',
    position: 'Junior Superintendent',
    email: 'managerrnd [at] iiti.ac.in',
    phone: '+91-731-6603123',
    image_url: Nisha,
    role: 'People'
  },
  {
    id: 11,
    name: 'Mr. Anil Sawale',
    position: 'Attendant',
    email: 'anilsawale [at] iiti.ac.in',
    phone: '+91-731-6603531',
    image_url: AnilSawle,
    role: 'People'
  },
    // Add more data from the People array...
    {
      id: 12,
      name: 'Mr. Prashant K Sahu',
      position: 'Junior Assistant',
      email: 'prashantksahu [at] iiti.ac.in',
      phone: '+91-731-6605552',
      image_url: Prashant,
      role: 'Purchase'
    },
    {
      id: 13,
      name: 'Mr. Jaiprakash',
      position: 'Junior Assistant',
      email: 'jp [at] iiti.ac.in',
      phone: '+91-731-6605552',
      image_url: Jayprakash,
      role: 'Purchase'
    },

    {
        id: 14,
        name: 'Dr. Archana Chaudhary',
        position: 'Executive Officer',
        phone : '+91-731-6603578',
        email: 'eo-ctr [at] iiti.ac.in',
        image_url:Archana,
        role: 'Executive Officer'




    }
    // Add more data from the Purchase array...
  ];

  export const Finance = CombinedData.filter(member => member.role === 'Finance');

export const Purchase = CombinedData.filter(member => member.role === 'Purchase');

export const People = CombinedData.filter(member => member.role === 'People');

export const OFFICE = CombinedData.filter(member => member.role === 'OFFICE');

export const Executive = CombinedData.filter(member => member.role === 'Executive Officer');


