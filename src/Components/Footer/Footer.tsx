import { Facebook, LinkedinIcon, Twitter } from "lucide-react";
import Container from "../../Shared/Container";
import FooterLogo from "../../assets/footerLogo.png";

export default function Footer() {
  return (
    <div className="bg-[#1e1e1e] mt-35  py-25 background-footer w-full ">
      <Container>
        <div className="text-white/80 grid grid-cols-2 lg:grid-cols-4 gap-10 ">
          {/* 1st col */}
          <div>
            <img src={FooterLogo} alt="logo" />
            <p className="text-white/80 text-lg mt-5 mb-11">
              Best Insurance Company.
            </p>
            <p className="text-white/50">© 2026 - 2027 jano inc.</p>
          </div>

          {/* 2nd col */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Links</h3>
            <ul className="text-[17px] space-y-3">
              <li className="hover:text-primary cursor-pointer">Home</li>
              <li className="hover:text-primary cursor-pointer">Pricing</li>
              <li className="hover:text-primary cursor-pointer">About us</li>
              <li className="hover:text-primary cursor-pointer">Careers</li>
              <li className="hover:text-primary cursor-pointer">Features</li>
              <li className="hover:text-primary cursor-pointer">Blog</li>
            </ul>
          </div>

          {/* 3rd col */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Services</h3>

            <ul className="text-[17px] space-y-3">
              <li className="hover:text-primary cursor-pointer">
                Health insurance plans
              </li>
              <li className="hover:text-primary cursor-pointer">
                Car insurance
              </li>
              <li className="hover:text-primary cursor-pointer">Invesment</li>
              <li className="hover:text-primary cursor-pointer">
                Mediclaim policy
              </li>
              <li className="hover:text-primary cursor-pointer">Others</li>
              <li className="hover:text-primary cursor-pointer">
                Health insurance
              </li>
            </ul>
          </div>

          {/* 4rth col */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Address</h3>
            <p className="text-[17px]">
              2190 Zinai terrace, Lake view <br />
              house state, 10 no road.
            </p>

            <div className="flex  items-center gap-3 mt-8.5">
              <div className="size-10 rounded-full bg-[#ffffff1a] grid place-items-center hover:bg-primary cursor-pointer transition-all duration-300 ease-in-out">
                <Facebook stroke="" fill="white" />
              </div>

              <div className="size-10 rounded-full bg-[#ffffff1a] grid place-items-center hover:bg-primary cursor-pointer transition-all duration-300 ease-in-out">
                <Twitter stroke="" fill="white" />
              </div>

              <div className="size-10 rounded-full bg-[#ffffff1a] grid place-items-center hover:bg-primary cursor-pointer transition-all duration-300 ease-in-out">
                <LinkedinIcon stroke="" fill="white" className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
