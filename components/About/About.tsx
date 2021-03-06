import ProfileImage from './ProfileImage/ProfileImage';
import Profile from './Profile/Profile';
import Aside from './Aside/Aside';
import HardSkill from './HardSkill/HardSkill';
import SoftSkill from './SoftSkill/SoftSkill';

export default function About(): JSX.Element {
  return (
    <main className="mt-3">
      <div className="bg-paper custom-border-thick">
        <div className="m-3 grid grid-cols-12 grid-rows-6 gap-3 mobile:gap-1">
          <div className="row-span-6 col-span-3 mobile:col-span-12">
            <ProfileImage />
          </div>
          <div className="row-span-6 col-span-6 mobile:col-span-12">
            <Profile />
          </div>
          <div className="row-span-6 col-span-3 mobile:col-span-12">
            <Aside />
          </div>
        </div>
      </div>
      <HardSkill />
      <SoftSkill />
    </main>
  );
}
