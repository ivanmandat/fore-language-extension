# TabRangeClear: Операция

TabRangeClear: Операция
-


**


# TabRangeClear


## Синтаксис


bool TabRangeClear(string mon, TabRangeClearArg
 tArg)


## Параметры


mon. Моникёр
 для работы с диапазоном ячеек таблицы.


tArg. Параметры очистки диапазона
 ячеек.


## Описание


Операция TabRangeClearArg очищает
 заданный элемент у диапазона ячеек.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта с постфиксом «!Sheets!ключ
 листа!адрес диапазона», а в поле tArg.type
 элемент диапазона ячеек, который необходимо очистить.


Результатом операции будет логическое значение true,
 если очистка диапазона ячеек завершилась успешно.


## Пример


Ниже приведён пример очистки форматирования для заданного диапазона
 ячеек. В запросе передаётся моникёр для работы с диапазоном. В ответе
 приходит признак удачного выполнения операции.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<TabRangeClear xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">S1!M!S!P1!Sheets!1!A20:B25</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <type>1</type>  </tArg>
  </TabRangeClear>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <TabRangeClearResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</TabRangeClearResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "TabRangeClear" :
  {
   "mon" : "S1!M!S!P1!Sheets!1!A20:B25",
   "tArg" :
    {
     "type" : "1"
    }
  }
}

### JSON-ответ:


{
 "TabRangeClearResult" : "1"
}


public static bool ClearRange(string moniker, string sheetKey, string address)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tTab = new TabRangeClear()
    {
        tArg = new TabRangeClearArg()
        {
            type = 1
        },
        mon = moniker + "!Sheets!" + sheetKey + '!' + address
    };
    // Очистка форматирования диапазона
    var result = somClient.TabRangeClear(tTab);
    return result;
}


См. также:


[Таблица](Table/tabsheet_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
