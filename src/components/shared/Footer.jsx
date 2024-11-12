import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="">
      <footer className="footer bg-black p-10 text-white text-sm">
        <aside>
        <Image
              src={"/assets/logo.svg"}
              className="filter invert"
              priority // Preload the logo image
              alt="logo"
              width={100}
              height={60}
              style={{width: 'auto', height: 'auto'}}
            />
         
          <p>
          Edwin Diaz is a software and web <br />
           technologies engineer, a life coach <br />
            trainer who is also a serial .
          </p>
        </aside>
        <nav>
          <h6 className="footer-title opacity-100">About</h6>
          <Link href="/" className="link link-hover">Home</Link>
          <Link href="/service" className="link link-hover">Service</Link>
          <Link href="/contact" className="link link-hover">contact</Link>
        </nav>
        <nav>
          <h6 className="footer-title opacity-100">Company</h6>
          <p className="link link-hover">Why Car Doctor</p>
          <Link href="/about" className="link link-hover">About</Link>
         
        </nav>
        <nav>
          <h6 className="footer-title opacity-100">Support</h6>
          <p className="link link-hover">Support Center</p>
          <p className="link link-hover">Feedback</p>
          <p className="link link-hover">Accesbility</p>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
