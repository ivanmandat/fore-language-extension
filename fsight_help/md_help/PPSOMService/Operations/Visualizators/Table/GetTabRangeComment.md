# GetTabRangeComment: Операция

GetTabRangeComment: Операция
-


**


# GetTabRangeComment


## Синтаксис


TabRangeComment GetTabRangeComment(string mon)


## Параметры


mon. Моникёр
 для работы с ячейкой таблицы.


## Описание


Операция GetTabRangeComment
 получает примечание, заданное для ячейки.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр для работы с ячейкой в следующем формате: «Моникёр
 экземпляра рег.отчёта!Sheets!Ключ листа!абсолютный адрес». Если
 будет указан моникёр диапазона ячеек, то операция будет выполнена для
 верхней левой ячейки диапазона.


Результатом операции будет полученное примечание ячейки.


## Пример


Ниже приведён пример получения примечания для ячейки. В запросе передаётся
 моникёр для работы с ячейкой. В ответе возвращается полученное примечание.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<GetTabRangeComment xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">HBNCFAKEFPMNFOAEGJLELNECHEGOAOHEKJALPKOGKEBPFMNE!M!S!PKHDIGFKEFPMNFOAEDGNBAHBMBHMJKBNENLGGOOJBLJAKBOAO!Sheets!1!A1</mon>  </GetTabRangeComment>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<GetTabRangeCommentResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <trc xmlns="****">Область исходных данных</trc>  </GetTabRangeCommentResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetTabRangeComment" :
  {
   "mon" : "HBNCFAKEFPMNFOAEGJLELNECHEGOAOHEKJALPKOGKEBPFMNE!M!S!PKHDIGFKEFPMNFOAEDGNBAHBMBHMJKBNENLGGOOJBLJAKBOAO!Sheets!1!A1"
  }
}

### JSON-ответ:


{
 "GetTabRangeCommentResult" :
  {
   "trc" : "Область исходных данных"
  }
}


public static TabRangeComment GetTabRangeComment(string moniker, string sheetKey, string address)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tTab = new GetTabRangeComment()
    {
        mon = moniker + "!Sheets!" + sheetKey + '!' + address
    };
    // Получение примечания ячейки
    var result = somClient.GetTabRangeComment(tTab);
    return result;
}


См. также:


[Таблица:
 Операции](tabsheet_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
