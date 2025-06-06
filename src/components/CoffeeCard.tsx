import { Button, Card, Rate, Tag } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

import type { ICoffee } from "../src/interfaces/coffee.interfaces";

interface ICoffeeCard {
  data: ICoffee;
}

const CoffeeCard = ({ data }: ICoffeeCard) => (
  <Card
    className="card"
    hoverable
    key={data.id}
    cover={<img src={data.image} />}
    actions={[
      <Button icon={<ShoppingCartOutlined />} key={data.name}>
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
