import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { useAlert } from "react-alert";

const useFunction = () => {
  const alert = useAlert();
  const titleRef = useRef();
  const imageRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();
  const orderNameRef = useRef();
  const orderEmailRef = useRef();
  const orderPriceRef = useRef();
  const orderAddressRef = useRef();
  const orderImageRef = useRef();

  const navigate = useNavigate();
  const [services, setServices] = useState([]);
  const [service, setService] = useState({});
  const [order, setOrder] = useState([]);
  const [manageOrder, setManageOrder] = useState(true);

  const URL = `${process.env.REACT_APP_URL}`;

  // =========================
  // Add Services Function
  // =========================
  const handleAddService = (e) => {
    e.preventDefault();

    const title = titleRef.current.value;
    const image = imageRef.current.value;
    const price = priceRef.current.value;
    const description = descriptionRef.current.value;

    const addValue = {
      title: title,
      image: image,
      price: price,
      description: description,
    };

    fetch(`${URL}/services`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addValue),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert.show("Add Service Successful");
          navigate(`/dashboard`);
        }
      });

    titleRef.current.value = "";
    imageRef.current.value = "";
    descriptionRef.current.value = "";
    priceRef.current.value = "";
  };

  // ================================
  //   Services data load function
  //   ==============================

  useEffect(() => {
    fetch(`${URL}/services`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [URL]);

  // ==============================
  //   Service Update function
  // ==============================

  const handleTitleChange = (e) => {
    const updateTitle = e.target.value;
    const UpdateService = {
      title: updateTitle,
      image: service.image,
      price: service.price,
      description: service.description,
    };

    setService(UpdateService);
  };

  const handleImageChange = (e) => {
    const updateImage = e.target.value;
    const UpdateService = {
      title: service.title,
      image: updateImage,
      price: service.price,
      description: service.description,
    };

    setService(UpdateService);
  };

  const handlePriceChange = (e) => {
    const updatePrice = e.target.value;
    const UpdateService = {
      title: service.title,
      image: service.image,
      price: updatePrice,
      description: service.description,
    };

    setService(UpdateService);
  };

  const handleDescriptionChange = (e) => {
    const updateDescription = e.target.value;
    const UpdateService = {
      title: service.title,
      image: service.image,
      price: service.price,
      description: updateDescription,
    };

    setService(UpdateService);
  };

  // ==============================
  //   Service Delete function
  // ==============================

  const handleDeleteService = (id) => {
    const confirming = window.confirm("Are you confirm delete this service?");

    if (confirming) {
      fetch(`${URL}/services/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert.show(`Service Delete Successful`);
            const remainingService = services.filter(
              (service) => service._id !== id
            );
            setServices(remainingService);
          }
        });
    }
  };

  // ================================
  //   Order Confirm function
  //   ==============================

  const handleOrder = (e) => {
    e.preventDefault();
    const orderTitle = service.title;
    const orderName = orderNameRef.current.value;
    const orderEmail = orderEmailRef.current.value;
    const orderPrice = orderPriceRef.current.value;
    const orderAddress = orderAddressRef.current.value;
    const orderImage = service.image;

    const orderValue = {
      orderTitle: orderTitle,
      orderName: orderName,
      orderEmail: orderEmail,
      orderPrice: orderPrice,
      orderAddress: orderAddress,
      orderImage: orderImage,
    };

    fetch(`${URL}/order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderValue),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert.show("Your Tour Order Successful.");
          navigate(`/my-order`);
        }
      });
  };

  // ================================
  //   Order data load function
  //   ==============================

  useEffect(() => {
    fetch(`${URL}/order`)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [URL]);

  // ==============================
  //   Order delete function
  // ==============================

  const handleOrderDelete = (id) => {
    const confirming = window.confirm("Are you confirm delete this order?");
    if (confirming) {
      fetch(`${URL}/order/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert.show(`Order Delete Successful`);
            const remainingOrder = order.filter((order) => order._id !== id);
            setOrder(remainingOrder);
          }
        });
    }
  };

  return {
    titleRef,
    imageRef,
    descriptionRef,
    priceRef,
    services,
    URL,
    service,
    orderNameRef,
    orderEmailRef,
    orderPriceRef,
    orderAddressRef,
    orderImageRef,
    order,
    alert,
    manageOrder,
    setService,
    handleAddService,
    handleOrder,
    setManageOrder,
    handleOrderDelete,
    handleTitleChange,
    handleImageChange,
    handlePriceChange,
    handleDescriptionChange,
    handleDeleteService,
  };
};

export default useFunction;
