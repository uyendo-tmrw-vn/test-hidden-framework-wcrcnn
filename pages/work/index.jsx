import React, { useState, useEffect } from "react";
import Project from "../../components/Project";
import {
  motion,
  useAnimation,
  AnimatePresence,
  AnimateSharedLayout
} from "framer-motion";
import Loader from "../../components/Loader";
import ViewProject from "../../components/ViewProject";
import { useRouter } from "next/router";

import Item from "../../components/Item";
import List from "../../components/List";
const WorkPage = ({ isComponent = false }) => {
  const [Loading, setLoading] = useState(true);
  const [ProjectId, setProjectId] = useState(false);
  const controls = useAnimation();
  const router = useRouter();
  useEffect(() => {
    if (!Loading) {
      controls.start("enter");
    } else {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
      controls.start("hidden");
    }
  }, [Loading, controls]);
  useEffect(() => {
    const { pid } = router.query;
    if (pid) {
      setProjectId(pid);
    } else setProjectId(false);
  }, [router]);

  return (
    <>
      {/* <AnimateSharedLayout type="crossfade"> */}
      {isComponent ? null : (
        <AnimatePresence exitBeforeEnter initial={false}>
          {Loading ? <Loader /> : null}
        </AnimatePresence>
      )}

      <div className="opacity-1 transition duration-2000">
        <List isComponent={isComponent} />
      </div>
      <AnimatePresence>
        {ProjectId && <Item id={ProjectId} key="item" />}
      </AnimatePresence>
      {/* </AnimateSharedLayout> */}
    </>
  );
};

export default WorkPage;
