import { Button, Card, Rate, Tag } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

import type { ICoffee } from "../interfaces/coffee.interfaces";

interface ICoffeeCard {
  data: ICoffee;
  addHandler: () => void;
}

const CoffeeCard = ({ data, addHandler }: ICoffeeCard) => (
  <Card
    className="card"
    hoverable
    key={data.id}
    cover={<img src={data.image} />}
    actions={[
      <Button icon={<ShoppingCartOutlined />} key={data.name} onClick={addHandler}>
        {data.price}
      </Button>,
    ]}
  >
    <Card.Meta title={data.name} description={data.subTitle} />
    <Tag style={{ marginTop: "24px" }} color="purple">
      {data.type}
    </Tag>
    <Rate defaultValue={data.rating} disabled allowHalf style={{ marginTop: "24px" }} />
  </Card>
);

export default CoffeeCard;
