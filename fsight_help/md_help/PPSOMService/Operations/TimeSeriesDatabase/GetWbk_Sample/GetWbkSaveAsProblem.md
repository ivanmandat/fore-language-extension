# Сохранение вычисляемого ряда в виде задачи моделирования

Сохранение вычисляемого ряда в виде задачи моделирования
-


**


# Сохранение вычисляемого ряда в виде задачи моделирования


Ниже приведен пример использования операции [GetWbkMd](../GetWbkMd.htm) для сохранения вычисляемого
 ряда в качестве задачи моделирования. В запросе передаются: экземпляр
 открытой рабочей книги, шаблон сохранения задачи моделирования. В ответе
 приходит описание созданной задачи.


Важно. Перед
 сохранением вычисляемого ряда в виде задачи моделирования для него должны
 быть заданы значения всех обязательных атрибутов.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<GetWbkMd xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tWbk xmlns="****">
  <id>S1!M!S!W7</id>  </tWbk>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<pattern>
  <obInst>true</obInst>  <useGridAutoAdjust>true</useGridAutoAdjust>[![](../../../minus.gif)](../../../#)<action>
[![](../../../minus.gif)](../../../#)<saveAsProblem>
[![](../../../minus.gif)](../../../#)<createInfo>
  <name>Задача моделирования</name>  <id />
  <permanent>true</permanent>  </createInfo>
  <series />
  </saveAsProblem>
  </action>
  </pattern>
  </tArg>
  </GetWbkMd>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<GetWbkMdResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>S1!M!S!W7</id>  </id>
[![](../../../minus.gif)](../../../#)<meta xmlns="****">
[![](../../../minus.gif)](../../../#)<obInst>
[![](../../../minus.gif)](../../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**2**" hf="**0**">
  <i>WBK_CALC</i>  <n>Вычисляемые ряды</n>  <k>5541</k>  <c>2827</c>  <p>5471</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  </obInst>
  <dirty>1</dirty>  <windowsPosition>Vertical</windowsPosition>  <hasPivot>0</hasPivot>  <hasLaner>1</hasLaner>[![](../../../minus.gif)](../../../#)<series count="**4**">
  <its />
  </series>
[![](../../../minus.gif)](../../../#)<action>
[![](../../../minus.gif)](../../../#)<saveAsProblem>
[![](../../../minus.gif)](../../../#)<object ds="****" isShortcut="**0**" isLink="**0**" ver="**1**" hf="**0**">
  <i>OBJ219714</i>  <n>Задача моделирования</n>  <k>219714</k>  <c>5123</c>  <p>5474</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>[![](../../../minus.gif)](../../../#)<obId>
  <id />
  </obId>
  </object>
  </saveAsProblem>
  </action>
  </meta>
  </GetWbkMdResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetWbkMd" :
  {
   "tWbk" :
    {
     "id" : "S1!M!S!W7"
    },
   "tArg" :
    {
     "pattern" :
      {
       "obInst" : "true",
       "useGridAutoAdjust" : "true",
       "action" :
        {
         "saveAsProblem" :
          {
           "createInfo" :
            {
             "name" : "Задача моделирования",
             "id" : "",
             "permanent" : "true"
            },
           "series" : ""
          }
        }
      }
    }
  }
}

### JSON-ответ:


{
 "GetWbkMdResult" :
  {
   "id" :
    {
     "id" : "S1!M!S!W7"
    },
   "meta" :
    {
     "obInst" :
      {
       "obDesc" :
        {
         "@ds" : "",
         "@isShortcut" : "0",
         "@isLink" : "0",
         "@ver" : "2",
         "@hf" : "0",
         "i" : "WBK_CALC",
         "n" : "Вычисляемые ряды",
         "k" : "5541",
         "c" : "2827",
         "p" : "5471",
         "h" : "0",
         "hasPrv" : "0",
         "ic" : "0",
         "trackElementDependents" : "0",
         "isPermanent" : "1",
         "isTemp" : "0"
        }
      },
     "dirty" : "1",
     "windowsPosition" : "Vertical",
     "hasPivot" : "0",
     "hasLaner" : "1",
     "series" :
      {
       "@count" : "4",
       "its" : ""
      },
     "action" :
      {
       "saveAsProblem" :
        {
         "object" :
          {
           "@ds" : "",
           "@isShortcut" : "0",
           "@isLink" : "0",
           "@ver" : "1",
           "@hf" : "0",
           "i" : "OBJ219714",
           "n" : "Задача моделирования",
           "k" : "219714",
           "c" : "5123",
           "p" : "5474",
           "h" : "0",
           "hasPrv" : "0",
           "ic" : "0",
           "trackElementDependents" : "0",
           "obId" :
            {
             "id" : ""
            }
          }
        }
      }
    }
  }
}


public static WbkSaveAsProblemResult GetWbkSaveAsProblem(WbkId wbk, ItKey[] series)
{// Задаём параметры выполнения операции
    var tOp = new GetWbkMd
    {
        tWbk = wbk,
        tArg = new GetWbkMdArg
        {// Задаём шаблон извлечения данных
            pattern = new WbkMdPattern
            {
                action = new WbkActionArg()
                {
                    saveAsProblem = new WbkSaveAsProblemArg()
                    {
                        createInfo = new ObjectCreateBaseInfo()
                        {
                            id = "",
                            name = "Задача моделирования",
                            permanent = true
                        },
                        series = series
                    }
                }
            }
        }
    };
    // Создаем прокси-объект для выполнения операции
    var somClient = new SomPortTypeClient();
    // Выполнение операции
    var gRes = somClient.GetWbkMd(tOp);
    WbkActionResult actRes = gRes.meta.action;
    WbkSaveAsProblemResult saveProblRes = actRes.saveAsProblem;
    Console.WriteLine("Идентификатор созданной задачи: " + saveProblRes.@object.i);
    return saveProblRes;
}


См. также:


[GetWbkMd:
 Операция](../GetWbkMd.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
