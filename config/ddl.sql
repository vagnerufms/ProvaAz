-- Data Prova Prática AZ
-- Autor: Vagner Silva
-- Data: 12/11/2015
------------------------------------------

-- Estrutura da Tabela empresa
CREATE SEQUENCE seq_id_empresa START 1 MINVALUE 1 MAXVALUE 9999999;
CREATE TABLE empresa (
    id integer NOT NULL DEFAULT nextVal('seq_id_empresa'),
    "razaoSocial" varchar(64) NOT NULL,
    cnpj varchar(32) NOT NULL,
    logradouro varchar(64),
    municipio varchar(64),
    numero varchar(10),
    complemento varchar(64),
    bairro varchar(64),
    cep varchar(16),
    telefone varchar(32),
    email varchar(254) NOT NULL,
    site varchar(254),
    usuario varchar(20) NOT NULL,
    senha varchar(128),
    "createdAt" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);
-- Estrutura da Tabela leilao
CREATE SEQUENCE seq_id_leilao START 1 MINVALUE 1 MAXVALUE 9999999;
CREATE TABLE leilao (
    id integer NOT NULL DEFAULT nextVal('seq_id_leilao'),
    codigo integer,
    descricao varchar(60) NOT NULL,
    vendedor integer NOT NULL,
    "inicioPrevisto" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);
-- Estrutura da Tabela comprador
CREATE TABLE comprador (
    pfk_empresa integer NOT NULL,
    pfk_leilao integer NOT NULL
);
-- Estrutura da Tabela lote
CREATE SEQUENCE seq_id_lote START 1 MINVALUE 1 MAXVALUE 9999999;
CREATE TABLE lote (
    id integer NOT NULL DEFAULT nextVal('seq_id_lote'),
    "numeroLote" integer,
    descricao varchar(60) NOT NULL,
    quantidade numeric NOT NULL,
    "valorInicial" numeric,
    unidade varchar(128) NOT NULL,
    leilao integer NOT NULL,
    "createdAt" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);
