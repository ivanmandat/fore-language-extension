# ExportForeObj: Операция

ExportForeObj: Операция
-


**


# ExportForeObj


## Синтаксис


ExportForeObjResult ExportForeObj(OdId tObject)


## Параметры


tObject. Моникёр
 модуля или сборки.


## Описание


Операция ExportForeObj экспортирует
 объект среды разработки во внешний файл.


## Комментарии


Для выполнения операции укажите в параметре tObject
 моникёр объекта репозитория, являющегося модулем или сборкой. Моникёр
 объекта может быть получен при выполнении операции [GetObjects](../Repository/GetObjects.htm).
 При выполнении операции объект среды разработки будет экспортирован и
 сохранён на сервере. Результатом операции будет наименование полученного
 файла и его моникёр. Полученный моникёр в дальнейшем может использоваться
 для импорта объекта из файла в репозиторий с помощью операции [ImportForeObj](ImportForeObj.htm).


## Пример


Ниже приведён пример использования операции ExportForeObj
 для экспорта сборки репозитория во внешний файл. В запросе передаётся
 моникёр сборки. В ответе приходит наименование и моникёр полученного файла.
 В примере C# используется функция FindObjectById,
 код которой приведен в примере «[Получение
 описания объекта по его идентификатору](../Repository/GetObjects_Sample/GetObjects_Sample.htm)».


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<ExportForeObj xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tObject xmlns="****">
  <id>S1!M!172002</id>  </tObject>
  </ExportForeObj>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<ExportForeObjResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <fileName xmlns="****">Дополнительно.ppmodule</fileName>[![](../../minus.gif)](../../#)<exportedForeObj xmlns="****">
  <id>S1!M!Bin!0</id>  </exportedForeObj>
  </ExportForeObjResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "ExportForeObj" :
  {
   "tObject" :
    {
     "id" : "S1!M!172002"
    }
  }
}

### JSON-ответ:


{
 "ExportForeObjResult" :
  {
   "fileName" : "Дополнительно.ppmodule",
   "exportedForeObj" :
    {
     "id" : "S1!M!Bin!0"
    }
  }
}


public static ExportForeObjResult ExportInFile(MbId mb, string objId)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tExp = new ExportForeObj()
    {
        //Формирование моникёра объекта
        tObject = new OdId() { id = mb.id + "!" + FindObjectById(mb, objId).k }
    };
    //Экспорт объекта
    var result = somClient.ExportForeObj(tExp);
    return result;
}


См. также:


[Работа
 со средой разработки](DevEnv_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
