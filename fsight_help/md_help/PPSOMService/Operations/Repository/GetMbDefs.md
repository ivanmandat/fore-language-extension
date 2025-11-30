# GetMbDefs: Операция

GetMbDefs: Операция
-


**


# GetMbDefs


## Синтаксис


MbDefsResult GetMbDefs(GetMbDefsArg tArg)


## Параметры


tArg. Параметры выполнения
 операции.


## Описание


Операция GetMbDefs получает
 список описаний репозиториев, созданных на BI-сервере.


## Комментарии


Операция позволяет получить список описаний репозиториев, к которым
 в дальнейшем может осуществляться подключение. Для выполнения операции
 задайте в поле tArg.pattern шаблон,
 в соответствии с которым будет получен список описаний.


Результатом выполнения операции будет полученный список описаний репозиториев.
 Для подключения к репозиторию используйте операцию [OpenMetabase](OpenMetabase.htm).


## Пример


Ниже приведён пример получения настроек описания репозитория. В запросе
 передаётся идентификатор описания репозитория. В ответе возвращаются все
 настройки, полученные для этого описания.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetMbDefs xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<pattern>
  <mbDefs>Get</mbDefs>  <logonData>true</logonData>[![](../../minus.gif)](../../#)<filter>
  <id>WAREHOUSE</id>  </filter>
  </pattern>
  </tArg>
  </GetMbDefs>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetMbDefsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<meta xmlns="****">
  <accessMode>1</accessMode>[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <id>WAREHOUSE</id>  <n>Warehouse</n>  <k>4294967293</k>  <scope>LocalMachine</scope>[![](../../minus.gif)](../../#)<logonData>
  <driver>MSSQL2012</driver>  <server>TestServer</server>  <database>TestRepository</database>  <schema>dbo</schema>  <unicode>1</unicode>  <authentication>Password</authentication>  <locale>0</locale>  <deferredLoading>0</deferredLoading>  <caseSensitive>0</caseSensitive>  <fileGroup>PRIMARY</fileGroup>  <ODBCParams />
  </logonData>
  </it>
  </its>
  </meta>
  </GetMbDefsResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetMbDefs" :
  {
   "tArg" :
    {
     "pattern" :
      {
       "mbDefs" : "Get",
       "logonData" : "true",
       "filter" :
        {
         "id" : "WAREHOUSE"
        }
      }
    }
  }
}

### JSON-ответ:


{
 "GetMbDefsResult" :
  {
   "meta" :
    {
     "accessMode" : "1",
     "its" :
      {
       "it" :
        [
          {
           "id" : "WAREHOUSE",
           "n" : "Warehouse",
           "k" : "4294967293",
           "scope" : "LocalMachine",
           "logonData" :
            {
             "driver" : "MSSQL2012",
             "server" : "TestServer",
             "database" : "TestRepository",
             "schema" : "dbo",
             "unicode" : "1",
             "authentication" : "Password",
             "locale" : "0",
             "deferredLoading" : "0",
             "caseSensitive" : "0",
             "fileGroup" : "PRIMARY",
             "ODBCParams" : ""
            }
          }
        ]
      }
    }
  }
}


public static MbDefsResult GetDefinition(string defId)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tGet = new GetMbDefs()
    {
        tArg = new GetMbDefsArg()
        {
            pattern = new MbDefsPattern()
            {
                mbDefs = ListOperation.Get,
                logonData = true,
                filter = new MbDefsFilter()
                {
                    id = defId
                }
            }
        }
    };
    // Получение информации об описании репозитория
    var result = somClient.GetMbDefs(tGet);
    return result;
}


См. также:


[Работа
 с репозиторием](Repository_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
