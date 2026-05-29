import Benner from '../../components/shared/Benner';
import { contact } from '../../assets/images';
import icon from '../../assets/icons/icon';

const ContactPage = () => {
  const address = [
    {
      title: 'location',
      description: 'Lorem ipsum dolor sit amet',
      icon: icon.location,
    },
    {
      title: 'phone',
      description: '+00 000 000',
      icon: icon.location,
    },
    {
      title: 'E-mail',
      description: 'example@gmail.com',
      icon: icon.phone,
    },
  ];

  return (
    <>
      <Benner title="Contact" bg={contact} />

      <section className="contact-section bg-Pale-grey">
        <div className="app-container py-8 md:py-20">
          <div className="contact-wrapper flex flex-col md:flex-row gap-5">
            {/* Left Side */}

            {/*  */}
            <div className="contact-info w-full md:w-1/2 flex flex-col">
              <div>
                <h4 className="contact-title cart">Contact Us</h4>
                <p className="text-gray-600 text-[14px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Libero accusamus officia saepe nisi culpa at est nobis, beatae
                  enim minima!
                </p>
              </div>

              <div className="mt-5 flex flex-col gap-5">
                {/* Location */}
                {address.map((item, index) => (
                  <div key={index} className="flex items-center flex-row gap-3">
                    <div className="text-deep-aqua text-2xl mt-1">
                      {item.icon}
                    </div>
                    <div>
                      <p className="p14">{item.title}</p>
                      <p className="p14">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Right Side */}
            <div className="contact-form-wrapper w-full md:w-1/2 flex flex-col">
              <form className=" mt-5 flex flex-col gap-5">
                <input
                  type="text"
                  placeholder="Name"
                  className="form-input py-1 px-3 placeholder:text-[12px] outline-0  rounded-md border border-gray-300"
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  className="form-input py-1 px-3 placeholder:text-[12px] outline-0  rounded-md border border-gray-300"
                />
                <textarea
                  placeholder="Message"
                  className="form-textarea py-1 px-3 placeholder:text-[12px] outline-0  rounded-md border border-gray-300"
                ></textarea>
                <button
                  type="submit"
                  className=" bg-deep-aqua px-5 py-2 rounded-md text-white w-[50%] text-center"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-Pale-grey">
        <div className="app-container py-8 md:py-0 md:pb-20">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32749.25585689692!2d90.39601809138638!3d24.745661656248867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37564f1007ad9b59%3A0x79a59cb060e32d6c!2sMymensingh!5e1!3m2!1sen!2sbd!4v1753076455241!5m2!1sen!2sbd"
              className="w-full h-80 md:h-100 rounded-2xl"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
