# DataAreaSlicesAdd: Операция

DataAreaSlicesAdd: Операция
-


**


# DataAreaSlicesAdd


## Синтаксис


OpItemKey DataAreaSlicesAdd(string mon, DataAreaSlicesAddArg
 tArg)


## Параметры


mon. Моникёр
 для работы со срезами источника данных.


tArg. Параметры создания нового
 среза данных.


## Описание


Операция DataAreaSlicesAdd создаёт
 новый срез данных для источника данных аналитической области данных.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта с постфиксом «!DataArea!DataSources!<ключ
 источника>!DataSourceSlices» для работы со срезами источников
 данных, а в поле tArg.type тип
 создаваемого среза данных.


Моникёр может быть получен при выполнении операции [OpenPrxMeta](OpenPrxMeta.htm).


Результатом выполнения операции будет ключ созданного среза данных.


## Пример


Ниже приведён пример создания нового среза для источника данных. В запросе
 передаётся моникёр для работы со срезами данных и тип создаваемого среза.
 В ответе приходит ключ созданного среза данных.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<DataAreaSlicesAdd xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">S1!M!S!P1!DataArea!DataSources!1!DataSourceSlices</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <type>Pivot</type>  </tArg>
  </DataAreaSlicesAdd>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<DataAreaSlicesAddResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <k xmlns="****">3</k>  </DataAreaSlicesAddResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "DataAreaSlicesAdd" :
  {
   "mon" : "S1!M!S!P1!DataArea!DataSources!1!DataSourceSlices",
   "tArg" :
    {
     "type" : "Pivot"
    }
  }
}

### JSON-ответ:


{
 "DataAreaSlicesAddResult" :
  {
   "k" : "3"
  }
}


public static OpItemKey AddSlice(string moniker, uint dataSourceKey)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tAdd = new DataAreaSlicesAdd()
    {
        tArg = new DataAreaSlicesAddArg()
        {
            type = EaxDataAreaSliceType.Pivot
        },
        mon = moniker + "!DataArea!DataSources!" + dataSourceKey.ToString() + "!DataSourceSlices"
    };
    //Добаление среза для источника данных
    var result = somClient.DataAreaSlicesAdd(tAdd);
    return result;
}


См. также:


[Работа
 с регламентными отчетами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
