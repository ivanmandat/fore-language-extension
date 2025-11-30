# Изменение отметки указанных элементов: Операция ChangeDimSelection

Изменение отметки указанных элементов: Операция ChangeDimSelection
-


**


# Изменение отметки указанных элементов


Ниже приведен пример использования операции [ChangeDimSelection](../ChangeDimSelection.htm)
 для изменения отметки указанных элементов. В запросе передается моникёр
 открытого экземпляра справочника, список ключей элементов, а также параметры
 их отметки. В ответе приходит сводная информация об отмеченных элементах.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<ChangeDimSelection xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tDim xmlns="****">
  <id>S1!M!S!S1</id>  </tDim>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
  <newInstance>true</newInstance>  <elSelectOp>Select</elSelectOp>  <elRelative>Current</elRelative>[![](../../../minus.gif)](../../../#)<elKeys>
[![](../../../minus.gif)](../../../#)<it>
  <key>1</key>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <key>2</key>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <key>3</key>  </it>
  </elKeys>
  </tArg>
  </ChangeDimSelection>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<ChangeDimSelectionResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <id xmlns="****">S1!M!S!S4</id>[![](../../../minus.gif)](../../../#)<selectionInfo xmlns="****">
[![](../../../minus.gif)](../../../#)<firstSelected>
  <n>Первый элемент</n>[![](../../../minus.gif)](../../../#)<a>
  <it>Первый элемент</it>  <it>1</it>  <it>1</it>  <it>0</it>  <it>A000123</it>  </a>
[![](../../../minus.gif)](../../../#)<ea>
  <it v="**Первый элемент**" />
  <it v="**1**" />
  <it v="**1**" />
  <it v="**0**" />
  <it v="**A000123**" />
  </ea>
  <k>1</k>  <h>0</h>  <o>0</o>  </firstSelected>
[![](../../../minus.gif)](../../../#)<lastSelected>
  <n>Третий элемент</n>[![](../../../minus.gif)](../../../#)<a>
  <it>Третий элемент</it>  <it>3</it>  <it>3</it>  <it>2</it>  <it>A000125</it>  </a>
[![](../../../minus.gif)](../../../#)<ea>
  <it v="**Третий элемент**" />
  <it v="**3**" />
  <it v="**3**" />
  <it v="**2**" />
  <it v="**A000125**" />
  </ea>
  <k>3</k>  <h>0</h>  <o>2</o>  </lastSelected>
  <selectedCount>3</selectedCount>[![](../../../minus.gif)](../../../#)<schema>
  <k>4294967295</k>  <vis>1</vis>  <applyOnlyOnce>0</applyOnlyOnce>  <onceApplied>0</onceApplied>  <applyOnRebuild>0</applyOnRebuild>  </schema>
  </selectionInfo>
  </ChangeDimSelectionResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "ChangeDimSelection" :
  {
   "tDim" :
    {
     "id" : "S1!M!S!S1"
    },
   "tArg" :
    {
     "newInstance" : "true",
     "elSelectOp" : "Select",
     "elRelative" : "Current",
     "elKeys" :
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
      }
    }
  }
}

### JSON-ответ:


{
 "ChangeDimSelectionResult" :
  {
   "id" : "S1!M!S!S4",
   "selectionInfo" :
    {
     "firstSelected" :
      {
       "n" : "Первый элемент",
       "a" :
        {
         "it" :
          [
            "Первый элемент",
            "1",
            "1",
            "0",
            "A000123"
          ]
        },
       "ea" :
        {
         "it" :
          [
            {
             "@v" : "Первый элемент"
            },
            {
             "@v" : "1"
            },
            {
             "@v" : "1"
            },
            {
             "@v" : "0"
            },
            {
             "@v" : "A000123"
            }
          ]
        },
       "k" : "1",
       "h" : "0",
       "o" : "0"
      },
     "lastSelected" :
      {
       "n" : "Третий элемент",
       "a" :
        {
         "it" :
          [
            "Третий элемент",
            "3",
            "3",
            "2",
            "A000125"
          ]
        },
       "ea" :
        {
         "it" :
          [
            {
             "@v" : "Третий элемент"
            },
            {
             "@v" : "3"
            },
            {
             "@v" : "3"
            },
            {
             "@v" : "2"
            },
            {
             "@v" : "A000125"
            }
          ]
        },
       "k" : "3",
       "h" : "0",
       "o" : "2"
      },
     "selectedCount" : "3",
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


public static ChangeDimSelectionResult ChangeSelection(DmId moniker, ElKey[] selectedElements)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tSel = new ChangeDimSelection()
    {
        tArg = new ChangeDimSelectionArg()
        {
            newInstance = true,
            elKeys = selectedElements,
            elRelative = DmElRelative.Current,
            elSelectOp = DmElSelectOp.Select
        },
        tDim = moniker
    };
    //Отметка указанных элементов
    var result = somClient.ChangeDimSelection(tSel);
    return result;
}


См. также:


[ChangeDimSelection:
 Операция](../ChangeDimSelection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
