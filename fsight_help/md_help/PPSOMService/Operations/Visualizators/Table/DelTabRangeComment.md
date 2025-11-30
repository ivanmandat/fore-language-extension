# DelTabRangeComment: Операция

DelTabRangeComment: Операция
-


**


# DelTabRangeComment


## Синтаксис


bool DelTabRangeComment(string mon)


## Параметры


mon. Моникёр
 для работы с ячейкой таблицы.


## Описание


Операция DelTabRangeComment
 удаляет примечания у ячеек таблицы.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр для работы с ячейкой в следующем формате: «Моникёр
 экземпляра рег.отчёта!Sheets!Ключ листа!абсолютный адрес». Если
 будет указан моникёр диапазона ячеек, то примечания будут удалены у всех
 ячеек диапазона.


Результатом операции будет логическое значение true,
 если удаление примечания завершилось успешно.


## Пример


Ниже приведён пример удаления примечания для ячейки. В запросе передаётся
 моникёр для работы с ячейкой. В ответе возвращается признак успешного
 удаления примечания.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<DelTabRangeComment xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">HBNCFAKEFPMNFOAEGJLELNECHEGOAOHEKJALPKOGKEBPFMNE!M!S!PKHDIGFKEFPMNFOAEDGNBAHBMBHMJKBNENLGGOOJBLJAKBOAO!Sheets!1!A1</mon>  </DelTabRangeComment>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
  <DelTabRangeCommentResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</DelTabRangeCommentResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "DelTabRangeComment" :
  {
   "mon" : "HBNCFAKEFPMNFOAEGJLELNECHEGOAOHEKJALPKOGKEBPFMNE!M!S!PKHDIGFKEFPMNFOAEDGNBAHBMBHMJKBNENLGGOOJBLJAKBOAO!Sheets!1!A1"
  }
}

### JSON-ответ:


{
 "DelTabRangeCommentResult" : "1"
}


public static bool DelTabRangeComment(string moniker, string sheetKey, string address)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tTab = new DelTabRangeComment()
    {
        mon = moniker + "!Sheets!" + sheetKey + '!' + address
    };
    // Удаление примечания ячейки
    var result = somClient.DelTabRangeComment(tTab);
    return result;
}


См. также:


[Таблица:
 Операции](tabsheet_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
