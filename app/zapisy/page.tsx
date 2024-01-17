// import dayjs from 'dayjs';
// import 'dayjs/locale/pl';
// import emailjs from 'emailjs-com';
// import Link from 'next/link';
// import { toast } from 'react-toastify';
// import schools2 from '../../data/szkolyPodstawowe.json';
// import { isValidEmail } from '../../utils';

// export default function Registration () {
//     const form = useForm({
//         initialValues: {
//             name: '',
//             email: '',
//             birthDate: '',
//             place: '',
//             phone: ''
//         },
    
//         validate: {
//             email: (value) => (isValidEmail(value) ? null : 'Błędny email'),
//         },
//     });

//     const handleSubmit = (values: typeof form.values) => {
//         values.birthDate = dayjs(values.birthDate).format("DD.MM.YYYY")
//         const serviceId = String(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID);
//         const templateId = String(process.env.NEXT_PUBLIC_EMAILJS_KID_REGISTER_ID);
//         const userId = String(process.env.NEXT_PUBLIC_EMAILJS_USER_ID);

//         emailjs.send(serviceId, templateId, values, userId)
//             .then(() => {
//                 toast.success("Email wysłany!", { theme: 'colored' })
//                 form.reset()
//             })
//             .catch(() => {
//                 toast.error('Coś poszło nie tak, napisz do nas bezpośrednio', { theme: 'colored' })
//             });
//     }
//     return (
//         <form onSubmit={form.onSubmit(handleSubmit)}>

//         </form>
//     )
// }
