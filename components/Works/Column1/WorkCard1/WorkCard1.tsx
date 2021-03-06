import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { useTheme } from '@/utils/themeContext';
import Tags from '@/components/Tags/Tags';
import { IWork } from '@/types/works';

export default function WorkCard1(data: IWork): JSX.Element {
  const { id, tags, title, thumbnail } = data;
  const { isFontLoaded } = useTheme();
  const [isImgLoaded, setIsImgLoaded] = useState(false);
  const imgRef = useRef(null);
  useEffect(() => {
    if (imgRef.current.complete) setIsImgLoaded(true);
  }, []);
  const handleLoad = () => setIsImgLoaded(true);
  return (
    <Link href="/work/[id]" as={`/work/${id}`}>
      <div className="group bg-paper custom-border flex justify-center items-center hover:bg-opacityBlue cursor-pointer">
        <div className="m-12 grid grid-cols-12 gap-8 tablet:gap-6 tablet:m-10 mobile:gap-2 mobile:m-4">
          <div className="col-span-6 mobile:col-span-12 mobile:mb-3">
            <img
              src={thumbnail.src}
              alt={thumbnail.alt}
              className={`shadow ${isImgLoaded ? 'block' : 'hidden'}`}
              width="100%"
              height="100%"
              ref={imgRef}
              onLoad={handleLoad}
            />
            <div
              className={`${isImgLoaded ? 'hidden' : 'skeleton'}`}
              style={{ paddingTop: '55%' }}
            ></div>
          </div>
          <div className="col-span-6 mobile:col-span-12">
            <ul className="flex flex-col justify-center h-full">
              <li className="mt-auto mb-auto text-primaryText mobile:mb-2">
                <span
                  className={`font-bold text-2xl  inline-block font-display group-hover:bg-paper ${
                    !isFontLoaded && 'skeleton text-transparent'
                  }`}
                >
                  {title}
                </span>
              </li>
              <li>
                <ul className="flex flex-wrap">
                  <Tags tags={tags} />
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Link>
  );
}
