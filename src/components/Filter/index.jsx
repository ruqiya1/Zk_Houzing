import { Dropdown } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Icons, MenuWrapper, Section, SelectAnt } from "./style";
import { Input, Button } from "../Generic";
import { uzeReplace } from "../../hooks/useReplace";
import useSearch from "../../hooks/useSearch";

const Filter = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("Select Category");

  const { REACT_APP_BASE_URL: url } = process.env;
  const navigate = useNavigate();
  const location = useLocation();
  const query = useSearch();


  const onChange = ({ target: { name, value } }) => {
    navigate(`${location?.pathname}${uzeReplace(name, value)}`);
  };

  useEffect(() => {
    fetch(`${url}/categories/list`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || []);
      });
  }, []);

  useEffect(() => {
    let [d] = data?.filter(
      (ctg) => ctg.id === Number(query.get("category_id"))
    );
    d?.name && setValue(d?.name);
    !query.get("category_id") && setValue('Select Category')
  }, [location?.search, data]);

  const onChangeCategory = (category_id) => {
    navigate(`/properties/${uzeReplace("category_id", category_id)}`);
  };

  const onChangeSort = (sort) => {
    navigate(`/properties/${uzeReplace("sort", sort)}`);
  };

  const menu = () => {
    return (
      <MenuWrapper>
        <h1 className="subTitle">Address</h1>
        <Section>
          <Input
            defaultValue={query.get("country")}
            onChange={onChange}
            name="country"
            // ref={countryRef}
            placeholder={"Country"}
          />
          <Input
            defaultValue={query.get("region")}
            onChange={onChange}
            name="region"
            // ref={regionRef}
            placeholder={"Region"}
          />
          <Input
            defaultValue={query.get("city")}
            onChange={onChange}
            name="address"
            // ref={cityRef}
            placeholder={"City"}
          />
          <Input
            defaultValue={query.get("zip_code")}
            onChange={onChange}
            name="zip_code"
            // ref={zipRef}
            placeholder={"Zip code"}
          />
        </Section>
        <h1 className="subTitle">Apartment info</h1>
        <Section>
          <Input
            onChange={onChange}
            name="room"
            // ref={roomsRef}
            placeholder={"Rooms"}
          />

          <SelectAnt
            defaultValue={query.get("sort") || "Select Sort"}
            size="large"
            onChange={onChangeSort}
          >
            <SelectAnt.Option value={""}>Select Sort</SelectAnt.Option>
            <SelectAnt.Option value={"asc"}> O'suvchi</SelectAnt.Option>
            <SelectAnt.Option value={"desc"}> Kamayuvchi</SelectAnt.Option>
          </SelectAnt>

          <SelectAnt
            defaultValue={value}
            size="large"
            onChange={onChangeCategory}
          >
            <SelectAnt.Option value={""}>Select Category</SelectAnt.Option>
            {data?.map((value) => {
              return (
                <SelectAnt.Option key={value.id} value={value?.id}>
                  {value?.name}
                </SelectAnt.Option>
              );
            })}
          </SelectAnt>
        </Section>
        <h1 className="subTitle">Price</h1>
        <Section>
          <Input
            onChange={onChange}
            name="min_price"
            // ref={minPriceRef}
            placeholder={"Min price"}
          />
          <Input
            onChange={onChange}
            name="max_price"
            // ref={maxPriceRef}
            placeholder={"Max price"}
          />
        </Section>
      </MenuWrapper>
    );
  };
  return (
    <Container>
      <Input
        icon={<Icons.homeIcon />}
        placeholder={"Enter an address, neighborhood, city, or ZIP code"}
      />
      <Dropdown
        trigger={["click"]}
        dropdownRender={menu}
        placement="bottomRight"
        arrow={{ pointAtCenter: true }}
      >
        <div>
          <Button type={"light"}>
            <Icons.advencedIcon />
            Advanced
          </Button>
        </div>
      </Dropdown>

      <Button>
        <Icons.searchIcon /> Search
      </Button>
    </Container>
  );
};
export default Filter;
