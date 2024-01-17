// import { useSession } from 'next-auth/react';
import Link from 'next/link';

const SanityEdit = () => {
  // const { data: session } = useSession()

  return (
    <div>
          <Link href='https://sanitygrizzly.sanity.studio/desk'>
              <a target='_blank' className='text-center sm:text-left'><button className='bg-gteal-600'>Edytuj dane w Sanity</button></a>
          </Link>
    </div>
  )
}

export default SanityEdit;
