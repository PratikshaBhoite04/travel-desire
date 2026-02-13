import Navbar from "../../components/shared/Navbar";

/* PNG ICONS */
import locationIcon from "../../assets/images/location.png";
import phoneIcon from "../../assets/images/call.png";
import emailIcon from "../../assets/images/email.png";
import clockIcon from "../../assets/images/time.png";
import AnimatedCTAOutline from "../../components/shared/AnimatedCTAOutline";


/* HEADER PATTERN */
import headerLines from "../../assets/images/header-lines.png";

function Contact() {
  return (
    <>
      {/* ================= NAVBAR ================= */}
      <Navbar bgColor="#001917" />

<section className="relative bg-[#001917] overflow-hidden h-[210px] md:h-[270px]">
  <img
    src={headerLines}
    alt=""
    className="pointer-events-none absolute top-0 right-0 h-full w-auto opacity-90"
  />

  <div className="relative max-w-7xl mx-auto px-3 md:px-6 h-full flex items-end pb-6 md:pb-10">
    <h1 className="font-tiempos text-[56px] md:text-[52px] leading-[40px] md:leading-[62px] font-[500] text-white">
      Have <span className="text-[#1EEBD9]">Queries?</span>
    </h1>
  </div>
</section>



      {/* ================= FORM SECTION ================= */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">

          {/* GAP INCREASED HERE */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">

            {/* ================= FORM ================= */}
            <div className="md:col-span-2">
              <form className="space-y-6 font-manrope">

                {/* Full Name */}
                <div>
                  <label className="block text-[16px] font-manrope font-[600] text-[#011715] mb-1">
                    Full Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full h-[48px] rounded-[12px] border border-[#7DBAB366] px-5 text-[14px] font-manrope font-[400] text-[#B5B5B5] outline-none focus:border-[#A3FEF8] focus:bg-[#F1FFFE]"
                  />
                </div>

                {/* Phone + Date */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[16px]  font-[600] font-manrope text-[#011715] mb-1">
                      Phone Number (Whatsapp)<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="+91 98765 43210"
                      className="w-full h-[48px] rounded-[12px] border border-[#7DBAB366] px-5 text-[14px] font-manrope font-[400] text-[#B5B5B5] outline-none focus:border-[#A3FEF8] focus:bg-[#F1FFFE]"
                    />
                  </div>

                  <div>
                    <label className="block ttext-[16px] font-manrope font-[600] text-[#011715] mb-1">
                      Preferred Date of Travel<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      className="w-full h-[48px] rounded-[12px] border border-[#7DBAB366] px-5 text-[14px] text-[#B5B5B5] bg-white text-[400] font-manrope outline-none focus:border-[#A3FEF8] focus:bg-[#F1FFFE]"
                    />
                  </div>
                </div>

                {/* Destination */}
                <div>
                  <label className="block text-[16px] font-manrope font-[600] text-[#011715] mb-1">
                    Destination<span className="text-red-500">*</span>
                  </label>

                  <div className="relative">
                    <select
                      defaultValue=""
                      className="w-full h-[48px] rounded-[12px] border border-[#7DBAB366] px-5 pr-12 text-[14px] text-[#B5B5B5] text-[400] font-manrope appearance-none outline-none focus:border-[#A3FEF8] focus:bg-[#F1FFFE]"
                      onChange={(e) => {
                        e.target.classList.remove("text-[#6B7C75]");
                        e.target.classList.add("text-[#001917]");
                      }}
                    >
                      <option value="" disabled hidden>
                        Select Destination
                      </option>
                      <option>Bali</option>
                      <option>Maldives</option>
                      <option>Dubai</option>
                      <option>Switzerland</option>
                    </select>

                    <svg
                      className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none"
                      width="14"
                      height="8"
                      viewBox="0 0 14 8"
                      fill="none"
                    >
                      <path
                        d="M1 1L7 7L13 1"
                        stroke="#6B7C75"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                {/* PAX */}
                <div>
                  <label className="block text-[16px] font-manrope font-[600] text-[#011715] mb-1">
                    No of PAX<span className="text-red-500">*</span>
                  </label>

                  <div className="relative">
                    <select
                      defaultValue=""
                      className="w-full h-[48px] rounded-[12px] border border-[#7DBAB366] px-5 pr-12 text-[14px] font-manrope font-[400] text-[#B5B5B5] appearance-none outline-none focus:border-[#A3FEF8] focus:bg-[#F1FFFE]"
                      onChange={(e) => {
                        e.target.classList.remove("text-[#6B7C75]");
                        e.target.classList.add("text-[#001917]");
                      }}
                    >
                      <option value="" disabled hidden>
                        Select travel type
                      </option>
                      <option>1–2</option>
                      <option>3–5</option>
                      <option>6+</option>
                    </select>

                    <svg
                      className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none"
                      width="14"
                      height="8"
                      viewBox="0 0 14 8"
                      fill="none"
                    >
                      <path
                        d="M1 1L7 7L13 1"
                        stroke="#6B7C75"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                {/* Disclaimer */}
                <p className="text-[12px] font-inter font-[400] text-[#717171]">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>

                {/* BUTTON – CENTERED */}
                <div className="flex justify-end  pt-6">
                  {/* <button
                    type="submit"
                    className="h-[48px] px-10 rounded-full bg-[#06D5C6] text-[#001917] text-[14px] font-medium hover:bg-[#17D6C6] transition"
                  >
                    Send Inquiry Now!
                  </button> */}

                  <AnimatedCTAOutline
  defaultText ="Send Inquiry Now!"
  hoverText="Plan My Trip!"
  className={`
    hidden md:flex
    items-center justify-center
    w-[210px] h-[52px]
    rounded-full

    border border-[#0FA297]
    text-[#001917]
    bg-[#19FAEA]

    backdrop-blur-[36.98px]

    hover:border-[#06D5C6]
    hover:bg-[white]
    transition-all duration-300
  `}
/>
                </div>

              </form>
            </div>

            {/* ================= CONTACT INFO ================= */}
            <div className="rounded-[20px] border border-[1px] border-[#D5FB93] p-8 py-3 h-fit ">
              <h3 className="font-tiempos text-[24px] font-[500] text-[#121212] mb-6">
                Contact Information
              </h3>

              <ul className="space-y-6 font-manrope text-[14px] text-[#4B5563]">
                <li className="flex gap-4">
                  <img src={locationIcon} className="w-12 h-12" alt="" />
                  <div>
                    <p className="font-manrope font-[700] text-[18px] text-[#121212]">Office Address</p>
                    <p className="mt-1 font-manrope text-[14px] font-[500] text-[#4A5565]">
                      123 Travel Street, Andheri West<br />
                      Mumbai, Maharashtra 400001
                    </p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <img src={phoneIcon} className="w-12 h-12" alt="" />
                  <div>
                    <p className="font-manrope font-[700] text-[18px] text-[#121212]">Phone</p>
                    <p className="mt-1 font-manrope text-[14px] font-[500] text-[#4A5565]">+91 98765 43210</p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <img src={emailIcon} className="w-12 h-12" alt="" />
                  <div>
                    <p className="font-manrope font-[700] text-[18px] text-[#121212]">Email</p>
                    <p className="mt-1 font-manrope text-[14px] font-[500] text-[#4A5565]">hello@tripdesire.com</p>
                    <p className="font-manrope text-[14px] font-[500] text-[#4A5565]">support@tripdesire.com</p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <img src={clockIcon} className="w-12 h-12" alt="" />
                  <div>
                    <p className="font-manrope font-[700] text-[18px] text-[#121212]">Business Hours</p>
                    <p className="mt-1 font-manrope text-[14px] font-[500] text-[#4A5565]">Mon – Sat: 9:00 AM – 8:00 PM</p>
                    <p className="font-manrope text-[14px] font-[500] text-[#4A5565]">Sunday: 10:00 AM – 6:00 PM</p>
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