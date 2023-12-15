var database = require("../database/config");

function buscarGavetasPorEmpresa(empresaId) {

  instrucaoSql = `select * from gaveta a where fk_empresa = ${empresaId}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(empresaId, descricao) {
  
  instrucaoSql = `insert into (descricao, fk_empresa) gaveta values (${descricao}, ${empresaId})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscarGavetasPorEmpresa,
  cadastrar
}
