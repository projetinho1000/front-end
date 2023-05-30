import { useState } from "react";
import "./styles.css";
import { addMovie } from "service/addMovie";
import { useNavigate } from "react-router-dom";

export function Create() {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const navigate = useNavigate();
  function handleSave() {
    try {
      addMovie({
        url: image,
        name: name,
        description: description,
        category: category,
        whatsapp: whatsapp,   
      });
    } catch (error) {
      alert("Erro ao salvar");
    }
  }

  function voltar() {
    navigate("/");
  }

  return (
    <main id="form-create">
      <form id="form-create">
        <div id="container-image">
          <img src={image} alt="" />
        </div>
        <div className="input-label">
          <label htmlFor="">Url foto</label>
          <input
            type="url"
            value={image}
            onChange={(text) => setImage(text.currentTarget.value)}
          />
        </div>
        <div className="input-label">
          <label htmlFor="">Nome</label>
          <input
            type="text"
            value={name}
            onChange={(text) => setName(text.currentTarget.value)}
          />
        </div>
        <div id="spacer" />
        <div id="spacer" />
        <div className="input-label">
          <label htmlFor="">Descrição</label>
          <input
            type="text"
            value={description}
            onChange={(text) => setDescription(text.currentTarget.value)}
          />
        </div>
        <div id="spacer" />
        <div className="input-label">
          <label htmlFor="">Categoria</label>
          <input
            type="text"
            value={category}
            onChange={(text) => setCategory(text.currentTarget.value)}
            placeholder="Descreva separando por virgulas"
          />
        </div>
        <div id="spacer" />
        <div className="input-label">
          <label htmlFor="">Whatsapp</label>
          <input
            type="text"
            value={whatsapp}
            onChange={(text) => setWhatsapp(text.currentTarget.value)}
          />
        </div>

        <div id="spacer" />
        <div id="group-inputs">
          <p onClick={voltar} id="color-red">
            Voltar
          </p>
          <p onClick={handleSave} id="color-success">
            Salvar
          </p>
        </div>
      </form>
    </main>
  );
}
