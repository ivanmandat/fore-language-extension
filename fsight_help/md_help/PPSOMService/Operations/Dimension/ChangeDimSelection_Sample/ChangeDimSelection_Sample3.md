# Поэтапное изменение отметки в рамках одной операции: Операция ChangeDimSelection

Поэтапное изменение отметки в рамках одной операции: Операция ChangeDimSelection
-


**


# Поэтапное изменение отметки в рамках одной операции


Ниже приведен пример использования операции [ChangeDimSelection](../ChangeDimSelection.htm)
 для изменения отметки элементов. В запросе передается моникёр открытого
 экземпляра справочника и два набора параметров, в соответствии с которыми
 будет изменена отметка. Сначала будут отмечены все элементы, затем отметка
 будет снята с непосредственных дочерних элементов элемента с ключом «1».
 В ответе будет сводная информация об отмеченных элементах и моникёр нового
 экземпляра справочника.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<ChangeDimSelection xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tDim xmlns="****">
  <id>S1!M!S!S1</id>  </tDim>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
  <newInstance>true</newInstance>  <elSelectOp>Select</elSelectOp>  <elRelative>All</elRelative>[![](../../../minus.gif)](../../../#)<next>
  <elSelectOp>Deselect</elSelectOp>  <elRelative>Children</elRelative>[![](../../../minus.gif)](../../../#)<elKeys>
[![](../../../minus.gif)](../../../#)<it>
  <key>1</key>  </it>
  </elKeys>
  </next>
  </tArg>
  </ChangeDimSelection>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<ChangeDimSelectionResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <id xmlns="****">S1!M!S!S7</id>[![](../../../minus.gif)](../../../#)<selectionInfo xmlns="****">
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
  <selectedCount>4</selectedCount>[![](../../../minus.gif)](../../../#)<schema>
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
     "elRelative" : "All",
     "next" :
      {
       "elSelectOp" : "Deselect",
       "elRelative" : "Children",
       "elKeys" :
        {
         "it" :
          {
           "key" : "1"
          }
        }
      }
    }
  }
}

### JSON-ответ:


{
 "ChangeDimSelectionResult" :
  {
   "id" : "S1!M!S!S7",
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
     "selectedCount" : "4",
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


public static ChangeDimSelectionResult ChangeSelectionWithNext(DmId moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tSel = new ChangeDimSelection()
    {
        tArg = new ChangeDimSelectionArg()
        {
            //1 этап. Выделить все элементы
            newInstance = true,
            elRelative = DmElRelative.All,
            elSelectOp = DmElSelectOp.Select,
            //2 этап. Снять отметку с непосредственных дочерних элементов указанного элемента
            next = new DmSelectionArg()
            {
                elKeys = new ElKey[1]
                {
                    new ElKey() { key = "1"}
                },
                elRelative = DmElRelative.Children,
                elSelectOp = DmElSelectOp.Deselect
            }
        },
        tDim = moniker
    };
    //Изменение отметки
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
