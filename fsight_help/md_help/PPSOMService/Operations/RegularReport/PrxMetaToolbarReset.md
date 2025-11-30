# PrxMetaToolbarReset: Операция

PrxMetaToolbarReset: Операция
-


**


# PrxMetaToolbarReset


## Синтаксис


bool PrxMetaToolbarReset(string mon)


## Параметры


mon. Моникёр
 для работы с панелью инструментов регламентного отчёта.


## Описание


Операция PrxMetaToolbarReset
 сбрасывает настройки панели инструментов в регламентном отчёте.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр открытого экземпляра регламентного отчёта с постфиксом «!Toolbar». Моникёр может быть получен
 при выполнении операции [OpenPrxMeta](OpenPrxMeta.htm).


При выполнении операции все перемещения будут отменены, список системных
 кнопок восстановлен, пользовательские группы кнопок удалены, а сами пользовательские
 кнопки перемещены на верхний уровень панели инструментов и размещены в
 порядке их добавления.


Результатом выполнения операции будет логическое значение true,
 если сброс настроек панели инструментов завершился успешно.


## Пример


Ниже приведён пример сброса настроек панели инструментов в регламентном
 отчёте. В запросе передаётся моникёр для работы с панелью инструментов.
 В ответе возвращается признак успешного сброса настроек.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<PrxMetaToolbarReset xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">LCLLBBEIEFKBGOAENKKDCFBJGAGPPNOEEIFDDPMFCJBKDAAO!M!S!PGCIMHFEIEFKBGOAEIIPKPKLDBHAAANNEHJFBNNCMNBABJDCG!Toolbar</mon>  </PrxMetaToolbarReset>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <PrxMetaToolbarResetResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</PrxMetaToolbarResetResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "PrxMetaToolbarReset" :
  {
   "mon" : "LCLLBBEIEFKBGOAENKKDCFBJGAGPPNOEEIFDDPMFCJBKDAAO!M!S!PGCIMHFEIEFKBGOAEIIPKPKLDBHAAANNEHJFBNNCMNBABJDCG!Toolbar"
  }
}

### JSON-ответ:


{
 "PrxMetaToolbarResetResult" : "1"
}


public static bool PrxMetaToolbarReset(string moniker)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tReset = new PrxMetaToolbarReset()
    {
        mon = moniker + "!Toolbar"
    };
    // Сброс настроек панели инструментов
    var result = somClient.PrxMetaToolbarReset(tReset);
    return result;
}


См. также:


[Работа
 с регламентными отчётами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
