import { useState } from "react";
import "./styles.css";
import { addMovie } from "service/addMovie";

export function Create() {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  function handleSave() {
    try {
      addMovie({
        url: image,
        name,
        description,
        category,
        whatsapp,
      });
    } catch (error) {
      alert("Erro ao salvar");
    }
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
          <button type="button" id="color-red">
            Voltar
          </button>
          <button onClick={handleSave} id="color-success">
            Salvar
          </button>
        </div>
      </form>
    </main>
  );
}
