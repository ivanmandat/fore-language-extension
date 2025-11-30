# GetNumberFormatValues: Операция

GetNumberFormatValues: Операция
-


**


# GetNumberFormatValues


## Синтаксис


NumberFormatValuesData GetNumberFormatValues(NumberFormatValuesArg
 tArg)


## Параметры


tArg. Параметры выполнения
 операции.


## Описание


Операция GetNumberFormatValues
 форматирует значения в соответствии с заданным форматом.


## Комментарии


Для выполнения операции укажите в поле tArg.format
 необходимый числовой формат, а в поле tArg.items
 форматируемые значения.


Результатом выполнения операции будет коллекция значений в отформатированном
 виде.


## Пример


Ниже приведён пример форматирования чисел. В запросе передаётся формат
 и числа. В ответе возвращаются числа в отформатированном виде.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<GetNumberFormatValues xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<items>
  <it>123,456</it>  <it>123456789,012345</it>  </items>
  <format F="**#,##0.000**" UDS="**.**" FTS="** **" />
  </tArg>
  </GetNumberFormatValues>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<GetNumberFormatValuesResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<items xmlns="****">
  <it>123.456</it>  <it>123 456 789.012</it>  </items>
  </GetNumberFormatValuesResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetNumberFormatValues" :
  {
   "tArg" :
    {
     "items" :
      {
       "it" :
        [
          "123,456",
          "123456789,012345"
        ]
      },
     "format" :
      {
       "@F" : "#,##0.000",
       "@UDS" : ".",
       "@FTS" : " "
      }
    }
  }
}

### JSON-ответ:


{
 "GetNumberFormatValuesResult" :
  {
   "items" :
    {
     "it" :
      [
        "123.456",
        "123 456 789.012"
      ]
    }
  }
}


public static NumberFormatValuesData GetNumberFormatValues(string[] arguments)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tFormat = new GetNumberFormatValues()
    {
        tArg = new NumberFormatValuesArg()
        {
            format = new TabNumberFormatStyle()
            {
                F = "#,##0.000",
                UDS = ".",
                FTS = " "
            },
            items = arguments
        }
    };
    // Форматирование чисел
    var result = somClient.GetNumberFormatValues(tFormat);
    return result;
}


См. также:


[Таблица:
 Операции](tabsheet_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
