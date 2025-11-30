# SetDatabase: Операция

SetDatabase: Операция
-


**


# SetDatabase


## Синтаксис


DatabaseResult SetDatabase(OdId tOb, SetDatabaseArg
 tArg)


## Параметры


tOb. Моникёр
 базы данных.


tArg. Параметры выполнения
 операции.


## Описание


Операция SetDatabase изменяет
 метаданные базы данных.


## Комментарии


Операция позволяет изменить параметры подключения к серверу базы данных.
 База данных должна быть открыта на редактирование. Для выполнения операции
 укажите в поле tOb моникёр открытого
 экземпляра базы данных, а в поле tArg.meta
 обновлённые метаданных, которые необходимо применить. Моникёр может быть
 получен при выполнении операции [OpenDatabase](OpenDatabase.htm).
 Сохранение изменений осуществляется автоматически при выполнении операции.
 Результатом операции являются обновлённые метаданные базы данных.


## Пример


Пример изменения параметров подключения к серверу БД. В запросе передается
 моникёр открытого экземпляра базы данных и значения параметров, которые
 необходимо установить (автоматическое подключение и использование учётных
 данных, указанных при подключении к репозиторию). В ответе приходят обновлённые
 метаданные.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetDatabase xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tOb xmlns="****">
  <id>S1!M!S!DB4</id>  </tOb>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<meta>
[![](../../minus.gif)](../../#)<connectionParams>
  <loginPrompt>false</loginPrompt>  <useMetabaseCredentials>true</useMetabaseCredentials>  </connectionParams>
  </meta>
  </tArg>
  </SetDatabase>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<SetDatabaseResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>S1!M!S!DB4</id>  </id>
[![](../../minus.gif)](../../#)<meta xmlns="****">
[![](../../minus.gif)](../../#)<obInst>
[![](../../minus.gif)](../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**24**" hf="**0**">
  <i>DB_DATA</i>  <n>База данных</n>  <k>174189</k>  <c>513</c>  <p>9050</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  </obInst>
  <dirty>0</dirty>[![](../../minus.gif)](../../#)<connectionParams>
  <useMetabaseLogonData>0</useMetabaseLogonData>  <user>sa</user>  <pass>Qwerty1</pass>[![](../../minus.gif)](../../#)<logonDataExt>
  <driver>MSSQL2012</driver>  <server>%METABASE_SERVER%</server>  <database>%METABASE_DATABASE%</database>  <schema>dbo</schema>  <unicode>1</unicode>  <authentication>Password</authentication>  <caseSensitive>0</caseSensitive>[![](../../minus.gif)](../../#)<logonTask>
  <subName />
  </logonTask>
  <webServiceLogon>0</webServiceLogon>  </logonDataExt>
  <useUnicode>1</useUnicode>  <loginPrompt>0</loginPrompt>  <useMetabaseCredentials>1</useMetabaseCredentials>  <autoAdjustRights>0</autoAdjustRights>  <useApplicationRole>0</useApplicationRole>  <supportDecimal>0</supportDecimal>  <supportBinaryProtocol>1</supportBinaryProtocol>  </connectionParams>
  </meta>
  </SetDatabaseResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetDatabase" :
  {
   "tOb" :
    {
     "id" : "S1!M!S!DB4"
    },
   "tArg" :
    {
     "meta" :
      {
       "connectionParams" :
        {
         "loginPrompt" : "false",
         "useMetabaseCredentials" : "true"
        }
      }
    }
  }
}

### JSON-ответ:


{
 "SetDatabaseResult" :
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
         "@ver" : "24",
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
       "user" : "sa",
       "pass" : "Qwerty1",
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
       "loginPrompt" : "0",
       "useMetabaseCredentials" : "1",
       "autoAdjustRights" : "0",
       "useApplicationRole" : "0",
       "supportDecimal" : "0",
       "supportBinaryProtocol" : "1"
      }
    }
  }
}


public static DatabaseResult ChangeDatabase(string moniker, bool loginPromptValue, bool useMetabaseCredentialsValue)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tSet = new SetDatabase()
    {
        tArg = new SetDatabaseArg()
        {
            meta = new DatabaseMd()
            {
                connectionParams = new ConnectionParams()
                {
                    loginPrompt = loginPromptValue,
                    useMetabaseCredentials = useMetabaseCredentialsValue
                }
            }
        },
        tOb = new OdId() { id = moniker }
    };
    //Изменение параметров
    var tResult = somClient.SetDatabase(tSet);
    return tResult;
}


См. также:


[Работа
 с реляционными объектами репозитория](RelationalDB_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
