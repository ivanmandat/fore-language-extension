# Дополнение одной отметки отмеченными элементами другой отметки: Операция ChangeDimSelection

Дополнение одной отметки отмеченными элементами другой отметки: Операция ChangeDimSelection
-


**


# Дополнение одной отметки отмеченными элементами другой отметки


Ниже приведен пример использования операции [ChangeDimSelection](../ChangeDimSelection.htm)
 для дополнения отметки одного экземпляра справочника отметкой другого
 справочника. В запросе передаются моникёр исходного справочника, отметка
 которого будет изменена, и моникёр справочника-источника, отметка которого
 будет добавлена. В ответе приходит сводная информация об отмеченных элементах,
 полученных в результате объединения двух отметок.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<ChangeDimSelection xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tDim xmlns="****">
  <id>S1!M!S!S4</id>  </tDim>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
  <elSelectOp>Unknown</elSelectOp>  <elRelative>Unknown</elRelative>[![](../../../minus.gif)](../../../#)<assign>
[![](../../../minus.gif)](../../../#)<source xsi:type="**q1:ChangeDimSelectionResult**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**">
  <id>S1!M!S!S5</id>[![](../../../minus.gif)](../../../#)<selectionInfo>
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
  <k>2</k>  <h>false</h>  <o>1</o>  </firstSelected>
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
  <k>3</k>  <h>false</h>  <o>2</o>  </lastSelected>
  <selectedCount>2</selectedCount>[![](../../../minus.gif)](../../../#)<schema>
  <k>4294967295</k>  <vis>true</vis>  <applyOnlyOnce>false</applyOnlyOnce>  <onceApplied>false</onceApplied>  <applyImmediate>true</applyImmediate>  <applyOnRebuild>false</applyOnRebuild>  </schema>
[![](../../../minus.gif)](../../../#)<group>
  <k>157</k>  <id>GROUP1</id>  <n>Группа элементов (по списку)</n>  <vis>true</vis>  </group>
  </selectionInfo>
  </source>
  <append>true</append>  <keepGroup>true</keepGroup>  <keepSchema>true</keepSchema>  </assign>
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
     "id" : "S1!M!S!S4"
    },
   "tArg" :
    {
     "elSelectOp" : "Unknown",
     "elRelative" : "Unknown",
     "assign" :
      {
       "source" :
        {
         "@type" : "q1:ChangeDimSelectionResult",
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
             "h" : "false",
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
             "h" : "false",
             "o" : "2"
            },
           "selectedCount" : "2",
           "schema" :
            {
             "k" : "4294967295",
             "vis" : "true",
             "applyOnlyOnce" : "false",
             "onceApplied" : "false",
             "applyImmediate" : "true",
             "applyOnRebuild" : "false"
            },
           "group" :
            {
             "k" : "157",
             "id" : "GROUP1",
             "n" : "Группа элементов (по списку)",
             "vis" : "true"
            }
          }
        },
       "append" : "true",
       "keepGroup" : "true",
       "keepSchema" : "true"
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


public static ChangeDimSelectionResult AppendSelection(string moniker, DmId source)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tSel = new ChangeDimSelection()
    {
        tArg = new ChangeDimSelectionArg()
        {
            assign = new DmSelectionAssignArg()
            {
                append = true,
                keepGroup = true,
                keepSchema = true,
                source = source
            }
        },
        tDim = new DmId() { id = moniker }
    };
    //Изменение отметки
    var result = somClient.ChangeDimSelection(tSel);
    return result;
}


См. также:


[ChangeDimSelection](../ChangeDimSelection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
