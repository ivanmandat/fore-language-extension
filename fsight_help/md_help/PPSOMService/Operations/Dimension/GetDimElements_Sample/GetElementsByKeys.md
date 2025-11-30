# Отбор элементов по их ключам: Операция GetDimElements

Отбор элементов по их ключам: Операция GetDimElements
-


**


# Отбор элементов по их ключам


Ниже приведен пример использования операции [GetDimElements](../GetDimElements.htm)
 для отбора элементов по их ключам. Под ключом понимается значение атрибута
 «Идентификатор» для элемента. В запросе передается моникёр открытого экземпляра
 справочника и коллекция ключей элементов. Для отобранных элементов будут
 загружены идентификаторы и наименования.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<GetDimElements xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tDim xmlns="****">
  <id>S1!M!S!S1</id>  </tDim>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<filter>
[![](../../../minus.gif)](../../../#)<keys>
[![](../../../minus.gif)](../../../#)<it>
  <key>1</key>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <key>2</key>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <key>3</key>  </it>
  </keys>
  <includeParents>false</includeParents>  <includeParentsWithSiblings>false</includeParentsWithSiblings>  </filter>
[![](../../../minus.gif)](../../../#)<pattern>
  <attributes>ID;NAME</attributes>  <getImageIndex>true</getImageIndex>  </pattern>
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
  <n>Первый элемент</n>[![](../../../minus.gif)](../../../#)<a>
  <it>1</it>  <it>Первый элемент</it>  </a>
[![](../../../minus.gif)](../../../#)<ea>
  <it v="**1**" />
  <it v="**Первый элемент**" />
  </ea>
  <k>1</k>  <h>0</h>  <o>0</o>  </e>
[![](../../../minus.gif)](../../../#)<e>
  <n>Второй элемент</n>[![](../../../minus.gif)](../../../#)<a>
  <it>2</it>  <it>Второй элемент</it>  </a>
[![](../../../minus.gif)](../../../#)<ea>
  <it v="**2**" />
  <it v="**Второй элемент**" />
  </ea>
  <k>2</k>  <h>0</h>  <o>1</o>  </e>
[![](../../../minus.gif)](../../../#)<e>
  <n>Третий элемент</n>[![](../../../minus.gif)](../../../#)<a>
  <it>3</it>  <it>Третий элемент</it>  </a>
[![](../../../minus.gif)](../../../#)<ea>
  <it v="**3**" />
  <it v="**Третий элемент**" />
  </ea>
  <k>3</k>  <h>0</h>  <o>2</o>  </e>
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
       "keys" :
        {
         "it" :
          [
            {
             "key" : "1"
            },
            {
             "key" : "2"
            },
            {
             "key" : "3"
            }
          ]
        },
       "includeParents" : "false",
       "includeParentsWithSiblings" : "false"
      },
     "pattern" :
      {
       "attributes" : "ID;NAME",
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
         "n" : "Первый элемент",
         "a" :
          {
           "it" :
            [
              "1",
              "Первый элемент"
            ]
          },
         "ea" :
          {
           "it" :
            [
              {
               "@v" : "1"
              },
              {
               "@v" : "Первый элемент"
              }
            ]
          },
         "k" : "1",
         "h" : "0",
         "o" : "0"
        },
        {
         "n" : "Второй элемент",
         "a" :
          {
           "it" :
            [
              "2",
              "Второй элемент"
            ]
          },
         "ea" :
          {
           "it" :
            [
              {
               "@v" : "2"
              },
              {
               "@v" : "Второй элемент"
              }
            ]
          },
         "k" : "2",
         "h" : "0",
         "o" : "1"
        },
        {
         "n" : "Третий элемент",
         "a" :
          {
           "it" :
            [
              "3",
              "Третий элемент"
            ]
          },
         "ea" :
          {
           "it" :
            [
              {
               "@v" : "3"
              },
              {
               "@v" : "Третий элемент"
              }
            ]
          },
         "k" : "3",
         "h" : "0",
         "o" : "2"
        }
      ]
    },
   "id" :
    {
     "id" : "S1!M!S!S1"
    }
  }
}


public static GetDimElementsResult GetElementsByKeys(DmId moniker, ElKey[] elKeys)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tElements = new GetDimElements()
    {
        tArg = new GetDimElementsArg()
        {
            pattern = new ElsPattern()
            {
                attributes = "ID;NAME"
            },
            //Параметры фильтрации элементов
            filter = new ElsFilter()
            {
                keys = elKeys
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
