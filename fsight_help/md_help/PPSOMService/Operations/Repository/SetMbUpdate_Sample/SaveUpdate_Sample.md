# Сохранение обновления в файл: Операция SetMbUpdate

Сохранение обновления в файл: Операция SetMbUpdate
-


**


# Сохранение обновления в файл


Ниже приведён пример использования операции [SetMbUpdate](../SetMbUpdate.htm)
 для сохранения обновления в файл. В запросе передаётся моникёр обновления
 и команда на сохранение. В ответе приходит моникёр полученного файла.
 В дальнейшем полученный моникёр может использоваться для [загрузки
 обновления](LoadUpdate_Sample.htm) из файла.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<SetMbUpdate xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tMbUpdate xmlns="****">
  <id>S1!M!S!MbUpd1</id>  </tMbUpdate>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<pattern>
  <execute>true</execute>  </pattern>
[![](../../../minus.gif)](../../../#)<meta>
[![](../../../minus.gif)](../../../#)<execute>
  <command>Save</command>  <async>false</async>[![](../../../minus.gif)](../../../#)<saveToFile>
  <newFormat>true</newFormat>  </saveToFile>
  </execute>
  </meta>
[![](../../../minus.gif)](../../../#)<metaGet>
  <execute>true</execute>  </metaGet>
  </tArg>
  </SetMbUpdate>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<SetMbUpdateResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>S1!M!S!MbUpd1</id>  </id>
[![](../../../minus.gif)](../../../#)<meta xmlns="****">
[![](../../../minus.gif)](../../../#)<execute>
  <resolveTimeout>600000</resolveTimeout>  <state>Finished</state>[![](../../../minus.gif)](../../../#)<saveToFile>
[![](../../../minus.gif)](../../../#)<binaryId>
  <id>S1!M!Bin!0</id>  </binaryId>
  <newFormat>1</newFormat>  </saveToFile>
  </execute>
  </meta>
  </SetMbUpdateResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetMbUpdate" :
  {
   "tMbUpdate" :
    {
     "id" : "S1!M!S!MbUpd1"
    },
   "tArg" :
    {
     "pattern" :
      {
       "execute" : "true"
      },
     "meta" :
      {
       "execute" :
        {
         "command" : "Save",
         "async" : "false",
         "saveToFile" :
          {
           "newFormat" : "true"
          }
        }
      },
     "metaGet" :
      {
       "execute" : "true"
      }
    }
  }
}

### JSON-ответ:


{
 "SetMbUpdateResult" :
  {
   "id" :
    {
     "id" : "S1!M!S!MbUpd1"
    },
   "meta" :
    {
     "execute" :
      {
       "resolveTimeout" : "600000",
       "state" : "Finished",
       "saveToFile" :
        {
         "binaryId" :
          {
           "id" : "S1!M!Bin!0"
          },
         "newFormat" : "1"
        }
      }
    }
  }
}


public static SetMbUpdateResult SaveUpdate(string moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tSet = new SetMbUpdate()
    {
        tArg = new SetMbUpdateArg()
        {
            pattern = new MbUpdateMdPattern()
            {
                execute = true
            },
            meta = new MbUpdateMd()
            {
                execute = new MbUpdateExecute()
                {
                    command = MbUpdateExecuteCommand.Save,
                    async = false,
                    saveToFile = new MbUpdateMdSaveToFile()
                    {
                        newFormat = true
                    }
                }
            },
            metaGet = new MbUpdateMdPattern()
            {
                execute = true
            }
        },
        tMbUpdate = new MbUpdateId() { id = moniker }
    };
    //Сохранение обновления
    var result = somClient.SetMbUpdate(tSet);
    return result;
}


См. также:


[SetMbUpdate](../SetMbUpdate.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
