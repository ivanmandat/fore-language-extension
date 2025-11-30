# TabRangeDelete: Операция

TabRangeDelete: Операция
-


**


# TabRangeDelete


## Синтаксис


bool TabRangeDelete(string mon, TabRangeShiftArg
 tArg)


## Параметры


mon. Моникёр
 для работы с диапазоном ячеек таблицы.


tArg. Параметры смещения строк/столбцов
 при удалении диапазона ячеек.


## Описание


Операция TabRangeDelete удаляет
 диапазон ячеек со смещением остальных элементов в таблице.


## Комментарии


Операция позволяет сместить строки и столбцы в таблице путём удаления
 в области диапазона, передаваемого в моникёре, соразмерного количества
 строк/столбцов. Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта с постфиксом «!Sheets!ключ
 листа!адрес диапазона». Результатом операции будет логическое значение
 true, если отмена объединения
 ячеек завершилась успешно.


## Пример


Ниже приведён пример удаления на листе регламентного отчёта диапазона
 со смещением строк вверх. В запросе передаётся моникёр для работы с диапазоном.
 В ответе приходит признак удачного выполнения операции.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<TabRangeDelete xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">S1!M!S!P1!Sheets!1!A25:B30</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <shift>4</shift>  </tArg>
  </TabRangeDelete>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <TabRangeDeleteResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</TabRangeDeleteResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "TabRangeDelete" :
  {
   "mon" : "S1!M!S!P1!Sheets!1!A25:B30",
   "tArg" :
    {
     "shift" : "4"
    }
  }
}

### JSON-ответ:


{
 "TabRangeDeleteResult" : "1"
}


public static bool DeleteRange(string moniker, string sheetKey, string address)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tTab = new TabRangeDelete()
    {
        tArg = new TabRangeShiftArg()
        {
            shift = 4
        },
        mon = moniker + "!Sheets!" + sheetKey + '!' + address
    };
    // Удаление диапазона
    var result = somClient.TabRangeDelete(tTab);
    return result;
}


См. также:


[Таблица](Table/tabsheet_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
