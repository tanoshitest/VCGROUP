import heroBg from "@/assets/hero-bg.jpg";

const PageBanner = () => {
  return (
    <div
      className="w-full h-96 md:h-[500px] bg-cover bg-center relative"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-vc-black/40" />
    </div>
  );
};

export default PageBanner;
