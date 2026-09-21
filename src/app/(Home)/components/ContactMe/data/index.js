import React from "react";
import { Phone, Mail, Linkedin, Github } from "lucide-react";

// Facebook Icon
const FacebookIcon = (props) => (
  <svg
    viewBox="5 5 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-[22px] h-[22px] sm:w-[20px] sm:h-[20px]"
    {...props}
  >
    <path
      d="M5.78574 9.64279C5.78574 7.51255 7.51264 5.78564 9.64288 5.78564H21.2143C23.3445 5.78564 25.0715 7.51255 25.0715 9.64279V21.2142C25.0715 23.3445 23.3445 25.0714 21.2143 25.0714H9.64288C7.51264 25.0714 5.78574 23.3445 5.78574 21.2142V9.64279Z"
      stroke="#E25822"
      strokeWidth="1.7"
    />
    <path
      d="M12.8572 24.4286V19.2986C12.8572 19.2915 12.8514 19.2857 12.8443 19.2857H10.9414C10.9343 19.2857 10.9286 19.28 10.9286 19.2729V16.0843C10.9286 16.0772 10.9343 16.0714 10.9414 16.0714H12.8443C12.8514 16.0714 12.8572 16.0657 12.8572 16.0586V13.5C12.8572 10.9286 14.7857 9 17.3572 9H19.9157C19.9228 9 19.9286 9.00576 19.9286 9.01286V12.8443C19.9286 12.8514 19.9228 12.8571 19.9157 12.8571H18C17.3572 12.8571 16.7143 13.5 16.7143 14.1429V16.0586C16.7143 16.0657 16.7201 16.0714 16.7272 16.0714H19.9157C19.9228 16.0714 19.9286 16.0772 19.9286 16.0843V19.2729C19.9286 19.28 19.9228 19.2857 19.9157 19.2857H16.7272C16.7201 19.2857 16.7143 19.2915 16.7143 19.2986V24.4286"
      stroke="#E25822"
      strokeWidth="1.7"
    />
  </svg>
);

// WhatsApp Icon
const WhatsAppIcon = (props) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5 text-[#E25822]"
    {...props}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

// Contact Info
export const contactInfoData = [
  {
    id: 1,
    label: "Contact with me",
    value: "01710497133",
    icon: Phone,
    copyable: true,
    link: "tel:01710497133",
  },
  {
    id: 2,
    label: "Reach Out to Me",
    value: "abufattahmdshakib21@gmail.com",
    icon: Mail,
    copyable: true,
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=abufattahmdshakib21@gmail.com",
  },
  {
    id: 3,
    label: "Connect with Me",
    value: "abu-fattah-md-shakib",
    icon: Linkedin,
    copyable: false,
    link: "https://www.linkedin.com/in/abu-fattah-md-shakib/",
  },
  {
    id: 4,
    label: "Chat on WhatsApp",
    value: "01710497133",
    icon: WhatsAppIcon,
    copyable: true,
    link: "https://wa.me/8801710497133",
  },
  {
    id: 5,
    label: "Friends with Me",
    value: "abufattahmdshakib",
    icon: FacebookIcon,
    copyable: false,
    link: "https://www.facebook.com/abufattahmdshakib",
  },
  {
    id: 6,
    label: "Follow Me on",
    value: "abufattahmdshakib",
    icon: Github,
    copyable: false,
    link: "https://github.com/abufattahmdshakib",
  },
];
