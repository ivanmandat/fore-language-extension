# GetDTreeCalcPathInfo: Операция

GetDTreeCalcPathInfo: Операция
-


**


# GetDTreeCalcPathInfo


## Синтаксис


Result GetDTreeCalcPathInfo(DTreeId tTree, GetDTreeCalcPathInfoArg
 tArg)


## Параметры


tTree. Моникёр
 экземпляра дерева решений.


tArg. Параметры выполнения
 операции.


## Описание


Операция GetDTreeCalcPathInfo
 получает путь расчёта дерева решений.


## Комментарии


Для выполнения операции укажите в поле tTree
 моникёр экземпляра дерева решений, а в поле tArg
 параметры получения пути расчёта. Моникёр может быть получен при выполнении
 операции [OpenDecisionTree](OpenDecisionTree.htm).


Результатом выполнения операции будет коллекция блоков, которые были
 рассчитаны и сформировали путь расчёта.


## Пример


Ниже приведён пример получения пути расчёта дерева решений. В запросе
 передаются моникёр дерева решений, идентификатор результата и идентификатор
 отдельного пути расчёта. В запросе возвращается информация о блоках, через
 которые производился расчёт дерева решений.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetDTreeCalcPathInfo xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tTree xmlns="****">
  <id>OAFBDOELHBFNFOAEPONAGBNBEMKEOLKEMIBLPEECJKLBMDCH!M!S!CPLDIOOELHBFNFOAENCODPFBENPANPCBEDKDJMGAGAPMAPIKO</id>  </tTree>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <calcResultId>A9B2FA4D-65E4-49C6-8C9C-D20E2DD3AFC1</calcResultId>  <calcPathId>518B0CBD-6EA9-4B45-AA52-20D98B85E61E</calcPathId>  </tArg>
  </GetDTreeCalcPathInfo>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetDTreeCalcPathInfoResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<blocks xmlns="****">
[![](../../minus.gif)](../../#)<its>
  <blockId>DTE41D060277F24940BE669F817B793081</blockId>  </its>
[![](../../minus.gif)](../../#)<its>
  <blockId>DT7E547BC1CD284AFBA44DDCB42FA2D24C</blockId>  <inputLinkId>DTAAAC89AD7BEF42E9BBA0B3C2EDF7B905</inputLinkId>  </its>
[![](../../minus.gif)](../../#)<its>
  <blockId>DTF78524A87ABE481E8A34725E3DD0B2BA</blockId>  <inputLinkId>DTE656A2B038EE4B35A27B5B8218D24488</inputLinkId>  </its>
  </blocks>
  </GetDTreeCalcPathInfoResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetDTreeCalcPathInfo" :
  {
   "tTree" :
    {
     "id" : "OAFBDOELHBFNFOAEPONAGBNBEMKEOLKEMIBLPEECJKLBMDCH!M!S!CPLDIOOELHBFNFOAENCODPFBENPANPCBEDKDJMGAGAPMAPIKO"
    },
   "tArg" :
    {
     "calcResultId" : "A9B2FA4D-65E4-49C6-8C9C-D20E2DD3AFC1",
     "calcPathId" : "518B0CBD-6EA9-4B45-AA52-20D98B85E61E"
    }
  }
}

### JSON-ответ:


{
 "GetDTreeCalcPathInfoResult" :
  {
   "blocks" :
    {
     "its" :
      [
        {
         "blockId" : "DTE41D060277F24940BE669F817B793081"
        },
        {
         "blockId" : "DT7E547BC1CD284AFBA44DDCB42FA2D24C",
         "inputLinkId" : "DTAAAC89AD7BEF42E9BBA0B3C2EDF7B905"
        },
        {
         "blockId" : "DTF78524A87ABE481E8A34725E3DD0B2BA",
         "inputLinkId" : "DTE656A2B038EE4B35A27B5B8218D24488"
        }
      ]
    }
  }
}


public static GetDTreeCalcPathInfoResult GetDTreeCalcPathInfo(string treeMoniker, string pathId, string resultId)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetDTreeCalcPathInfo()
    {
        tTree = new DTreeId() { id = treeMoniker },
        tArg = new GetDTreeCalcPathInfoArg()
        {
            calcPathId = pathId,
            calcResultId = resultId
        }
    };
    // Получение пути расчёта
    var result = somClient.GetDTreeCalcPathInfo(tGet);
    return result;
}


См. также:


[Работа
 с деревом решений](DecisionTree_Operations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
