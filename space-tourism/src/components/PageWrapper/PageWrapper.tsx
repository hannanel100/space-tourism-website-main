export interface PageWrapperProps {
  children: React.ReactNode;
}

export const PageWrapper = (props: PageWrapperProps) => {
  return (
    <div className="mt-6 flex h-full flex-col gap-8 md:mt-10 md:gap-10 lg:mt-14 lg:gap-0   ">
      {props.children}
    </div>
  );
};
