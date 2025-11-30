# Получение информации об элементах справочника: Операция GetDimElements

Получение информации об элементах справочника: Операция GetDimElements
-


**


# Получение информации об элементах справочника


Ниже приведен пример использования операции [GetDimElements](../GetDimElements.htm)
 для получения информации обо всех элементах справочника. В запросе передается
 моникёр открытого экземпляра справочника. В ответе приходит базовая информация
 об элементах, включающая ключ, наименование, уровень элемента и признак
 наличия дочерних элементов.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<GetDimElements xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tDim xmlns="****">
  <id>S1!M!S!S1</id>  </tDim>
  <tArg xmlns="****" />
  </GetDimElements>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<GetDimElementsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<els xmlns="****">
[![](../../../minus.gif)](../../../#)<e>
  <n>Первый элемент</n>  <k>1</k>  <h>1</h>  <o>0</o>  </e>
[![](../../../minus.gif)](../../../#)<e>
  <n>Второй элемент</n>  <k>2</k>  <h>1</h>  <o>1</o>  </e>
[![](../../../minus.gif)](../../../#)<e>
  <n>Третий элемент</n>  <k>3</k>  <h>0</h>  <o>2</o>  </e>
[![](../../../minus.gif)](../../../#)<e>
  <n>Четвертый элемент</n>  <k>4</k>  <h>0</h>  <o>0</o>  </e>
[![](../../../minus.gif)](../../../#)<e>
  <n>Пятый элемент</n>  <k>5</k>  <h>0</h>  <o>0</o>  </e>
  </els>
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>S1!M!S!S1</id>  </id>
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
   "tArg" : ""
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
         "h" : "1",
         "o" : "0"
        },
        {
         "n" : "Второй элемент",
         "k" : "2",
         "h" : "1",
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
    }
  }
}


public static GetDimElementsResult GetElementsInfo(DmId moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tElements = new GetDimElements()
    {
        tArg = new GetDimElementsArg(),
        tDim = moniker
    };
    //Получение информации об элементах справочника
    var result = somClient.GetDimElements(tElements);
    return result;
}


См. также:


[GetDimElements:
 Операция](../GetDimElements.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
