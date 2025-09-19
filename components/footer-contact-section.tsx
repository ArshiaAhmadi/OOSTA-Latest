import { Mail, MapPin, Phone } from "lucide-react"
import InteractiveMap from "./interactive-map"

export default function FooterContactSection() {
  return (
    <div className="footer-card-animation bg-gray-800 rounded-lg p-4 shadow-lg">
      <h3 className="footer-heading text-xl font-bold mb-4 text-white">تماس با ما</h3>

      <div className="mb-6">
        <InteractiveMap />
      </div>

      <div className="space-y-3">
        <div className="footer-contact-item flex items-center gap-2">
          <MapPin className="footer-icon-pulse text-primary h-5 w-5" />
          <span className="text-gray-300">تهران، خیابان ولیعصر، پلاک ۱۲۳</span>
        </div>

        <div className="footer-contact-item flex items-center gap-2">
          <Phone className="footer-icon-pulse text-primary h-5 w-5" />
          <a href="tel:+982112345678" className="text-gray-300 hover:text-white transition-colors">
            ۰۲۱-۱۲۳۴۵۶۷۸
          </a>
        </div>

        <div className="footer-contact-item flex items-center gap-2">
          <Mail className="footer-icon-pulse text-primary h-5 w-5" />
          <a href="mailto:info@ousta.ir" className="text-gray-300 hover:text-white transition-colors">
            info@ousta.ir
          </a>
        </div>
      </div>
    </div>
  )
}
