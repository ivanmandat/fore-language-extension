# Отметка элементов перед получением информации: Операция GetDimElements

Отметка элементов перед получением информации: Операция GetDimElements
-


**


# Отметка элементов перед получением информации


Ниже приведён пример использования операции [GetDimElements](../GetDimElements.htm)
 для отметки элементов и получения базовой информации о них. В запросе
 передаётся моникёр открытого экземпляра справочника. В ответе приходит
 базовая информация об элементах, включающая ключ, наименование, уровень
 элемента и признак наличия дочерних элементов, а также сводная информация
 об отметке элементов.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<GetDimElements xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tDim xmlns="****">
  <id>S1!M!S!S1</id>  </tDim>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
  <selectionInfo>true</selectionInfo>[![](../../../minus.gif)](../../../#)<changeSelection>
  <elSelectOp>Select</elSelectOp>  <elRelative>All</elRelative>  <limitElements>true</limitElements>  </changeSelection>
  </tArg>
  </GetDimElements>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<GetDimElementsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<els xmlns="****">
[![](../../../minus.gif)](../../../#)<e>
  <n>Первый элемент</n>  <k>1</k>  <h>0</h>  <o>0</o>  </e>
[![](../../../minus.gif)](../../../#)<e>
  <n>Второй элемент</n>  <k>2</k>  <h>0</h>  <o>1</o>  </e>
[![](../../../minus.gif)](../../../#)<e>
  <n>Третий элемент</n>  <k>3</k>  <h>0</h>  <o>2</o>  </e>
[![](../../../minus.gif)](../../../#)<e>
  <n>Четвертый элемент</n>  <k>4</k>  <h>0</h>  <o>0</o>  </e>
[![](../../../minus.gif)](../../../#)<e>
  <n>Пятый элемент</n>  <k>5</k>  <h>0</h>  <o>0</o>  </e>
  </els>
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>S1!M!S!S1</id>  </id>
[![](../../../minus.gif)](../../../#)<selectionInfo xmlns="****">
[![](../../../minus.gif)](../../../#)<firstSelected>
  <n>Первый элемент</n>  <k>1</k>  <h>0</h>  <o>0</o>  </firstSelected>
[![](../../../minus.gif)](../../../#)<lastSelected>
  <n>Пятый элемент</n>  <k>5</k>  <h>0</h>  <o>0</o>  </lastSelected>
  <selectedCount>5</selectedCount>[![](../../../minus.gif)](../../../#)<schema>
  <k>4294967295</k>  <vis>1</vis>  <applyOnlyOnce>0</applyOnlyOnce>  <onceApplied>0</onceApplied>  <applyOnRebuild>0</applyOnRebuild>  </schema>
  </selectionInfo>
  </GetDimElementsResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetDimElements" :
  {
   "tDim" :
    {
     "id" : "S1!M!S!S1"
    },
   "tArg" :
    {
     "selectionInfo" : "true",
     "changeSelection" :
      {
       "elSelectOp" : "Select",
       "elRelative" : "All",
       "limitElements" : "true"
      }
    }
  }
}

### JSON-ответ:


{
 "GetDimElementsResult" :
  {
   "els" :
    {
     "e" :
      [
        {
         "n" : "Первый элемент",
         "k" : "1",
         "h" : "0",
         "o" : "0"
        },
        {
         "n" : "Второй элемент",
         "k" : "2",
         "h" : "0",
         "o" : "1"
        },
        {
         "n" : "Третий элемент",
         "k" : "3",
         "h" : "0",
         "o" : "2"
        },
        {
         "n" : "Четвертый элемент",
         "k" : "4",
         "h" : "0",
         "o" : "0"
        },
        {
         "n" : "Пятый элемент",
         "k" : "5",
         "h" : "0",
         "o" : "0"
        }
      ]
    },
   "id" :
    {
     "id" : "S1!M!S!S1"
    },
   "selectionInfo" :
    {
     "firstSelected" :
      {
       "n" : "Первый элемент",
       "k" : "1",
       "h" : "0",
       "o" : "0"
      },
     "lastSelected" :
      {
       "n" : "Пятый элемент",
       "k" : "5",
       "h" : "0",
       "o" : "0"
      },
     "selectedCount" : "5",
     "schema" :
      {
       "k" : "4294967295",
       "vis" : "1",
       "applyOnlyOnce" : "0",
       "onceApplied" : "0",
       "applyOnRebuild" : "0"
      }
    }
  }
}


public static GetDimElementsResult SelectElementsBeforeGet(DmId moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tElements = new GetDimElements()
    {
        tArg = new GetDimElementsArg()
        {
            //Параметры отметки
            changeSelection = new DmSelectionArg()
            {
                elSelectOp = DmElSelectOp.Select,
                elRelative = DmElRelative.All,
                limitElements = true
            },
            selectionInfo = true
        },
        tDim = moniker
    };
    //Получение информации об элементах справочника
    var result = somClient.GetDimElements(tElements);
    return result;
}


См. также:


[GetDimElements](../GetDimElements.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
