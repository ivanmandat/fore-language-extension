# GetObjectByOdId: Операция

GetObjectByOdId: Операция
-


**


# GetObjectByOdId


## Синтаксис


GetObjectResult GetObjectByOdId(OdId tObject, GetObjectArg
 tArg)


## Параметры


tObject. Моникёр
 объекта, информацию о котором необходимо получить.


tArg. Параметры выполнения
 операции.


## Описание


Операция GetObjectByOdId получает
 базовые свойства объекта репозитория.


## Комментарии


Операция позволяет получить различные базовые свойства объекта (наименование,
 идентификатор, значения параметров, настройки ярлыка и другие). Для выполнения
 операции укажите в поле tObject
 моникёр объекта, а в поле tArg.metaGet
 шаблон, в соответствии с которым будет извлекаться информация.


Результатом операции будет полученная информация об объекте.


## Пример


Ниже приведён пример получения свойств ярлыка. В запросе передаётся
 моникёр ярлыка. В ответе приходят базовые свойства и информация об объекте,
 на который ссылается ярлык.


	 SOAP JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetObjectByOdId xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tObject xmlns="****">
  <id>S1!M!SHORTCUT_TO_REPORT</id>  </tObject>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<metaGet>
  <obInst>true</obInst>  <shortcutSource>true</shortcutSource>  </metaGet>
  </tArg>
  </GetObjectByOdId>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetObjectByOdIdResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>S1!M!SHORTCUT_TO_REPORT</id>  </id>
[![](../../minus.gif)](../../#)<metaGet xmlns="****">
[![](../../minus.gif)](../../#)<obInst>
[![](../../minus.gif)](../../#)<obDesc ds="****" isShortcut="**1**" isLink="**0**" ver="**11**" hf="**0**">
  <i>SHORTCUT_TO_REPORT</i>  <n>Регламентный отчет (2)</n>  <k>176020</k>  <c>2562</c>  <p>61</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  </obInst>
[![](../../minus.gif)](../../#)<shortcutSource>
[![](../../minus.gif)](../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**11**" hf="**0**">
  <i>REPORT</i>  <n>Регламентный отчет</n>  <k>176019</k>  <c>2562</c>  <p>61</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  </shortcutSource>
  </metaGet>
  </GetObjectByOdIdResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetObjectByOdId" :
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
      }
    }
  }
}

### JSON-ответ:


{
 "GetObjectByOdIdResult" :
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
         "@ver" : "11",
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
         "@ver" : "11",
         "@hf" : "0",
         "i" : "REPORT",
         "n" : "Регламентный отчет",
         "k" : "176019",
         "c" : "2562",
         "p" : "61",
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


public static GetObjectResult GetShortcutMeta(MbId mb, string shortcutId)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tObject = new GetObjectByOdId()
    {
        //Параметры выполнения операции
        tArg = new GetObjectArg()
        {
            metaGet = new MbObjectPattern()
            {
                shortcutSource = true
            }
        },
        tObject = new OdId()
        {
            id = mb.id + '!' + shortcutId
        }
    };
    //Получение метаданных ярлыка
    var result = somClient.GetObjectByOdId(tObject);
    return result;
}


См. также:


[Работа
 с репозиторием](Repository_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
