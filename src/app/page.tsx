import Menu from "@/components/header/menu/menu";
import NoCases from "@/components/no-cases/no-cases";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Menu />
      </header>
      <main>
        <NoCases />
      </main>
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
}
