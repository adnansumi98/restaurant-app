import { useState } from 'react';

//TODO: functionality to add on Total in future

const Customizations = (props) => {
  const { addonCat } = props;

  const [showAddons, setShowAddons] = useState(false);

  const onClickAddons = () => {
    setShowAddons(!showAddons);
    console.log(addonCat);
  };

  const renderAddons = () => {
    if (!showAddons) return null;
    return (
      <ul className="addon-list">
        {addonCat.map((addon) => (
          <li key={addon.addon_category_id} className="addon-item">
            <input
              type="checkbox"
              name={addon.addon_category}
              id={addon.addon_category}
              className="addon-input"
            />
            {` Add ${addon.addons[0].dish_name} for extra SAR ${addon.addons[0].dish_price}`}
          </li>
        ))}
      </ul>
    );
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
          {renderAddons()}
        </div>
      ) : null}
    </div>
  );
};

export default Customizations;
