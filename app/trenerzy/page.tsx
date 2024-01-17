// import Image from 'next/image'
// import { CoachType } from '../../types/interfaces'
// import sanity from '../../client'

// export default function Coaches ({ data: { name, experience, description, image }}: { data: CoachType }) 
//     <div className='m-4 shadow-md md:flex md:w-3/4 h-96 shadow-gteal-300'>
//         <div className='relative h-full shadow-md md:w-1/4 shadow-gteal-300' >
//                 <Image src={image} alt={name} layout='fill' objectFit='cover' />
//         </div>
//         <div className='p-4 font-medium text-center md:w-3/4 md:text-left'>
//             <div className='text-2xl text-gray-700 md:text-3xl'>{name}</div>
//             <div className='my-2 text-sm italic text-gray-600 md:text-base'>&#8222;{description}&#8221;</div>
//             <div className='flex flex-col text-base text-gray-500 md:text-base'>{experience?.map((el: string) => 
//                 <span key={el}>&bull; {el}</span>
//             )}</div>
//         </div>
//     </div>

// const index = ({ coaches }: { coaches: CoachType[] }) => {
//   return (
//     <div>
//         {coaches.map(coach => <Coach key={coach.name} data={coach} />)}
//     </div>
//   )
// }

// export const getServerSideProps = async () => {
//     const coaches = await sanity.fetch(`*[_type == "coach"] { name, position, experience, description, "image": image.asset -> url }`);

//     return {
//         props: {
//             coaches
//         }
//     }
// }
