"use client";
import { Button, Input } from "@nextui-org/react";
import { useState } from "react";

const LoginPage = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const HandleSubmit = () => {
    fetch("https://fakestoreapi.com/users", {
      method: "POST",
      body: JSON.stringify({
        email: "moz@gmail.com",
        username: username,
        password: password,
        name: {
          firstname: "alireza",
          lastname: "emami",
        },
        address: {
          city: "shiraz",
          street: "7835 new road",
          number: 33,
          zipcode: "111111111",
          geolocation: {
            lat: "-37.3159",
            long: "81.1496",
          },
        },
        phone: "1111111",
      }),
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  };
  return (
    <div>
      <Input
        type="text"
        placeholder="email"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      />
      <Input
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={HandleSubmit}>submit</Button>
    </div>
  );
};

export default LoginPage;
