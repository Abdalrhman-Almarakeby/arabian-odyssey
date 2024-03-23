import NoDataSVG from "@/assets/imgs/no-data.svg?react";

export function NoData() {
  return (
    <div className="flex flex-col items-center" aria-label="No data was found">
      <figure className="mb-5 max-w-[300px]">
        <NoDataSVG aria-hidden="true" className="size-[300px]" />
      </figure>
      <figcaption>No data was found</figcaption>
    </div>
  );
}
