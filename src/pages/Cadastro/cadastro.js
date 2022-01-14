import React, { useState } from "react";
import "./cadastro.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import api from "../../api/api";

function Cadastro() {
  function onBlurCep(ev, setFieldValue) {
    const { value } = ev.target;

    const cep = value?.replace(/[^0-9]/g, "");

    if (cep?.length !== 8) {
      return;
    }
    console.log("deixar");
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setFieldValue("logradouro", data.logradouro);
        setFieldValue("cidade", data.bairro);
      });
  }

  return (
    <>
      <Formik
        validateOnMount
        initialValues={{
          cep: "",
          logradouro: "",
          cidade: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          const dados = {
            endereco: values.logradouro,
            ...values,
          };
          api.post("/users", dados).then((response) => {});
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          isSubmitting,
          /* and other goodies */
        }) => (
          <div className="container">
            <form onSubmit={handleSubmit}>
              <h2>Cadastro de usuario</h2>

              <div className="row">
                <span>Nome</span>
                <input
                  type="text"
                  name="nome"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="row">
                <span>Idade</span>
                <input type="number" name="idade" onChange={handleChange} />

              </div>
              <div className="row">
                <span>Email</span>
                <input
                  type="text"
                  name="email"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="row">
                <span>Senha</span>
                <input
                  type="password"
                  name="senha"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="row">
                <span>CEP</span>
                <input
                  type="text"
                  name="cep"
                  onChange={(event) => {
                    handleChange(event);
                  }}
                  onBlur={(event) => {
                    onBlurCep(event, setFieldValue);
                  }}
                  value={values.cep}
                  required
                />
              </div>

              <div className="row">
                <span>Endereço</span>
                <input
                  type="text"
                  name="logradouro"
                  value={values.logradouro}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="row">
                <span>Cidade</span>
                <input
                  type="text"
                  name="cidade"
                  value={values.cidade}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="row">
                <button type="submit">CADASTRA-SE </button>
              </div>
            </form>
          </div>
        )}
      </Formik>
    </>
  );
}

export default Cadastro;
