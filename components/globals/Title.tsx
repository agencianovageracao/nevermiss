export const Title = (props: any) => {
  return (
    <h1 className={`text-${props.size} font-bold text-white`}>
      {props.children}
    </h1>
  );
};
