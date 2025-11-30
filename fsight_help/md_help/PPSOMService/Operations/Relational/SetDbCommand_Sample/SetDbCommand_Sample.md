# Изменение параметров SQL-объекта: Операция SetDbCommand

Изменение параметров SQL-объекта: Операция SetDbCommand
-


**


# Изменение параметров SQL-объекта


Ниже приведен пример использования операции [SetDbCommand](../SetDbCommand.htm)
 для изменения текста запроса и задания параметров для команды СУБД. В
 запросе передается моникёр открытого экземпляра команды СУБД, обновленные
 метаданные и шаблон, указывающий необходимость изменить запрос и параметры.
 В ответе приходит обновленная информация о метаданных команды СУБД. Для
 сохранения примененных изменений после операции [SetDbCommand](../SetDbCommand.htm)
 также необходимо выполнить операцию [SaveObject](../../Repository/SaveObject.htm)
 или [SaveObjectAs](../../Repository/SaveObjectAs.htm).


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<SetDbCommand xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tDbCommand xmlns="****">
  <id>KBCFEJFKABODGOAEODNPLELCGJNJEMEEKKAKMINPLIABGDLF!M!S!MBOKHEBGKABODGOAEKAMLBBHAHOGBCFHEHKLDMOFJPAMIIFNK</id>  </tDbCommand>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<pattern>
  <obInst>true</obInst>  <parsOwnDefVals>true</parsOwnDefVals>  <text>true</text>  <openArgs>true</openArgs>  </pattern>
