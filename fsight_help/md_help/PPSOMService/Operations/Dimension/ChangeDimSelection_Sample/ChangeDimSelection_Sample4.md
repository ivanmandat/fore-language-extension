# Изменение отметки элементов заданного уровня: Операция ChangeDimSelection

Изменение отметки элементов заданного уровня: Операция ChangeDimSelection
-


**


# Изменение отметки элементов заданного уровня


Ниже приведен пример использования операции [ChangeDimSelection](../ChangeDimSelection.htm)
 для отметки элементов заданного уровня. В запросе передается моникёр открытого
 экземпляра справочника и идентификатор уровня, на котором расположены
 выделяемые элементы. В ответе приходит сводная информация об отмеченных
 элементах.


В примере C# моникёр и идентификатор уровня передаются в качестве входных
 параметров функции.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<ChangeDimSelection xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tDim xmlns="****">
  <id>S1!M!S!S1</id>  </tDim>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
  <newInstance>true</newInstance>  <elSelectOp>Unknown</elSelectOp>  <elRelative>Unknown</elRelative>[![](../../../minus.gif)](../../../#)<setLevel>
  <k>18446744073709551615</k>  <id>LEVEL1</id>  <selectOp>Select</selectOp>  </setLevel>
  </tArg>
  </ChangeDimSelection>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<ChangeDimSelectionResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <id xmlns="****">S1!M!S!S8</id>[![](../../../minus.gif)](../../../#)<selectionInfo xmlns="****">
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
  <n>Пятый элемент</n>[![](../../../minus.gif)](../../../#)<a>
  <it>Пятый элемент</it>  <it>5</it>  <it>5</it>  <it>0</it>  <it>A000127</it>  </a>
[![](../../../minus.gif)](../../../#)<ea>
  <it v="**Пятый элемент**" />
  <it v="**5**" />
  <it v="**5**" />
  <it v="**0**" />
  <it v="**A000127**" />
  </ea>
  <k>5</k>  <h>0</h>  <o>0</o>  </lastSelected>
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
     "elSelectOp" : "Unknown",
     "elRelative" : "Unknown",
     "setLevel" :
      {
       "k" : "18446744073709551615",
       "id" : "LEVEL1",
       "selectOp" : "Select"
      }
    }
  }
}

### JSON-ответ:


{
 "ChangeDimSelectionResult" :
  {
   "id" : "S1!M!S!S8",
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
       "n" : "Пятый элемент",
       "a" :
        {
         "it" :
          [
            "Пятый элемент",
            "5",
            "5",
            "0",
            "A000127"
          ]
        },
       "ea" :
        {
         "it" :
          [
            {
             "@v" : "Пятый элемент"
            },
            {
             "@v" : "5"
            },
            {
             "@v" : "5"
            },
            {
             "@v" : "0"
            },
            {
             "@v" : "A000127"
            }
          ]
        },
       "k" : "5",
       "h" : "0",
       "o" : "0"
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


public static ChangeDimSelectionResult SelectLevel(DmId moniker, string lvlId)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tSel = new ChangeDimSelection()
    {
        tArg = new ChangeDimSelectionArg()
        {
            newInstance = true,
            elSelectOp = DmElSelectOp.Unknown,
            elRelative = DmElRelative.Unknown,
            setLevel = new DmSelectLevelArg() { id = lvlId, k = uint.MaxValue, selectOp = DmElSelectOp.Select },
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
