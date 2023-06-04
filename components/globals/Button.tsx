export const Button = (props: any) => {
  return (
    <button
      style={{
        padding: "10px 20px",
        fontSize: "18px",
        fontWeight: 700,
        borderRadius: "5px",
        transition: ".2s all ease",
      }}
      {...props}
      className={
        props.withIcon
          ? `flex items-center gap-2 ${props.className}`
          : props.className
      }
    >
      {props.children}
    </button>
  );
};
