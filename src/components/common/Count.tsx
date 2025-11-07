"use client"
import { useState } from "react";
import CountUp from "react-countup";
import { InView } from "react-intersection-observer";

interface CountType {
  number: number;
  text?: string;
  add_style?: boolean;
}

const Count = ({ number, text, add_style }: CountType) => {
  const [focus, setFocus] = useState<boolean>(false);
  const visibleChangeHandler = (isVisible: boolean) => {
    if (isVisible) {
      if (!focus) {
        setFocus(true);
      }
    }
  };

  return (
    <>
      <style jsx>{`
        .count-wrapper span {
          color: black !important;
        }
        
        @media (max-width: 767px) {
          .count-wrapper span {
            color: black !important;
          }
        }
      `}</style>
      <CountUp start={focus ? 0 : undefined} end={number} duration={3}>
        {({ countUpRef }) => (
          <div className={`d-flex count-wrapper ${add_style ? "align-items-center justify-content-center" : ""} `}>
            <span ref={countUpRef} style={{ color: 'black' }} />
            <InView
              as="span"
              onChange={(inView: any) => visibleChangeHandler(inView)}>
              {text && <span style={{ color: 'black' }}>{text}</span>}
            </InView>
          </div>
        )}
      </CountUp>
    </>
  );
};

export default Count;
