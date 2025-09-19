import type { Metadata } from "next"
import ProfessionalsJoinClient from "./ProfessionalsJoinClient"

export const metadata: Metadata = {
  title: "به اولین متخصصین اوستا بپیوندید - کمیسیون ۰٪",
  description:
    "فرصت استثنایی: کمیسیون صفر درصد برای همیشه! به اولین متخصصین اوستا بپیوندید و ۱۰۰٪ درآمدتان را برای خود بردارید.",
  keywords: "اوستاکار، متخصص فنی، کمیسیون صفر، درآمد، تعمیرات، نصب",
}

export default function ProfessionalsJoinPage() {
  return <ProfessionalsJoinClient />
}
