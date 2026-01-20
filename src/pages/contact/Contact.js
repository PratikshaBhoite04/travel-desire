import Navbar from "../../components/shared/Navbar";
import locationIcon from "../../assets/icons/location.svg";
import phoneIcon from "../../assets/icons/phone.svg";
import emailIcon from "../../assets/icons/email.svg";
import clockIcon from "../../assets/icons/clock.svg";
import headerWave from "../../assets/icons/header-wave.svg";

function Contact() {
  return (
    <>
      {/* ================= NAVBAR ================= */}
      <Navbar />

      {/* ================= HEADER ================= */}
      <section
        className="pt-20 md:pt-24 relative overflow-hidden"
        style={{
          background:
            "radial-gradient(1200px 500px at 20% 0%, #062B25 0%, #001917 65%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 pb-12 md:pb-20">
          <h1 className="text-[32px] md:text-[56px] font-serif text-white tracking-tight">
            Have <span className="text-[#1EEBD9]">Queries?</span>
          </h1>
        </div>

        {/* Bottom SVG */}
        {/* <img
          src={headerWave}
          alt="header decoration"
          className="absolute bottom-0 top-0 left-0 w-full s"

        /> */}
      </section>


      {/* ================= FORM SECTION ================= */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* ================= FORM ================= */}
            <div className="md:col-span-2">
              <form className="space-y-6">

                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-[#0F2F24] mb-1">
                    Full Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="
                      w-full
                      rounded-[12px]
                      border border-[#7DBAB366]
                      px-5 py-3
                      text-sm
                      outline-none
                      focus:border-[#A3FEF8]
                      focus:bg-[#F1FFFECC]
                    "
                  />
                </div>

                {/* Phone + Date */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#0F2F24] mb-1">
                      Phone Number (Whatsapp)<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="
                          w-full
              rounded-[12px]
                      border border-[#7DBAB366]
                      px-5 py-3
                      text-sm
                      outline-none
                      focus:border-[#A3FEF8]
                      focus:bg-[#F1FFFECC]
                      "
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#0F2F24] mb-1">
                      Preferred Date of Travel<span className="text-red-500">*</span>
                    </label>
              <input
  type="date"
  className="
    w-full
    rounded-[12px]
    border border-[#7DBAB366]
    px-5 py-3
    text-sm
    outline-none
    focus:border-[#A3FEF8]
    focus:bg-[#F1FFFECC]
    bg-white
    text-[#001917]
    [color-scheme:light]
  "
/>

                  </div>
                </div>

                {/* Destination */}
                <div>
                  <label className="block text-sm font-medium text-[#0F2F24] mb-1">
                    Destination<span className="text-red-500">*</span>
                  </label>
                  <select
                    className="
                       w-full
                       rounded-[12px]
                      border border-[#7DBAB366]
                    px-5 py-3
                     pr-30
                      text-sm
                      outline-none
                      focus:border-[#A3FEF8]
                      focus:bg-[#F1FFFECC]
                    "
                  >
                    <option>Select Destination</option>
                    <option>Bali</option>
                    <option>Maldives</option>
                    <option>Dubai</option>
                    <option>Switzerland</option>
                  </select>
                </div>

                {/* PAX */}
                <div>
                  <label className="block text-sm font-medium text-[#0F2F24] mb-1">
                    No of PAX (People or Passengers)<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Select travel type"
                    className="
                        w-full
                       rounded-[12px]
                      border border-[#7DBAB366]
                      px-5 py-3
                      text-sm
                      outline-none
                      focus:border-[#A3FEF8]
                      focus:bg-[#F1FFFECC]
                    "
                  />
                </div>

                {/* Privacy */}
                <p className="text-xs text-[#6B7C75]">
                  By submitting this form, you agree to our privacy policy and
                  terms of service.
                </p>

                {/* Submit Button (CENTERED) */}
                <div className="flex justify-center pt-2">
                  <button
                    type="submit"
                    className="
                      px-10 py-3
                      rounded-[25px]
                      bg-[#06D5C6]
                      text-black
                      text-sm
                      font-medium
                      hover:bg-[#17D6C6]
                      transition
                        h-[48px]
                    "
                  >
                    Send Inquiry Now!
                  </button>
                </div>

              </form>
            </div>

            {/* ================= CONTACT INFO ================= */}
            <div
              className="
    rounded-[12px]
    border border-[#BAFFFA]
    bg-[#F0FFFE66]
    p-6
    h-fit
  "
            >
              <h3 className="text-[22px] font-serif font-semibold text-[#0F2F24] mb-6">
                Contact Information
              </h3>

              <ul className="space-y-6 text-sm text-[#5C6F68]">

                {/* Office Address */}
                <li className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-[#06D5C61A] flex items-center justify-center shrink-0">
                    <img src={locationIcon} alt="location" className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0F2F24]">Office Address</p>
                    <p className="mt-1">
                      123 Travel Street, Andheri West<br />
                      Mumbai, Maharashtra 400001
                    </p>
                  </div>
                </li>

                {/* Phone */}
                <li className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-[#06D5C61A] flex items-center justify-center shrink-0">
                    <img src={phoneIcon} alt="phone" className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0F2F24]">Phone</p>
                    <p className="mt-1">+91 98765 43210</p>
                  </div>
                </li>

                {/* Email */}
                <li className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-[#06D5C61A] flex items-center justify-center shrink-0">
                    <img src={emailIcon} alt="email" className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0F2F24]">Email</p>
                    <p className="mt-1">hello@tripdesire.com</p>
                    <p>support@tripdesire.com</p>
                  </div>
                </li>

                {/* Business Hours */}
                <li className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-[#06D5C61A] flex items-center justify-center shrink-0">
                    <img src={clockIcon} alt="clock" className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0F2F24]">Business Hours</p>
                    <p className="mt-1">Mon – Sat: 9:00 AM – 8:00 PM</p>
                    <p>Sunday: 10:00 AM – 6:00 PM</p>
                  </div>
                </li>

              </ul>
            </div>

          </div>

        </div>
      </section>

    </>
  );
}

export default Contact;
