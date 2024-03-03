import { Grid } from "react-loader-spinner";

export const useLoader = () => {
  return (
    <div className="w-[40vw] h-[40vh] flex justify-center items-center">
        <Grid
          visible={true}
          height="80"
          width="80"
          color="#7752FE"
          ariaLabel="grid-loading"
          radius="12.5"
          wrapperStyle={{}}
          wrapperClass="grid-wrapper"
        />
    </div>
  );
};
