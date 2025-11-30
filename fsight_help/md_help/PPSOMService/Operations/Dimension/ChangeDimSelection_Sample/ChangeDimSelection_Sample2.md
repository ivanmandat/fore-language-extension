# Применение альтернативной иерархии в отметке: Операция ChangeDimSelection

Применение альтернативной иерархии в отметке: Операция ChangeDimSelection
-


**


# Применение альтернативной иерархии в отметке


Ниже приведен пример использования операции [ChangeDimSelection](../ChangeDimSelection.htm)
 для применения альтернативной иерархии в отметке элементов справочника.
 В запросе передается моникёр открытого экземпляра справочника и идентификатор
 альтернативной иерархии, а также параметры изменения отметки, в соответствии
 с которыми будет установлена отметка после применения альтернативной иерархии.
 В ответе приходит сводная информация об отмеченных элементах и моникёр
 нового экземпляра справочника.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<ChangeDimSelection xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tDim xmlns="****">
  <id>S1!M!S!S1</id>  </tDim>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
  <newInstance>true</newInstance>[![](../../../minus.gif)](../../../#)<setHierarchy>
  <id>SOURCE1</id>  </setHierarchy>
  <elSelectOp>Unknown</elSelectOp>  <elRelative>Unknown</elRelative>[![](../../../minus.gif)](../../../#)<next>
  <elSelectOp>Select</elSelectOp>  <elRelative>All</elRelative>  </next>
  </tArg>
  </ChangeDimSelection>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<ChangeDimSelectionResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <id xmlns="****">S1!M!S!S6</id>[![](../../../minus.gif)](../../../#)<selectionInfo xmlns="****">
[![](../../../minus.gif)](../../../#)<firstSelected>
  <n>One elemen</n>[![](../../../minus.gif)](../../../#)<a>
  <it>One elemen</it>  <it>1</it>  <it>1</it>  <it>0</it>  <it>A000123</it>  </a>
[![](../../../minus.gif)](../../../#)<ea>
  <it v="**One elemen**" />
  <it v="**1**" />
  <it v="**1**" />
  <it v="**0**" />
  <it v="**A000123**" />
  </ea>
  <k>1</k>  <h>0</h>  <o>0</o>  </firstSelected>
[![](../../../minus.gif)](../../../#)<lastSelected>
  <n>Third element</n>[![](../../../minus.gif)](../../../#)<a>
  <it>Third element</it>  <it>3</it>  <it>3</it>  <it>1</it>  <it>A000125</it>  </a>
[![](../../../minus.gif)](../../../#)<ea>
  <it v="**Third element**" />
  <it v="**3**" />
  <it v="**3**" />
  <it v="**1**" />
  <it v="**A000125**" />
  </ea>
  <k>3</k>  <h>0</h>  <o>1</o>  </lastSelected>
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
     "setHierarchy" :
      {
       "id" : "SOURCE1"
      },
     "elSelectOp" : "Unknown",
     "elRelative" : "Unknown",
     "next" :
      {
       "elSelectOp" : "Select",
       "elRelative" : "All"
      }
    }
  }
}

### JSON-ответ:


{
 "ChangeDimSelectionResult" :
  {
   "id" : "S1!M!S!S6",
   "selectionInfo" :
    {
     "firstSelected" :
      {
       "n" : "One elemen",
       "a" :
        {
         "it" :
          [
            "One elemen",
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
             "@v" : "One elemen"
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
       "n" : "Third element",
       "a" :
        {
         "it" :
          [
            "Third element",
            "3",
            "3",
            "1",
            "A000125"
          ]
        },
       "ea" :
        {
         "it" :
          [
            {
             "@v" : "Third element"
            },
            {
             "@v" : "3"
            },
            {
             "@v" : "3"
            },
            {
             "@v" : "1"
            },
            {
             "@v" : "A000125"
            }
          ]
        },
       "k" : "3",
       "h" : "0",
       "o" : "1"
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


public static ChangeDimSelectionResult ApplyHierarchy(DmId moniker, string hierarchyId)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tSel = new ChangeDimSelection()
    {
        tArg = new ChangeDimSelectionArg()
        {
            newInstance = true,
            setHierarchy = new DmHierArg() { id = hierarchyId },
            //После применения альтернативной иерархии отметить все элементы
            next = new DmSelectionArg()
            {
                elRelative = DmElRelative.All,
                elSelectOp = DmElSelectOp.Select
            }
        },
        tDim = moniker
    };
    //Применение альтернативной иерархии и отметка элементов
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
