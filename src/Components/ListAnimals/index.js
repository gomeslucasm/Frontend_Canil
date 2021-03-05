import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAnimals } from "../../Store/Animals/animals.actions";
import AnimalCard from "../AnimalCard";
import "./index.css";
import { Col } from "reactstrap";

const ListAnimals = () => {
  const { data /*  nextPage, prevPage, pages, currentPage  */ } = useSelector(
    (state) => state.animals
  );
  const dispatch = useDispatch();

  const getData = useCallback(async () => {
    await dispatch(getAnimals());
    /* console.log(data) */
  }, [dispatch]);

  useEffect(() => {
    getData();
  }, [getData]);

  useEffect(() => {
    console.log("data", data);
  }, [data]);

  return (
    <>
      <div className="list-animals">
        {data.map((animal) => {
          return (
            <Col lg="3" md="4" xs="12" style={{ padding: "0 auto", marginTop:'1rem' }}>
              <AnimalCard animal={animal} />
            </Col>
          );
        })}
      </div>
    </>
  );
};

export default ListAnimals;
