# SaveObject: Операция

SaveObject: Операция
-


**


# SaveObject


## Синтаксис


SaveObject(OdId tObject)


## Параметры


tObject. Моникёр измененного
 объекта.


## Описание


Операция SaveObject сохраняет
 изменения объекта репозитория.


## Комментарии


Данная операция используется для сохранения изменений, которые были
 внесены с помощью различных операций Set*.
 Для выполнения операции необходимо в параметре tObject
 указать моникёр объекта, открытого на редактирование и содержащего какие-либо
 изменения. Операция не возвращает какого-либо результата.


## Пример


Ниже приведён пример сохранения изменений объекта. В запросе передаётся
 моникёр объекта. В ответе возвращается признак успешного сохранения.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SaveObject xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tObject xmlns="****">
  <id>FNDKOLJACBNNFOAEDCEENEKPOGMMOOGEBLEIHFKEJOFOFMNJ!M!S!PEBKNNPLACBNNFOAEFJIHENGMLLEEFMNEGKDLLLINOAOGLEBE</id>  </tObject>
  </SaveObject>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <SaveObjectResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</SaveObjectResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SaveObject" :
  {
   "tObject" :
    {
     "id" : "FNDKOLJACBNNFOAEDCEENEKPOGMMOOGEBLEIHFKEJOFOFMNJ!M!S!PEBKNNPLACBNNFOAEFJIHENGMLLEEFMNEGKDLLLINOAOGLEBE"
    }
  }
}

### JSON-ответ:


{
 "SaveObjectResult" : "1"
}


//public static SaveObjectResult SaveObject(string moniker)
public static bool SaveObject(string moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    var tSave = new SaveObject()
    {
        tObject = new OdId()
        {
            id = moniker
        }
    };
    //Сохранение изменений объекта
    var result = somClient.SaveObject(tSave);
    return result;
}


См. также:


[Общие
 операции](Repository_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
