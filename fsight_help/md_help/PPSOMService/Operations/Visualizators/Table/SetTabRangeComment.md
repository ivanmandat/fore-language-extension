# SetTabRangeComment: Операция

SetTabRangeComment: Операция
-


**


# SetTabRangeComment


## Синтаксис


bool SetTabRangeComment(string mon, TabRangeComment
 tArg)


## Параметры


mon. Моникёр
 для работы с ячейкой таблицы.


tArg. Параметры установки примечания.


## Описание


Операция SetTabRangeComment
 добавляет новое или изменяет существующее примечание для ячейки.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр для работы с ячейкой в следующем формате: «Моникёр
 экземпляра рег.отчёта!Sheets!Ключ листа!абсолютный адрес». Если
 будет указан моникёр диапазона ячеек, то операция будет выполнена для
 верхней левой ячейки диапазона.


Результатом операции будет логическое значение true,
 если изменение примечания завершилось успешно.


## Пример


Ниже приведён пример изменения примечания для ячейки. В запросе передаётся
 моникёр для работы с ячейкой и устанавливаемое примечание. В ответе возвращается
 признак успешного изменения примечания.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<SetTabRangeComment xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">HBNCFAKEFPMNFOAEGJLELNECHEGOAOHEKJALPKOGKEBPFMNE!M!S!PKHDIGFKEFPMNFOAEDGNBAHBMBHMJKBNENLGGOOJBLJAKBOAO!Sheets!1!A1</mon>[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
  <trc>Область исходных данных</trc>  </tArg>
  </SetTabRangeComment>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
  <SetTabRangeCommentResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</SetTabRangeCommentResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetTabRangeComment" :
  {
   "mon" : "HBNCFAKEFPMNFOAEGJLELNECHEGOAOHEKJALPKOGKEBPFMNE!M!S!PKHDIGFKEFPMNFOAEDGNBAHBMBHMJKBNENLGGOOJBLJAKBOAO!Sheets!1!A1",
   "tArg" :
    {
     "trc" : "Область исходных данных"
    }
  }
}

### JSON-ответ:


{
 "SetTabRangeCommentResult" : "1"
}


public static bool SetTabRangeComment(string moniker, string sheetKey, string address, string comment)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tTab = new SetTabRangeComment()
    {
        mon = moniker + "!Sheets!" + sheetKey + '!' + address,
        tArg = new TabRangeComment()
        {
            trc = comment
        }
    };
    // Изменение примечания ячейки
    var result = somClient.SetTabRangeComment(tTab);
    return result;
}


См. также:


[Таблица:
 Операции](tabsheet_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
