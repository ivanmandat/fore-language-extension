# PrxMetaSheetRecalc: Операция

PrxMetaSheetRecalc: Операция
-


**


# PrxMetaSheetRecalc


## Синтаксис


bool PrxMetaSheetRecalc(string mon)


## Параметры


mon. Моникёр
 листа регламентного отчёта.


## Описание


Операция PrxMetaSheetRecalc
 вычисляет лист регламентного отчёта.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр в следующем формате: «Моникёр
 экземпляра рег.отчёта!Sheets!Ключ листа». Моникёр экземпляра регламентного
 отчёта может быть получен при выполнении операции [OpenPrxMeta](OpenPrxMeta.htm).


Результатом операции будет логическое значение true,
 если вычисление завершилось успешно.


## Пример


Ниже приведён пример перевычисления листа регламентного отчёта. В запросе
 передаётся моникёр листа регламентного отчёта. В ответе приходит признак
 успешного перевычисления.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<PrxMetaSheetRecalc xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">S1!M!S!P1!Sheets!1</mon>  </PrxMetaSheetRecalc>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <PrxMetaSheetRecalcResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</PrxMetaSheetRecalcResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "PrxMetaSheetRecalc" :
  {
   "mon" : "S1!M!S!P1!Sheets!1"
  }
}

### JSON-ответ:


{
 "PrxMetaSheetRecalcResult" : "1"
}


public static bool PrxSheetRecalc(string moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tRec = new PrxMetaSheetRecalc()
    {
        mon = moniker
    };
    //Перевычисление листа
    var result = somClient.PrxMetaSheetRecalc(tRec);
    return result;
}


См. также:


[Работа
 с регламентными отчетами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
