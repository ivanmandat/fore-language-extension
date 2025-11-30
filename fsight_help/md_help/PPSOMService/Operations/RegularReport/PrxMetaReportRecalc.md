# PrxMetaReportRecalc: Операция

PrxMetaReportRecalc: Операция
-


**


# PrxMetaReportRecalc


## Синтаксис


bool PrxMetaReportRecalc(string mon)


## Параметры


mon. Моникёр
 открытого экземпляра регламентного отчёта.


## Описание


Операция PrxMetaReportRecalc
 вычисляет экземпляр регламентного отчёта.


## Комментарии


Операция производит вычисление всех листов регламентного отчёта. Для
 выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта. Моникёр может быть получен при
 выполнении операции [OpenPrxMeta](OpenPrxMeta.htm).


Результатом операции будет логическое значение true,
 если вычисление завершилось успешно.


## Пример


Ниже приведён пример перевычисления регламентного отчёта. В запросе
 передаётся моникёр открытого экземпляра регламентного отчёта. В ответе
 приходит признак успешного перевычисления.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<PrxMetaReportRecalc xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">S1!M!S!P1</mon>  </PrxMetaReportRecalc>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <PrxMetaReportRecalcResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</PrxMetaReportRecalcResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "PrxMetaReportRecalc" :
  {
   "mon" : "S1!M!S!P1"
  }
}

### JSON-ответ:


{
 "PrxMetaReportRecalcResult" : "1"
}


public static bool PrxRecalc(string moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tRec = new PrxMetaReportRecalc()
    {
        mon = moniker
    };
    //Перевычисление отчёта
    var result = somClient.PrxMetaReportRecalc(tRec);
    return result;
}


См. также:


[Работа
 с регламентными отчетами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
