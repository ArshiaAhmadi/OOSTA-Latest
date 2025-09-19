export default function TrustBadges() {
  return (
    <div className="trust-badges-container">
      <h3 className="text-xl font-bold text-white mb-6 text-center">نشان‌های اعتماد و امنیت</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { src: "/trust-badges/enamad.png", alt: "نماد اعتماد الکترونیکی", title: "نماد اعتماد الکترونیکی" },
          { src: "/trust-badges/samandehi.png", alt: "نماد ساماندهی", title: "نماد ساماندهی" },
          { src: "/trust-badges/shaparak.png", alt: "شبکه پرداخت شاپرک", title: "شبکه پرداخت شاپرک" },
          { src: "/trust-badges/zarinpal.png", alt: "درگاه پرداخت زرین‌پال", title: "درگاه پرداخت زرین‌پال" },
        ].map((badge, index) => (
          <div
            key={index}
            className="trust-badge-item flex flex-col items-center justify-center p-3 bg-white/5 dark:bg-dark-100/30 rounded-lg hover:bg-white/10 dark:hover:bg-dark-100/50 transition-all duration-300 cursor-pointer group"
          >
            <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mb-2">
              <img
                src={badge.src || "/placeholder.svg"}
                alt={badge.alt}
                className="trust-badge-image w-full h-full object-contain dark:filter dark:brightness-110 dark:contrast-125"
              />
              <div className="absolute inset-0 bg-transparent group-hover:bg-white/5 dark:group-hover:bg-primary-dark-mode/10 rounded-full transition-all duration-300"></div>
            </div>
            <p className="text-white/80 text-xs md:text-sm text-center">{badge.title}</p>
          </div>
        ))}
      </div>
      <p className="text-white/70 text-sm text-center mt-6 dark:text-white/60">
        تمامی تراکنش‌های مالی با رمزنگاری SSL انجام می‌شوند و اطلاعات شخصی شما کاملاً محرمانه باقی می‌ماند.
      </p>
    </div>
  )
}
