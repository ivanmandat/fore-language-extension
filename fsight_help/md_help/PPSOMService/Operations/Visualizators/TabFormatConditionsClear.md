# TabFormatConditionsClear: Операция

TabFormatConditionsClear: Операция
-


**


# TabFormatConditionsClear


## Синтаксис


bool TabFormatConditionsClear(string mon)


## Параметры


mon. Моникёр
 диапазона для работы с его условными форматами.


## Описание


Операция TabFormatConditionsClear
 удаляет все условные форматы для диапазона ячеек.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта с постфиксом «!Sheets!ключ
 листа!адрес диапазона!FormatConditions».


Результатом операции будет логическое значение true,
 если удаление завершилось успешно.


## Пример


Ниже приведён пример удаления всех условных форматов у диапазона ячеек.
 В запросе передаётся моникёр для работ с условными форматами диапазона
 ячеек. В ответе приходит признак удачного удаления.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<TabFormatConditionsClear xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">S1!M!S!P1!Sheets!1!A0:B3!FormatConditions</mon>  </TabFormatConditionsClear>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <TabFormatConditionsClearResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</TabFormatConditionsClearResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "TabFormatConditionsClear" :
  {
   "mon" : "S1!M!S!P1!Sheets!1!A0:B3!FormatConditions"
  }
}

### JSON-ответ:


{
 "TabFormatConditionsClearResult" : "1"
}


public static bool ClearFormatConditions(string moniker, string sheetKey, string address)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tTab = new TabFormatConditionsClear()
    {
        mon = moniker + "!Sheets!" + sheetKey + '!' + address + "!FormatConditions"
    };
    // Удаление всех условных форматов
    var result = somClient.TabFormatConditionsClear(tTab);
    return result;
}


См. также:


[Таблица](Table/tabsheet_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
