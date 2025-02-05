const Rating = ({ point }) => {
  //rating rengini belirle
  const color =
    point >= 4 ? "bg-green-500" : point >= 3 ? "bg-yellow-500" : "bg-red-500";

  const text =
    point >= 4.5
      ? "Olağanüstü"
      : point >= 4
      ? "Güzel"
      : point >= 3
      ? "İyi"
      : point >= 2
      ? "Kötü"
      : "Çok kötü";

  return (
    <div className="flex items-center gap-2">
      <span className={`${color} text-white p-2 rounded-md`}>{point}</span>
      <span className="font-semibold text-lg">{text}</span>
    </div>
  );
};

export default Rating;
