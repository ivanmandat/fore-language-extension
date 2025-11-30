# PrxMetaControlsMove: Операция

PrxMetaControlsMove: Операция
-


**


# PrxMetaControlsMove


## Синтаксис


bool PrxMetaControlsMove(string mon, PrxMetaControlsMoveArg
 tArg)


## Параметры


mon. Моникёр
 для работы с элементами управления в регламентном отчёте.


tArg. Параметры перемещения
 элемента управления.


## Описание


Операция PrxMetaControlsMove
 перемещает элемент управления в регламентном отчёте.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта с постфиксом «!Controls»
 для работы с элементами управления, а в поле tArg
 параметры перемещения элемента управления. Моникёр может быть получен
 при выполнении операции [OpenPrxMeta](OpenPrxMeta.htm).


Операция возвращает значение true,
 если перемещение элемента управления завершилось успешно.


## Пример


Ниже приведён пример перемещения элемента управления на другой лист
 регламентного отчёта. В запросе передаётся моникёр для работы с элементами
 управления и ключ листа, на который осуществляется перемещение. В ответе
 приходит признак успешного перемещения.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<PrxMetaControlsMove xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">S1!M!S!P1!Controls</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <sheetKey>3</sheetKey>  <indexFrom>0</indexFrom>  <indexTo>0</indexTo>  </tArg>
  </PrxMetaControlsMove>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <PrxMetaControlsMoveResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</PrxMetaControlsMoveResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "PrxMetaControlsMove" :
  {
   "mon" : "S1!M!S!P1!Controls",
   "tArg" :
    {
     "sheetKey" : "3",
     "indexFrom" : "0",
     "indexTo" : "0"
    }
  }
}

### JSON-ответ:


{
 "PrxMetaControlsMoveResult" : "1"
}


public static bool MovePrxControl(string moniker, uint controlKey, uint newSheetKey, long oldIndexPos = 0, long newIndexPos = 0)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tDel = new PrxMetaControlsMove()
    {
        tArg = new PrxMetaControlsMoveArg()
        {
            sheetKey = newSheetKey,
            indexFrom = oldIndexPos,
            indexTo = newIndexPos
        },
        mon = moniker + "!Controls"
    };
    //Перемещение элемента управления
    var result = somClient.PrxMetaControlsMove(tDel);
    return result;
}


См. также:


[Работа
 с регламентными отчетами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
