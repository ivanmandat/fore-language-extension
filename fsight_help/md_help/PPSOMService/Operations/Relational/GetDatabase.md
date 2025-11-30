# GetDatabase: Операция

GetDatabase: Операция
-


**


# GetDatabase


## Синтаксис


DatabaseResult GetDatabase(OdId tOb, GetDatabaseArg
 tArg)


## Параметры


tOb. Моникёр
 базы данных.


tArg. Параметры выполнения
 операции.


## Описание


Операция GetDatabase извлекает
 метаданные базы данных.


## Комментарии


Операция позволяет получить параметры подключения к серверу базы данных
 и список таблиц, созданных в базе данных. Для выполнения операции укажите
 в поле tOb моникёр открытого экземпляра
 базы данных, а в поле tArg параметры
 извлечения метаданных. Моникёр может быть получен при выполнении операции
 [OpenDatabase](OpenDatabase.htm).
 Результатом операции будут запрошенные метаданные.


## Пример


Пример получения информации о параметрах подключения к серверу, которые
 заданы для базы данных. В запросе передается моникёр открытого экземпляра
 базы данных и шаблон, указывающий необходимость получить данную информацию.
 В ответе приходит запрошенная информация.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetDatabase xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tOb xmlns="****">
  <id>S1!M!S!DB4</id>  </tOb>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<metaGet>
  <obInst>true</obInst>  <connectionParams>true</connectionParams>  </metaGet>
  </tArg>
  </GetDatabase>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetDatabaseResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>S1!M!S!DB4</id>  </id>
[![](../../minus.gif)](../../#)<meta xmlns="****">
[![](../../minus.gif)](../../#)<obInst>
[![](../../minus.gif)](../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**23**" hf="**0**">
  <i>DB_DATA</i>  <n>База данных</n>  <k>174189</k>  <c>513</c>  <p>9050</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  </obInst>
  <dirty>0</dirty>[![](../../minus.gif)](../../#)<connectionParams>
  <useMetabaseLogonData>0</useMetabaseLogonData>  <user />
  <pass />
[![](../../minus.gif)](../../#)<logonDataExt>
  <driver>MSSQL2012</driver>  <server>%METABASE_SERVER%</server>  <database>%METABASE_DATABASE%</database>  <schema>dbo</schema>  <unicode>1</unicode>  <authentication>Password</authentication>  <caseSensitive>0</caseSensitive>[![](../../minus.gif)](../../#)<logonTask>
  <subName />
  </logonTask>
  <webServiceLogon>0</webServiceLogon>  </logonDataExt>
  <useUnicode>1</useUnicode>  <loginPrompt>1</loginPrompt>  <useMetabaseCredentials>0</useMetabaseCredentials>  <useApplicationRole>0</useApplicationRole>  <supportDecimal>0</supportDecimal>  <supportBinaryProtocol>1</supportBinaryProtocol>  </connectionParams>
  </meta>
  </GetDatabaseResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetDatabase" :
  {
   "tOb" :
    {
     "id" : "S1!M!S!DB4"
    },
   "tArg" :
    {
     "metaGet" :
      {
       "obInst" : "true",
       "connectionParams" : "true"
      }
    }
  }
}

### JSON-ответ:


{
 "GetDatabaseResult" :
  {
   "id" :
    {
     "id" : "S1!M!S!DB4"
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
         "@ver" : "23",
         "@hf" : "0",
         "i" : "DB_DATA",
         "n" : "База данных",
         "k" : "174189",
         "c" : "513",
         "p" : "9050",
         "h" : "0",
         "hasPrv" : "0",
         "ic" : "0",
         "isPermanent" : "1",
         "isTemp" : "0"
        }
      },
     "dirty" : "0",
     "connectionParams" :
      {
       "useMetabaseLogonData" : "0",
       "user" : "",
       "pass" : "",
       "logonDataExt" :
        {
         "driver" : "MSSQL2012",
         "server" : "%METABASE_SERVER%",
         "database" : "%METABASE_DATABASE%",
         "schema" : "dbo",
         "unicode" : "1",
         "authentication" : "Password",
         "caseSensitive" : "0",
         "logonTask" :
          {
           "subName" : ""
          },
         "webServiceLogon" : "0"
        },
       "useUnicode" : "1",
       "loginPrompt" : "1",
       "useMetabaseCredentials" : "0",
       "useApplicationRole" : "0",
       "supportDecimal" : "0",
       "supportBinaryProtocol" : "1"
      }
    }
  }
}


public static DatabaseResult GetDBMetadata(string moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tGet = new GetDatabase()
    {
        tArg = new GetDatabaseArg()
        {
            metaGet = new DatabaseMdPattern()
            {
                connectionParams = true
            }
        },
        tOb = new OdId() { id = moniker }
    };
    //Получение метаданных
    var tResult = somClient.GetDatabase(tGet);
    return tResult;
}


См. также:


[Работа
 с реляционными объектами репозитория](RelationalDB_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
