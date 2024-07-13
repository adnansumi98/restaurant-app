const Customizations = (props) => {
  const { addonCat } = props;

  const onClickAddons = () => {
    // TODO: need to implement addons
    console.log("addon Clicked");
  };

  return (
    <div>
      {addonCat.length > 0 ? (
        <div>
          <button
            className="addon-button"
            type="button"
            onClick={onClickAddons}
          >
            Customizations available
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Customizations;
