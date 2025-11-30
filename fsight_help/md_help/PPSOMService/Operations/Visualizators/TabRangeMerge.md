# TabRangeMerge: Операция

TabRangeMerge: Операция
-


**


# TabRangeMerge


## Синтаксис


bool TabRangeMerge(string mon)


## Параметры


mon. Моникёр
 для работы с диапазоном ячеек таблицы.


## Описание


Операция TabRangeMerge объединяет
 диапазон ячеек таблицы.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта с постфиксом «!Sheets!ключ
 листа!адрес диапазона». Результатом операции будет логическое значение
 true, если объединение ячеек завершилось
 успешно.


## Пример


Ниже приведён пример объединения диапазона ячеек на листе регламентного
 отчёта. В запросе передаётся моникёр для работы с диапазоном. В ответе
 приходит признак удачного выполнения операции.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<TabRangeMerge xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">S1!M!S!P1!Sheets!1!A0:B3</mon>  </TabRangeMerge>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <TabRangeMergeResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</TabRangeMergeResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "TabRangeMerge" :
  {
   "mon" : "S1!M!S!P1!Sheets!1!A0:B3"
  }
}

### JSON-ответ:


{
 "TabRangeMergeResult" : "1"
}


public static bool MergeRange(string moniker, string sheetKey, string address)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tTab = new TabRangeMerge()
    {
        mon = moniker + "!Sheets!" + sheetKey + '!' + address
    };
    // Объединение диапазона
    var result = somClient.TabRangeMerge(tTab);
    return result;
}


См. также:


[Таблица](Table/tabsheet_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
