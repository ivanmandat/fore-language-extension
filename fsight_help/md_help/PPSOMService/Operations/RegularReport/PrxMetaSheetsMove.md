# PrxMetaSheetsMove: Операция

PrxMetaSheetsMove: Операция
-


**


# PrxMetaSheetsMove


## Синтаксис


bool PrxMetaSheetsMove(string mon, PrxMetaSheetsMoveArg
 tArg)


## Параметры


mon. Моникёр
 для работы с листами регламентного отчёта.


tArg. Параметры перемещения
 листа в регламентном отчёте.


## Описание


Операция PrxMetaSheetsMove перемещает
 лист в регламентном отчёте.


## Комментарии


Операция позволяет изменить порядок расположения листа. Для выполнения
 операции укажите в поле mon моникёр
 экземпляра регламентного отчёта с постфиксом «!Sheets»
 для работы с листами, а в поле tArg
 параметры перемещения листа. Моникёр может быть получен при выполнении
 операции [OpenPrxMeta](OpenPrxMeta.htm).


Операция возвращает значение true,
 если перемещение листов завершилось успешно.


## Пример


Ниже приведён пример перемещения листа в регламентном отчёте. В запросе
 передаётся моникёр для работы с листами, индексы позиции из которой и
 в которую необходимо переместить лист. В ответе приходит признак успешного
 перемещения листа.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<PrxMetaSheetsMove xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">S1!M!S!P1!Sheets</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <oldIndex>1</oldIndex>  <newIndex>0</newIndex>  </tArg>
  </PrxMetaSheetsMove>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <PrxMetaSheetsMoveResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</PrxMetaSheetsMoveResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "PrxMetaSheetsMove" :
  {
   "mon" : "S1!M!S!P1!Sheets",
   "tArg" :
    {
     "oldIndex" : "1",
     "newIndex" : "0"
    }
  }
}

### JSON-ответ:


{
 "PrxMetaSheetsMoveResult" : "1"
}


public static bool MovePrxSheets(string moniker, uint oldIndex, uint newIndex)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tMove = new PrxMetaSheetsMove()
    {
        tArg = new PrxMetaSheetsMoveArg()
        {
            oldIndex = oldIndex,
            newIndex = newIndex
        },
        mon = moniker + "!Sheets"
    };
    //Перемещение листов
    var result = somClient.PrxMetaSheetsMove(tMove);
    return result;
}


См. также:


[Работа
 с регламентными отчетами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
