export default function PageContainer({ children }) {
  return <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 px-5 py-6 lg:px-8 lg:py-8">{children}</div>;
}
