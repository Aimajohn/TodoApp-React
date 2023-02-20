import { ReactNode} from "react";

function TodoHeader({ children, loading }: HeaderProps) {
  return (
    <header>
        {children}
      {/* {React.Children.toArray(children).map((child) =>{
        // const item = child  as ReactElement<PropsWithChildren<ReactNode>>
        return React.cloneElement(child, { loading  })
    })} */}
    </header>
  );
}

type HeaderProps = {
  children: ReactNode;
  loading: boolean;
};
export { TodoHeader };
