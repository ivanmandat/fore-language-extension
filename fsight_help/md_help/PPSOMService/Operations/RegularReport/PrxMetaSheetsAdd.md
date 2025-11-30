# PrxMetaSheetsAdd: Операция

PrxMetaSheetsAdd: Операция
-


**


# PrxMetaSheetsAdd


## Синтаксис


OpItemKey PrxMetaSheetsAdd(string mon, PrxMetaSheetsAddArg
 tArg)


## Параметры


mon. Моникёр
 для работы с листами регламентного отчёта.


tArg. Параметры выполнения
 операции.


## Описание


Операция PrxMetaSheetsAdd добавляет
 новый лист в регламентный отчёт.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта с постфиксом «!Sheets»
 для работы с листами, а в поле tArg
 параметры добавляемого листа.


Моникёр может быть получен при выполнении операции [OpenPrxMeta](OpenPrxMeta.htm).


Результатом операции будет ключ добавленного листа.


## Пример


Ниже приведён пример добавления листа в регламентный отчёт. В запросе
 передаётся моникёр для работы с листами и тип добавляемого листа. В ответе
 приходит ключ созданного листа.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<PrxMetaSheetsAdd xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">S1!M!S!P1!Sheets</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <n>Новый лист</n>  <type>Table</type>  </tArg>
  </PrxMetaSheetsAdd>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<PrxMetaSheetsAddResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <k xmlns="****">2</k>  </PrxMetaSheetsAddResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "PrxMetaSheetsAdd" :
  {
   "mon" : "S1!M!S!P1!Sheets",
   "tArg" :
    {
     "n" : "Новый лист",
     "type" : "Table"
    }
  }
}

### JSON-ответ:


{
 "PrxMetaSheetsAddResult" :
  {
   "k" : "2"
  }
}


public static OpItemKey AddPrxSheet(string moniker, string sheetName)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tAdd = new PrxMetaSheetsAdd()
    {
        tArg = new PrxMetaSheetsAddArg()
        {
            type = PrxSheetType.Table,
            n = sheetName
        },
        mon = moniker + "!Sheets"
    };
    //Добаление нового листа
    var result = somClient.PrxMetaSheetsAdd(tAdd);
    return result;
}


См. также:


[Работа
 с регламентными отчетами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
