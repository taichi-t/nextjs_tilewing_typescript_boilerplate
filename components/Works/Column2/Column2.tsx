import WorkCard2 from './WorkCard2/WorkCard2';
import WorkCard3 from './WorkCard3/WorkCard3';
import WorksLink from './WorksLink/WorksLink';

export default function Column2() {
  return (
    <div className="grid grid-rows-4 grid-cols-12 gap-3">
      <div className="row-span-4 col-span-7">
        <WorkCard2 />
      </div>
      <div className="row-span-3 col-span-5">
        <WorkCard3 />
      </div>
      <div className="row-span-1 col-span-5">
        <WorksLink />
      </div>
    </div>
  );
}

// <div className="grid grid-rows-12 gap-4"></div>;

{
  /* <div className="row-span-3 ...">
<WorkCard2 />
</div>
<div className="row-span-1 col-span-2 ...">
<WorkCard3 />
</div>
<div className="row-span-2 col-span-2 ...">
<WorksLink />
</div> */
}