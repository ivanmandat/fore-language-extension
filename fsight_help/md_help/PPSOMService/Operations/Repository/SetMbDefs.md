# SetMbDefs: Операция

SetMbDefs: Операция
-


**


# SetMbDefs


## Синтаксис


MbDefsResult SetMbDefs(SetMbDefsArg tArg)


## Параметры


tArg. Параметры выполнения
 операции.


## Описание


Операция SetMbDefs изменяет
 список описаний репозиториев, созданных на BI-сервере.


## Комментарии


Операция позволяет создать новые или изменить существующие описания
 репозиториев.


Для выполнения операции задайте в поле tArg.pattern
 шаблон, в соответствии с которым будет изменён список описаний, а в поле
 tArg.meta обновлённые параметры
 описаний репозиториев. Если осуществляется изменение существующих описаний,
 то поиск и сравнение описаний на BI-сервере будет производиться по внутренним
 ключам, которые задаются в поле «k» каждого описания.


Результатом операции будет обновлённый список описаний репозиториев,
 если было определено поле tArg.metaGet.


## Пример


Ниже приведён пример изменения описания репозитория. В запросе передаётся
 обновлённое описание и выполняемое действие. В ответе никакой дополнительной
 информации не приходит.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetMbDefs xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<pattern>
  <mbDefs>Change</mbDefs>  </pattern>
[![](../../minus.gif)](../../#)<meta>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <id>WAREHOUSE</id>  <n>Warehouse</n>  <k>4294967293</k>  <scope>LocalMachine</scope>[![](../../minus.gif)](../../#)<logonData>
  <driver>MSSQL2012</driver>  <server>TestServer</server>  <database>TestRepository</database>  <schema>dbo</schema>  <unicode>1</unicode>  <authentication>Password</authentication>  <locale>0</locale>  <deferredLoading>false</deferredLoading>  <caseSensitive>false</caseSensitive>  <fileGroup>PRIMARY</fileGroup>  <ODBCParams />
  </logonData>
  </it>
  </its>
  </meta>
  </tArg>
  </SetMbDefs>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <SetMbDefsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" />
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetMbDefs" :
  {
   "tArg" :
    {
     "pattern" :
      {
       "mbDefs" : "Change"
      },
     "meta" :
      {
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
               "deferredLoading" : "false",
               "caseSensitive" : "false",
               "fileGroup" : "PRIMARY",
               "ODBCParams" : ""
              }
            }
          ]
        }
      }
    }
  }
}

### JSON-ответ:


{
 "SetMbDefsResult" : ""
}


public static MbDefsResult ChangeDefinition(MbDef definition)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tSet = new SetMbDefs()
    {
        tArg = new SetMbDefsArg()
        {
            pattern = new MbDefsPattern()
            {
                mbDefs = ListOperation.Change
            },
            meta = new MbDefs()
            {
                its = new MbDef[]
                {
                    definition
                }
            }
        }
    };
    // Изменение описания репозитория
    var result = somClient.SetMbDefs(tSet);
    return result;
}


См. также:


[Работа
 с репозиторием](Repository_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
