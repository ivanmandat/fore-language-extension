# CloseCustomOb: Операция

CloseCustomOb: Операция
-


**


# CloseCustomOb


## Синтаксис


bool CloseCustomOb(CustomObId tCustomOb)


## Параметры


tCustomOb. Моникёр открытого
 экземпляра объекта пользовательского класса.


## Описание


Операция CloseCustomOb закрывает
 экземпляр объекта пользовательского класса.


## Комментарии


Для выполнения операции укажите в поле tCustomOb
 моникёр открытого экземпляра объекта пользовательского класса. Моникёр
 может быть получен при выполнении операции [OpenCustomOb](OpenCustomOb.htm).


Результатом выполнения операции будет логическое значение True,
 если закрытие экземпляра объекта завершилось успешно.


## Пример


Пример закрытия объекта пользовательского класса. В теле запроса передается
 моникёр объекта. В качестве ответа приходит признак удачного закрытия.


	SOAP
	 JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<CloseCustomOb xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tCustomOb xmlns="****">
  <id>LDPFDGAHAHHCGOAEBAFLLHKHMOALEEDEMKDKCJAAKNELDHAE!M!S!TGHNHGJAHAHHCGOAENBPOBGJCGMEKKAFEILDEOPPCHPKFAHNO</id>  </tCustomOb>
  </CloseCustomOb>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <CloseCustomObResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</CloseCustomObResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "CloseCustomOb" :
  {
   "tCustomOb" :
    {
     "id" : "LDPFDGAHAHHCGOAEBAFLLHKHMOALEEDEMKDKCJAAKNELDHAE!M!S!TGHNHGJAHAHHCGOAENBPOBGJCGMEKKAFEILDEOPPCHPKFAHNO"
    }
  }
}

### JSON-ответ:


{
 "CloseCustomObResult" : "1"
}


public static bool CloseCustom(string moniker)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tClose = new CloseCustomOb()
    {
        tCustomOb = new CustomObId() { id = moniker }
    };
    // Закрытие экземпляра объекта пользовательского класса
    var tResult = somClient.CloseCustomOb(tClose);
    return tResult;
}


См. также:


[Работа
 с объектами пользовательских классов](Custom_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
