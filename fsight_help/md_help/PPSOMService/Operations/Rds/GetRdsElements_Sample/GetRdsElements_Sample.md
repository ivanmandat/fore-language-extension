# Получение истории изменения элементов: Операция GetRdsElements

Получение истории изменения элементов: Операция GetRdsElements
-


**


# Получение истории изменения элементов


Ниже приведен пример использования операции [GetRdsElements](../GetRdsElements.htm)
 для получения истории изменения элементов справочника НСИ. В запросе передается
 моникёр открытого экземпляра справочника. В ответе приходит информация
 об истории изменений элементов. Каждая запись истории содержит: наименование
 элемента в соответствующий период, значения всех атрибутов, дату начала
 и окончания периода действия.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<GetRdsElements xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tRds xmlns="****">
  <id>S1!M!S!N3</id>  </tRds>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<parent>
  <key />
  </parent>
[![](../../../minus.gif)](../../../#)<filter>
  <levels>-1</levels>  <includeRoot>false</includeRoot>  <onlySelected>false</onlySelected>  <includeParents>true</includeParents>  <includeParentsWithSiblings>true</includeParentsWithSiblings>  </filter>
[![](../../../minus.gif)](../../../#)<pattern>
  <attributes>*</attributes>  <attributeValuesOnly>false</attributeValuesOnly>  <extendedAttributeValuesOnly>true</extendedAttributeValuesOnly>  <getSelectState>true</getSelectState>  <getParentKey>true</getParentKey>  <getHasChildren>true</getHasChildren>  <getLevel>true</getLevel>  <getHasSelectedChildren>true</getHasSelectedChildren>  <getHistory>true</getHistory>  <getImageIndex>true</getImageIndex>  </pattern>
  </tArg>
  </GetRdsElements>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<GetRdsElementsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<els xmlns="****">
[![](../../../minus.gif)](../../../#)<e hc="**0**" l="**1**">
  <n>Факт 1</n>[![](../../../minus.gif)](../../../#)<ea>
  <it v="**2**" />
  <it v="**Факт 1**" />
  <it />
  <it v="**64**" />
  <it v="**2**" />
  <it v="**2020-01-01**" />
  <it v="**2020-02-01**" />
  </ea>
  <k>2</k>  <h>0</h>  <o>0</o>  <p>4294967294</p>[![](../../../minus.gif)](../../../#)<hist>
[![](../../../minus.gif)](../../../#)<it>
  <n>Факт 1</n>[![](../../../minus.gif)](../../../#)<ea>
  <it v="**2**" />
  <it v="**Факт 1**" />
  <it />
  <it v="**64**" />
  <it v="**2**" />
  <it v="**2020-01-01**" />
  <it v="**2020-02-01**" />
  </ea>
  <inDate>2020-01-01</inDate>  <outDate>2020-02-01</outDate>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <n>Факт</n>[![](../../../minus.gif)](../../../#)<ea>
  <it v="**2**" />
  <it v="**Факт**" />
  <it />
  <it v="**64**" />
  <it v="**3**" />
  <it v="**2020-02-01**" />
  <it v="**2020-03-01**" />
  </ea>
  <inDate>2020-02-01</inDate>  <outDate>2020-03-01</outDate>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <n>Данные</n>[![](../../../minus.gif)](../../../#)<ea>
  <it v="**2**" />
  <it v="**Данные**" />
  <it />
  <it v="**64**" />
  <it v="**4**" />
  <it v="**2020-03-01**" />
  <it v="**2999-12-31**" />
  </ea>
  <inDate>2020-03-01</inDate>  <outDate>2999-12-31</outDate>  </it>
  </hist>
  </e>
  </els>
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>S1!M!S!N3</id>  </id>
  </GetRdsElementsResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetRdsElements" :
  {
   "tRds" :
    {
     "id" : "S1!M!S!N3"
    },
   "tArg" :
    {
     "parent" :
      {
       "key" : ""
      },
     "filter" :
      {
       "levels" : "-1",
       "includeRoot" : "false",
       "onlySelected" : "false",
       "includeParents" : "true",
       "includeParentsWithSiblings" : "true"
      },
     "pattern" :
      {
       "attributes" : "*",
       "attributeValuesOnly" : "false",
       "extendedAttributeValuesOnly" : "true",
       "getSelectState" : "true",
       "getParentKey" : "true",
       "getHasChildren" : "true",
       "getLevel" : "true",
       "getHasSelectedChildren" : "true",
       "getHistory" : "true",
       "getImageIndex" : "true"
      }
    }
  }
}

### JSON-ответ:


{
 "GetRdsElementsResult" :
  {
   "els" :
    {
     "e" :
      {
       "@hc" : "0",
       "@l" : "1",
       "n" : "Факт 1",
       "ea" :
        {
         "it" :
          [
            {
             "@v" : "2"
            },
            {
             "@v" : "Факт 1"
            },
            "",
            {
             "@v" : "64"
            },
            {
             "@v" : "2"
            },
            {
             "@v" : "2020-01-01"
            },
            {
             "@v" : "2020-02-01"
            }
          ]
        },
       "k" : "2",
       "h" : "0",
       "o" : "0",
       "p" : "4294967294",
       "hist" :
        {
         "it" :
          [
            {
             "n" : "Факт 1",
             "ea" :
              {
               "it" :
                [
                  {
                   "@v" : "2"
                  },
                  {
                   "@v" : "Факт 1"
                  },
                  "",
                  {
                   "@v" : "64"
                  },
                  {
                   "@v" : "2"
                  },
                  {
                   "@v" : "2020-01-01"
                  },
                  {
                   "@v" : "2020-02-01"
                  }
                ]
              },
             "inDate" : "2020-01-01",
             "outDate" : "2020-02-01"
            },
            {
             "n" : "Факт",
             "ea" :
              {
               "it" :
                [
                  {
                   "@v" : "2"
                  },
                  {
                   "@v" : "Факт"
                  },
                  "",
                  {
                   "@v" : "64"
                  },
                  {
                   "@v" : "3"
                  },
                  {
                   "@v" : "2020-02-01"
                  },
                  {
                   "@v" : "2020-03-01"
                  }
                ]
              },
             "inDate" : "2020-02-01",
             "outDate" : "2020-03-01"
            },
            {
             "n" : "Данные",
             "ea" :
              {
               "it" :
                [
                  {
                   "@v" : "2"
                  },
                  {
                   "@v" : "Данные"
                  },
                  "",
                  {
                   "@v" : "64"
                  },
                  {
                   "@v" : "4"
                  },
                  {
                   "@v" : "2020-03-01"
                  },
                  {
                   "@v" : "2999-12-31"
                  }
                ]
              },
             "inDate" : "2020-03-01",
             "outDate" : "2999-12-31"
            }
          ]
        }
      }
    },
   "id" :
    {
     "id" : "S1!M!S!N3"
    }
  }
}


public static GetRdsElementsResult GetHistoryElements(RdsId moniker)
{
var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
//Параметры выполнения операции
var tGet = new GetRdsElements()
{
    tArg = new GetRdsElementsArg()
    {
        parent = new ElKey
        {
            key = string.Empty
        },
        filter = new ElsFilter
        {
            includeRoot = false,
            includeParents = true,
            includeParentsWithSiblings = true,
            onlySelected = false,
            levels = -1
        },
        pattern = new ElsPattern // Шаблон получения данных
        {
            getParentKey = true,
            getHasChildren = true,
            getHasSelectedChildren = true,
            getLevel = true,
            getSelectState = true,
            getHistory = true,
            attributes = "*",
            attributeValuesOnly = false,
            extendedAttributeValuesOnly = true
        },
    },
    tRds = moniker
};
// Получаем историю изменения элементов
var tResult = somClient.GetRdsElements(tGet);
return tResult;
}


См. также:


[GetRdsElements](../GetRdsElements.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
