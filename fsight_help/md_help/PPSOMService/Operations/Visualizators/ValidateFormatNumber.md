# ValidateFormatNumber: Операция

ValidateFormatNumber: Операция
-


**


# ValidateFormatNumber


## Синтаксис


NumberFormatValidInfo ValidateFormatNumber(NumberFormatValidInfo
 NumberFormat)


## Параметры


NumberFormat. Параметры проверяемого
 пользовательского формата.


## Описание


Операция ValidateFormatNumber
 проверяет возможность использования указанного пользовательского формата
 в ячейках таблицы.


## Комментарии


Для выполнения операции задайте в поле NumberFormat.F
 проверяемый формат.


После проверки в результате выполнения операции в поле NumberFormat.Valid
 будет доступен признак возможности использования указанного формата.


## Пример


Ниже приведён пример проверки пользовательского формата. В запросе передаётся
 формат. В ответе приходит информация о формате с признаком возможности
 его использования.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<ValidateFormatNumber xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <NumberFormat F="**# ##0,00**" xmlns="****" />
  </ValidateFormatNumber>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<ValidateFormatNumberResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" F="**# ##0 00**" FT="**-1**">
  <Valid xmlns="****">1</Valid>  </ValidateFormatNumberResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "ValidateFormatNumber" :
  {
   "NumberFormat" :
    {
     "@F" : "# ##0,00"
    }
  }
}

### JSON-ответ:


{
 "ValidateFormatNumberResult" :
  {
   "@F" : "# ##0 00",
   "@FT" : "-1",
   "Valid" : "1"
  }
}


public static NumberFormatValidInfo ValidateFormatNumber(string format)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tVal = new ValidateFormatNumber()
    {
        NumberFormat = new NumberFormatValidInfo()
        {
            F = format,
        }
    };
    // Проверка формата
    var result = somClient.ValidateFormatNumber(tVal);
    return result;
}


См. также:


[Таблица](Table/tabsheet_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
