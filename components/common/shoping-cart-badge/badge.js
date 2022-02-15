const Badge = (props) => {
  const itemsCount = props.itemsCount || 0;
  return (
    <div className="relative">
      {props.children}
      {props.itemsCount !== 0 ? (
        <div className="absolute bg-red-400 w-4 h-4 rounded-full text-[8px] p-0  flex justify-center items-center -bottom-2 ease-linear">
          {itemsCount}
        </div>
      ) : null}
    </div>
  );
};

export default Badge;
