# PrxMetaControlsDelete: Операция

PrxMetaControlsDelete: Операция
-


**


# PrxMetaControlsDelete


## Синтаксис


bool PrxMetaControlsDelete(string mon, OpItemKey
 tArg)


## Параметры


mon. Моникёр
 для работы с элементами управления в регламентном отчёте.


tArg. Ключ удаляемого элемента
 управления.


## Описание


Операция PrxMetaControlsDelete
 удаляет элемент управления в регламентном отчёте.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта с постфиксом «!Controls»
 для работы с элементами управления, а в поле tArg
 ключ удаляемого элемента управления. Моникёр может быть получен при выполнении
 операции [OpenPrxMeta](OpenPrxMeta.htm).


Операция возвращает значение true,
 если удаление элемента управления завершилось успешно.


## Пример


Ниже приведён пример удаления элемента управления в регламентном отчёте.
 В запросе передаётся моникёр для работы с элементами управления и ключ
 удаляемого элемента управления. В ответе приходит признак успешного удаления.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<PrxMetaControlsDelete xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">S1!M!S!P1!Controls</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <k>2</k>  </tArg>
  </PrxMetaControlsDelete>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <PrxMetaControlsDeleteResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</PrxMetaControlsDeleteResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "PrxMetaControlsDelete" :
  {
   "mon" : "S1!M!S!P1!Controls",
   "tArg" :
    {
     "k" : "2"
    }
  }
}

### JSON-ответ:


{
 "PrxMetaControlsDeleteResult" : "1"
}


public static bool DeletePrxControl(string moniker, uint controlKey)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tDel = new PrxMetaControlsDelete()
    {
        tArg = new OpItemKey()
        {
            k = controlKey
        },
        mon = moniker + "!Controls"
    };
    //Удаление элемента управления
    var result = somClient.PrxMetaControlsDelete(tDel);
    return result;
}


См. также:


[Работа
 с регламентными отчетами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
