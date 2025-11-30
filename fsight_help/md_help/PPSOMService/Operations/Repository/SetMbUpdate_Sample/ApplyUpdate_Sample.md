# Установка обновления: Операция SetMbUpdate

Установка обновления: Операция SetMbUpdate
-


**


# Установка обновления


Ниже приведён пример использования операции [SetMbUpdate](../SetMbUpdate.htm)
 для запуска установки обновления. В запросе передаётся моникёр обновления
 и параметры выполнения установки. В ответе приходит информация о результатах
 установки.


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
  <command>Apply</command>  <async>false</async>  </execute>
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
  <resolveTimeout>600000</resolveTimeout>  <state>Waiting</state>[![](../../../minus.gif)](../../../#)<callback>
[![](../../../minus.gif)](../../../#)<onProgress>
  <stage>Start</stage>  <total>1</total>  <current>1</current>  </onProgress>
  </callback>
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
         "command" : "Apply",
         "async" : "false"
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
       "state" : "Waiting",
       "callback" :
        {
         "onProgress" :
          {
           "stage" : "Start",
           "total" : "1",
           "current" : "1"
          }
        }
      }
    }
  }
}


public static SetMbUpdateResult ApplyUpdate(string moniker)
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
                    command = MbUpdateExecuteCommand.Apply,
                    async = false
                },
            },
            metaGet = new MbUpdateMdPattern()
            {
                execute = true
            }
        },
        tMbUpdate = new MbUpdateId() { id = moniker }
    };
    //Установка обновления
    var result = somClient.SetMbUpdate(tSet);
    return result;
}


См. также:


[SetMbUpdate](../SetMbUpdate.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
