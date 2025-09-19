"use client"

export default function InteractiveMap() {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.2554256277257!2d51.33252931562442!3d35.72190798018403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQzJzE4LjkiTiA1McKwMjAnMDUuMyJF!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
      width="100%"
      height="200"
      style={{ border: 0 }}
      allowFullScreen={false}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="موقعیت دفتر مرکزی اوستا"
      className="rounded-t-lg"
    />
  )
}
