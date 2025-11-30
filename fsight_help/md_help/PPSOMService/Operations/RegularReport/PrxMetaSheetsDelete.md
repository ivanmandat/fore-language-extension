# PrxMetaSheetsDelete: Операция

PrxMetaSheetsDelete: Операция
-


**


# PrxMetaSheetsDelete


## Синтаксис


bool PrxMetaSheetsDelete(string mon, OpItemKey tArg)


## Параметры


mon. Моникёр
 для работы с листами регламентного отчёта.


tArg. Параметры выполнения
 операции.


## Описание


Операция PrxMetaSheetsDelete
 удаляет лист регламентного отчёта.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр открытого экземпляра регламентного отчёта с постфиксом «!Sheets» для работы с листами,


а в поле tArg ключ удаляемого
 листа.


Моникёр может быть получен при выполнении операции [OpenPrxMeta](OpenPrxMeta.htm).


Операция вернёт значение true,
 если удаление листа завершилось успешно.


## Пример


Ниже приведён пример удаления листа в регламентном отчёте. В запросе
 передаётся моникёр для работы с листами и ключ удаляемого листа. В ответе
 приходит признак успешного удаления.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<PrxMetaSheetsDelete xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">S1!M!S!P1!Sheets</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <k>2</k>  </tArg>
  </PrxMetaSheetsDelete>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <PrxMetaSheetsDeleteResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</PrxMetaSheetsDeleteResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "PrxMetaSheetsDelete" :
  {
   "mon" : "S1!M!S!P1!Sheets",
   "tArg" :
    {
     "k" : "2"
    }
  }
}

### JSON-ответ:


{
 "PrxMetaSheetsDeleteResult" : "1"
}


public static bool DelPrxSheet(string moniker, uint sheetKey)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tDel = new PrxMetaSheetsDelete()
    {
        tArg = new OpItemKey() { k = sheetKey },
        mon = moniker + "!Sheets"
    };
    //Удаление листа
    var result = somClient.PrxMetaSheetsDelete(tDel);
    return result;
}


См. также:


[Работа
 с регламентными отчетами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
