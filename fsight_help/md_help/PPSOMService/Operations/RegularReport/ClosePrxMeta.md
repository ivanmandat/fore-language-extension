# ClosePrxMeta: Операция

ClosePrxMeta: Операция
-


**


# ClosePrxMeta


## Синтаксис


bool ClosePrxMeta(string mon)


## Параметры


mon. Моникёр
 открытого экземпляра регламентного отчёта.


## Описание


Операция ClosePrxMeta закрывает
 экземпляр регламентного отчёта.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта, который необходимо закрыть. Моникёр
 может быть получен при выполнении операции [OpenPrxMeta](OpenPrxMeta.htm).


Результатом операции будет логическое значение true,
 если закрытие завершилось успешно.


## Пример


Ниже приведён пример закрытия экземпляра регламентного отчёта. В запросе
 передаётся моникёр открытого отчёта, в ответе приходит признак успешного
 закрытия.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<ClosePrxMeta xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">S1!M!S!P1</mon>  </ClosePrxMeta>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <ClosePrxMetaResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</ClosePrxMetaResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "ClosePrxMeta" :
  {
   "mon" : "S1!M!S!P1"
  }
}

### JSON-ответ:


{
 "ClosePrxMetaResult" : "1"
}


public static bool CloseMetaPrx(string moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tClose = new ClosePrxMeta()
    {
        mon = moniker
    };
    //Закрытие регламентного отчета
    var result = somClient.ClosePrxMeta(tClose);
    return result;
}


См. также:


[Работа
 с регламентными отчетами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
