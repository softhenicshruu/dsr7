import { stringifyAmountValue } from '@agoric/ui-components';

type InventoryProps = {
  address: string;
  istPurse: Purse;
  itemsPurse: Purse;
};

const Inventory = ({ address, istPurse, itemsPurse }: InventoryProps) => (
  <div className="card">
    <h3>My Wallet</h3>
    <div>
      <div>
        <small>
          <code>{address}</code>
        </small>
      </div>
    </div>
  </div>
);

export { Inventory };
