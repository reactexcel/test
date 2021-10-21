import type { NextPage } from "next";
import Card from "../components/Card";
import { useTheme } from "next-themes";
import { courses } from "../courses";
import ToggleButton from "../components/ToggleButton";

const Home: NextPage = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  return (
    <div className="dark:bg-darkgrey">
      <ToggleButton theme={theme} setTheme={setTheme}  />
      <div
        className="w-8/12 mx-auto  mt-6  sm:grid-cols-1 
         grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {courses.map((item) => {
          return <Card item={item} />;
        })}
      </div>
    </div>
  );
};

export default Home;
