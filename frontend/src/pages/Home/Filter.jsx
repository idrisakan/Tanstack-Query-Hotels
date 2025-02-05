import { useSearchParams } from "react-router-dom";

const Filter = () => {
  const [params, setParams] = useSearchParams();

  const handleChange = (name, value) => {
    params.set(name, value);
    setParams(params);
  };

  return (
    <form className="lg:mt-28 flex flex-col gap-4 lg:gap-10">
      <div className="flex flex-col gap-2">
        <label className="font-bold">Nereye ?</label>
        <select
          onChange={(e) => handleChange("location", e.target.value)}
          className=" border py-1 px-4 rounded-md"
          placeholder="ör:Seaside Villa"
          type="text"
        >
          <option value="">Seçiniz</option>
          <option>İstanbul</option>
          <option>İzmir</option>
          <option>Antalya</option>
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-bold">Konaklama yeri adına göre ara</label>
        <input
          onChange={(e) => handleChange("title", e.target.value)}
          className=" border py-1 px-4 rounded-md"
          placeholder="ör:Seaside Villa"
          type="text"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-bold">Sıralama Ölçütü</label>
        <select
          onChange={(e) => handleChange("order", e.target.value)}
          className=" border py-1 px-4 rounded-md"
          placeholder="ör:Seaside Villa"
          type="text"
        >
          <option value="">Seçiniz</option>
          <option value="price-asc">Fiyat: düşükten yükseğe</option>
          <option value="price-desc">Fiyat: yüksekten düşüğe</option>
          <option value="rating-asc">Yıldız: düşükten yükseğe</option>
          <option value="rating-desc">Yıldız: yükseketen düşüğe</option>
        </select>
      </div>
      <div className="flex justify-end">
        <button
        type="reset"
          onClick={() => setParams({})}
          className="bg-blue-500 px-4 p-1 text-white font-bold rounded-md w-fit"
        >
          Filtreleri Tenmizle
        </button>
      </div>
    </form>
  );
};

export default Filter;
