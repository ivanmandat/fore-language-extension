# TabFormatConditionsMove: Операция

TabFormatConditionsMove: Операция
-


**


# TabFormatConditionsMove


## Синтаксис


bool TabFormatConditionsMove(string mon, ItemMoveInfo
 tArg)


## Параметры


mon. Моникёр
 диапазона для работы с его условными форматами.


tArg. Параметры перемещения
 условных форматов.


## Описание


Операция TabFormatConditionsMove
 перемещает условные форматы.


## Комментарии


Порядок условных форматов определяет их очередность применения для диапазона
 ячеек. Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта с постфиксом «!Sheets!ключ
 листа!адрес диапазона!FormatConditions», а в поле tArg
 параметры перемещения условных форматов.


Результатом операции будет логическое значение true,
 если перемещение завершилось успешно.


## Пример


Ниже приведён пример перемещения условных форматов в коллекции. В запросе
 передаётся моникёр для работы с условными форматами диапазона ячеек, индекс
 перемещаемого условного формата и индекс позиции, в которую осуществляется
 перемещение. В ответе приходит признак успешного перемещения.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<TabFormatConditionsMove xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">S1!M!S!P1!Sheets!1!A0:B3!FormatConditions</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <indexFrom>0</indexFrom>  <indexTo>1</indexTo>  </tArg>
  </TabFormatConditionsMove>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <TabFormatConditionsMoveResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</TabFormatConditionsMoveResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "TabFormatConditionsMove" :
  {
   "mon" : "S1!M!S!P1!Sheets!1!A0:B3!FormatConditions",
   "tArg" :
    {
     "indexFrom" : "0",
     "indexTo" : "1"
    }
  }
}

### JSON-ответ:


{
 "TabFormatConditionsMoveResult" : "1"
}


public static bool MoveFormatConditions(string moniker, string sheetKey, string address, long moveFrom, long moveTo)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tTab = new TabFormatConditionsMove()
    {
        mon = moniker + "!Sheets!" + sheetKey + '!' + address + "!FormatConditions",
        tArg = new ItemMoveInfo()
        {
            indexFrom = moveFrom,
            indexTo = moveTo
        }
    };
    // Перемещение условных форматов
    var result = somClient.TabFormatConditionsMove(tTab);
    return result;
}


См. также:


[Таблица](Table/tabsheet_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
