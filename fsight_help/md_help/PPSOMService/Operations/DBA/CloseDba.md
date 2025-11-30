# CloseDba: Операция

CloseDba: Операция
-


**


# CloseDba


## Синтаксис


bool CloseDba(OdId tOb)


## Параметры


tOb. Моникёр
 открытого экземпляра бизнес-приложения.


## Описание


Операция CloseDba закрывает
 экземпляр бизнес-приложения.


## Комментарии


Для выполнения операции укажите в поле tOb
 моникёр открытого экземпляра бизнес-приложения.


Результатом операции будет логическое значение true,
 если закрытие завершилось успешно.


## Пример


Ниже приведён пример закрытия экземпляра бизнес-приложения. В запросе
 передаётся моникёр открытого экземпляра бизнес-приложения. В ответе возвращается
 признак успешного закрытия.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<CloseDba xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tOb xmlns="****">
  <id>EMMHJHJLCLPAGOAECIKJAHOPCNJHGJDEKIODNPHMALBNJDDP!M!S!CBPKMIAKLCLPAGOAEHNHNGELNMKNCKMNEEIHLOAJKJEAJIHDJ</id>  </tOb>
  </CloseDba>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <CloseDbaResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</CloseDbaResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "CloseDba" :
  {
   "tOb" :
    {
     "id" : "EMMHJHJLCLPAGOAECIKJAHOPCNJHGJDEKIODNPHMALBNJDDP!M!S!CBPKMIAKLCLPAGOAEHNHNGELNMKNCKMNEEIHLOAJKJEAJIHDJ"
    }
  }
}

### JSON-ответ:


{
 "CloseDbaResult" : "1"
}


public static bool CloseDba(string moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операций
    var tClose = new CloseDba()
    {
        tOb = new OdId() { id = moniker }
    };
    // Закрытие экземпляра бизнес-приложения
    var b = somClient.CloseDba(tClose);
    return b;
}


См. также:


[Работа с
 бизнес-приложениями](DBA_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
