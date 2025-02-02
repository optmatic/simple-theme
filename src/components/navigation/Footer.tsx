import Logo from '@/images/rheum-logo-clear.webp'
import { MapPin, PhoneCall, AtSign } from 'lucide-react'


const navigation = {

    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms and Conditions', href: '#' },
    ],
  }
  
  // Add new contact information
  const contactInfo = {
    address: '105 Main Street, Kangaroo Point QLD 4169',
    phone: '(07) 3391 7500',
    email: 'reception@rivercityrheumatology.com.au'
  }
  
  const openingHours = [
    { day: 'Monday', hours: '6:00 AM - 4:00 PM' },
    { day: 'Tuesday', hours: '6:00 AM - 4:00 PM' },
    { day: 'Wednesday', hours: '8:00 AM - 7:30 PM' },
    { day: 'Thursday', hours: '6:00 AM - 7:30 PM' },
    { day: 'Friday', hours: '7:00 AM - 3:00 PM' },
    { day: 'Saturday', hours: '6:00 AM - 12:00PM'}
  ]
  
  export default function Footer() {
    return (
      // <footer className="bg-riverLightBlue border-t mt-12 sm:mt-24">
      <footer className="bg-riverLightBlue border-t">
        <div className="mx-auto max-w-7xl px-6 pt-8 pb-8 sm:pt-12 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div>
              <img
                alt="River City Rheumatology Logo"
                src={Logo.src}
                className="h-[125px]"
              />
              {/* Contact information */}
              <div className="mt-8 space-y-3 ">
                <p className="text-xs xs:text-sm sm:text-md text-black"> <MapPin className="w-4 h-4 sm:w-5 sm:h-5 font-black inline-block mb-1 mr-1 sm:mr-2" /> <a href="https://www.google.com/maps/place/105+Main+St,+Kangaroo+Point+QLD+4169/@-27.4644295,153.0265987,15.55z/data=!4m6!3m5!1s0x6b915a1e3245fc35:0xa01ec3c295eb3809!8m2!3d-27.4665664!4d153.0351104!16s%2Fg%2F11cschlg3b?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-2 decoration-2 decoration-riverBlue">{contactInfo.address}</a></p>
                <p className="text-xs xs:text-sm sm:text-md text-black"> <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5 font-black inline-block mb-1 mr-2" /> <a href={`tel:${contactInfo.phone}`} className="hover:underline underline-offset-2 decoration-2 decoration-riverBlue">{contactInfo.phone}</a></p>
                <p className="text-xs xs:text-sm sm:text-md text-black"> <AtSign className="w-4 h-4 sm:w-5 sm:h-5 font-black inline-block mr-2" /> <a href={`mailto:${contactInfo.email}`} className="hover:underline underline-offset-2 decoration-2 decoration-riverBlue">{contactInfo.email}</a></p>
              </div>
            </div>

            {/* Empty middle column */}
            <div></div>

            {/* Opening hours moved to last column */}
            <div className="mt-16 xl:mt-0">
              <h3 className="text-xl font-semibold text-black underline underline-offset-2 decoration-2 decoration-riverBlue">Opening Hours</h3>
              <div className="mt-6 space-y-2">
                {openingHours.map((schedule) => (
                  <div key={schedule.day} className="flex justify-between text-md">
                    <span className="text-black font-bold font-sans">{schedule.day}</span>
                    <span className="text-black font-sans">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className='w-full'>
          <div className="mt-8 border-t border-riverBlue/30 pt-4 md:flex md:items-center md:justify-between">
            <div className="mt-8 md:order-1 md:mt-0">
              <p className="text-sm/6 text-black">
                &copy; {new Date().getFullYear()} <span className="font-semibold">River City Rheumatology</span>
              </p>
            </div>
            
              <ul role="list" className="flex items-center justify-start sm:justify-between">
                {navigation.legal.map((item, index) => (
                  <li key={item.name} className="flex items-center">
                    <a href={item.href} className="text-sm/6 text-black font-semibold hover:underline decoration-2 decoration-riverBlue">
                      {item.name}
                    </a>
                    {index < navigation.legal.length - 1 && (
                      <span className="mx-2 border-l border-riverBlue h-4" />
                    )}
                  </li>
                ))}
              </ul>

          </div>
          </div>
        </div>
      </footer>
    )
  }
  