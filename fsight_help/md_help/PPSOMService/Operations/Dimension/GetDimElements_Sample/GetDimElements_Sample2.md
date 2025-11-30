# Отбор элементов по значениям атрибутов: Операция GetDimElements

Отбор элементов по значениям атрибутов: Операция GetDimElements
-


**


# Отбор элементов по значениям атрибутов


Ниже приведен пример использования операции [GetDimElements](../GetDimElements.htm)
 для получения информации об определенных элементах, удовлетворяющих заданным
 условиям фильтрации. В запросе передается моникёр открытого экземпляра
 справочника и параметры извлечения, в которых указан фильтр элементов.
 Фильтрация осуществляется по тексту наименований объектов, регистр символов
 не учитывается и текст будет искаться в любой части наименований. Для
 отобранных элементов будет загружена базовая информация: ключ, наименование,
 уровень элемента и признак наличия дочерних элементов. Информация будет
 доступна в ответе на запрос.


В примере C# текст, который будет искаться в наименованиях, передается
 в качестве входного параметра.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<GetDimElements xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tDim xmlns="****">
  <id>S1!M!S!S1</id>  </tDim>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<filter>
[![](../../../minus.gif)](../../../#)<text>
  <attributes>NAME</attributes>  <text>второй</text>  <wholeWordsOnly>false</wholeWordsOnly>  <caseSensitive>false</caseSensitive>  </text>
  <includeParents>true</includeParents>  <includeParentsWithSiblings>true</includeParentsWithSiblings>  </filter>
[![](../../../minus.gif)](../../../#)<pattern>
  <getLevel>true</getLevel>  <getImageIndex>true</getImageIndex>  </pattern>
  </tArg>
  </GetDimElements>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<GetDimElementsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<els xmlns="****">
[![](../../../minus.gif)](../../../#)<e x="**1**" l="**0**">
  <n>Первый элемент</n>  <k>1</k>  <h>1</h>  <o>0</o>  </e>
[![](../../../minus.gif)](../../../#)<e l="**1**">
  <n>Второй элемент</n>  <k>2</k>  <h>0</h>  <o>1</o>  </e>
[![](../../../minus.gif)](../../../#)<e x="**1**" l="**0**">
  <n>Четвертый элемент</n>  <k>4</k>  <h>0</h>  <o>0</o>  </e>
[![](../../../minus.gif)](../../../#)<e x="**1**" l="**0**">
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
   "tArg" :
    {
     "filter" :
      {
       "text" :
        {
         "attributes" : "NAME",
         "text" : "второй",
         "wholeWordsOnly" : "false",
         "caseSensitive" : "false"
        },
       "includeParents" : "true",
       "includeParentsWithSiblings" : "true"
      },
     "pattern" :
      {
       "getLevel" : "true",
       "getImageIndex" : "true"
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
         "@x" : "1",
         "@l" : "0",
         "n" : "Первый элемент",
         "k" : "1",
         "h" : "1",
         "o" : "0"
        },
        {
         "@l" : "1",
         "n" : "Второй элемент",
         "k" : "2",
         "h" : "0",
         "o" : "1"
        },
        {
         "@x" : "1",
         "@l" : "0",
         "n" : "Четвертый элемент",
         "k" : "4",
         "h" : "0",
         "o" : "0"
        },
        {
         "@x" : "1",
         "@l" : "0",
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


public static GetDimElementsResult GetFilteredElements(DmId moniker, string text)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tElements = new GetDimElements()
    {
        tArg = new GetDimElementsArg()
        {
            pattern = new ElsPattern()
            {
                getLevel = true
            },
            //Параметры фильтрации элементов
            filter = new ElsFilter()
            {
                text = new TextFilter()
                {
                    attributes = "NAME",
                    text = text,
                    caseSensitive = false,
                    wholeWordsOnly = false
                },
                includeParents = true,
                includeParentsWithSiblings = true
            }
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
