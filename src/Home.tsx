import React, { useEffect, useState } from "react";
import axios from "axios";

interface Address {
  street: string;
  suite: string;
  city: string;
  zipCode: string;
  geo: { lat: number; lng: number };
}
interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}
interface Users {
  id: number;
  name: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

const Home = () => {
  const [data, setData] = useState<Users[]>([]);
  console.log(data);
  useEffect(() => {
    axios
      .get<Users[]>("https://jsonplaceholder.typicode.com/users")
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
