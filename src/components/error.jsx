function ErrorPage(props) {
  return (
    <div className="flex h-screen items-center">
      <div className="m-auto">
        <p className="text-3xl">Error ocurred: </p>
        <p>{props.data.message}</p>
      </div>
    </div>
  );
}

export default ErrorPage;
