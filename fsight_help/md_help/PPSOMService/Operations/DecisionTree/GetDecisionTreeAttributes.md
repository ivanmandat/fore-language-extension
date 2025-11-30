# GetDecisionTreeAttributes: Операция

GetDecisionTreeAttributes: Операция
-


**


# GetDecisionTreeAttributes


## Синтаксис


GetDecisionTreeAttributesResult GetDecisionTreeAttributes(OdId
 tTree, GetDecisionTreeAttributesArg tArg)


## Параметры


tTree. Моникёр
 открытого экземпляра дерева решений.


tArg. Параметры выполнения
 операции.


## Описание


Операция GetDecisionTreeAttributes
 получает атрибуты дерева решений.


## Комментарии


В атрибутах хранится различная информация по экспорту результатов дерева
 решений. Для выполнения операции укажите в поле tTree
 моникёр открытого экземпляра дерева решений, а в поле tArg.attributes
 список извлекаемых атрибутов. Для получения доступны следующие атрибуты:


	- exportTableKey. Ключ
	 таблицы, в которую осуществляется экспорт результатов расчёта.


	- exportTableName. Наименование
	 таблицы, в которую осуществляется экспорт результатов расчёта.


	- exportTableFolder. Ключ
	 папки, в которой хранится таблица для экспорта результатов.


Моникёр может быть получен при выполнении операции [OpenDecisionTree](OpenDecisionTree.htm).


Результатом выполнения операции будет список значений запрашиваемых
 атрибутов.


## Пример


Ниже приведён пример получения значений атрибутов дерева решений. В
 запросе передаётся моникёр открытого экземпляра дерева решений и список
 запрашиваемых атрибутов. В ответе возвращаются полученные значения атрибутов.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetDecisionTreeAttributes xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tTree xmlns="****">
  <id>GDLFODACFJDNFOAEFOBIIGIPLEPCKNLELKFPGKMHFLLMJGGA!M!S!CJOCHJEACFJDNFOAEEGDBIJFHENMAOMAEDIEGKGLEGLJCDNIE</id>  </tTree>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<attributes>
  <its>exportTableKey</its>  <its>exportTableName</its>  <its>exportTableFolder</its>  </attributes>
  </tArg>
  </GetDecisionTreeAttributes>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetDecisionTreeAttributesResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <result xmlns="****">1</result>[![](../../minus.gif)](../../#)<attributes xmlns="****">
  <exportTableName>Таблица</exportTableName>  <exportTableFolder>298753</exportTableFolder>  </attributes>
  </GetDecisionTreeAttributesResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetDecisionTreeAttributes" :
  {
   "tTree" :
    {
     "id" : "GDLFODACFJDNFOAEFOBIIGIPLEPCKNLELKFPGKMHFLLMJGGA!M!S!CJOCHJEACFJDNFOAEEGDBIJFHENMAOMAEDIEGKGLEGLJCDNIE"
    },
   "tArg" :
    {
     "attributes" :
      {
       "its" :
        [
          "exportTableKey",
          "exportTableName",
          "exportTableFolder"
        ]
      }
    }
  }
}

### JSON-ответ:


{
 "GetDecisionTreeAttributesResult" :
  {
   "result" : "1",
   "attributes" :
    {
     "exportTableName" : "Таблица",
     "exportTableFolder" : "298753"
    }
  }
}


public static GetDecisionTreeAttributesResult GetDecisionTreeAttributes(string treeMoniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetDecisionTreeAttributes()
    {
        tTree = new OdId() { id = treeMoniker },
        tArg = new GetDecisionTreeAttributesArg()
        {
            attributes = new string[] { "exportTableKey", "exportTableName", "exportTableFolder" }
        }
    };
    // Получение атрибутов дерева решений
    var result = somClient.GetDecisionTreeAttributes(tGet);
    return result;
}


См. также:


[Работа
 с деревом решений](DecisionTree_Operations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
