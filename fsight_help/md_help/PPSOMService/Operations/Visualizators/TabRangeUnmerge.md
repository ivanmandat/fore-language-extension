# TabRangeUnmerge: Операция

TabRangeUnmerge: Операция
-


**


# TabRangeUnmerge


## Синтаксис


bool TabRangeUnmerge(string mon)


## Параметры


mon. Моникёр
 для работы с диапазоном ячеек таблицы.


## Описание


Операция TabRangeUnmerge отменяет
 объединение диапазона ячеек таблицы.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта с постфиксом «!Sheets!ключ
 листа!адрес диапазона». Результатом операции будет логическое значение
 true, если отмена объединения
 ячеек завершилась успешно.


## Пример


Ниже приведён пример отмены объединения диапазона ячеек на листе регламентного
 отчёта. В запросе передаётся моникёр для работы с диапазоном. В ответе
 приходит признак удачного выполнения операции.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<TabRangeUnmerge xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">S1!M!S!P1!Sheets!1!A0:B3</mon>  </TabRangeUnmerge>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <TabRangeUnmergeResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</TabRangeUnmergeResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "TabRangeUnmerge" :
  {
   "mon" : "S1!M!S!P1!Sheets!1!A0:B3"
  }
}

### JSON-ответ:


{
 "TabRangeUnmergeResult" : "1"
}


public static bool UnMergeRange(string moniker, string sheetKey, string address)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tTab = new TabRangeUnmerge()
    {
        mon = moniker + "!Sheets!" + sheetKey + '!' + address
    };
    // Отмена объединения диапазона
    var result = somClient.TabRangeUnmerge(tTab);
    return result;
}


См. также:


[Таблица](Table/tabsheet_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
