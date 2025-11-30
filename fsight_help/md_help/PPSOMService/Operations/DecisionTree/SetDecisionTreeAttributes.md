# SetDecisionTreeAttributes: Операция

SetDecisionTreeAttributes: Операция
-


**


# SetDecisionTreeAttributes


## Синтаксис


SetDecisionTreeAttributesResult SetDecisionTreeAttributes(OdId
 tTree, SetDecisionTreeAttributesArg tArg)


## Параметры


tTree. Моникёр
 открытого экземпляра дерева решений.


tArg. Параметры выполнения
 операции.


## Описание


Операция SetDecisionTreeAttributes
 изменяет атрибуты дерева решений.


## Комментарии


В атрибутах хранится различная информация по экспорту результатов дерева
 решений. Для выполнения операции укажите в поле tTree
 моникёр открытого экземпляра дерева решений, а в поле tArg.attributes
 значения изменяемых атрибутов. Для получения доступны следующие атрибуты:


	- exportTableKey. Ключ
	 таблицы, в которую осуществляется экспорт результатов расчёта.


	- exportTableName. Наименование
	 таблицы, в которую осуществляется экспорт результатов расчёта.


	- exportTableFolder. Ключ
	 папки, в которой хранится таблица для экспорта результатов.


Моникёр может быть получен при выполнении операции [OpenDecisionTree](OpenDecisionTree.htm).


Результатом выполнения операции будет признак успешного выполнения операции
 и информация о возможных ошибках.


## Пример


Ниже приведён пример изменения значений атрибутов дерева решений. В
 запросе передаётся моникёр открытого экземпляра дерева решений и устанавливаемые
 значения атрибутов. В ответе возвращаются признак успешного применение
 изменений.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetDecisionTreeAttributes xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tTree xmlns="****">
  <id>GDLFODACFJDNFOAEFOBIIGIPLEPCKNLELKFPGKMHFLLMJGGA!M!S!CJOCHJEACFJDNFOAEEGDBIJFHENMAOMAEDIEGKGLEGLJCDNIE</id>  </tTree>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<attributes>
  <exportTableKey>301214</exportTableKey>  <exportTableName>Таблица для результатов ДР</exportTableName>  <exportTableFolder>298753</exportTableFolder>  </attributes>
  </tArg>
  </SetDecisionTreeAttributes>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<SetDecisionTreeAttributesResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <result xmlns="****">1</result>  </SetDecisionTreeAttributesResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetDecisionTreeAttributes" :
  {
   "tTree" :
    {
     "id" : "GDLFODACFJDNFOAEFOBIIGIPLEPCKNLELKFPGKMHFLLMJGGA!M!S!CJOCHJEACFJDNFOAEEGDBIJFHENMAOMAEDIEGKGLEGLJCDNIE"
    },
   "tArg" :
    {
     "attributes" :
      {
       "exportTableKey" : "301214",
       "exportTableName" : "Таблица для результатов ДР",
       "exportTableFolder" : "298753"
      }
    }
  }
}

### JSON-ответ:


{
 "SetDecisionTreeAttributesResult" :
  {
   "result" : "1"
  }
}


public static SetDecisionTreeAttributesResult SetDecisionTreeAttributes(string treeMoniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tSet = new SetDecisionTreeAttributes()
    {
        tTree = new OdId() { id = treeMoniker },
        tArg = new SetDecisionTreeAttributesArg()
        {
            attributes = new DecisionAttributes()
            {
                exportTableFolder = 298753,
                exportTableKey = 301214,
                exportTableName = "Таблица для результатов ДР"
            }
        }
    };
    // Изменение атрибутов дерева решений
    var result = somClient.SetDecisionTreeAttributes(tSet);
    return result;
}


См. также:


[Работа
 с деревом решений](DecisionTree_Operations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
