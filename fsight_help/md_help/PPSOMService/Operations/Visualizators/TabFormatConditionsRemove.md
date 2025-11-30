# TabFormatConditionsRemove: Операция

TabFormatConditionsRemove: Операция
-


**


# TabFormatConditionsRemove


## Синтаксис


bool TabFormatConditionsRemove(string mon, ItemRemoveInfo
 tArg)


## Параметры


mon. Моникёр
 диапазона для работы с его условными форматами.


tArg. Параметры удаления условного
 формата.


## Описание


Операция TabFormatConditionsRemove
 удаляет условный формат у диапазона ячеек.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта с постфиксом «!Sheets!ключ
 листа!адрес диапазона!FormatConditions», а в поле tArg.index
 индекс удаляемого условного формата.


Результатом операции будет логическое значение true,
 если удаления завершилось успешно.


## Пример


Ниже приведён пример удаления условного формата у диапазона ячеек. В
 запросе передаётся моникёр для работы с условными форматами диапазона
 ячеек и индекс удаляемого условного формата. В ответе приходит признак
 удачного удаления.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<TabFormatConditionsRemove xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">S1!M!S!P1!Sheets!1!A0:B3!FormatConditions</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <index>0</index>  </tArg>
  </TabFormatConditionsRemove>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <TabFormatConditionsRemoveResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</TabFormatConditionsRemoveResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "TabFormatConditionsRemove" :
  {
   "mon" : "S1!M!S!P1!Sheets!1!A0:B3!FormatConditions",
   "tArg" :
    {
     "index" : "0"
    }
  }
}

### JSON-ответ:


{
 "TabFormatConditionsRemoveResult" : "1"
}


public static bool DeleteFormatCondition(string moniker, string sheetKey, string address, uint formatIndex)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tTab = new TabFormatConditionsRemove()
    {
        mon = moniker + "!Sheets!" + sheetKey + '!' + address + "!FormatConditions",
        tArg = new ItemRemoveInfo()
        {
            index = formatIndex
        }
    };
    // Удаление условного формата
    var result = somClient.TabFormatConditionsRemove(tTab);
    return result;
}


См. также:


[Таблица](Table/tabsheet_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
