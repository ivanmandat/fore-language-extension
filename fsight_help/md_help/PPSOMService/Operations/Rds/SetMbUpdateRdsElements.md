# SetMbUpdateRdsElements: Операция

SetMbUpdateRdsElements: Операция
-


**


# SetMbUpdateRdsElements


## Синтаксис


SetMbUpdateRdsElementsResult SetMbUpdateRdsElements(MbUpdateId
 tMbUpdate, SetMbUpdateRdsElementsArg tArg)


## Параметры


tMbUpdate. Моникёр
 для работы с обновлением репозитория.


tArg. Параметры выполнения
 операции.


## Описание


Операция SetMbUpdateRdsElements
 для работы с элементами справочника НСИ в обновлении без самого справочника.


## Комментарии


Операция позволяет добавлять/удалять элементы в обновлении без необходимости
 добавления самого справочника НСИ в обновление. Используется при работе
 со справочниками НСИ и составными справочниками НСИ. Для выполнения операции
 укажите в поле tMbUpdate моникёр
 обновления, а в поле tArg параметры
 работы с элементами справочника НСИ. Моникёр может быть получен при выполнении
 операции [OpenMbUpdate](../Repository/OpenMbUpdate.htm).


Результатом выполнения операции будет количество элементов, для которых
 выполнялось действие в обновлении.


## Пример


Ниже приведён пример добавления трёх элементов справочника НСИ в обновление.
 В запросе передаётся моникёр для работы с обновлением, моникёр открытого
 экземпляра справочника НСИ и ключи элементов. В ответе возвращается количество
 добавленных в обновление элементов.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetMbUpdateRdsElements xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tMbUpdate xmlns="****">
  <id>KFOHMMHOOKDGGOAEBBCEBJODBGLAKMMEJINOJHEBHNNLKOBA!M!S!MbUpdHEDHKNHOOKDGGOAEOENMGFPFOPNBOBOEDLJHBBFFCGEPLEBD</id>  </tMbUpdate>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<rdsInfo>
[![](../../minus.gif)](../../#)<rds>
  <id>KFOHMMHOOKDGGOAEBBCEBJODBGLAKMMEJINOJHEBHNNLKOBA!M!S!NGACPINHOOKDGGOAEJMHOHAHAAKNNFOAEBLDIIDLOKCDKNJFE</id>  </rds>
  </rdsInfo>
  <op>Add</op>  <includeChildren>true</includeChildren>[![](../../minus.gif)](../../#)<elements>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <key>1</key>  </it>
[![](../../minus.gif)](../../#)<it>
  <key>2</key>  </it>
[![](../../minus.gif)](../../#)<it>
  <key>3</key>  </it>
  </its>
  </elements>
  </tArg>
  </SetMbUpdateRdsElements>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<SetMbUpdateRdsElementsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <count xmlns="****">3</count>  </SetMbUpdateRdsElementsResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetMbUpdateRdsElements" :
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
     "op" : "Add",
     "includeChildren" : "true",
     "elements" :
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
  }
}

### JSON-ответ:


{
 "SetMbUpdateRdsElementsResult" :
  {
   "count" : "3"
  }
}


public static SetMbUpdateRdsElementsResult SetMbUpdateRdsElements(string updMon, string rdsMon, RdsKeys elKeys)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tSet = new SetMbUpdateRdsElements()
    {
        tArg = new SetMbUpdateRdsElementsArg()
        {
            rdsInfo = new RdsUpdateInfo() { rds = new RdsId() { id = rdsMon } },
            op = ListOperation.Add,
            includeChildren = true,
            elements = elKeys
        },
        tMbUpdate = new MbUpdateId() { id = updMon }
    };
    // Добавление элементов справочника НСИ в обновление
    var tResult = somClient.SetMbUpdateRdsElements(tSet);
    return tResult;
}


См. также:


[Работа со
 справочниками НСИ](Rds_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