-- Estrutura da Tabela unidade
CREATE SEQUENCE seq_id_unidade START 1 MINVALUE 1 MAXVALUE 9999999;
CREATE TABLE unidade (
    id integer NOT NULL DEFAULT nextVal('seq_id_unidade'),
    nome varchar(128) NOT NULL,
    "createdAt" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

/* Constraints das Tabelas */

-- Constraint Primary Key empresa_pk (id) da Tabela empresa
ALTER TABLE ONLY empresa ADD CONSTRAINT empresa_pk PRIMARY KEY (id);

-- Constraint Unique Key empresa_cnpj_uk (cnpj) da Tabela empresa
ALTER TABLE ONLY empresa ADD CONSTRAINT empresa_cnpj_uk UNIQUE (cnpj);

-- Constraint Unique Key empresa_usuario_uk (usuario) da Tabela empresa
ALTER TABLE ONLY empresa ADD CONSTRAINT empresa_usuario_uk UNIQUE (usuario);

-- Constraint Primary Key leilao_pk (id) da Tabela leilao
ALTER TABLE ONLY leilao ADD CONSTRAINT leilao_pk PRIMARY KEY (id);

-- Constraint Foreign Key empresa_comp_fk (pfk_empresa) da Tabela comprador
ALTER TABLE ONLY comprador ADD CONSTRAINT empresa_comp_fk FOREIGN KEY (pfk_empresa) REFERENCES empresa(id);

-- Constraint Foreign Key leilao_comp_fk (pfk_leilao) da Tabela comprador
ALTER TABLE ONLY comprador ADD CONSTRAINT leilao_comp_fk FOREIGN KEY (pfk_leilao) REFERENCES leilao(id);

-- Constraint Primary Key comprador_pk (pfk_empresa, pfk_leilao) da Tabela comprador
ALTER TABLE ONLY comprador ADD CONSTRAINT comprador_pk PRIMARY KEY (pfk_empresa, pfk_leilao);

-- Constraint Primary Key lote_pk (id) da Tabela lote
ALTER TABLE ONLY lote ADD CONSTRAINT lote_pk PRIMARY KEY (id);

-- Constraint Foreign Key leilao_lote_fk (leilao) da Tabela lote
ALTER TABLE ONLY lote ADD CONSTRAINT leilao_lote_fk FOREIGN KEY (leilao) REFERENCES leilao(id);

-- Constraint Primary Key unidade_pk (id) da Tabela unidade
ALTER TABLE ONLY unidade ADD CONSTRAINT unidade_pk PRIMARY KEY (id);


/* Dados das Tabelas */

/* Dados da Tabela 'empresa' */
INSERT INTO empresa ("id", "razaoSocial", "cnpj", "logradouro", "municipio", "numero", "complemento", "bairro", "cep", "telefone", "email", "site", "usuario", "senha", "createdAt", "updatedAt")
VALUES (1, 'Bless Prestadora de Serviços', '68608317000149', 'Rua Júlio Barone', 'Campo Grande', '71', NULL, 'Sao Francisco', '79010090', '6733565181', 'bless.servicos@gmail.com', 'http://www.blessservicos.com.br', 'bless.servicos', '123456', now(), now());
INSERT INTO empresa ("id", "razaoSocial", "cnpj", "logradouro", "municipio", "numero", "complemento", "bairro", "cep", "telefone", "email", "site", "usuario", "senha", "createdAt", "updatedAt")
VALUES (2, 'Construtora Aurélio', '96445596000102', 'Rua Jerônimo de Albuquerque', 'Campo Grande', '2498', '', 'Nova Lima', '79017121', '6791211680', 'construtora.aurelio@yahoo.com.br', 'http://www.construtora.aurelio.com.br/', 'constr.aurelio', '123456', now(), now());
INSERT INTO empresa ("id", "razaoSocial", "cnpj", "logradouro", "municipio", "numero", "complemento", "bairro", "cep", "telefone", "email", "site", "usuario", "senha", "createdAt", "updatedAt")
VALUES (3, 'Concrevia Construtora', '73535236000104', 'Avenida Tamandaré', 'Campo Grande', '1170', NULL, 'Vila Alto Sumaré', '79009790', '6733250653', 'concrevia@gmail.com', NULL, 'concrevia.constr', '123456', now(), now());
INSERT INTO empresa ("id", "razaoSocial", "cnpj", "logradouro", "municipio", "numero", "complemento", "bairro", "cep", "telefone", "email", "site", "usuario", "senha", "createdAt", "updatedAt")
VALUES (4, 'Nacional Construçoes e Reformas', '72706678000103', 'Rua Jaguaribe', 'Campo Grande', '79', '', 'Santo Antônio', '79102040', '6733620370', 'nacional.construcoes@gmail.com', 'http://www.nacionalconstrucoes.com.br', 'nacional.constr', '123456', now(), now());
INSERT INTO empresa ("id", "razaoSocial", "cnpj", "logradouro", "municipio", "numero", "complemento", "bairro", "cep", "telefone", "email", "site", "usuario", "senha", "createdAt", "updatedAt")
VALUES (5, 'Pró Aço Construções e Reforma Ltda', '96728775000157', 'Rua Helio Jose Pereira Nantes', 'Campo Grande', '73', '', 'Sidrolar', '79170000', '679106-3161', 'proaco@gmail.com', 'http://www.proaco.com.br', 'proaco', '123456', now(), now());
INSERT INTO empresa ("id", "razaoSocial", "cnpj", "logradouro", "municipio", "numero", "complemento", "bairro", "cep", "telefone", "email", "site", "usuario", "senha", "createdAt", "updatedAt")
VALUES (6, 'Galassi Engenharia Ltda', '30361898000194', 'Avenida Noroeste', 'Campo Grande', '1311', '', 'Vila Planalto', '79009760', '67 3029-9368', 'galassiengenharia@gmail.com', 'http://www.galassiengenharia.com.br', 'galassieng', '123456', now(), now());
INSERT INTO empresa ("id", "razaoSocial", "cnpj", "logradouro", "municipio", "numero", "complemento", "bairro", "cep", "telefone", "email", "site", "usuario", "senha", "createdAt", "updatedAt")
VALUES (7, 'CSM Construtora Sulmatogrossense', '68681755000132', 'Rua Dunga Arruda', 'Campo Grande', '128', 'qd 9 lt 39', 'Parque Dalas', '79114220', '6733492136', 'csm.onstrutora@gmail.com', NULL, 'csm.constr', '123456', now(), now());
INSERT INTO empresa ("id", "razaoSocial", "cnpj", "logradouro", "municipio", "numero", "complemento", "bairro", "cep", "telefone", "email", "site", "usuario", "senha", "createdAt", "updatedAt")
VALUES (8, 'Construmat', '58532967000102', 'Alberto Araújo Arruda', 'Campo Grande', '1458', NULL, 'Vila Mata do Jacinto', '79033470', '6739012030', 'construmat@gmail.com', 'http://www.construmat.com.br', 'construmat', '123456', now(), now());
INSERT INTO empresa ("id", "razaoSocial", "cnpj", "logradouro", "municipio", "numero", "complemento", "bairro", "cep", "telefone", "email", "site", "usuario", "senha", "createdAt", "updatedAt")
VALUES (9, 'Exacta Engenharia e Arquitetura', '74652116000141', 'Rua José Fragelli', 'Campo Grande', '50', '', 'Vila Planalto', '79009410', '6792453489', 'exacta.eng@gmail.com', NULL, 'exacta.eng', '123456', now(), now());
INSERT INTO empresa ("id", "razaoSocial", "cnpj", "logradouro", "municipio", "numero", "complemento", "bairro", "cep", "telefone", "email", "site", "usuario", "senha", "createdAt", "updatedAt")
VALUES (10, 'MRV Engenharia', '19363827000198', 'Rua 13 de Maio', 'Campo Grande', '2500', 'S 2', 'Centro', '79002356', '6799104317', 'mrvengenharia@gmail.com', 'http://www.mrvengenharia.com.br', 'mrveng', '123456', now(), now());

/* Dados da Tabela 'leilao' */
INSERT INTO leilao ("id", "codigo", "descricao", "vendedor", "inicioPrevisto", "createdAt", "updatedAt")
VALUES (1, 10, 'Leilão de 10 Manilhas de concreto para águas pluviais', 3, '2015-11-20 14:00:00', now(), now());
INSERT INTO leilao ("id", "codigo", "descricao", "vendedor", "inicioPrevisto", "createdAt", "updatedAt")
VALUES (2, 16, 'Betoneira 400 Litros Profissional com Motor', 6, '2015-11-21 15:30:00', now(), now());
INSERT INTO leilao ("id", "codigo", "descricao", "vendedor", "inicioPrevisto", "createdAt", "updatedAt")
VALUES (3, 22, 'Pedra Brita', 4, '2015-11-29 11:30:00', now(), now());
INSERT INTO leilao ("id", "codigo", "descricao", "vendedor", "inicioPrevisto", "createdAt", "updatedAt")
VALUES (4, 22, 'Cimento', 5, '2015-12-06 13:30:00', now(), now());
INSERT INTO leilao ("id", "codigo", "descricao", "vendedor", "inicioPrevisto", "createdAt", "updatedAt")
VALUES (5, 28, 'Placas de Sinalização de Vias urbanas', 3, '2015-12-10 16:00:00', now(), now());
INSERT INTO leilao ("id", "codigo", "descricao", "vendedor", "inicioPrevisto", "createdAt", "updatedAt")
VALUES (6, 29, 'Terreno Comercial', 3, '2015-12-13 14:00:00', now(), now());
INSERT INTO leilao ("id", "codigo", "descricao", "vendedor", "inicioPrevisto", "createdAt", "updatedAt")
VALUES (7, 30, 'Frota de Caminhões Caçamba', 4, '2015-12-18 10:00:00', now(), now());
INSERT INTO leilao ("id", "codigo", "descricao", "vendedor", "inicioPrevisto", "createdAt", "updatedAt")
VALUES (8, 34, 'Ferramentas Hidráulicas', 6, '2015-12-22 15:00:00', now(), now());
INSERT INTO leilao ("id", "codigo", "descricao", "vendedor", "inicioPrevisto", "createdAt", "updatedAt")
VALUES (9, 35, 'Tambores De Metal 200l', 6, '2016-01-10 14:00:00', now(), now());
INSERT INTO leilao ("id", "codigo", "descricao", "vendedor", "inicioPrevisto", "createdAt", "updatedAt")
VALUES (10, 37, 'Pá Carregadeira', 6, '2016-01-10 14:00:00', now(), now());

/* Dados da Tabela 'lote' */
INSERT INTO lote ("id", "numeroLote", "descricao", "quantidade", "valorInicial", "unidade", "leilao", "createdAt", "updatedAt")
VALUES (1, 8, 'Manilhas de concreto para águas pluviais', 10, 1500, 'UN', 1, now(), now());
INSERT INTO lote ("id", "numeroLote", "descricao", "quantidade", "valorInicial", "unidade", "leilao", "createdAt", "updatedAt")
VALUES (2, 12, 'Betoneira 400 Litros Profissional com Motor', 2, 4500, 'UN', 2, now(), now());
INSERT INTO lote ("id", "numeroLote", "descricao", "quantidade", "valorInicial", "unidade", "leilao", "createdAt", "updatedAt")
VALUES (3, 18, 'Pedra Brita', 1.5, 4500, 'T', 3, now(), now());
INSERT INTO lote ("id", "numeroLote", "descricao", "quantidade", "valorInicial", "unidade", "leilao", "createdAt", "updatedAt")
VALUES (4, 23, 'Cimento', 930, 350, 'KG', 4, now(), now());
INSERT INTO lote ("id", "numeroLote", "descricao", "quantidade", "valorInicial", "unidade", "leilao", "createdAt", "updatedAt")
VALUES (5, 25, 'Placas de Sinalização de Vias urbanas', 68, 70000, 'UN', 5, now(), now());
INSERT INTO lote ("id", "numeroLote", "descricao", "quantidade", "valorInicial", "unidade", "leilao", "createdAt", "updatedAt")
VALUES (6, 26, 'Terreno Comercial no Centro da Campo Grande', 200, 180000, 'M²', 6, now(), now());
INSERT INTO lote ("id", "numeroLote", "descricao", "quantidade", "valorInicial", "unidade", "leilao", "createdAt", "updatedAt")
VALUES (7, 28, 'Caminhões Caçamba', 3, 210000, 'UN', 7, now(), now());
INSERT INTO lote ("id", "numeroLote", "descricao", "quantidade", "valorInicial", "unidade", "leilao", "createdAt", "updatedAt")
VALUES (8, 28, 'Ferramentas Hidráulicas', 1, 2500, 'UN', 8, now(), now());
INSERT INTO lote ("id", "numeroLote", "descricao", "quantidade", "valorInicial", "unidade", "leilao", "createdAt", "updatedAt")
VALUES (9, 30, 'Tambor De Metal 200l', 10, 4400, 'UN', 9, now(), now());
INSERT INTO lote ("id", "numeroLote", "descricao", "quantidade", "valorInicial", "unidade", "leilao", "createdAt", "updatedAt")
VALUES (10, 31, 'Pá Carregadeira', 4, 275000, 'UN', 9, now(), now());

/* Dados da Tabela 'comprador' */
INSERT INTO comprador ("pfk_empresa", "pfk_leilao")
VALUES (1, 6);
INSERT INTO comprador ("pfk_empresa", "pfk_leilao")
VALUES (1, 10);
INSERT INTO comprador ("pfk_empresa", "pfk_leilao")
VALUES (2, 5);
INSERT INTO comprador ("pfk_empresa", "pfk_leilao")
VALUES (3, 3);
INSERT INTO comprador ("pfk_empresa", "pfk_leilao")
VALUES (4, 1);
INSERT INTO comprador ("pfk_empresa", "pfk_leilao")
VALUES (4, 7);
INSERT INTO comprador ("pfk_empresa", "pfk_leilao")
VALUES (5, 2);
INSERT INTO comprador ("pfk_empresa", "pfk_leilao")
VALUES (6, 9);
INSERT INTO comprador ("pfk_empresa", "pfk_leilao")
VALUES (8, 4);
INSERT INTO comprador ("pfk_empresa", "pfk_leilao")
VALUES (9, 8);

/* Dados da Tabela 'unidade' */
INSERT INTO unidade ("id", "nome", "createdAt", "updatedAt")
VALUES (1, 'UN', now(), now());
INSERT INTO unidade ("id", "nome", "createdAt", "updatedAt")
VALUES (2, 'KG', now(), now());
INSERT INTO unidade ("id", "nome", "createdAt", "updatedAt")
VALUES (3, 'T', now(), now());
INSERT INTO unidade ("id", "nome", "createdAt", "updatedAt")
VALUES (4, 'M', now(), now());
INSERT INTO unidade ("id", "nome", "createdAt", "updatedAt")
VALUES (5, 'M²', now(), now());

/* Alteração dos valores das Sequences */
ALTER SEQUENCE seq_id_empresa INCREMENT 1 MINVALUE 1 MAXVALUE 9999999 START 1 RESTART 11 CACHE 1 NO CYCLE;
ALTER SEQUENCE seq_id_leilao INCREMENT 1 MINVALUE 1 MAXVALUE 9999999 START 1 RESTART 11 CACHE 1 NO CYCLE;
ALTER SEQUENCE seq_id_lote INCREMENT 1 MINVALUE 1 MAXVALUE 9999999 START 1 RESTART 11 CACHE 1 NO CYCLE;
ALTER SEQUENCE seq_id_unidade INCREMENT 1 MINVALUE 1 MAXVALUE 9999999 START 1 RESTART 5 CACHE 1 NO CYCLE;