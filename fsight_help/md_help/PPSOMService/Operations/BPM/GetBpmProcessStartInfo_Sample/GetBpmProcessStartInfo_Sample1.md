# Получение настроек для запуска подпроцесса: Операция GetBpmProcessStartInfo

Получение настроек для запуска подпроцесса: Операция GetBpmProcessStartInfo
-


**


# Получение настроек для запуска подпроцесса


Ниже приведён пример использования операции [GetBpmProcessStartInfo](../GetBpmProcessStartInfo.htm)
 для получения настроек, с которыми может быть запущен подпроцесс. В запросе
 передаётся моникёр процесса, идентификатор экземпляра запущенного процесса
 и уникальный идентификатор шага, соответствующего подпроцессу. В ответе
 возвращаются полученные настройки.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<GetBpmProcessStartInfo xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
  <parentInstId>97976</parentInstId>  <stpGuid>{17AE01A0-8BDA-4B2C-8BF3-B48A6A411EE1}</stpGuid>  <id>NPHEOHFBGPCDGOAEFHEOFIIANCEEIDGECLDJGGBNCPACAJOB!M!S!BPJKLPJNFBGPCDGOAEEGOFJMAOEDKBLKDEALEJKADCFIEOHNAC</id>  </tArg>
  </GetBpmProcessStartInfo>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<GetBpmProcessStartInfoResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <minDeadline xmlns="****">2024-06-22T16:33:56.499</minDeadline>[![](../../../minus.gif)](../../../#)<procParams xmlns="****">
[![](../../../minus.gif)](../../../#)<bpmProcessParams>
[![](../../../minus.gif)](../../../#)<it>
  <dictMnk>NPHEOHFBGPCDGOAEFHEOFIIANCEEIDGECLDJGGBNCPACAJOB!M!S!SNAHIHAJBGPCDGOAEMLEJFNBBIILPBCBENIBBAOAECOICICID</dictMnk>  <selCount>2</selCount>  <dictName>Филиалы</dictName>  <splitParam>1</splitParam>  </it>
  </bpmProcessParams>
  </procParams>
  </GetBpmProcessStartInfoResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetBpmProcessStartInfo" :
  {
   "tArg" :
    {
     "parentInstId" : "97976",
     "stpGuid" : "{17AE01A0-8BDA-4B2C-8BF3-B48A6A411EE1}",
     "id" : "NPHEOHFBGPCDGOAEFHEOFIIANCEEIDGECLDJGGBNCPACAJOB!M!S!BPJKLPJNFBGPCDGOAEEGOFJMAOEDKBLKDEALEJKADCFIEOHNAC"
    }
  }
}

### JSON-ответ:


{
 "GetBpmProcessStartInfoResult" :
  {
   "minDeadline" : "2024-06-22T16:33:56.499",
   "procParams" :
    {
     "bpmProcessParams" :
      {
       "it" :
        {
         "dictMnk" : "NPHEOHFBGPCDGOAEFHEOFIIANCEEIDGECLDJGGBNCPACAJOB!M!S!SNAHIHAJBGPCDGOAEMLEJFNBBIILPBCBENIBBAOAECOICICID",
         "selCount" : "2",
         "dictName" : "Филиалы",
         "splitParam" : "1"
        }
      }
    }
  }
}


public static GetBpmStartInfoResult GetBpmProcessStartInfo(string moniker, uint? instId = null, string subprocGUID = "")
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetBpmProcessStartInfo()
    {
        tArg = new GetBpmStartInfoArg()
        {
            id =  moniker,
            parentInstId = instId,
            stpGuid = subprocGUID
        }
    };
    // Получение настроек для запуска процесса/подпроцесса
    var result = somClient.GetBpmProcessStartInfo(tGet);
    return result;
}


См. также:


[GetBpmProcessStartInfo:
 Операция](../GetBpmProcessStartInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
