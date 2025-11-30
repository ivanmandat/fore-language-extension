# TabRangeInsert: Операция

TabRangeInsert: Операция
-


**


# TabRangeInsert


## Синтаксис


bool TabRangeInsert(string mon, TabRangeShiftArg
 tArg)


## Параметры


mon. Моникёр
 для работы с диапазоном ячеек таблицы.


tArg. Параметры смещения строк/столбцов
 при вставке диапазона ячеек.


## Описание


Операция TabRangeInsert вставляет
 диапазон ячеек со смещением остальных элементов в таблице.


## Комментарии


Операция позволяет сместить строки и столбцы в таблице путём вставки
 в область диапазона, передаваемого в моникёре, соразмерного количества
 строк/столбцов. Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта с постфиксом «!Sheets!ключ
 листа!адрес диапазона». Результатом операции будет логическое значение
 true, если отмена объединения
 ячеек завершилась успешно.


## Пример


Ниже приведён пример вставки на лист регламентного отчёта диапазона
 со смещением строк вниз. В запросе передаётся моникёр для работы с диапазоном.
 В ответе приходит признак удачного выполнения операции.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<TabRangeInsert xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">S1!M!S!P1!Sheets!1!A20:B25</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <shift>2</shift>  </tArg>
  </TabRangeInsert>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <TabRangeInsertResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</TabRangeInsertResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "TabRangeInsert" :
  {
   "mon" : "S1!M!S!P1!Sheets!1!A20:B25",
   "tArg" :
    {
     "shift" : "2"
    }
  }
}

### JSON-ответ:


{
 "TabRangeInsertResult" : "1"
}


public static bool InsertRange(string moniker, string sheetKey, string address)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tTab = new TabRangeInsert()
    {
        tArg = new TabRangeShiftArg()
        {
            shift = 2
        },
        mon = moniker + "!Sheets!" + sheetKey + '!' + address
    };
    // Вставка диапазона
    var result = somClient.TabRangeInsert(tTab);
    return result;
}


См. также:


[Таблица](Table/tabsheet_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
