# SetPrxStyleSheet: Операция

SetPrxStyleSheet: Операция
-


**


# SetPrxStyleSheet


## Синтаксис


bool SetPrxStyleSheet(string mon, ItKey tKey)


## Параметры


mon. Моникёр
 открытого экземпляра регламентного отчёта.


tKey. Ключ объекта репозитория,
 являющегося таблицей стилей.


## Описание


Операция SetPrxStyleSheet подключает
 в регламентном отчёте таблицу стилей из репозитория.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр открытого экземпляра регламентного отчёта, а в поле tKey
 ключ объекта репозитория, являющегося таблицей стилей. Регламентный отчёт
 должен быть открыт на редактирование. Моникёр может быть получен при выполнении
 операции [OpenPrxMeta](../OpenPrxMeta.htm).


Результатом выполнения операции будет логическое значение true,
 если подключение таблицы стилей к регламентному отчёту завершилось успешно.


## Пример


Ниже приведён пример подключения к регламентному отчёту внешней таблицы
 стилей. В запросе передаётся моникёр открытого экземпляра регламентного
 отчёта и ключ таблицы стилей в репозитории. В ответе возвращается признак
 успешного подключения таблицы стилей.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<SetPrxStyleSheet xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">BHGFKLHCBNDPFOAEABNELEOBLJJGGNLEBKOPJFEJDMKMADKA!M!S!PDBPIEBICBNDPFOAELDHONAGEJFGJIEMEGINMKELIDHFLHMIB</mon>[![](../../../minus.gif)](../../../#)<tKey xmlns="****">
  <k>317260</k>  </tKey>
  </SetPrxStyleSheet>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
  <SetPrxStyleSheetResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</SetPrxStyleSheetResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetPrxStyleSheet" :
  {
   "mon" : "BHGFKLHCBNDPFOAEABNELEOBLJJGGNLEBKOPJFEJDMKMADKA!M!S!PDBPIEBICBNDPFOAELDHONAGEJFGJIEMEGINMKELIDHFLHMIB",
   "tKey" :
    {
     "k" : "317260"
    }
  }
}

### JSON-ответ:


{
 "SetPrxStyleSheetResult" : "1"
}


public static bool SetPrxStyleSheet(string moniker, uint tabStyleKey)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tSet = new SetPrxStyleSheet()
    {
        tKey = new ItKey() { k = tabStyleKey },
        mon = moniker
    };
    // Подключение таблицы стилей
    var result = somClient.SetPrxStyleSheet(tSet);
    return result;
}


См. также:


[Работа
 с регламентными отчётами](../RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
