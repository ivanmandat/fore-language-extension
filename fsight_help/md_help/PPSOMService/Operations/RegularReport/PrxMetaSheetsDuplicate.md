# PrxMetaSheetsDuplicate: Операция

PrxMetaSheetsDuplicate: Операция
-


**


# PrxMetaSheetsDuplicate


## Синтаксис


OpItemKey PrxMetaSheetsDuplicate(string mon, OpItemKey
 tArg)


## Параметры


mon. Моникёр
 для работы с листами регламентного отчёта.


tArg. Ключ дублируемого листа
 регламентного отчёта.


## Описание


Операция PrxMetaSheetsDuplicate
 создаёт дубликат листа в регламентном отчёте.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта с постфиксом «!Sheets»
 для работы с листами, а в поле tArg
 ключ дублируемого листа. Моникёр может быть получен при выполнении операции
 [OpenPrxMeta](OpenPrxMeta.htm).


Операция возвращает ключ созданного дубликата листа.


## Пример


Ниже приведён пример создания дубликата листа в регламентный отчёт.
 В запросе передаётся моникёр для работы с листами и ключ листа, для которого
 будет создан дубликат. В ответе приходит ключ созданного дубликата листа.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<PrxMetaSheetsDuplicate xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">S1!M!S!P1!Sheets</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <k>2</k>  </tArg>
  </PrxMetaSheetsDuplicate>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<PrxMetaSheetsDuplicateResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <k xmlns="****">3</k>  </PrxMetaSheetsDuplicateResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "PrxMetaSheetsDuplicate" :
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
 "PrxMetaSheetsDuplicateResult" :
  {
   "k" : "3"
  }
}


public static OpItemKey DuplicatePrxSheet(string moniker, uint sheetKey)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tDup = new PrxMetaSheetsDuplicate()
    {
        tArg = new OpItemKey()
        {
            k = sheetKey
        },
        mon = moniker + "!Sheets"
    };
    //Создание дубликата листа
    var result = somClient.PrxMetaSheetsDuplicate(tDup);
    return result;
}


См. также:


[Работа
 с регламентными отчетами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
