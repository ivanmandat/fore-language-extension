# ExportDecisionTree: Операция

ExportDecisionTree: Операция
-


**


# ExportDecisionTree


## Синтаксис


ExportDecisionTreeResult ExportDecisionTree(OdId
 tTree, DecisionAttributes tArg)


## Параметры


tTree. Моникёр
 открытого экземпляра дерева решений.


tArg. Параметры выполнения
 операции.


## Описание


Операция ExportDecisionTree
 экспортирует результаты расчёта дерева решений.


## Комментарии


Для выполнения операции укажите в поле tTree
 моникёр открытого экземпляра дерева решений, а в поле tArg
 информацию о таблице, в которую осуществляется экспорт. Моникёр может
 быть получен при выполнении операции [OpenDecisionTree](OpenDecisionTree.htm).


Результатом выполнения операции будет признак успешного выполнения операции
 и информация о возможных ошибках.


## Пример


Ниже приведён пример экспорта результатов расчёта дерева решений в таблицу.
 В запросе передаётся моникёр открытого экземпляра дерева решений и параметры
 таблицы, в которую осуществляется экспорт. В ответе возвращаются признак
 успешного выполнения операции.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<ExportDecisionTree xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tTree xmlns="****">
  <id>BPLBBBPKCPKLFOAEHOLHLNOBMHANMMIEAJIPMCHCDJKPOPLN!M!S!CAIHMIBPKCPKLFOAEDOMMGFFDKMMDOPNEFLAHKPLEEONKIOAP</id>  </tTree>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <exportTableKey>211964</exportTableKey>  <exportTableName>Таблица для результатов ДР</exportTableName>  <exportTableFolder>211963</exportTableFolder>  </tArg>
  </ExportDecisionTree>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<ExportDecisionTreeResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <result xmlns="****">1</result>  </ExportDecisionTreeResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "ExportDecisionTree" :
  {
   "tTree" :
    {
     "id" : "BPLBBBPKCPKLFOAEHOLHLNOBMHANMMIEAJIPMCHCDJKPOPLN!M!S!CAIHMIBPKCPKLFOAEDOMMGFFDKMMDOPNEFLAHKPLEEONKIOAP"
    },
   "tArg" :
    {
     "exportTableKey" : "211964",
     "exportTableName" : "Таблица для результатов ДР",
     "exportTableFolder" : "211963"
    }
  }
}

### JSON-ответ:


{
 "ExportDecisionTreeResult" :
  {
   "result" : "1"
  }
}


public static ExportDecisionTreeResult ExportDecisionTree(string treeMoniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tExp = new ExportDecisionTree()
    {
        tTree = new OdId() { id = treeMoniker },
        tArg = new DecisionAttributes()
        {
            exportTableFolder = 211963,
            exportTableKey = 211964,
            exportTableName = "Таблица для результатов ДР"
        }
    };
    // Экспорт результатов расчёта дерева решений
    var result = somClient.ExportDecisionTree(tExp);
    return result;
}


См. также:


[Работа
 с деревом решений](DecisionTree_Operations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
