# Получение значений заданных атрибутов: Операция GetDimElements

Получение значений заданных атрибутов: Операция GetDimElements
-


**


# Получение значений заданных атрибутов


Ниже приведен пример использования операции [GetDimElements](../GetDimElements.htm)
 для получения значений заданных атрибутов. В запросе передается моникёр
 открытого экземпляра справочника и параметры извлечения информации об
 элементах. В параметрах указан список атрибутов. В ответе приходит список
 значений указанных атрибутов для всех элементов справочника.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<GetDimElements xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tDim xmlns="****">
  <id>S1!M!S!S1</id>  </tDim>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<pattern>
  <attributes>ID;CODE</attributes>  <attributeValuesOnly>true</attributeValuesOnly>  <extendedAttributeValuesOnly>false</extendedAttributeValuesOnly>  <getParentKey>true</getParentKey>  <getHasChildren>true</getHasChildren>  <getLevel>true</getLevel>  <getImageIndex>true</getImageIndex>  </pattern>
  </tArg>
  </GetDimElements>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<GetDimElementsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<els xmlns="****">
[![](../../../minus.gif)](../../../#)<e hc="**1**" l="**0**">
  <n>Первый элемент</n>[![](../../../minus.gif)](../../../#)<a>
  <it>1</it>  <it>A000123</it>  </a>
  <k>1</k>  <h>1</h>  <o>0</o>  </e>
[![](../../../minus.gif)](../../../#)<e hc="**1**" l="**1**">
  <n>Второй элемент</n>[![](../../../minus.gif)](../../../#)<a>
  <it>2</it>  <it>A000124</it>  </a>
  <k>2</k>  <h>1</h>  <o>1</o>  <p>1</p>  </e>
[![](../../../minus.gif)](../../../#)<e hc="**0**" l="**2**">
  <n>Третий элемент</n>[![](../../../minus.gif)](../../../#)<a>
  <it>3</it>  <it>A000125</it>  </a>
  <k>3</k>  <h>0</h>  <o>2</o>  <p>2</p>  </e>
[![](../../../minus.gif)](../../../#)<e hc="**0**" l="**0**">
  <n>Четвертый элемент</n>[![](../../../minus.gif)](../../../#)<a>
  <it>4</it>  <it>A000126</it>  </a>
  <k>4</k>  <h>0</h>  <o>0</o>  </e>
[![](../../../minus.gif)](../../../#)<e hc="**0**" l="**0**">
  <n>Пятый элемент</n>[![](../../../minus.gif)](../../../#)<a>
  <it>5</it>  <it>A000127</it>  </a>
  <k>5</k>  <h>0</h>  <o>0</o>  </e>
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
     "pattern" :
      {
       "attributes" : "ID;CODE",
       "attributeValuesOnly" : "true",
       "extendedAttributeValuesOnly" : "false",
       "getParentKey" : "true",
       "getHasChildren" : "true",
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
         "@hc" : "1",
         "@l" : "0",
         "n" : "Первый элемент",
         "a" :
          {
           "it" :
            [
              "1",
              "A000123"
            ]
          },
         "k" : "1",
         "h" : "1",
         "o" : "0"
        },
        {
         "@hc" : "1",
         "@l" : "1",
         "n" : "Второй элемент",
         "a" :
          {
           "it" :
            [
              "2",
              "A000124"
            ]
          },
         "k" : "2",
         "h" : "1",
         "o" : "1",
         "p" : "1"
        },
        {
         "@hc" : "0",
         "@l" : "2",
         "n" : "Третий элемент",
         "a" :
          {
           "it" :
            [
              "3",
              "A000125"
            ]
          },
         "k" : "3",
         "h" : "0",
         "o" : "2",
         "p" : "2"
        },
        {
         "@hc" : "0",
         "@l" : "0",
         "n" : "Четвертый элемент",
         "a" :
          {
           "it" :
            [
              "4",
              "A000126"
            ]
          },
         "k" : "4",
         "h" : "0",
         "o" : "0"
        },
        {
         "@hc" : "0",
         "@l" : "0",
         "n" : "Пятый элемент",
         "a" :
          {
           "it" :
            [
              "5",
              "A000127"
            ]
          },
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


public static GetDimElementsResult GetAttributesValue(DmId moniker, string attributes)
{
var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
//Параметры выполнения операции
var tElements = new GetDimElements()
{
    tArg = new GetDimElementsArg()
    {
        //Шаблон, в соответствии с которым будет извлекаться информация
        pattern = new ElsPattern()
        {
            attributes = attributes,
            getHasChildren = true,
            getLevel = true,
            getParentKey = true,
            attributeValuesOnly = true,
            extendedAttributeValuesOnly = false
        }
    },
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
