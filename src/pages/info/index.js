import * as React from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Content from "./Content";
import PickUp from "./pickup";
import Checks from "./checks";
import Delivery from "./delivery";
import DeliveryDetail from "./deliveryDetail";
import Information from "./information";
import Footer from "./Footer";

const ContentComponent = ({ id, open, setOpen }) => {
  switch (id) {
    case "1":
      return <Content open={open} setOpen={setOpen} />;
    case "2":
      return <PickUp open={open} setOpen={setOpen} />;
    case "3":
      return <Checks open={open} setOpen={setOpen} />;
    case "4":
      return <Delivery open={open} setOpen={setOpen} />;
    case "5":
      return <DeliveryDetail open={open} setOpen={setOpen} />;
    case "6":
      return <Information open={open} setOpen={setOpen} />;

    default:
      break;
  }
};

const InfoDetail = () => {
  const [open, setOpen] = React.useState(false);
  const [step, setStep] = React.useState(1);
  const { id } = useParams();

  return (
    <>
      <Header step={step} />
      <ContentComponent
        id={id}
        open={open}
        setOpen={setOpen}
        setStep={setStep}
      />
      <Footer setOpen={setOpen} setStep={setStep} currentStep={step} />
    </>
  );
};

export default InfoDetail;
