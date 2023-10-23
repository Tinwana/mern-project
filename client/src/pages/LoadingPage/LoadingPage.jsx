import ReactLoading from "react-loading";
import Header from "../../components/header/Header";

export default function LoadingPage() {
  return (
    <>
      <Header />
      <div
        style={{
          maxHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ReactLoading type="balls" color="#0000FF" height={100} width={50} />;
      </div>
    </>
  );
}
