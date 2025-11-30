# Отметка группы элементов: Операция ChangeDimSelection

Отметка группы элементов: Операция ChangeDimSelection
-


**


# Отметка группы элементов


Ниже приведен пример использования операции [ChangeDimSelection](../ChangeDimSelection.htm)
 для отметки группы элементов справочника. В запросе передается моникёр
 открытого экземпляра справочника и идентификатор группы элементов. В ответе
 приходит сводная информация об отмеченных элементах и моникёр нового экземпляра
 справочника.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<ChangeDimSelection xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tDim xmlns="****">
  <id>S1!M!S!S1</id>  </tDim>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
  <newInstance>true</newInstance>[![](../../../minus.gif)](../../../#)<setGroup>
  <id>GROUP1</id>  </setGroup>
  <elSelectOp>Unknown</elSelectOp>  <elRelative>Unknown</elRelative>  </tArg>
  </ChangeDimSelection>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<ChangeDimSelectionResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <id xmlns="****">S1!M!S!S5</id>[![](../../../minus.gif)](../../../#)<selectionInfo xmlns="****">
[![](../../../minus.gif)](../../../#)<firstSelected>
  <n>Второй элемент</n>[![](../../../minus.gif)](../../../#)<a>
  <it>Второй элемент</it>  <it>2</it>  <it>2</it>  <it>1</it>  <it>A000124</it>  </a>
[![](../../../minus.gif)](../../../#)<ea>
  <it v="**Второй элемент**" />
  <it v="**2**" />
  <it v="**2**" />
  <it v="**1**" />
  <it v="**A000124**" />
  </ea>
  <k>2</k>  <h>0</h>  <o>1</o>  </firstSelected>
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
  <selectedCount>2</selectedCount>[![](../../../minus.gif)](../../../#)<schema>
  <k>4294967295</k>  <vis>1</vis>  <applyOnlyOnce>0</applyOnlyOnce>  <onceApplied>0</onceApplied>  <applyOnRebuild>0</applyOnRebuild>  </schema>
[![](../../../minus.gif)](../../../#)<group>
  <k>157</k>  <id>GROUP1</id>  <n>Группа элементов (по списку)</n>  <vis>1</vis>  </group>
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
     "setGroup" :
      {
       "id" : "GROUP1"
      },
     "elSelectOp" : "Unknown",
     "elRelative" : "Unknown"
    }
  }
}

### JSON-ответ:


{
 "ChangeDimSelectionResult" :
  {
   "id" : "S1!M!S!S5",
   "selectionInfo" :
    {
     "firstSelected" :
      {
       "n" : "Второй элемент",
       "a" :
        {
         "it" :
          [
            "Второй элемент",
            "2",
            "2",
            "1",
            "A000124"
          ]
        },
       "ea" :
        {
         "it" :
          [
            {
             "@v" : "Второй элемент"
            },
            {
             "@v" : "2"
            },
            {
             "@v" : "2"
            },
            {
             "@v" : "1"
            },
            {
             "@v" : "A000124"
            }
          ]
        },
       "k" : "2",
       "h" : "0",
       "o" : "1"
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
     "selectedCount" : "2",
     "schema" :
      {
       "k" : "4294967295",
       "vis" : "1",
       "applyOnlyOnce" : "0",
       "onceApplied" : "0",
       "applyOnRebuild" : "0"
      },
     "group" :
      {
       "k" : "157",
       "id" : "GROUP1",
       "n" : "Группа элементов (по списку)",
       "vis" : "1"
      }
    }
  }
}


public static ChangeDimSelectionResult ApplyGroup(DmId moniker, string groupId)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tSel = new ChangeDimSelection()
    {
        tArg = new ChangeDimSelectionArg()
        {
            newInstance = true,
            setGroup = new DmSelectGroupArg() { id = groupId }
        },
        tDim = moniker
    };
    //Отметка группы элементов
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
