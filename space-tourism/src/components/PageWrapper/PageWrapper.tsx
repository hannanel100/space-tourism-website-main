export interface PageWrapperProps {
  children: React.ReactNode;
}

export const PageWrapper = (props: PageWrapperProps) => {
  return (
    <div className="h-full flex flex-col gap-8 md:gap-14 lg:gap-24 mt-6 md:mt-10 lg:mt-20   ">
      {props.children}
    </div>
  );
};