[![](../../../minus.gif)](../../../#)<meta>
  <type>Command</type>[![](../../../minus.gif)](../../../#)<text>
  <sqlText>Insert Into T_COUNTRY (ISO_CODE, NAME) values (:ISO_CODE, :NAME)</sqlText>  </text>
[![](../../../minus.gif)](../../../#)<openArgs>
[![](../../../minus.gif)](../../../#)<args>
[![](../../../minus.gif)](../../../#)<it>
  <k>-1</k>  <id>ISO_CODE</id>  <n>ISO_CODE</n>  <vis>true</vis>  <value>CA</value>  <dt>1</dt>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>-1</k>  <id>NAME</id>  <n>NAME</n>  <vis>true</vis>  <value>Canada</value>  <dt>1</dt>  </it>
  </args>
  </openArgs>
  </meta>
[![](../../../minus.gif)](../../../#)<metaGet>
  <obInst>true</obInst>  <parsOwnDefVals>true</parsOwnDefVals>  <text>true</text>  <openArgs>true</openArgs>  </metaGet>
  </tArg>
  </SetDbCommand>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<SetDbCommandResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>KBCFEJFKABODGOAEODNPLELCGJNJEMEEKKAKMINPLIABGDLF!M!S!MBOKHEBGKABODGOAEKAMLBBHAHOGBCFHEHKLDMOFJPAMIIFNK</id>  </id>
[![](../../../minus.gif)](../../../#)<meta xmlns="****">
[![](../../../minus.gif)](../../../#)<obInst>
[![](../../../minus.gif)](../../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**1**" hf="**0**">
  <i>OBJ9054</i>  <n>Команда СУБД</n>  <k>9054</k>  <c>3841</c>  <p>9050</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  </obInst>
  <dirty>1</dirty>  <type>Command</type>[![](../../../minus.gif)](../../../#)<text>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <driverID>ORCL8</driverID>  <driverName>Oracle</driverName>  <sqlText />
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <driverID>MSSQL2012</driverID>  <driverName>Microsoft SQL Server</driverName>  <sqlText>Insert Into T_COUNTRY (ISO_CODE, NAME) values (:ISO_CODE, :NAME)</sqlText>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <driverID>MSSQL2012ODBC</driverID>  <driverName>Microsoft SQL Server (ODBC)</driverName>  <sqlText>Insert Into T_COUNTRY (ISO_CODE, NAME) values (:ISO_CODE, :NAME)</sqlText>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <driverID>ODBC(CLICKHOUSE)</driverID>  <driverName>ClickHouse (ODBC)</driverName>  <sqlText />
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <driverID>ODBC</driverID>  <driverName>Generic ODBC</driverName>  <sqlText />
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <driverID>OLEDB(ODBC HIVE)</driverID>  <driverName>OLE DB(ODBC HIVE)</driverName>  <sqlText />
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <driverID>OLEDB(ODBC)</driverID>  <driverName>OLE DB(ODBC)</driverName>  <sqlText />
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <driverID>OLEDB</driverID>  <driverName>OLE DB</driverName>  <sqlText />
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <driverID>POSTGRES(NO_LO)</driverID>  <driverName>Greenplum/Pivotal HD Hawq</driverName>  <sqlText />
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <driverID>POSTGRES</driverID>  <driverName>PostgreSQL</driverName>  <sqlText />
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <driverID>SQLITE</driverID>  <driverName>SQLite</driverName>  <sqlText />
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <driverID>WSF</driverID>  <driverName>WEB Service</driverName>  <sqlText />
  </it>
  </its>
  <sqlText>Insert Into T_COUNTRY (ISO_CODE, NAME) values (:ISO_CODE, :NAME)</sqlText>  </text>
[![](../../../minus.gif)](../../../#)<openArgs>
[![](../../../minus.gif)](../../../#)<args>
[![](../../../minus.gif)](../../../#)<it>
  <k>1</k>  <id>ISO_CODE</id>  <n>ISO_CODE</n>  <vis>1</vis>  <value>CA</value>  <dt>1</dt>  <binding>UI="EditBox"</binding>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>2</k>  <id>NAME</id>  <n>NAME</n>  <vis>1</vis>  <value>Canada</value>  <dt>1</dt>  <binding>UI="EditBox"</binding>  </it>
  </args>
  </openArgs>
  </meta>
  </SetDbCommandResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetDbCommand" :
  {
   "tDbCommand" :
    {
     "id" : "KBCFEJFKABODGOAEODNPLELCGJNJEMEEKKAKMINPLIABGDLF!M!S!MBOKHEBGKABODGOAEKAMLBBHAHOGBCFHEHKLDMOFJPAMIIFNK"
    },
   "tArg" :
    {
     "pattern" :
      {
       "obInst" : "true",
       "parsOwnDefVals" : "true",
       "text" : "true",
       "openArgs" : "true"
      },
     "meta" :
      {
       "type" : "Command",
       "text" :
        {
         "sqlText" : "Insert Into T_COUNTRY (ISO_CODE, NAME) values (:ISO_CODE, :NAME)"
        },
       "openArgs" :
        {
         "args" :
          {
           "it" :
            [
              {
               "k" : "-1",
               "id" : "ISO_CODE",
               "n" : "ISO_CODE",
               "vis" : "true",
               "value" : "CA",
               "dt" : "1"
              },
              {
               "k" : "-1",
               "id" : "NAME",
               "n" : "NAME",
               "vis" : "true",
               "value" : "Canada",
               "dt" : "1"
              }
            ]
          }
        }
      },
     "metaGet" :
      {
       "obInst" : "true",
       "parsOwnDefVals" : "true",
       "text" : "true",
       "openArgs" : "true"
      }
    }
  }
}

### JSON-ответ:


{
 "SetDbCommandResult" :
  {
   "id" :
    {
     "id" : "KBCFEJFKABODGOAEODNPLELCGJNJEMEEKKAKMINPLIABGDLF!M!S!MBOKHEBGKABODGOAEKAMLBBHAHOGBCFHEHKLDMOFJPAMIIFNK"
    },
   "meta" :
    {
     "obInst" :
      {
       "obDesc" :
        {
         "@ds" : "",
         "@isShortcut" : "0",
         "@isLink" : "0",
         "@ver" : "1",
         "@hf" : "0",
         "i" : "OBJ9054",
         "n" : "Команда СУБД",
         "k" : "9054",
         "c" : "3841",
         "p" : "9050",
         "h" : "0",
         "hasPrv" : "0",
         "ic" : "0",
         "trackElementDependents" : "0",
         "isPermanent" : "1",
         "isTemp" : "0"
        }
      },
     "dirty" : "1",
     "type" : "Command",
     "text" :
      {
       "its" :
        {
         "it" :
          [
            {
             "driverID" : "ORCL8",
             "driverName" : "Oracle",
             "sqlText" : ""
            },
            {
             "driverID" : "MSSQL2012",
             "driverName" : "Microsoft SQL Server",
             "sqlText" : "Insert Into T_COUNTRY (ISO_CODE, NAME) values (:ISO_CODE, :NAME)"
            },
            {
             "driverID" : "MSSQL2012ODBC",
             "driverName" : "Microsoft SQL Server (ODBC)",
             "sqlText" : "Insert Into T_COUNTRY (ISO_CODE, NAME) values (:ISO_CODE, :NAME)"
            },
            {
             "driverID" : "ODBC(CLICKHOUSE)",
             "driverName" : "ClickHouse (ODBC)",
             "sqlText" : ""
            },
            {
             "driverID" : "ODBC",
             "driverName" : "Generic ODBC",
             "sqlText" : ""
            },
            {
             "driverID" : "OLEDB(ODBC HIVE)",
             "driverName" : "OLE DB(ODBC HIVE)",
             "sqlText" : ""
            },
            {
             "driverID" : "OLEDB(ODBC)",
             "driverName" : "OLE DB(ODBC)",
             "sqlText" : ""
            },
            {
             "driverID" : "OLEDB",
             "driverName" : "OLE DB",
             "sqlText" : ""
            },
            {
             "driverID" : "POSTGRES(NO_LO)",
             "driverName" : "Greenplum\/Pivotal HD Hawq",
             "sqlText" : ""
            },
            {
             "driverID" : "POSTGRES",
             "driverName" : "PostgreSQL",
             "sqlText" : ""
            },
            {
             "driverID" : "SQLITE",
             "driverName" : "SQLite",
             "sqlText" : ""
            },
            {
             "driverID" : "WSF",
             "driverName" : "WEB Service",
             "sqlText" : ""
            }
          ]
        },
       "sqlText" : "Insert Into T_COUNTRY (ISO_CODE, NAME) values (:ISO_CODE, :NAME)"
      },
     "openArgs" :
      {
       "args" :
        {
         "it" :
          [
            {
             "k" : "1",
             "id" : "ISO_CODE",
             "n" : "ISO_CODE",
             "vis" : "1",
             "value" : "CA",
             "dt" : "1",
             "binding" : "UI="EditBox""
            },
            {
             "k" : "2",
             "id" : "NAME",
             "n" : "NAME",
             "vis" : "1",
             "value" : "Canada",
             "dt" : "1",
             "binding" : "UI="EditBox""
            }
          ]
        }
      }
    }
  }
}


public static SetDbCommandResult ChangeSQLObjectParameters(DbCommandId moniker)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tSet = new SetDbCommand()
    {
        tArg = new SetDbCommandArg()
        {
            pattern = new DbCommandMdPattern()
            {
                text = true,
                openArgs = true
            },
            meta = new DbCommandMd()
            {
                type = DbCommandType.Command,
                text = new DbCommandText()
                {
                    sqlText = "Insert Into T_COUNTRY (ISO_CODE, NAME) values (:ISO_CODE, :NAME)"
                },
                openArgs = new OdOpenArgs
                {
                    args = new OdArg[]
                    {
                        new OdArg
                        {
                            k = uint.MaxValue,
                            id = "ISO_CODE",
                            n = "ISO_CODE",
                            dt = 1, //DbDataType.String
                            vis = true,
                            value = "CA"
                        },
                        new OdArg
                        {
                            k = uint.MaxValue,
                            id = "NAME",
                            n = "NAME",
                            dt = 1, //DbDataType.String
                            vis = true,
                            value = "Canada"
                        }
                    }
                }
            },
            metaGet = new DbCommandMdPattern()
            {
                text = true,
                openArgs = true
            }
        },
        tDbCommand = moniker
    };
    // Изменение параметров
    var tResult = somClient.SetDbCommand(tSet);
    return tResult;
}


См. также:


[SetDbCommand](../SetDbCommand.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
