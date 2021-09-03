import React, { useEffect, useState } from "react";
import axios from "axios";

interface Users {
  id: number;
  name: string;
}

const Home = () => {
  const [data, setData] = useState<Users[]>([]);
  console.log(data);
  useEffect(() => {
    axios
      .get<Users[]>("http://localhost:3006/users", { params: { id: 2 } })
      .then((res) => {
        setData(res.data);
      });
  }, []);
  return (
    <div>
      {data?.map((item: Users, index: number) => (
        <div key={index}>
          <h1>
            {item.id}. {item.name}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default Home;
