# SaveDba: Операция

SaveDba: Операция
-


**


# SaveDba


## Синтаксис


bool SaveDba(OdId tOb)


## Параметры


tOb. Моникёр
 открытого экземпляра бизнес-приложения.


## Описание


Операция SaveDba сохраняет изменения
 в бизнес-приложении.


## Комментарии


Для выполнения операции укажите в поле tOb
 моникёр открытого экземпляра бизнес-приложения.


Результатом операции будет логическое значение true,
 если сохранение изменений завершилось успешно.


## Пример


Ниже приведён пример сохранения изменений в бизнес-приложении. В запросе
 передаётся моникёр открытого экземпляра бизнес-приложения. В ответе возвращается
 признак успешного сохранения изменений.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SaveDba xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tOb xmlns="****">
  <id>EMMHJHJLCLPAGOAECIKJAHOPCNJHGJDEKIODNPHMALBNJDDP!M!S!CBPKMIAKLCLPAGOAEHNHNGELNMKNCKMNEEIHLOAJKJEAJIHDJ</id>  </tOb>
  </SaveDba>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <SaveDbaResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</SaveDbaResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SaveDba" :
  {
   "tOb" :
    {
     "id" : "EMMHJHJLCLPAGOAECIKJAHOPCNJHGJDEKIODNPHMALBNJDDP!M!S!CBPKMIAKLCLPAGOAEHNHNGELNMKNCKMNEEIHLOAJKJEAJIHDJ"
    }
  }
}

### JSON-ответ:


{
 "SaveDbaResult" : "1"
}


public static bool SaveDba(string moniker)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tSave = new SaveDba()
    {
        // Формирование моникёра объекта
        tOb = new OdId() { id = moniker }
    };
    // Сохранение изменений
    var result = somClient.SaveDba(tSave);
    return result;
}


См. также:


[Работа с
 бизнес-приложениями](DBA_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
