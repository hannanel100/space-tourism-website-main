export interface PageWrapperProps {
  children: React.ReactNode;
}

export const PageWrapper = (props: PageWrapperProps) => {
  return (
    <div className="h-full flex flex-col gap-8 md:gap-10 lg:gap-0 mt-6 md:mt-10 lg:mt-14   ">
      {props.children}
    </div>
  );
};
