# DeleteStyleSheetItem: Операция

DeleteStyleSheetItem: Операция
-


**


# DeleteStyleSheetItem


## Синтаксис


bool DeleteStyleSheetItem(string mon)


## Параметры


mon. Моникёр
 отдельного стиля в таблице стилей.


## Описание


Операция DeleteStyleSheetItem
 удаляет стиль из таблицы стилей.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр открытого экземпляра таблицы стилей с постфиксом «!<номер
 стиля>». Моникёр может быть получен при выполнении операции
 [OpenStyleSheet](OpenStyleSheet.htm).


Результатом операции будет логическое значение true,
 если удаление стиля завершилось успешно.


## Пример


Ниже приведён пример удаления стиля в таблице стилей. В запросе передаётся
 моникёр стиля. В ответе возвращается признак успешного удаления стиля.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<DeleteStyleSheetItem xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">CPDKLBGLHHOOFOAEEOBMIPONHEFJBEBEOLJEMAEIDCPLAAGC!M!S!SDJNKBJGLHHOOFOAENACKGIKGBKMHOKOEOJBIKCBEOKJJAPGE!3</mon>  </DeleteStyleSheetItem>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <DeleteStyleSheetItemResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</DeleteStyleSheetItemResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "DeleteStyleSheetItem" :
  {
   "mon" : "CPDKLBGLHHOOFOAEEOBMIPONHEFJBEBEOLJEMAEIDCPLAAGC!M!S!SDJNKBJGLHHOOFOAENACKGIKGBKMHOKOEOJBIKCBEOKJJAPGE!3"
  }
}

### JSON-ответ:


{
 "DeleteStyleSheetItemResult" : "1"
}


public static bool DeleteStyleSheetItem(string moniker, ulong styleNumber)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tDel = new DeleteStyleSheetItem()
    {
        mon = moniker + '!' + styleNumber
    };
    // Удаление стиля в таблице стилей
    var result = somClient.DeleteStyleSheetItem(tDel);
    return result;
}


См. также:


[Работа
 с таблицей стилей](StyleSheet_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
