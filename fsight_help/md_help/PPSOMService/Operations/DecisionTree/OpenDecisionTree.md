# OpenDecisionTree: Операция

OpenDecisionTree: Операция
-


**


# OpenDecisionTree


## Синтаксис


OpenDecisionTreeResult OpenDecisionTree(OdId tOb,
 OpenDecisionTreeArg tArg)


## Параметры


tOb. Моникёр
 объекта репозитория, являющегося деревом решений.


tArg. Параметры выполнения
 операции.


## Описание


Операция OpenDecisionTree открывает
 дерево решений.


## Комментарии


Для выполнения операции укажите в поле tOb
 моникёр объекта репозитория, являющегося деревом решений, а в поле tArg параметры открытия.


Результатом выполнения операции будет моникёр открытого экземпляра дерева
 решений. Дальнейшая работа осуществляется с помощью специализированных
 операций, ориентированных на определённый блок функциональности дерева
 решений. Описание операций представлено в текущем подразделе.


Для закрытия открытого экземпляра дерева решений используйте операцию
 [CloseDecisionTree](CloseDecisionTree.htm).


Примечание.
 При работе с деревом решений моникёр соединения с репозиторием должен
 генерироваться через GUID, для этого параметр [KeyIncr](Setup.chm::/UiWebSetup/03_Setup_Web/BI_Server_Registry_Key.htm)
 в реестре/конфигурационном файле должен иметь значение 0.


## Пример


Ниже приведён пример открытия на редактирование дерева решений. В запросе
 передаётся моникёр объекта репозитория, являющегося деревом решений. В
 ответе возвращается моникёр открытого экземпляра дерева решений.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<OpenDecisionTree xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tOb xmlns="****">
  <id>GDLFODACFJDNFOAEFOBIIGIPLEPCKNLELKFPGKMHFLLMJGGA!M!301213</id>  </tOb>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<args>
  <openForEdit>true</openForEdit>  </args>
  </tArg>
  </OpenDecisionTree>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<OpenDecisionTreeResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>GDLFODACFJDNFOAEFOBIIGIPLEPCKNLELKFPGKMHFLLMJGGA!M!S!CJOCHJEACFJDNFOAEEGDBIJFHENMAOMAEDIEGKGLEGLJCDNIE</id>  </id>
  </OpenDecisionTreeResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "OpenDecisionTree" :
  {
   "tOb" :
    {
     "id" : "GDLFODACFJDNFOAEFOBIIGIPLEPCKNLELKFPGKMHFLLMJGGA!M!301213"
    },
   "tArg" :
    {
     "args" :
      {
       "openForEdit" : "true"
      }
    }
  }
}

### JSON-ответ:


{
 "OpenDecisionTreeResult" :
  {
   "id" :
    {
     "id" : "GDLFODACFJDNFOAEFOBIIGIPLEPCKNLELKFPGKMHFLLMJGGA!M!S!CJOCHJEACFJDNFOAEEGDBIJFHENMAOMAEDIEGKGLEGLJCDNIE"
    }
  }
}


public static OpenDecisionTreeResult OpenDecisionTree(MbId mb, string dtId, bool forEdit = true)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tOpen = new OpenDecisionTree()
    {
        tArg = new OpenDecisionTreeArg()
        {
            args = new OpenDecisionTreeArgs()
            {
                openForEdit = forEdit
            }
        },
        // Формирование моникёра объекта
        tOb = new OdId() { id = mb.id + "!" + FindObjectById(mb, dtId).k }
    };
    // Открытие дерева решений
    var result = somClient.OpenDecisionTree(tOpen);
    return result;
}


См. также:


[Работа
 с деревом решений](DecisionTree_Operations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
