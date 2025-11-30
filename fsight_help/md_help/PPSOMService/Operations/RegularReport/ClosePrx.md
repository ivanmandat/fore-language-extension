# ClosePrx: Операция

ClosePrx: Операция
-


**


# ClosePrx


## Синтаксис


bool ClosePrx(PrxId tPrx)


## Параметры


tPrx. Моникёр открытого экземпляра
 регламентного отчета.


## Описание


Операция ClosePrx закрывает
 экземпляр регламентного отчета.


## Комментарии


Для выполнения операции необходимо в параметре tPrx
 указать моникёр экземпляра регламентного отчета, который необходимо закрыть.
 Результатом операции будет логическое значение True,
 если закрытие завершилось успешно.


## Пример


Ниже приведён пример закрытия экземпляра регламентного отчёта. В запросе
 передаётся моникёр открытого отчёта, в ответе приходит признак успешного
 закрытия.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<ClosePrx xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tPrx xmlns="****">
  <id>S1!M!S!P1</id>  </tPrx>
  </ClosePrx>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <ClosePrxResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</ClosePrxResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "ClosePrx" :
  {
   "tPrx" :
    {
     "id" : "S1!M!S!P1"
    }
  }
}

### JSON-ответ:


{
 "ClosePrxResult" : "1"
}


public static bool ClosePrx(PrxId moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tClose = new ClosePrx()
    {
        tPrx = moniker
    };
    //Открытие регламентного отчета
    var result = somClient.ClosePrx(tClose);
    return result;
}


См. также:


[Работа
 с регламентными отчетами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
