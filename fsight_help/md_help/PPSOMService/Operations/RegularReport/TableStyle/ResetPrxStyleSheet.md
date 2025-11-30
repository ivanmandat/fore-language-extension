# ResetPrxStyleSheet: Операция

ResetPrxStyleSheet: Операция
-


**


# ResetPrxStyleSheet


## Синтаксис


bool ResetPrxStyleSheet(string mon)


## Параметры


mon. Моникёр
 открытого экземпляра регламентного отчёта.


## Описание


Операция ResetPrxStyleSheet
 отключает используемую в регламентном отчёте таблицу стилей репозитория.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр открытого экземпляра регламентного отчёта, в котором подключена
 таблица стилей.


Результатом выполнения операции будет логическое значение true,
 если отключение таблицы стилей завершился успешно.


## Пример


Ниже приведён пример отключения используемой в регламентном отчёте таблицы
 стилей. В запросе передаётся моникёр открытого экземпляра регламентного
 отчёта. В ответе возвращается признак успешного отключения.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<ResetPrxStyleSheet xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">BHGFKLHCBNDPFOAEABNELEOBLJJGGNLEBKOPJFEJDMKMADKA!M!S!PDBPIEBICBNDPFOAELDHONAGEJFGJIEMEGINMKELIDHFLHMIB</mon>  </ResetPrxStyleSheet>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
  <ResetPrxStyleSheetResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</ResetPrxStyleSheetResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "ResetPrxStyleSheet" :
  {
   "mon" : "BHGFKLHCBNDPFOAEABNELEOBLJJGGNLEBKOPJFEJDMKMADKA!M!S!PDBPIEBICBNDPFOAELDHONAGEJFGJIEMEGINMKELIDHFLHMIB"
  }
}

### JSON-ответ:


{
 "ResetPrxStyleSheetResult" : "1"
}


public static bool ResetPrxStyleSheet(string moniker)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tDel = new ResetPrxStyleSheet()
    {
        mon = moniker
    };
    // Отключение таблице стилей
    var result = somClient.ResetPrxStyleSheet(tDel);
    return result;
}


См. также:


[Работа
 с регламентными отчётами](../RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
