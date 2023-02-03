import React, { useContext, useEffect, useState } from "react";
import { Container } from "./style";
import HouseCard from "../HouseCard";
import { useLocation, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { PropertiesContext } from "../../context/properties";

const { REACT_APP_BASE_URL } = process.env;

const myProperties = () => {
  const [data, setData] = useState([]);
  const { search } = useLocation();
  const navigate = useNavigate();
  const [, dispatch] = useContext(PropertiesContext);

  const { refetch } = useQuery(
    [search],
    () => {
      return fetch(`${REACT_APP_BASE_URL}/houses/getAll/myPropertiesList`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }).then((res) => res.json());
    },
    {
      onSuccess: (res) => {
        dispatch({ type: "refetch", payload: refetch });
        setData(res?.data || []);
      },
    }
  );

  const onSelect = (id) => {
    navigate(`/properties/${id}`);
  };

  return (
    <React.Fragment>
      <h1 className="title">myProperties</h1>
      <p className="info" style={{ textAlign: "center" }}>
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </p>
      <Container>
        {data?.length ? (
          data.map((value) => {
            return (
              <HouseCard
                onClick={() => onSelect(value.id)}
                key={value.id}
                data={value}
              />
            );
          })
        ) : (
          <h1>No Data Found</h1>
        )}
      </Container>
    </React.Fragment>
  );
};

export default myProperties;

// import React, { useContext } from "react";
// import { Container } from "./style";
// import HouseCard from "../HouseCard";
// import { useLocation, useNavigate } from "react-router-dom";
// import { useQuery } from "react-query";
// import { PropertiesContext } from "../../context/properties";

// const { REACT_APP_BASE_URL } = process.env;

// const myProperties = () => {
//   const { search } = useLocation();
//   const navigate = useNavigate();
//   const [, dispatch] = useContext(PropertiesContext);

//   const { refetch, data } = useQuery(
//     [search],
//     async () => {
//       const res = await fetch(
//         `${REACT_APP_BASE_URL}/houses/getAll/favouriteList`,
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       )
//       return await res.json();
//     },
//     {
//       onSuccess: (res) => {
//         dispatch({ type: "refetch", payload: refetch });
//         // setData(res?.data || []);
//       },
//     }
//   );

//   const onSelect = (id) => {
//     navigate(`/properties/${id}`);
//   };

//   return (
//     <React.Fragment>
//       <h1 className="title">myProperties</h1>
//       <p className="info" style={{ textAlign: "center" }}>
//         Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
//       </p>
//       <Container>
//         {data?.data?.length ? (
//           data.map((value) => {
//             return (
//               <HouseCard
//                 onClick={() => onSelect(value.id)}
//                 key={value.id}
//                 data={value}
//               />
//             );
//           })
//         ) : (
//           <h1>No Data Found</h1>
//         )}
//       </Container>
//     </React.Fragment>
//   );
// };

// export default myProperties;
