export default function Slide1() {
  const items = [1, 2, 3, 4, 5, 6]; // ممكن تحط صورك بدل الأرقام

  return (
    <div className="h-screen w-1/4 overflow-hidden relative sm:hidden  lg:block">
      <div className="flex flex-col gap-5 animate-slideInfinite">
        {/* النسخة الأولى */}
        {items.map((item) => (
          <div
            key={`first-${item}`}
            className="rounded-3xl bg-MinPureWhite shadow-2xs border border-MinGreenDark text-white flex items-center justify-center text-2xl h-64 w-full mb-2"
          >
            Item {item}
          </div>
        ))}
        {/* النسخة الثانية عشان السلايدر يكون مستمر */}
        {items.map((item) => (
          <div
            key={`second-${item}`}
            className="rounded-3xl bg-MinPureWhite shadow-2xs border border-MinGreenDark text-white flex items-center justify-center text-2xl h-64 w-full mb-2"
          >
            Item {item}
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes slideInfinite {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          } /* -50% عشان نسختين */
        }
        .animate-slideInfinite {
          animation: slideInfinite 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
