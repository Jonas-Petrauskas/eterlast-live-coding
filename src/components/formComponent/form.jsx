import { useForm } from "react-hook-form";
import "./formStyle.css";
function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  // Generate random id number
  const randomIdNumber = Math.floor(Math.random() * 100);
  // date format : yyyy-mm-dd hh:mm:ss
  let dateObject = new Date().toJSON();
  let yearMonthDay = dateObject.slice(0, 10);
  let hoursMiSec = dateObject.substring(11, dateObject.length - 5);
  let formatedCurrentDate = `${yearMonthDay} ${hoursMiSec}`;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        className="hidden"
        value={randomIdNumber}
        {...register("number", { required: true })}
      />

      <input
        label="name"
        placeholder="name"
        {...register("name", { required: true })}
      />
      {errors.name && <span>This field is required</span>}

      <input
        label="picture"
        placeholder="picture"
        {...register("picture", { required: true })}
      />
      {errors.picture && <span>This field is required</span>}

      <input
        label="external_link"
        placeholder="external_link"
        {...register("external_link", { required: true })}
      />
      {errors.name && <span>This field is required</span>}

      <input
        label="description"
        placeholder="description"
        {...register("description", { required: true })}
      />
      {errors.external_link && <span>This field is required</span>}

      <input
        label="collection"
        placeholder="collection"
        {...register("collection", { required: true })}
      />
      {errors.collection && <span>This field is required</span>}

      <input
        label="supply"
        placeholder="supply"
        {...register("supply", { required: true })}
      />
      {errors.supply && <span>This field is required</span>}

      <input
        label="royalties"
        placeholder="royalties"
        type="number"
        {...register("royalties", { required: true })}
      />
      {errors.royalties && <span>This field is required</span>}

      <input
        className="hidden"
        label="date_of_creation"
        value={formatedCurrentDate}
        {...register("date_of_creation")}
      />

      <input type="submit" value="Mint" />
    </form>
  );
}

export default Form;
