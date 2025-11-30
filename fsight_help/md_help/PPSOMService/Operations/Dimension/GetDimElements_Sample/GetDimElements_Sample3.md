# Получение информации об отметке элементов: Операция GetDimElements

Получение информации об отметке элементов: Операция GetDimElements
-


**


# Получение информации об отметке элементов


Ниже приведен пример использования операции [GetDimElements](../GetDimElements.htm)
 для получения информации об отметке элементов. В запросе передается моникёр
 открытого экземпляра справочника и параметры извлечения информации об
 элементах. В параметрах указан признак извлечения сводной информации об
 отметке, информации об отметке каждого элемента и информации об отметке
 дочерних элементов. В ответе информация об отметке элементов доступна
 в коллекции els, в поле s и hs
 каждого элемента. Сводная информация об отметке доступна в поле selectionInfo.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<GetDimElements xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tDim xmlns="****">
  <id>S1!M!S!S2</id>  </tDim>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<pattern>
  <getSelectState>true</getSelectState>  <getHasSelectedChildren>true</getHasSelectedChildren>  <getImageIndex>true</getImageIndex>  </pattern>
  <selectionInfo>true</selectionInfo>  </tArg>
  </GetDimElements>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<GetDimElementsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<els xmlns="****">
[![](../../../minus.gif)](../../../#)<e hs="**1**">
  <n>2000</n>  <k>YEARS:2000</k>  <h>1</h>  <o>0</o>  <s>1</s>  </e>
[![](../../../minus.gif)](../../../#)<e hs="**1**">
  <n>I полугодие 2000</n>  <k>HALF_YEARS:1.2000</k>  <h>1</h>  <o>1</o>  <s>1</s>  </e>
[![](../../../minus.gif)](../../../#)<e hs="**0**">
  <n>I квартал 2000</n>  <k>QUARTERS:1.2000</k>  <h>0</h>  <o>2</o>  <s>1</s>  </e>
[![](../../../minus.gif)](../../../#)<e hs="**0**">
  <n>II квартал 2000</n>  <k>QUARTERS:2.2000</k>  <h>0</h>  <o>2</o>  <s>1</s>  </e>
[![](../../../minus.gif)](../../../#)<e hs="**1**">
  <n>II полугодие 2000</n>  <k>HALF_YEARS:2.2000</k>  <h>1</h>  <o>1</o>  <s>1</s>  </e>
[![](../../../minus.gif)](../../../#)<e hs="**0**">
  <n>III квартал 2000</n>  <k>QUARTERS:3.2000</k>  <h>0</h>  <o>2</o>  <s>1</s>  </e>
[![](../../../minus.gif)](../../../#)<e hs="**0**">
  <n>IV квартал 2000</n>  <k>QUARTERS:4.2000</k>  <h>0</h>  <o>2</o>  <s>0</s>  </e>
[![](../../../minus.gif)](../../../#)<e hs="**0**">
  <n>2001</n>  <k>YEARS:2001</k>  <h>1</h>  <o>0</o>  <s>0</s>  </e>
[![](../../../minus.gif)](../../../#)<e hs="**0**">
  <n>I полугодие 2001</n>  <k>HALF_YEARS:1.2001</k>  <h>1</h>  <o>1</o>  <s>0</s>  </e>
[![](../../../minus.gif)](../../../#)<e hs="**0**">
  <n>I квартал 2001</n>  <k>QUARTERS:1.2001</k>  <h>0</h>  <o>2</o>  <s>0</s>  </e>
[![](../../../minus.gif)](../../../#)<e hs="**0**">
  <n>II квартал 2001</n>  <k>QUARTERS:2.2001</k>  <h>0</h>  <o>2</o>  <s>0</s>  </e>
[![](../../../minus.gif)](../../../#)<e hs="**0**">
  <n>II полугодие 2001</n>  <k>HALF_YEARS:2.2001</k>  <h>1</h>  <o>1</o>  <s>0</s>  </e>
[![](../../../minus.gif)](../../../#)<e hs="**0**">
  <n>III квартал 2001</n>  <k>QUARTERS:3.2001</k>  <h>0</h>  <o>2</o>  <s>0</s>  </e>
[![](../../../minus.gif)](../../../#)<e hs="**0**">
  <n>IV квартал 2001</n>  <k>QUARTERS:4.2001</k>  <h>0</h>  <o>2</o>  <s>0</s>  </e>
  </els>
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>S1!M!S!S2</id>  </id>
[![](../../../minus.gif)](../../../#)<selectionInfo xmlns="****">
[![](../../../minus.gif)](../../../#)<firstSelected>
  <n>2000</n>  <k>YEARS:2000</k>  <h>0</h>  <o>0</o>  </firstSelected>
[![](../../../minus.gif)](../../../#)<lastSelected>
  <n>III квартал 2000</n>  <k>QUARTERS:3.2000</k>  <h>0</h>  <o>2</o>  </lastSelected>
  <selectedCount>6</selectedCount>[![](../../../minus.gif)](../../../#)<calendarPeriod>
  <active>1</active>  <start>2000-01-01</start>  <end>2000-07-01</end>[![](../../../minus.gif)](../../../#)<levels>
  <it>Year</it>  <it>HalfYear</it>  <it>Quarter</it>  </levels>
  </calendarPeriod>
[![](../../../minus.gif)](../../../#)<schema>
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
     "id" : "S1!M!S!S2"
    },
   "tArg" :
    {
     "pattern" :
      {
       "getSelectState" : "true",
       "getHasSelectedChildren" : "true",
       "getImageIndex" : "true"
      },
     "selectionInfo" : "true"
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
         "@hs" : "1",
         "n" : "2000",
         "k" : "YEARS:2000",
         "h" : "1",
         "o" : "0",
         "s" : "1"
        },
        {
         "@hs" : "1",
         "n" : "I полугодие 2000",
         "k" : "HALF_YEARS:1.2000",
         "h" : "1",
         "o" : "1",
         "s" : "1"
        },
        {
         "@hs" : "0",
         "n" : "I квартал 2000",
         "k" : "QUARTERS:1.2000",
         "h" : "0",
         "o" : "2",
         "s" : "1"
        },
        {
         "@hs" : "0",
         "n" : "II квартал 2000",
         "k" : "QUARTERS:2.2000",
         "h" : "0",
         "o" : "2",
         "s" : "1"
        },
        {
         "@hs" : "1",
         "n" : "II полугодие 2000",
         "k" : "HALF_YEARS:2.2000",
         "h" : "1",
         "o" : "1",
         "s" : "1"
        },
        {
         "@hs" : "0",
         "n" : "III квартал 2000",
         "k" : "QUARTERS:3.2000",
         "h" : "0",
         "o" : "2",
         "s" : "1"
        },
        {
         "@hs" : "0",
         "n" : "IV квартал 2000",
         "k" : "QUARTERS:4.2000",
         "h" : "0",
         "o" : "2",
         "s" : "0"
        },
        {
         "@hs" : "0",
         "n" : "2001",
         "k" : "YEARS:2001",
         "h" : "1",
         "o" : "0",
         "s" : "0"
        },
        {
         "@hs" : "0",
         "n" : "I полугодие 2001",
         "k" : "HALF_YEARS:1.2001",
         "h" : "1",
         "o" : "1",
         "s" : "0"
        },
        {
         "@hs" : "0",
         "n" : "I квартал 2001",
         "k" : "QUARTERS:1.2001",
         "h" : "0",
         "o" : "2",
         "s" : "0"
        },
        {
         "@hs" : "0",
         "n" : "II квартал 2001",
         "k" : "QUARTERS:2.2001",
         "h" : "0",
         "o" : "2",
         "s" : "0"
        },
        {
         "@hs" : "0",
         "n" : "II полугодие 2001",
         "k" : "HALF_YEARS:2.2001",
         "h" : "1",
         "o" : "1",
         "s" : "0"
        },
        {
         "@hs" : "0",
         "n" : "III квартал 2001",
         "k" : "QUARTERS:3.2001",
         "h" : "0",
         "o" : "2",
         "s" : "0"
        },
        {
         "@hs" : "0",
         "n" : "IV квартал 2001",
         "k" : "QUARTERS:4.2001",
         "h" : "0",
         "o" : "2",
         "s" : "0"
        }
      ]
    },
   "id" :
    {
     "id" : "S1!M!S!S2"
    },
   "selectionInfo" :
    {
     "firstSelected" :
      {
       "n" : "2000",
       "k" : "YEARS:2000",
       "h" : "0",
       "o" : "0"
      },
     "lastSelected" :
      {
       "n" : "III квартал 2000",
       "k" : "QUARTERS:3.2000",
       "h" : "0",
       "o" : "2"
      },
     "selectedCount" : "6",
     "calendarPeriod" :
      {
       "active" : "1",
       "start" : "2000-01-01",
       "end" : "2000-07-01",
       "levels" :
        {
         "it" :
          [
            "Year",
            "HalfYear",
            "Quarter"
          ]
        }
      },
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


public static GetDimElementsResult GetSelectionInfo(DmId moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tElements = new GetDimElements()
    {
        tArg = new GetDimElementsArg()
        {
            pattern = new ElsPattern()
            {
                getHasSelectedChildren = true,
                getSelectState = true
            },
            selectionInfo = true
        },
        tDim = moniker
    };
    //Получение информации об отметке элементов
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
