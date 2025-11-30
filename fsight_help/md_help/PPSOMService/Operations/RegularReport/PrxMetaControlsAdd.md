# PrxMetaControlsAdd: Операция

PrxMetaControlsAdd: Операция
-


**


# PrxMetaControlsAdd


## Синтаксис


OpItemKey PrxMetaControlsAdd(string mon, PrxMetaControlsAddArg
 tArg)


## Параметры


mon. Моникёр
 для работы с элементами управления в регламентном отчёте.


tArg. Параметры создания элемента
 управления.


## Описание


Операция PrxMetaControlsAdd
 создаёт элемент управления в регламентном отчёте.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта с постфиксом «!Controls»
 для работы с элементами управления, а в поле tArg
 параметры создания нового элемента управления. Моникёр может быть получен
 при выполнении операции [OpenPrxMeta](OpenPrxMeta.htm).


Операция возвращает ключ созданного элемента управления. Для настройки
 параметров элемента управления используйте операцию [SetPrxMeta](SetPrxMeta.htm).


## Пример


Ниже приведён пример создания элемента управления в регламентном отчёте.
 В запросе передаётся моникёр для работы с элементами управления и ключ
 листа, на котором необходимо создать элемент управления. В ответе приходит
 ключ созданного элемента управления.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<PrxMetaControlsAdd xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">S1!M!S!P1!Controls</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <sheet>2</sheet>  </tArg>
  </PrxMetaControlsAdd>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<PrxMetaControlsAddResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <k xmlns="****">2</k>  </PrxMetaControlsAddResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "PrxMetaControlsAdd" :
  {
   "mon" : "S1!M!S!P1!Controls",
   "tArg" :
    {
     "sheet" : "2"
    }
  }
}

### JSON-ответ:


{
 "PrxMetaControlsAddResult" :
  {
   "k" : "2"
  }
}


public static OpItemKey AddPrxControl(string moniker, uint sheetKey)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tAdd = new PrxMetaControlsAdd()
    {
        tArg = new PrxMetaControlsAddArg()
        {
            sheet = sheetKey
        },
        mon = moniker + "!Controls"
    };
    //Создание элемента управления
    var result = somClient.PrxMetaControlsAdd(tAdd);
    return result;
}


См. также:


[Работа
 с регламентными отчетами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
