# SetRawMd: Операция

SetRawMd: Операция
-


**


# SetRawMd


## Синтаксис


SetRawMdResult SetRawMd(OdId tObject, SetRawMdArg
 tArg)


## Параметры


tObject. Моникёр объекта репозитория.


tArg. Параметры выполнения
 операции.


## Описание


Операция SetRawMd изменений
 метаданных объекта репозитория.


## Комментарии


В текущей реализации данная операция используется для загрузки файла
 в объект репозитория Документ. Для выполнения операции необходимо в поле
 tObject указать моникёр документа
 репозитория, в который необходимо загрузить файл. В поле tArg.meta.doc
 укажите поток, связанный с файлом, который будет загружен в документ.
 В шаблоне tArg.pattern также необходимо
 определить поле doc. Результатом
 выполнения операции будет моникёр измененного документа. Если в параметрах
 выполнения определить поле metaGet,
 то в результате выполнения также будут получены обновленные метаданные
 документа.


## Пример


Пример загрузки нового файла в документ репозитория. В теле запроса
 передается моникёр документа. В ответе проходит моникёр измененного документа.


[![](../../Opened.gif)![](../../Closed.gif)SOAP](javascript:TextPopup(this))


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetRawMd xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tObject xmlns="****">
  <id>S1!M!8769</id>  </tObject>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<pattern>
  <obInst>true</obInst>  <md>true</md>  <doc>true</doc>  </pattern>
[![](../../minus.gif)](../../#)<meta>
  <doc>R0lGODlhMAAMAJEAAAAAAP///2ZmzP///yH5BAEAAAMALAAAAAAwAAwAAAJGjC2pcri/WoBMHlodhg3b6WkbJz7SWIKcqVIXyobmyNBkG5X2nuPKy6vBcrIIDejC+RLK5a8TcqJ0z1OSuoHeLFfsdikpAAA7</doc>  </meta>
  <save>false</save>  </tArg>
  </SetRawMd>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<SetRawMdResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>S1!M!8769</id>  </id>
  </SetRawMdResult>
  </soapenv:Body>
  </soapenv:Envelope>


[![](../../Opened.gif)![](../../Closed.gif)JSON](javascript:TextPopup(this))


### JSON-запрос:


{
 "SetRawMd" :
  {
   "tObject" :
    {
     "id" : "S1!M!8769"
    },
   "tArg" :
    {
     "pattern" :
      {
       "obInst" : "true",
       "md" : "true",
       "doc" : "true"
      },
     "meta" :
      {
       "doc" : "R0lGODlhMAAMAJEAAAAAAP\/\/\/2ZmzP\/\/\/yH5BAEAAAMALAAAAAAwAAwAAAJGjC2pcri\/WoBMHlodhg3b6WkbJz7SWIKcqVIXyobmyNBkG5X2nuPKy6vBcrIIDejC+RLK5a8TcqJ0z1OSuoHeLFfsdikpAAA7"
      },
     "save" : "false"
    }
  }
}

### JSON-ответ:


{
 "SetRawMdResult" :
  {
   "id" :
    {
     "id" : "S1!M!8769"
    }
  }
}


[![](../../Opened.gif)![](../../Closed.gif)C#](javascript:TextPopup(this))


public static SetRawMdResult SetLoadedDocument(MbId mb, string documentId, byte[] loadedFile)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tSet = new SetRawMd()
    {
        tObject = new OdId() { id = mb.id + "!" + FindObjectById(mb, documentId).k },
        tArg = new SetRawMdArg()
        {
            meta = new RawMd()
            {
                doc = loadedFile
            },
            pattern = new RawMdPattern()
            {
                doc = true
            },
            save = false
        }
    };
    //Запись метаданных
    var result = somClient.SetRawMd(tSet);
    return result;
}


См. также:


[Работа с
 метаданными объектов](Raw_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
