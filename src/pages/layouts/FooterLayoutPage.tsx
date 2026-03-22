import {
  Footer,
  FooterCopyright,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

export function FooterLayoutPage() {
  return (
    <Footer bgDark>
      <div className="w-full">
        <div className="flex w-full justify-center gap-8 px-6 py-8 md:grid-cols-3 md:gap-50 ">
          <div >
            <FooterTitle title="Company" className="text-white/80"/>
            <FooterLinkGroup col className="text-white/80">
              <FooterLink href="#">About</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
              <FooterLink href="#">Brand Center</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
            </FooterLinkGroup>
          </div>
          <div>
            <FooterTitle title="help center" className="text-white/80"/>
            <FooterLinkGroup col className="text-white/80">
              <FooterLink href="#">Instagram</FooterLink>
              <FooterLink href="#">Twitter</FooterLink>
              <FooterLink href="#">Facebook</FooterLink>
              <FooterLink href="#">Contact Us</FooterLink>
            </FooterLinkGroup>
          </div>
          <div>
            <FooterTitle title="legal" className="text-white/80"/>
            <FooterLinkGroup col className="text-white/80">
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Licensing</FooterLink>
              <FooterLink href="#">Terms &amp; Conditions</FooterLink>
            </FooterLinkGroup>
          </div>
        
        </div>
        <div className="w-full bg-primary px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <FooterCopyright href="#" by="Bhakaari Bazzar™" year={2025} className="text-white"/>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon href="#" icon={BsFacebook} className="text-white hover:text-white/85" />
            <FooterIcon href="#" icon={BsInstagram} className="text-white hover:text-white/85"/>
            <FooterIcon href="#" icon={BsTwitter} className="text-white hover:text-white/85" />
            <FooterIcon href="#" icon={BsGithub} className="text-white hover:text-white/85" />
            <FooterIcon href="#" icon={BsDribbble} className="text-white hover:text-white/85" />
          </div>
        </div>
      </div>
    </Footer>
  );
}
