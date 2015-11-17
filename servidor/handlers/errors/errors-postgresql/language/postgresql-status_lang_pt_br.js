/*
	###########################################################################################
	Autor: Vagner Silva
	Data: 13/11/2015
	Versão: 1.0.0
	Função: Tradução de Mensagens de Erros do PostgreSQL - PT BR
	Site Códigos de Erros: http://www.postgresql.org/docs/current/static/errcodes-appendix.html
	###########################################################################################
*/
var languagePostgreSQLStatus = {
	'default': 'Erro no Banco de Dados',
	// Classe 00 — Conclusão Bem Sucedida
	// Class 00 —  Successful Completion
	'00000' : 'Completado com Sucesso',
	// Classe 01 — Aviso
	// Class 01 — Warning
	'01000' : 'Warning',
	'0100C' : 'Dynamic Result Sets Returned',
	'01008' : 'Implicit Zero Bit Padding',
	'01003' : 'Null Value Eliminated in Set Function',
	'01007' : 'Privilege Not Granted',
	'01006' : 'Privilege Not Revoked',
	'01004' : 'String Data Right Truncation',
	'01P01' : 'Deprecated Feature',
	// Classe 02 — Sem Dados (esta é também uma classe de advertência de acordo com o padrão SQL)
	// Class 02 — No Data (this is also a warning class per the SQL standard)
	'02000' : 'No Data',
	'02001' : 'No Additional Dynamic Rresult Sets Returned',
	// Classe 03 — SQL Statement Not Yet Complete Declaração SQL Incompleta
	// Class 03 — SQL Statement Not Yet Complete
	'03000' : 'SQL Statement Not Yet Complete',
	// Classe 08 — Exceção de Conexão
	// Class 08 — Connection Exception
	'08000' : 'Connection Exception',
	'08003' : 'Connection Does Not Exist',
	'08006' : 'Connection Failure',
	'08001' : 'SQLClient Unable to Establish SQLConnection',
	'08004' : 'SQLServer Rejected Establishment of SQLConnection',
	'08007' : 'Transaction Resolution Unknown',
	'08P01' : 'Protocol Violation',
	// Classe 09 — Exceção de Ação de Trigger
	// Class 09 — Triggered Action Exception
	'09000' : 'Triggered Action Exception',
	// Classe 0A — Recurso Não Suportado
	// Class 0A — Feature Not Supported
	'0A000' : 'Feature Not Supported',
	// Classe 0B — Inicialização Inválida de Transação
	// Class 0B — Invalid Transaction Initiation
	'0B000' : 'Invalid Transaction Initiation',
	// Classe 0F — Exceção de Localização
	// Class 0F — Locator Exception
	'0F000' : 'Locator Exception',
	'0F001' : 'Invalid Locator Specification',
	// Classe 0L — Permissão Inválida
	// Class 0L — Invalid Grantor
	'0L000' : 'Invalid Grantor',
	'0LP01' : 'Invalid Grant Operation',
	// Classe 0P — Função de Especificação Inválida
	// Class 0P — Invalid Role Specification
	'0P000' : 'Invalid Role Specification',
	// Classe 0Z — Exceção de Diagnóstico
	// Class 0Z — Diagnostics Exception
	'0Z000' : 'Diagnostics Exception',
	'0Z002' : 'Stacked Diagnostics Accessed Without Active Handler',
	// Classe 20 — Caso Não Encontrado
	// Class 20 — Case Not Found
	'20000' : 'Case Not Found',
	// Classe 21 — Violação de Cardinalidade
	// Class 21 — Cardinality Violation
	'21000' : 'Cardinality Violation',
	// Classe 22 — Exceção de Dados
	// Class 22 — Data Exception
	'22000' : 'Data Exception',
	'2202E' : 'Array Subscript Error',
	'22021' : 'Character Not in Repertoire',
	'22008' : 'Datetime Field Overflow',
	'22012' : 'Division by Zero',
	'22005' : 'Error in Assignment',
	'2200B' : 'Escape Character Conflict',
	'22022' : 'Indicator Overflow',
	'22015' : 'Interval Field Overflow',
	'2201E' : 'Invalid Argument for Logarithm',
	'22014' : 'Invalid Argument for Ntile Function',
	'22016' : 'Invalid Argument For NTH Value Function',
	'2201F' : 'Invalid Argument for Power Function',
	'2201G' : 'Invalid Argument for Width Bucket Function',
	'22018' : 'Invalid Character Value for Cast',
	'22007' : 'Invalid Datetime Format',
	'22019' : 'Invalid Escape Character',
	'2200D' : 'Invalid Escape Octet',
	'22025' : 'Invalid Escape Sequence',
	'22P06' : 'NonStandard Use of Escape Character',
	'22010' : 'Invalid Indicator Parameter Value',
	'22023' : 'Invalid Parameter Value',
	'2201B' : 'Invalid Regular Expression',
	'2201W' : 'Invalid Row Count in Limit Clause',
	'2201X' : 'Invalid Row Count in Result Offset Clause',
	'22009' : 'Invalid Time Zone Displacement Value',
	'2200C' : 'Invalid Use of Escape Character',
	'2200G' : 'Most Specific Type Mismatch',
	'22004' : 'Null Value Not Allowed',
	'22002' : 'Null Value No Indicator Parameter',
	'22003' : 'Numeric Value Out of Range',
	'22026' : 'String Data Length Mismatch',
	'22001' : 'String Data Right Truncation',
	'22011' : 'Substring Error',
	'22027' : 'Trim Error',
	'22024' : 'Unterminated C String',
	'2200F' : 'Zero Length Character String',
	'22P01' : 'Floating Point Exception',
	'22P02' : 'Invalid Text Representation',
	'22P03' : 'Invalid Binary Representation',
	'22P04' : 'Bad Copy File Format',
	'22P05' : 'Untranslatable Character',
	'2200L' : 'Not an XML Document',
	'2200M' : 'Invalid XML Document',
	'2200N' : 'Invalid XML Content',
	'2200S' : 'Invalid XML Comment',
	'2200T' : 'Invalid XML Processing Instruction',
	// Classe 23 — Violação de Restrição(Constraint) de Integridade
	// Class 23 — Integrity Constraint Violation
	'23000' : 'Integrity Constraint Violation',
	'23001' : 'Restrict Violation',
	'23502' : 'Not Null Violation',
	'23503' : 'Foreign Key Violation',
	'23505' : 'Unique Violation',
	'23514' : 'Check Violation',
	'23P01' : 'Exclusion Violation',
	// Classe 24 — Estado de Cursor Inválido
	// Class 24 — Invalid Cursor State
	'24000' : 'Invalid Cursor State',
	// Classe 25 — Estado de Transação Inválido
	// Class 25 — Invalid Transaction State
	'25000' : 'Invalid Transaction State',
	'25001' : 'Active SQL Transaction',
	'25002' : 'Branch Transaction Already Active',
	'25008' : 'Held Cursor Requires Same Isolation Level',
	'25003' : 'Inappropriate Access Mode for Branch Transaction',
	'25004' : 'Inappropriate Isolation Level for Branch Transaction',
	'25005' : 'No Active SQL Transaction for Branch Transaction',
	'25006' : 'Read Only SQL Transaction',
	'25007' : 'Schema and Data Statement Mixing Not Supported',
	'25P01' : 'No Active SQL Transaction',
	'25P02' : 'In Failed SQL Transaction',
	// Classe 26 — Instrução de Nome SQL Inválida
	// Class 26 — Invalid SQL Statement Name
	'26000' : 'Invalid SQL Statement Name',
	// Classe 27 — Violação de Trigger de Modificação de Dados
	// Class 27 — Triggered Data Change Violation
	'27000' : 'Triggered Data Change Violation',
	// Classe 28 — Especificação de Autorização Inválida
	// Class 28 — Invalid Authorization Specification
	'28000' : 'Invalid Authorization Specification',
	'28P01' : 'Invalid Password',
	// Classe 2B — Descritores de Dependência Existentes
	// Class 2B — Dependent Privilege Descriptors Still Exist
	'2B000' : 'Dependent Privilege Descriptors Still Exist',
	'2BP01' : 'Dependent Objects Still Exist',
	// Classe 2D — Conclusão Inválida de Transação
	// Class 2D — Invalid Transaction Termination
	'2D000' : 'Invalid Transaction Termination',
	// Classe 2F — Exceção de Rotina SQL
	// Class 2F — SQL Routine Exception
	'2F000' : 'SQL Routine Exception',
	'2F005' : 'Function Executed No Return Statement',
	'2F002' : 'Modifying SQL Data Not Permitted',
	'2F003' : 'Prohibited SQL Statement Attempted',
	'2F004' : 'Reading SQL Data Not Permitted',
	// Classe 34 — Nome de Cursor Inválido
	// Class 34 — Invalid Cursor Name
	'34000' : 'Invalid Cursor Name',
	// Classe 38 — Exceção de Rotina Externa
	// Class 38 — External Routine Exception
	'38000' : 'External Routine Exception',
	'38001' : 'Containing SQL Not Permitted',
	'38002' : 'Modifying SQL Data Not Permitted',
	'38003' : 'Prohibited SQL Statement Attempted',
	'38004' : 'Reading SQL Data Not Permitted',
	// Classe 39 — Exceção de Invocação de Rotina Externa
	// Classe 39 — External Routine Invocation Exception
	'39000' : 'External Routine Invocation Exception',
	'39001' : 'Invalid SQLState Returned',
	'39004' : 'Null Value Not Allowed',
	'39P01' : 'Trigger Protocol Violated',
	'39P02' : 'SRF Protocol Violated',
	// Classe 3B — Exceção de Savepoint
	// Class 3B — Savepoint Exception
	'3B000' : 'Savepoint Exception',
	'3B001' : 'Invalid Savepoint Specification',
	// Classe 3D — Nome do Catálogo Inválido
	// Class 3D — Invalid Catalog Name
	'3D000' : 'Invalid Catalog Name',
	// Classe 3F — Nome do Esquema Inválido
	// Class 3F — Invalid Schema Name
	'3F000' : 'Invalid Schema Name',
	// Classe 40 — Rollback de Transação 
	// Class 40 — Transaction Rollback
	'40000' : 'Rransaction Rollback',
	'40002' : 'Transaction Integrity Constraint Violation',
	'40001' : 'Serialization Failure',
	'40003' : 'Statement Completion Unknown',
	'40P01' : 'Deadlock Detected',
	// Class 42 — Erro de Sintaxe ou Violação de Regra de Acesso
	// Class 42 — Syntax Error or Access Rule Violation
	'42000' : 'Syntax Error or Access Rule Violation',
	'42601' : 'Syntax Error',
	'42501' : 'Insufficient Privilege',
	'42846' : 'Cannot Coerce',
	'42803' : 'Grouping Error',
	'42P20' : 'Windowing Error',
	'42P19' : 'Invalid Recursion',
	'42830' : 'Invalid Foreign Key',
	'42602' : 'Invalid Name',
	'42622' : 'Name Too Long',
	'42939' : 'Reserved Name',
	'42804' : 'Datatype Mismatch',
	'42P18' : 'Indeterminate Datatype',
	'42P21' : 'Collation Mismatch',
	'42P22' : 'Indeterminate Collation',
	'42809' : 'Wrong Object Type',
	'42703' : 'Undefined Column',
	'42883' : 'Undefined Function',
	'42P01' : 'Undefined Table',
	'42P02' : 'Undefined Parameter',
	'42704' : 'Undefined Object',
	'42701' : 'Duplicate Column',
	'42P03' : 'Duplicate Cursor',
	'42P04' : 'Duplicate Database',
	'42723' : 'Duplicate Function',
	'42P05' : 'Duplicate Prepared Statement',
	'42P06' : 'Duplicate Schema',
	'42P07' : 'Duplicate Table',
	'42712' : 'Duplicate Alias',
	'42710' : 'Duplicate Object',
	'42702' : 'Ambiguous Column',
	'42725' : 'Ambiguous Function',
	'42P08' : 'Ambiguous Parameter',
	'42P09' : 'Ambiguous Alias',
	'42P10' : 'Invalid Column Reference',
	'42611' : 'Invalid Column Definition',
	'42P11' : 'Invalid Cursor Definition',
	'42P12' : 'Invalid Database Definition',
	'42P13' : 'Invalid Function Definition',
	'42P14' : 'Invalid Prepared Statement Definition',
	'42P15' : 'Invalid Schema Definition',
	'42P16' : 'Invalid Table Definition',
	'42P17' : 'Invalid Object Definition',
	// Classe 44 — Violação de CHECK OPTION
	// Class 44 — WITH CHECK OPTION Violation
	'44000' : 'With Check Option Violation',
	// Classe 53 — Recursos Insuficientes
	// Class 53 — Insufficient Resources
	'53000' : 'Insufficient Resources',
	'53100' : 'Disk Full',
	'53200' : 'Out of Memory',
	'53300' : 'Too Many Connections',
	'53400' : 'Configuration Limit Exceeded',
	// Classe 54 — Limite de Programa Excedido
	// Class 54 — Program Limit Exceeded
	'54000' : 'Program Limit Exceeded',
	'54001' : 'Statement Too Complex',
	'54011' : 'Too Many Columns',
	'54023' : 'Too Many Arguments',
	// Classe 55 — Objeto Não presente no Estado de Pré-requisito
	// Class 55 — Object Not In Prerequisite State
	'55000' : 'Object Not in Prerequisite State',
	'55006' : 'Object in Use',
	'55P02' : 'Cant Change Runtime Param',
	'55P03' : 'Lock Not Available',
	// Classe 57 — Intervenção do Operador
	// Class 57 — Operator Intervention
	'57000' : 'Operator Intervention',
	'57014' : 'Query Canceled',
	'57P01' : 'Admin Shutdown',
	'57P02' : 'Crash Shutdown',
	'57P03' : 'Cannot Connect Now',
	'57P04' : 'Database Dropped',
	// Classe 58 — Erro do Sistema (erros externos errors external referidos ao PostgreSQL)
	// Class 58 — System Error (errors external to PostgreSQL itself)
	'58000' : 'System Error',
	'58030' : 'IO Error',
	'58P01' : 'Undefined File',
	'58P02' : 'Duplicate File',
	// Classe F0 — Erro do Arquivo de Configuração
	// Class F0 — Configuration File Error
	'F0000' : 'Config File Error',
	'F0001' : 'Lock File Exists',
	// Classe HV — Erro de Foreign Data Wrapper (SQL/MED)
	// Class HV — Foreign Data Wrapper Error (SQL/MED)
	'HV000' : 'FDW Error',
	'HV005' : 'FDW Column Name Not Found',
	'HV002' : 'FDW Dynamic Parameter Value Needed',
	'HV010' : 'FDW Function Sequence Error',
	'HV021' : 'FDW Inconsistent Descriptor Information',
	'HV024' : 'FDW Invalid Attribute Value',
	'HV007' : 'FDW Invalid Column Name',
	'HV008' : 'FDW Invalid Column Number',
	'HV004' : 'FDW Invalid Data Type',
	'HV006' : 'FDW Invalid Data Type Descriptors',
	'HV091' : 'FDW Invalid Descriptor Field Identifier',
	'HV00B' : 'FDW Invalid Handle',
	'HV00C' : 'FDW Invalid Option Index',
	'HV00D' : 'FDW Invalid Option Name',
	'HV090' : 'FDW Invalid String Length or Buffer Length',
	'HV00A' : 'FDW Invalid String Format',
	'HV009' : 'FDW Invalid Use of Null Pointer',
	'HV014' : 'FDW Too Many Handles',
	'HV001' : 'FDW Out of Memory',
	'HV00P' : 'FDW No Schemas',
	'HV00J' : 'FDW Option Name Not Found',
	'HV00K' : 'FDW Reply Handle',
	'HV00Q' : 'FDW Schema Not Found',
	'HV00R' : 'FDW Table Not Found',
	'HV00L' : 'FDW Unable to Create Execution',
	'HV00M' : 'FDW Unable to Create Reply',
	'HV00N' : 'FDW Unable to Establish Connection',
	// Classe P0 — Erro de PL/pgSQL
	// Class P0 — PL/pgSQL Error
	'P0000' : 'PL/pgSQL Error',
	'P0001' : 'Raise Exception',
	'P0002' : 'No Data Found',
	'P0003' : 'Too Many Rows',
	// Classe XX — Erro Interno
	// Class XX — Internal Error
	'XX000' : 'Internal Error',
	'XX001' : 'Data Corrupted',
	'XX002': 'Index Corrupted',
	// #####################################################################
	// #####################################################################
	DEFAULT: 'default',
	// Classe 00 — Conclusão Bem Sucedida
	// Class 00 —  Successful Completion
	SUCCESSFUL_COMPLETION: '00000',
	// Classe 01 — Aviso
	// Class 01 — Warning
	WARNING: '01000',
	DYNAMIC_RESULT_SETS_RETURNED: '0100C',
	IMPLICIT_ZERO_BIT_PADDING: '01008',
	NULL_VALUE_ELIMINATED_IN_SET_FUNCTION: '01003',
	PRIVILEGE_NOT_GRANTED: '01007',
	PRIVILEGE_NOT_REVOKED: '01006',
	STRING_DATA_RIGHT_TRUNCATION: '01004',
	DEPRECATED_FEATURE: '01P01',
	// Classe 02 — Sem Dados (esta é também uma classe de advertência de acordo com o padrão SQL)
	// Class 02 — No Data (this is also a warning class per the SQL standard)
	NO_DATA: '02000',
	NO_ADDITIONAL_DYNAMIC_RESULT_SETS_RETURNED: '02001',
	// Classe 03 — SQL Statement Not Yet Complete Declaração SQL Incompleta
	// Class 03 — SQL Statement Not Yet Complete
	SQL_STATEMENT_NOT_YET_COMPLETE: '03000',
	// Classe 08 — Exceção de Conexão
	// Class 08 — Connection Exception
	CONNECTION_EXCEPTION: '08000',
	CONNECTION_DOES_NOT_EXIST: '08003',
	CONNECTION_FAILURE: '08006',
	SQLCLIENT_UNABLE_TO_ESTABLISH_SQLCONNECTION: '08001',
	SQLSERVER_REJECTED_ESTABLISHMENT_OF_SQLCONNECTION: '08004',
	TRANSACTION_RESOLUTION_UNKNOWN: '08007',
	PROTOCOL_VIOLATION: '08P01',
	// Classe 09 — Exceção de Ação de Trigger
	// Class 09 — Triggered Action Exception
	TRIGGERED_ACTION_EXCEPTION: '09000',
	// Classe 0A — Recurso Não Suportado
	// Class 0A — Feature Not Supported
	FEATURE_NOT_SUPPORTED: '0A000',
	// Classe 0B — Inicialização Inválida de Transação
	// Class 0B — Invalid Transaction Initiation
	INVALID_TRANSACTION_INITIATION: '0B000',
	// Classe 0F — Exceção de Localização
	// Class 0F — Locator Exception
	LOCATOR_EXCEPTION: '0F000',
	INVALID_LOCATOR_SPECIFICATION: '0F001',
	// Classe 0L — Permissão Inválida
	// Class 0L — Invalid Grantor
	INVALID_GRANTOR: '0L000',
	INVALID_GRANT_OPERATION: '0LP01',
	// Classe 0P — Função de Especificação Inválida
	// Class 0P — Invalid Role Specification
	INVALID_ROLE_SPECIFICATION: '0P000',
	// Classe 0Z — Exceção de Diagnóstico
	// Class 0Z — Diagnostics Exception
	DIAGNOSTICS_EXCEPTION: '0Z000',
	STACKED_DIAGNOSTICS_ACCESSED_WITHOUT_ACTIVE_HANDLER: '0Z002',
	// Classe 20 — Caso Não Encontrado
	// Class 20 — Case Not Found
	CASE_NOT_FOUND: '20000',
	// Classe 21 — Violação de Cardinalidade
	// Class 21 — Cardinality Violation
	CARDINALITY_VIOLATION: '21000',
	// Classe 22 — Exceção de Dados
	// Class 22 — Data Exception
	DATA_EXCEPTION: '22000',
	ARRAY_SUBSCRIPT_ERROR: '2202E',
	CHARACTER_NOT_IN_REPERTOIRE: '22021',
	DATETIME_FIELD_OVERFLOW: '22008',
	DIVISION_BY_ZERO: '22012',
	ERROR_IN_ASSIGNMENT: '22005',
	ESCAPE_CHARACTER_CONFLICT: '2200B',
	INDICATOR_OVERFLOW: '22022',
	INTERVAL_FIELD_OVERFLOW: '22015',
	INVALID_ARGUMENT_FOR_LOGARITHM: '2201E',
	INVALID_ARGUMENT_FOR_NTILE_FUNCTION: '22014',
	INVALID_ARGUMENT_FOR_NTH_VALUE_FUNCTION: '22016',
	INVALID_ARGUMENT_FOR_POWER_FUNCTION: '2201F',
	INVALID_ARGUMENT_FOR_WIDTH_BUCKET_FUNCTION: '2201G',
	INVALID_CHARACTER_VALUE_FOR_CAST: '22018',
	INVALID_DATETIME_FORMAT: '22007',
	INVALID_ESCAPE_CHARACTER: '22019',
	INVALID_ESCAPE_OCTET: '2200D',
	INVALID_ESCAPE_SEQUENCE: '22025',
	NONSTANDARD_USE_OF_ESCAPE_CHARACTER: '22P06',
	INVALID_INDICATOR_PARAMETER_VALUE: '22010',
	INVALID_PARAMETER_VALUE: '22023',
	INVALID_REGULAR_EXPRESSION: '2201B',
	INVALID_ROW_COUNT_IN_LIMIT_CLAUSE: '2201W',
	INVALID_ROW_COUNT_IN_RESULT_OFFSET_CLAUSE: '2201X',
	INVALID_TIME_ZONE_DISPLACEMENT_VALUE: '22009',
	INVALID_USE_OF_ESCAPE_CHARACTER: '2200C',
	MOST_SPECIFIC_TYPE_MISMATCH: '2200G',
	NULL_VALUE_NOT_ALLOWED: '22004',
	NULL_VALUE_NO_INDICATOR_PARAMETER: '22002',
	NUMERIC_VALUE_OUT_OF_RANGE: '22003',
	STRING_DATA_LENGTH_MISMATCH: '22026',
	STRING_DATA_RIGHT_TRUNCATION: '22001',
	SUBSTRING_ERROR: '22011',
	TRIM_ERROR: '22027',
	UNTERMINATED_C_STRING: '22024',
	ZERO_LENGTH_CHARACTER_STRING: '2200F',
	FLOATING_POINT_EXCEPTION: '22P01',
	INVALID_TEXT_REPRESENTATION: '22P02',
	INVALID_BINARY_REPRESENTATION: '22P03',
	BAD_COPY_FILE_FORMAT: '22P04',
	UNTRANSLATABLE_CHARACTER: '22P05',
	NOT_AN_XML_DOCUMENT: '2200L',
	INVALID_XML_DOCUMENT: '2200M',
	INVALID_XML_CONTENT: '2200N',
	INVALID_XML_COMMENT: '2200S',
	INVALID_XML_PROCESSING_INSTRUCTION: '2200T',
	// Classe 23 — Violação de Restrição(Constraint) de Integridade
	// Class 23 — Integrity Constraint Violation
	INTEGRITY_CONSTRAINT_VIOLATION: '23000',
	RESTRICT_VIOLATION: '23001',
	NOT_NULL_VIOLATION: '23502',
	FOREIGN_KEY_VIOLATION: '23503',
	UNIQUE_VIOLATION: '23505',
	CHECK_VIOLATION: '23514',
	EXCLUSION_VIOLATION: '23P01',
	// Classe 24 — Estado de Cursor Inválido
	// Class 24 — Invalid Cursor State
	INVALID_CURSOR_STATE: '24000',
	// Classe 25 — Estado de Transação Inválido
	// Class 25 — Invalid Transaction State
	INVALID_TRANSACTION_STATE: '25000',
	ACTIVE_SQL_TRANSACTION: '25001',
	BRANCH_TRANSACTION_ALREADY_ACTIVE: '25002',
	HELD_CURSOR_REQUIRES_SAME_ISOLATION_LEVEL: '25008',
	INAPPROPRIATE_ACCESS_MODE_FOR_BRANCH_TRANSACTION: '25003',
	INAPPROPRIATE_ISOLATION_LEVEL_FOR_BRANCH_TRANSACTION: '25004',
	NO_ACTIVE_SQL_TRANSACTION_FOR_BRANCH_TRANSACTION: '25005',
	READ_ONLY_SQL_TRANSACTION: '25006',
	SCHEMA_AND_DATA_STATEMENT_MIXING_NOT_SUPPORTED: '25007',
	NO_ACTIVE_SQL_TRANSACTION: '25P01',
	IN_FAILED_SQL_TRANSACTION: '25P02',
	// Classe 26 — Instrução de Nome SQL Inválida
	// Class 26 — Invalid SQL Statement Name
	INVALID_SQL_STATEMENT_NAME: '26000',
	// Classe 27 — Violação de Trigger de Modificação de Dados
	// Class 27 — Triggered Data Change Violation
	TRIGGERED_DATA_CHANGE_VIOLATION: '27000',
	// Classe 28 — Especificação de Autorização Inválida
	// Class 28 — Invalid Authorization Specification
	INVALID_AUTHORIZATION_SPECIFICATION: '28000',
	INVALID_PASSWORD: '28P01',
	// Classe 2B — Descritores de Dependência Existentes
	// Class 2B — Dependent Privilege Descriptors Still Exist
	DEPENDENT_PRIVILEGE_DESCRIPTORS_STILL_EXIST: '2B000',
	DEPENDENT_OBJECTS_STILL_EXIST: '2BP01',
	// Classe 2D — Conclusão Inválida de Transação
	// Class 2D — Invalid Transaction Termination
	INVALID_TRANSACTION_TERMINATION: '2D000',
	// Classe 2F — Exceção de Rotina SQL
	// Class 2F — SQL Routine Exception
	SQL_ROUTINE_EXCEPTION: '2F000',
	FUNCTION_EXECUTED_NO_RETURN_STATEMENT: '2F005',
	MODIFYING_SQL_DATA_NOT_PERMITTED: '2F002',
	PROHIBITED_SQL_STATEMENT_ATTEMPTED: '2F003',
	READING_SQL_DATA_NOT_PERMITTED: '2F004',
	// Classe 34 — Nome de Cursor Inválido
	// Class 34 — Invalid Cursor Name
	INVALID_CURSOR_NAME: '34000',
	// Classe 38 — Exceção de Rotina Externa
	// Class 38 — External Routine Exception
	EXTERNAL_ROUTINE_EXCEPTION: '38000',
	CONTAINING_SQL_NOT_PERMITTED: '38001',
	MODIFYING_SQL_DATA_NOT_PERMITTED: '38002',
	PROHIBITED_SQL_STATEMENT_ATTEMPTED: '38003',
	READING_SQL_DATA_NOT_PERMITTED: '38004',
	// Classe 39 — Exceção de Invocação de Rotina Externa
	// Classe 39 — External Routine Invocation Exception
	EXTERNAL_ROUTINE_INVOCATION_EXCEPTION: '39000',
	INVALID_SQLSTATE_RETURNED: '39001',
	NULL_VALUE_NOT_ALLOWED: '39004',
	TRIGGER_PROTOCOL_VIOLATED: '39P01',
	SRF_PROTOCOL_VIOLATED: '39P02',
	// Classe 3B — Exceção de Savepoint
	// Class 3B — Savepoint Exception
	SAVEPOINT_EXCEPTION: '3B000',
	INVALID_SAVEPOINT_SPECIFICATION: '3B001',
	// Classe 3D — Nome do Catálogo Inválido
	// Class 3D — Invalid Catalog Name
	INVALID_CATALOG_NAME: '3D000',
	// Classe 3F — Nome do Esquema Inválido
	// Class 3F — Invalid Schema Name
	INVALID_SCHEMA_NAME: '3F000',
	// Classe 40 — Rollback de Transação 
	// Class 40 — Transaction Rollback
	TRANSACTION_ROLLBACK: '40000',
	TRANSACTION_INTEGRITY_CONSTRAINT_VIOLATION: '40002',
	SERIALIZATION_FAILURE: '40001',
	STATEMENT_COMPLETION_UNKNOWN: '40003',
	DEADLOCK_DETECTED: '40P01',
	// Class 42 — Erro de Sintaxe ou Violação de Regra de Acesso
	// Class 42 — Syntax Error or Access Rule Violation
	SYNTAX_ERROR_OR_ACCESS_RULE_VIOLATION: '42000',
	SYNTAX_ERROR: '42601',
	INSUFFICIENT_PRIVILEGE: '42501',
	CANNOT_COERCE: '42846',
	GROUPING_ERROR: '42803',
	WINDOWING_ERROR: '42P20',
	INVALID_RECURSION: '42P19',
	INVALID_FOREIGN_KEY: '42830',
	INVALID_NAME: '42602',
	NAME_TOO_LONG: '42622',
	RESERVED_NAME: '42939',
	DATATYPE_MISMATCH: '42804',
	INDETERMINATE_DATATYPE: '42P18',
	COLLATION_MISMATCH: '42P21',
	INDETERMINATE_COLLATION: '42P22',
	WRONG_OBJECT_TYPE: '42809',
	UNDEFINED_COLUMN: '42703',
	UNDEFINED_FUNCTION: '42883',
	UNDEFINED_TABLE: '42P01',
	UNDEFINED_PARAMETER: '42P02',
	UNDEFINED_OBJECT: '42704',
	DUPLICATE_COLUMN: '42701',
	DUPLICATE_CURSOR: '42P03',
	DUPLICATE_DATABASE: '42P04',
	DUPLICATE_FUNCTION: '42723',
	DUPLICATE_PREPARED_STATEMENT: '42P05',
	DUPLICATE_SCHEMA: '42P06',
	DUPLICATE_TABLE: '42P07',
	DUPLICATE_ALIAS: '42712',
	DUPLICATE_OBJECT: '42710',
	AMBIGUOUS_COLUMN: '42702',
	AMBIGUOUS_FUNCTION: '42725',
	AMBIGUOUS_PARAMETER: '42P08',
	AMBIGUOUS_ALIAS: '42P09',
	INVALID_COLUMN_REFERENCE: '42P10',
	INVALID_COLUMN_DEFINITION: '42611',
	INVALID_CURSOR_DEFINITION: '42P11',
	INVALID_DATABASE_DEFINITION: '42P12',
	INVALID_FUNCTION_DEFINITION: '42P13',
	INVALID_PREPARED_STATEMENT_DEFINITION: '42P14',
	INVALID_SCHEMA_DEFINITION: '42P15',
	INVALID_TABLE_DEFINITION: '42P16',
	INVALID_OBJECT_DEFINITION: '42P17',
	// Classe 44 — Violação de CHECK OPTION
	// Class 44 — WITH CHECK OPTION Violation
	WITH_CHECK_OPTION_VIOLATION: '44000',
	// Classe 53 — Recursos Insuficientes
	// Class 53 — Insufficient Resources
	INSUFFICIENT_RESOURCES: '53000',
	DISK_FULL: '53100',
	OUT_OF_MEMORY: '53200',
	TOO_MANY_CONNECTIONS: '53300',
	CONFIGURATION_LIMIT_EXCEEDED: '53400',
	// Classe 54 — Limite de Programa Excedido
	// Class 54 — Program Limit Exceeded
	PROGRAM_LIMIT_EXCEEDED: '54000',
	STATEMENT_TOO_COMPLEX: '54001',
	TOO_MANY_COLUMNS: '54011',
	TOO_MANY_ARGUMENTS: '54023',
	// Classe 55 — Objeto Não presente no Estado de Pré-requisito
	// Class 55 — Object Not In Prerequisite State
	OBJECT_NOT_IN_PREREQUISITE_STATE: '55000',
	OBJECT_IN_USE: '55006',
	CANT_CHANGE_RUNTIME_PARAM: '55P02',
	LOCK_NOT_AVAILABLE: '55P03',
	// Classe 57 — Intervenção do Operador
	// Class 57 — Operator Intervention
	OPERATOR_INTERVENTION: '57000',
	QUERY_CANCELED: '57014',
	ADMIN_SHUTDOWN: '57P01',
	CRASH_SHUTDOWN: '57P02',
	CANNOT_CONNECT_NOW: '57P03',
	DATABASE_DROPPED: '57P04',
	// Classe 58 — Erro do Sistema (erros externos errors external referidos ao PostgreSQL)
	// Class 58 — System Error (errors external to PostgreSQL itself)
	SYSTEM_ERROR: '58000',
	IO_ERROR: '58030',
	UNDEFINED_FILE: '58P01',
	DUPLICATE_FILE: '58P02',
	// Classe F0 — Erro do Arquivo de Configuração
	// Class F0 — Configuration File Error
	CONFIG_FILE_ERROR: 'F0000',
	LOCK_FILE_EXISTS: 'F0001',
	// Classe HV — Erro de Foreign Data Wrapper (SQL/MED)
	// Class HV — Foreign Data Wrapper Error (SQL/MED)
	FDW_ERROR: 'HV000',
	FDW_COLUMN_NAME_NOT_FOUND: 'HV005',
	FDW_DYNAMIC_PARAMETER_VALUE_NEEDED: 'HV002',
	FDW_FUNCTION_SEQUENCE_ERROR: 'HV010',
	FDW_INCONSISTENT_DESCRIPTOR_INFORMATION: 'HV021',
	FDW_INVALID_ATTRIBUTE_VALUE: 'HV024',
	FDW_INVALID_COLUMN_NAME: 'HV007',
	FDW_INVALID_COLUMN_NUMBER: 'HV008',
	FDW_INVALID_DATA_TYPE: 'HV004',
	FDW_INVALID_DATA_TYPE_DESCRIPTORS: 'HV006',
	FDW_INVALID_DESCRIPTOR_FIELD_IDENTIFIER: 'HV091',
	FDW_INVALID_HANDLE: 'HV00B',
	FDW_INVALID_OPTION_INDEX: 'HV00C',
	FDW_INVALID_OPTION_NAME: 'HV00D',
	FDW_INVALID_STRING_LENGTH_OR_BUFFER_LENGTH: 'HV090',
	FDW_INVALID_STRING_FORMAT: 'HV00A',
	FDW_INVALID_USE_OF_NULL_POINTER: 'HV009',
	FDW_TOO_MANY_HANDLES: 'HV014',
	FDW_OUT_OF_MEMORY: 'HV001',
	FDW_NO_SCHEMAS: 'HV00P',
	FDW_OPTION_NAME_NOT_FOUND: 'HV00J',
	FDW_REPLY_HANDLE: 'HV00K',
	FDW_SCHEMA_NOT_FOUND: 'HV00Q',
	FDW_TABLE_NOT_FOUND: 'HV00R',
	FDW_UNABLE_TO_CREATE_EXECUTION: 'HV00L',
	FDW_UNABLE_TO_CREATE_REPLY: 'HV00M',
	FDW_UNABLE_TO_ESTABLISH_CONNECTION: 'HV00N',
	// Classe P0 — Erro de PL/pgSQL
	// Class P0 — PL/pgSQL Error
	PLPGSQL_ERROR: 'P0000',
	RAISE_EXCEPTION: 'P0001',
	NO_DATA_FOUND: 'P0002',
	TOO_MANY_ROWS: 'P0003',
	// Classe XX — Erro Interno
	// Class XX — Internal Error
	INTERNAL_ERROR: 'XX000',
	DATA_CORRUPTED: 'XX001',
	INDEX_CORRUPTED: 'XX002',
};

exports.languagePostgreSQLStatus = languagePostgreSQLStatus;