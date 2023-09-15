import "./admin.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { deleteData, fetchData } from "../../services/api";

const types = ["games", "pages", "toys"];

const Admin: React.FC = () => {
  const [itemList, setItemList] = useState<any[]>([]);
  const [contentType, setContentType] = useState<string>("");

  const handleTypeClick = async (type: string) => {
    setContentType(type);
    const data = await fetchData(type);
    setItemList(data);
  };

  const handleDeleteClick = async (id: string) => {
    await deleteData(contentType, id);
    const updatedList = await fetchData(contentType);
    setItemList(updatedList);
  };

  return (
    <div className='AdminPage'>
      <div className='AdminHeader'>
        <ul>
          {types.map((type) => (
            <li key={type}>
              <p onClick={() => handleTypeClick(type)}>{type}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className='AdminItemContainer'>
        {itemList.length === 0 ? (
          <div>Empty List</div>
        ) : (
          itemList.map((item) => (
            <li key={item._id}>
              <Link to={`create/${contentType}/${item._id}`}>
                <h3>{item.title}</h3>
              </Link>
              <button onClick={() => handleDeleteClick(item._id)}>X</button>
            </li>
          ))
        )}
        {contentType && (
          <Link className='new-button' to={`create/${contentType}`}>
            CREATE NEW +
          </Link>
        )}
      </div>
    </div>
  );
};

export default Admin;
