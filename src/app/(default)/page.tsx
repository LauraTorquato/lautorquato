import { PortfolioPage } from "@/components/portfolio-page";
import { ProfileStructuredData } from "@/components/profile-structured-data";

export default function Home() {
  return (
    <>
      <ProfileStructuredData locale="pt" />
      <PortfolioPage locale="pt" />
    </>
  );
}
