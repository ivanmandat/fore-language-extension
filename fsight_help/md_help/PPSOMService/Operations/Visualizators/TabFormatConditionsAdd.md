# TabFormatConditionsAdd: Операция

TabFormatConditionsAdd: Операция
-


**


# TabFormatConditionsAdd


## Синтаксис


OpItemKey TabFormatConditionsAdd(string mon)


## Параметры


mon. Моникёр
 диапазона для работы с его условными форматами.


## Описание


Операция TabFormatConditionsAdd
 создаёт новый условный формат для диапазона ячеек.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта с постфиксом «!Sheets!ключ
 листа!адрес диапазона!FormatConditions».


Результатом операции будет ключ условного формата.


## Пример


Ниже приведён пример создания нового условного формата. В запросе передаётся
 моникёр для работ с условными форматами диапазона ячеек. В ответе приходит
 ключ нового условного формата.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<TabFormatConditionsAdd xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">S1!M!S!P1!Sheets!1!A0:B3!FormatConditions</mon>  </TabFormatConditionsAdd>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<TabFormatConditionsAddResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <k xmlns="****">1</k>  </TabFormatConditionsAddResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "TabFormatConditionsAdd" :
  {
   "mon" : "S1!M!S!P1!Sheets!1!A0:B3!FormatConditions"
  }
}

### JSON-ответ:


{
 "TabFormatConditionsAddResult" :
  {
   "k" : "1"
  }
}


public static OpItemKey AddFormatCondition(string moniker, string sheetKey, string address)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tTab = new TabFormatConditionsAdd()
    {
        mon = moniker + "!Sheets!" + sheetKey + '!' + address + "!FormatConditions"
    };
    // Создание условного формата
    var result = somClient.TabFormatConditionsAdd(tTab);
    return result;
}


См. также:


[Таблица](Table/tabsheet_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
