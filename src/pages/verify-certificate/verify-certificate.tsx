import React from "react";
import { Input, Space } from "antd";

const { Search } = Input;

const onSearch = (value: string) => console.log(value);

const App: React.FC = () => (
  <div className="container-fluid mt-8 p-8">
    <div className="titleHolder">
      <h2>Verify Certificate</h2>
    </div>
    <Space direction="vertical" className="flex items-center">
      <Search
        placeholder="Enter certificate identification number..."
        onSearch={onSearch}
        enterButton
        className="w-96 text-black"
      />
    </Space>
  </div>
);

export default App;
