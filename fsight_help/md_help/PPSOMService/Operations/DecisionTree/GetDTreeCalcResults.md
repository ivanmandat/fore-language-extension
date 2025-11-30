# GetDTreeCalcResults: Операция

GetDTreeCalcResults: Операция
-


**


# GetDTreeCalcResults


## Синтаксис


DTreeCalcResultsTable GetDTreeCalcResults(DTreeId
 tTree)


## Параметры


tTree. Моникёр
 экземпляра дерева решений.


## Описание


Операция GetDTreeCalcResults
 получает результаты расчёта дерева решений.


## Комментарии


Для выполнения операции укажите в поле tTree
 моникёр экземпляра дерева решений. Моникёр может быть получен при выполнении
 операции [OpenDecisionTree](OpenDecisionTree.htm).


Результатом выполнения операции будет таблица решений дерева.


## Пример


Ниже приведён пример получения результатов расчёта дерева решений. В
 запросе передаётся моникёр дерева решений. В ответе возвращается таблица
 с результатами.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetDTreeCalcResults xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tTree xmlns="****">
  <id>OAFBDOELHBFNFOAEPONAGBNBEMKEOLKEMIBLPEECJKLBMDCH!M!S!CPLDIOOELHBFNFOAENCODPFBENPANPCBEDKDJMGAGAPMAPIKO</id>  </tTree>
  </GetDTreeCalcResults>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetDTreeCalcResultsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<columns xmlns="****">
[![](../../minus.gif)](../../#)<its>
  <header>routeId</header>  <id>routeId</id>  <type>Inner</type>  </its>
[![](../../minus.gif)](../../#)<its>
  <header>id</header>  <id>id</id>  <type>Inner</type>  </its>
[![](../../minus.gif)](../../#)<its>
  <header>Время запуска расчета дерева</header>  <id>TimeId</id>  <type>Time</type>  </its>
[![](../../minus.gif)](../../#)<its>
  <header>Параметр 1</header>  <id>DTB2D58BA1F1C14C70BFB6B02EB10F5EBD</id>  <type>Parameter</type>  </its>
[![](../../minus.gif)](../../#)<its>
  <header>Параметр 2</header>  <id>DT033E4C875B8D4728940F3E27501A2567</id>  <type>Parameter</type>  </its>
[![](../../minus.gif)](../../#)<its>
  <header>Решение дерева</header>  <id>ResultId</id>  <type>Decision</type>  </its>
[![](../../minus.gif)](../../#)<its>
  <header>Действие</header>  <id>ActionId</id>  <type>Action</type>  </its>
  </columns>
[![](../../minus.gif)](../../#)<rows xmlns="****">
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<its>
  <value>518B0CBD-6EA9-4B45-AA52-20D98B85E61E</value>  </its>
[![](../../minus.gif)](../../#)<its>
  <value>A9B2FA4D-65E4-49C6-8C9C-D20E2DD3AFC1</value>  </its>
[![](../../minus.gif)](../../#)<its>
  <value>31.05.2022 17:46:50</value>  </its>
[![](../../minus.gif)](../../#)<its>
  <value>1</value>  </its>
[![](../../minus.gif)](../../#)<its>
  <value />
  </its>
[![](../../minus.gif)](../../#)<its>
  <value>Решение 1</value>  </its>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<actions>
[![](../../minus.gif)](../../#)<its>
  <name>Действие</name>  <id>518B0CBD-6EA9-4B45-AA52-20D98B85E61E!DT7E547BC1CD284AFBA44DDCB42FA2D24C</id>  </its>
  </actions>
  </its>
  </its>
  </rows>
  </GetDTreeCalcResultsResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetDTreeCalcResults" :
  {
   "tTree" :
    {
     "id" : "OAFBDOELHBFNFOAEPONAGBNBEMKEOLKEMIBLPEECJKLBMDCH!M!S!CPLDIOOELHBFNFOAENCODPFBENPANPCBEDKDJMGAGAPMAPIKO"
    }
  }
}

### JSON-ответ:


{
 "GetDTreeCalcResultsResult" :
  {
   "columns" :
    {
     "its" :
      [
        {
         "header" : "routeId",
         "id" : "routeId",
         "type" : "Inner"
        },
        {
         "header" : "id",
         "id" : "id",
         "type" : "Inner"
        },
        {
         "header" : "Время запуска расчета дерева",
         "id" : "TimeId",
         "type" : "Time"
        },
        {
         "header" : "Параметр 1",
         "id" : "DTB2D58BA1F1C14C70BFB6B02EB10F5EBD",
         "type" : "Parameter"
        },
        {
         "header" : "Параметр 2",
         "id" : "DT033E4C875B8D4728940F3E27501A2567",
         "type" : "Parameter"
        },
        {
         "header" : "Решение дерева",
         "id" : "ResultId",
         "type" : "Decision"
        },
        {
         "header" : "Действие",
         "id" : "ActionId",
         "type" : "Action"
        }
      ]
    },
   "rows" :
    {
     "its" :
      {
       "its" :
        [
          {
           "value" : "518B0CBD-6EA9-4B45-AA52-20D98B85E61E"
          },
          {
           "value" : "A9B2FA4D-65E4-49C6-8C9C-D20E2DD3AFC1"
          },
          {
           "value" : "31.05.2022 17:46:50"
          },
          {
           "value" : "1"
          },
          {
           "value" : ""
          },
          {
           "value" : "Решение 1"
          },
          {
           "actions" :
            {
             "its" :
              {
               "name" : "Действие",
               "id" : "518B0CBD-6EA9-4B45-AA52-20D98B85E61E!DT7E547BC1CD284AFBA44DDCB42FA2D24C"
              }
            }
          }
        ]
      }
    }
  }
}


public static DTreeCalcResultsTable GetDTreeCalcResults(string treeMoniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetDTreeCalcResults()
    {
        tTree = new DTreeId() { id = treeMoniker }
    };
    // Получение результатов выполнения дерева решений
    var result = somClient.GetDTreeCalcResults(tGet);
    return result;
}


См. также:


[Работа
 с деревом решений](DecisionTree_Operations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
