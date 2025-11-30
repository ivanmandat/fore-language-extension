# SetObject: Операция

SetObject: Операция
-


**


# SetObject


## Синтаксис


SetObjectResult SetObject(OdId tObject, SetObjectArg
 tArg)


## Параметры


tObject. Моникёр
 объекта, структуру которого необходимо изменить.


tArg. Параметры выполнения
 операции.


## Описание


Операция SetObject изменяет
 базовые свойства объекта репозитория.


## Комментарии


Операция позволяет изменить наименования, идентификаторы и значения
 параметров объекта репозитория. Также можно настраивать ярлыки на другие
 объекты репозитория. Для выполнения операции укажите в поле tObject
 моникёр объекта, а в поле tArg
 необходимые условия изменения свойств объекта. Все изменения сохраняются
 автоматически после завершения выполнения операции.


Если определено поле tArg.metaGet,
 то в результате выполнения операции будет получена обновленная информация
 об объекте.


## Пример


Ниже приведён пример изменения свойств ярлыка. В запросе передаётся
 моникёр ярлыка и метаданные нового объекта, на который будет ссылаться
 ярлык. В ответе приходят обновлённая информация о ярлыке.


	 SOAP JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetObject xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tObject xmlns="****">
  <id>S1!M!SHORTCUT_TO_REPORT</id>  </tObject>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<metaGet>
  <obInst>true</obInst>  <shortcutSource>true</shortcutSource>  </metaGet>
[![](../../minus.gif)](../../#)<pattern>
  <obInst>true</obInst>  <shortcutSource>true</shortcutSource>  </pattern>
[![](../../minus.gif)](../../#)<meta>
[![](../../minus.gif)](../../#)<shortcutSource>
[![](../../minus.gif)](../../#)<obDesc isShortcut="**false**" isLink="**false**" ds="****" ver="**5**" hf="**false**">
  <i>REPORT_1</i>  <n>Регламентный отчет</n>  <k>6334</k>  <c>2562</c>  <p>6333</p>  <h>false</h>  <hasPrv>false</hasPrv>  <ic>false</ic>  <trackElementDependents>false</trackElementDependents>  <isPermanent>true</isPermanent>  <isTemp>false</isTemp>  </obDesc>
  </shortcutSource>
  </meta>
  </tArg>
  </SetObject>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<SetObjectResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>S1!M!SHORTCUT_TO_REPORT</id>  </id>
[![](../../minus.gif)](../../#)<metaGet xmlns="****">
[![](../../minus.gif)](../../#)<obInst>
[![](../../minus.gif)](../../#)<obDesc ds="****" isShortcut="**1**" isLink="**0**" ver="**12**" hf="**0**">
  <i>SHORTCUT_TO_REPORT</i>  <n>Регламентный отчет (2)</n>  <k>176020</k>  <c>2562</c>  <p>61</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  </obInst>
[![](../../minus.gif)](../../#)<shortcutSource>
[![](../../minus.gif)](../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**4**" hf="**0**">
  <i>REPORT_1</i>  <n>Регламентный отчет</n>  <k>6334</k>  <c>2562</c>  <p>6333</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  </shortcutSource>
  </metaGet>
  </SetObjectResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetObject" :
  {
   "tObject" :
    {
     "id" : "S1!M!SHORTCUT_TO_REPORT"
    },
   "tArg" :
    {
     "metaGet" :
      {
       "obInst" : "true",
       "shortcutSource" : "true"
      },
     "pattern" :
      {
       "obInst" : "true",
       "shortcutSource" : "true"
      },
     "meta" :
      {
       "shortcutSource" :
        {
         "obDesc" :
          {
           "@ds" : "",
           "@isShortcut" : "false",
           "@isLink" : "false",
           "@ver" : "5",
           "@hf" : "false",
           "i" : "REPORT_1",
           "n" : "Регламентный отчет",
           "k" : "6334",
           "c" : "2562",
           "p" : "6333",
           "h" : "false",
           "hasPrv" : "false",
           "ic" : "false",
           "trackElementDependents" : "false",
           "isPermanent" : "true",
           "isTemp" : "false"
          }
        }
      }
    }
  }
}

### JSON-ответ:


{
 "SetObjectResult" :
  {
   "id" :
    {
     "id" : "S1!M!SHORTCUT_TO_REPORT"
    },
   "metaGet" :
    {
     "obInst" :
      {
       "obDesc" :
        {
         "@ds" : "",
         "@isShortcut" : "1",
         "@isLink" : "0",
         "@ver" : "12",
         "@hf" : "0",
         "i" : "SHORTCUT_TO_REPORT",
         "n" : "Регламентный отчет (2)",
         "k" : "176020",
         "c" : "2562",
         "p" : "61",
         "h" : "0",
         "hasPrv" : "0",
         "ic" : "0",
         "trackElementDependents" : "0",
         "isPermanent" : "1",
         "isTemp" : "0"
        }
      },
     "shortcutSource" :
      {
       "obDesc" :
        {
         "@ds" : "",
         "@isShortcut" : "0",
         "@isLink" : "0",
         "@ver" : "4",
         "@hf" : "0",
         "i" : "REPORT_1",
         "n" : "Регламентный отчет",
         "k" : "6334",
         "c" : "2562",
         "p" : "6333",
         "h" : "0",
         "hasPrv" : "0",
         "ic" : "0",
         "trackElementDependents" : "0",
         "isPermanent" : "1",
         "isTemp" : "0"
        }
      }
    }
  }
}


public static SetObjectResult SetShortcutObject(MbId mb, string shortcutId, PrxMd report)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tObject = new SetObject()
    {
        //Параметры выполнения операции
        tArg = new SetObjectArg()
        {
            pattern = new MbObjectPattern()
            {
                shortcutSource = true
            },
            meta = new MbObjectMd()
            {
                shortcutSource = report.obInst
            },
            metaGet = new MbObjectPattern()
            {
                obInst = true,
                shortcutSource = true
            }
        },
        tObject = new OdId()
        {
            id = mb.id + '!' + shortcutId
        }
    };
    //Изменение метаданных ярлыка
    var result = somClient.SetObject(tObject);
    return result;
}


См. также:


[Работа
 с репозиторием](Repository_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
