"use client";
import { Button, Input } from "@nextui-org/react";
import { useState } from "react";

const LoginPage = () => {
  const [username, setUserName] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState<number>();
  const [zipcode, setZipcode] = useState("");
  const [lat, setLat] = useState<number>();
  const [long, setLong] = useState<number>();
  const [phone, setPhone] = useState<number>();

  const HandleSubmit = () => {
    fetch("https://fakestoreapi.com/users", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        username: username,
        password: password,
        name: {
          firstname: firstname,
          lastname: lastname,
        },
        address: {
          city: city,
          street: street,
          number: number,
          zipcode: zipcode,
          geolocation: {
            lat: lat,
            long: long,
          },
        },
        phone: phone,
      }),
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  };
  return (
    <div >
      <div className="flex flex-col p-6">
        <h1 className="text-center">Peronal Informations</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          <Input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2"
          />
          <Input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            className="p-2"
          />
          <Input
            type="text"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2"
          />
          <Input
            type="text"
            placeholder="firstname"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            className="p-2"
          />
          <Input
            type="text"
            placeholder="lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            className="p-2"
          />
        </div>
      </div>
      <div className="flex flex-col p-6">
        <h1 className="text-center">Address</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 ">
          <Input
            type="text"
            placeholder="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="p-2"
          />
          <Input
            type="text"
            placeholder="street"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            className="p-2"
          />
          <Input
            type="number"
            placeholder="number"
            value={`${number}`}
            onChange={(e:any) => setNumber(e.target.value)}
            className="p-2"
          />
          <Input
            type="text"
            placeholder="zipcode"
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
            className="p-2"
          />
        </div>
      </div>

      <div className="flex flex-col p-6">
        <h1 className="text-center">Geolocation</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 ">
          <Input
            type="number"
            placeholder="lat"
            value={`${lat}`}
            onChange={(e:any) => setLat(e.target.value)}
            className="p-2 "
          />
          <Input
            type="number"
            placeholder="long"
            value={`${long}`}
            onChange={(e:any) => setLong(e.target.value)}
            className="p-2 "
          />
        </div>
      </div>
      <div className="flex flex-col p-6">
        <h1 className="text-center">Phone</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 ">
          {" "}
          <Input
            type="number"
            placeholder="phone"
            value={`${phone}`}
            onChange={(e:any) => setPhone(e.target.value)}
            className="p-2"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <Button onClick={HandleSubmit}>submit</Button>
      </div>
    </div>
  );
};

export default LoginPage;
