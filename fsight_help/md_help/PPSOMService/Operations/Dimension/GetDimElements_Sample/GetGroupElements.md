# Отбор элементов, соответствующих группе элементов: Операция GetDimElements

Отбор элементов, соответствующих группе элементов: Операция GetDimElements
-


**


# Отбор элементов, соответствующих группе элементов


Ниже приведен пример использования операции [GetDimElements](../GetDimElements.htm)
 для отбора элементов с использованием группы элементов справочника. В
 запросе передается моникёр открытого экземпляра справочника и идентификатор
 группы элементов. Для отобранных элементов будут загружены идентификаторы
 и наименования.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<GetDimElements xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tDim xmlns="****">
  <id>S1!M!S!S1</id>  </tDim>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<filter>
  <includeParents>false</includeParents>  <includeParentsWithSiblings>false</includeParentsWithSiblings>[![](../../../minus.gif)](../../../#)<group>
  <k>18446744073709551615</k>  <id>GROUP1</id>  </group>
  </filter>
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
[![](../../../minus.gif)](../../../#)<e>
  <n>Четвертый элемент</n>[![](../../../minus.gif)](../../../#)<a>
  <it>4</it>  <it>Четвертый элемент</it>  </a>
[![](../../../minus.gif)](../../../#)<ea>
  <it v="**4**" />
  <it v="**Четвертый элемент**" />
  </ea>
  <k>4</k>  <h>0</h>  <o>0</o>  </e>
[![](../../../minus.gif)](../../../#)<e>
  <n>Пятый элемент</n>[![](../../../minus.gif)](../../../#)<a>
  <it>5</it>  <it>Пятый элемент</it>  </a>
[![](../../../minus.gif)](../../../#)<ea>
  <it v="**5**" />
  <it v="**Пятый элемент**" />
  </ea>
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
     "filter" :
      {
       "includeParents" : "false",
       "includeParentsWithSiblings" : "false",
       "group" :
        {
         "k" : "18446744073709551615",
         "id" : "GROUP1"
        }
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
        },
        {
         "n" : "Четвертый элемент",
         "a" :
          {
           "it" :
            [
              "4",
              "Четвертый элемент"
            ]
          },
         "ea" :
          {
           "it" :
            [
              {
               "@v" : "4"
              },
              {
               "@v" : "Четвертый элемент"
              }
            ]
          },
         "k" : "4",
         "h" : "0",
         "o" : "0"
        },
        {
         "n" : "Пятый элемент",
         "a" :
          {
           "it" :
            [
              "5",
              "Пятый элемент"
            ]
          },
         "ea" :
          {
           "it" :
            [
              {
               "@v" : "5"
              },
              {
               "@v" : "Пятый элемент"
              }
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


public static GetDimElementsResult GetGroupElements(DmId moniker, string groupId)
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
                group = new ItKey() { id = groupId, k = uint.MaxValue }
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
