# GetMbUpdateRdsElements: Операция

GetMbUpdateRdsElements: Операция
-


**


# GetMbUpdateRdsElements


## Синтаксис


GetMbUpdateRdsElementsResult GetMbUpdateRdsElements(MbUpdateId
 tMbUpdate, GetMbUpdateRdsElementsArg tArg)


## Параметры


tMbUpdate. Моникёр
 для работы с обновлением репозитория.


tArg. Параметры выполнения
 операции.


## Описание


Операция GetMbUpdateRdsElements
 получает информацию об элементах справочника НСИ, добавленных в обновление
 без самого справочника.


## Комментарии


Используется при работе со справочниками НСИ и составными справочниками
 НСИ. Для выполнения операции укажите в поле tMbUpdate
 моникёр обновления, а в поле tArg
 параметры получения информации об элементах. Моникёр может быть получен
 при выполнении операции [OpenMbUpdate](../Repository/OpenMbUpdate.htm).


Результатом выполнения операции будет коллекцию ключей элементов справочника
 НСИ, добавленных в обновление.


## Пример


Ниже приведён пример получения информации об элементах справочника НСИ,
 добавленных в обновление. В запросе передаётся моникёр для работы с обновлением,
 моникёр открытого экземпляра справочника НСИ и количество элементов, о
 которых будет получена информация. В ответе возвращаются ключи элементов,
 добавленных в обновление.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetMbUpdateRdsElements xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tMbUpdate xmlns="****">
  <id>KFOHMMHOOKDGGOAEBBCEBJODBGLAKMMEJINOJHEBHNNLKOBA!M!S!MbUpdHEDHKNHOOKDGGOAEOENMGFPFOPNBOBOEDLJHBBFFCGEPLEBD</id>  </tMbUpdate>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<rdsInfo>
[![](../../minus.gif)](../../#)<rds>
  <id>KFOHMMHOOKDGGOAEBBCEBJODBGLAKMMEJINOJHEBHNNLKOBA!M!S!NGACPINHOOKDGGOAEJMHOHAHAAKNNFOAEBLDIIDLOKCDKNJFE</id>  </rds>
  </rdsInfo>
[![](../../minus.gif)](../../#)<range>
  <start>0</start>  <count>10</count>  </range>
  </tArg>
  </GetMbUpdateRdsElements>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetMbUpdateRdsElementsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<its xmlns="****">
[![](../../minus.gif)](../../#)<it>
  <key>1</key>  </it>
[![](../../minus.gif)](../../#)<it>
  <key>2</key>  </it>
[![](../../minus.gif)](../../#)<it>
  <key>3</key>  </it>
  </its>
  </GetMbUpdateRdsElementsResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetMbUpdateRdsElements" :
  {
   "tMbUpdate" :
    {
     "id" : "KFOHMMHOOKDGGOAEBBCEBJODBGLAKMMEJINOJHEBHNNLKOBA!M!S!MbUpdHEDHKNHOOKDGGOAEOENMGFPFOPNBOBOEDLJHBBFFCGEPLEBD"
    },
   "tArg" :
    {
     "rdsInfo" :
      {
       "rds" :
        {
         "id" : "KFOHMMHOOKDGGOAEBBCEBJODBGLAKMMEJINOJHEBHNNLKOBA!M!S!NGACPINHOOKDGGOAEJMHOHAHAAKNNFOAEBLDIIDLOKCDKNJFE"
        }
      },
     "range" :
      {
       "start" : "0",
       "count" : "10"
      }
    }
  }
}

### JSON-ответ:


{
 "GetMbUpdateRdsElementsResult" :
  {
   "its" :
    {
     "it" :
      [
        {
         "key" : "1"
        },
        {
         "key" : "2"
        },
        {
         "key" : "3"
        }
      ]
    }
  }
}


public static GetMbUpdateRdsElementsResult GetMbUpdateRdsElements(string updMon, string rdsMon)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tGet = new GetMbUpdateRdsElements()
    {
        tArg = new GetMbUpdateRdsElementsArg()
        {
            rdsInfo = new RdsUpdateInfo() { rds = new RdsId() { id = rdsMon } },
            range = new ListRange() { start = 0, count = 10 }
        },
        tMbUpdate = new MbUpdateId() { id = updMon }
    };
    // Получение информации об элементах справочника НСИ, добавленных в обновление
    var tResult = somClient.GetMbUpdateRdsElements(tGet);
    return tResult;
}


См. также:


[Работа со
 справочниками НСИ](Rds_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
