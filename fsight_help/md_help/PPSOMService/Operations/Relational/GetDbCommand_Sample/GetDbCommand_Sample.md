# Получение информации о структуре SQL-объекта: Операция GetDbCommand

Получение информации о структуре SQL-объекта: Операция GetDbCommand
-


**


# Получение информации о структуре SQL-объекта


Ниже приведен пример использования операции [GetDbCommand](../GetDbCommand.htm)
 для получения информации о тексте SQL-запроса и структуре полей набора
 данных, который возвращается при выполнении запроса. В запросе передается
 моникёр открытого экземпляра SQL-объекта и шаблон, указывающий необходимость
 получить данную информацию. В ответе приходит запрошенная информация.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<GetDbCommand xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tDbCommand xmlns="****">
  <id>KBCFEJFKABODGOAEODNPLELCGJNJEMEEKKAKMINPLIABGDLF!M!S!MKMLJCMFKABODGOAELEAAIAKKFADKILKEJLMIMPHCMKJAKDKO</id>  </tDbCommand>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<pattern>
  <obInst>true</obInst>  <parsOwnDefVals>true</parsOwnDefVals>  <text>true</text>  <fields>Get</fields>  </pattern>
  </tArg>
  </GetDbCommand>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<GetDbCommandResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>KBCFEJFKABODGOAEODNPLELCGJNJEMEEKKAKMINPLIABGDLF!M!S!MKMLJCMFKABODGOAELEAAIAKKFADKILKEJLMIMPHCMKJAKDKO</id>  </id>
[![](../../../minus.gif)](../../../#)<meta xmlns="****">
[![](../../../minus.gif)](../../../#)<obInst>
[![](../../../minus.gif)](../../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**14**" hf="**0**">
  <i>T_QUERY</i>  <n>Query</n>  <k>9051</k>  <c>770</c>  <p>9050</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  </obInst>
  <dirty>0</dirty>  <type>Query</type>[![](../../../minus.gif)](../../../#)<text>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <driverID>ORCL8</driverID>  <driverName>Oracle</driverName>  <sqlText />
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <driverID>MSSQL2012</driverID>  <driverName>Microsoft SQL Server</driverName>  <sqlText>SELECT * FROM T_COUNTRY</sqlText>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <driverID>MSSQL2012ODBC</driverID>  <driverName>Microsoft SQL Server (ODBC)</driverName>  <sqlText>SELECT * FROM T_COUNTRY</sqlText>  </it>
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
  <sqlText>SELECT * FROM T_COUNTRY</sqlText>  </text>
[![](../../../minus.gif)](../../../#)<fields>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>5</k>  <id>ISO_CODE</id>  <n>ISO_CODE</n>  <vis>1</vis>  <dt>1</dt>  <size>255</size>  <precision>0</precision>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>6</k>  <id>NAME</id>  <n>NAME</n>  <vis>1</vis>  <dt>1</dt>  <size>255</size>  <precision>0</precision>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>7</k>  <id>POPULATION</id>  <n>POPULATION</n>  <vis>1</vis>  <dt>3</dt>  <size>22</size>  <precision>2</precision>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>8</k>  <id>AREA</id>  <n>AREA</n>  <vis>1</vis>  <dt>3</dt>  <size>22</size>  <precision>2</precision>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>9</k>  <id>CURRENCY</id>  <n>CURRENCY</n>  <vis>1</vis>  <dt>1</dt>  <size>255</size>  <precision>0</precision>  </it>
  </its>
  </fields>
  </meta>
  </GetDbCommandResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetDbCommand" :
  {
   "tDbCommand" :
    {
     "id" : "KBCFEJFKABODGOAEODNPLELCGJNJEMEEKKAKMINPLIABGDLF!M!S!MKMLJCMFKABODGOAELEAAIAKKFADKILKEJLMIMPHCMKJAKDKO"
    },
   "tArg" :
    {
     "pattern" :
      {
       "obInst" : "true",
       "parsOwnDefVals" : "true",
       "text" : "true",
       "fields" : "Get"
      }
    }
  }
}

### JSON-ответ:


{
 "GetDbCommandResult" :
  {
   "id" :
    {
     "id" : "KBCFEJFKABODGOAEODNPLELCGJNJEMEEKKAKMINPLIABGDLF!M!S!MKMLJCMFKABODGOAELEAAIAKKFADKILKEJLMIMPHCMKJAKDKO"
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
         "@ver" : "14",
         "@hf" : "0",
         "i" : "T_QUERY",
         "n" : "Query",
         "k" : "9051",
         "c" : "770",
         "p" : "9050",
         "h" : "0",
         "hasPrv" : "0",
         "ic" : "0",
         "trackElementDependents" : "0",
         "isPermanent" : "1",
         "isTemp" : "0"
        }
      },
     "dirty" : "0",
     "type" : "Query",
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
             "sqlText" : "SELECT * FROM T_COUNTRY"
            },
            {
             "driverID" : "MSSQL2012ODBC",
             "driverName" : "Microsoft SQL Server (ODBC)",
             "sqlText" : "SELECT * FROM T_COUNTRY"
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
       "sqlText" : "SELECT * FROM T_COUNTRY"
      },
     "fields" :
      {
       "its" :
        {
         "it" :
          [
            {
             "k" : "5",
             "id" : "ISO_CODE",
             "n" : "ISO_CODE",
             "vis" : "1",
             "dt" : "1",
             "size" : "255",
             "precision" : "0"
            },
            {
             "k" : "6",
             "id" : "NAME",
             "n" : "NAME",
             "vis" : "1",
             "dt" : "1",
             "size" : "255",
             "precision" : "0"
            },
            {
             "k" : "7",
             "id" : "POPULATION",
             "n" : "POPULATION",
             "vis" : "1",
             "dt" : "3",
             "size" : "22",
             "precision" : "2"
            },
            {
             "k" : "8",
             "id" : "AREA",
             "n" : "AREA",
             "vis" : "1",
             "dt" : "3",
             "size" : "22",
             "precision" : "2"
            },
            {
             "k" : "9",
             "id" : "CURRENCY",
             "n" : "CURRENCY",
             "vis" : "1",
             "dt" : "1",
             "size" : "255",
             "precision" : "0"
            }
          ]
        }
      }
    }
  }
}


public static GetDbCommandResult GetSQLObjectParameters(DbCommandId moniker)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetDbCommand()
    {
        tArg = new GetDbCommandArg()
        {
            pattern = new DbCommandMdPattern()
            {
                fields = ListOperation.Get,
                text = true
            }
        },
        tDbCommand = moniker
    };
    // Получение параметров
    var tResult = somClient.GetDbCommand(tGet);
    return tResult;
}


См. также:


[GetDbCommand](../GetDbCommand.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
