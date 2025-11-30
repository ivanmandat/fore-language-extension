# DataAreaSlicesDelete: Операция

DataAreaSlicesDelete: Операция
-


**


# DataAreaSlicesDelete


## Синтаксис


bool DataAreaSlicesDelete(string mon, OpItemKey
 tArg)


## Параметры


mon. Моникёр
 для работы со срезами источника данных.


tArg. Ключ удаляемого среза
 данных у источника данных.


## Описание


Операция DataAreaSlicesDelete
 удаляет срез данных у источника данных.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта с постфиксом «!DataArea!DataSources!<ключ
 источника>!DataSourceSlices» для работы со срезами источников
 данных, а в поле tArg ключ удаляемого
 среза источника данных.


Моникёр может быть получен при выполнении операции [OpenPrxMeta](OpenPrxMeta.htm).


Операция вернёт значение true,
 если удаление среза завершилось успешно.


## Пример


Ниже приведён пример удаления среза у источника данных. В запросе передаётся
 моникёр для работы со срезами данных и ключ удаляемого среза. В ответе
 приходит признак успешного удаления.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<DataAreaSlicesDelete xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">S1!M!S!P1!DataArea!DataSources!1!DataSourceSlices</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <k>3</k>  </tArg>
  </DataAreaSlicesDelete>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <DataAreaSlicesDeleteResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</DataAreaSlicesDeleteResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "DataAreaSlicesDelete" :
  {
   "mon" : "S1!M!S!P1!DataArea!DataSources!1!DataSourceSlices",
   "tArg" :
    {
     "k" : "3"
    }
  }
}

### JSON-ответ:


{
 "DataAreaSlicesDeleteResult" : "1"
}


public static bool DelSlice(string moniker, uint dataSourceKey, uint sliceKey)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tDel = new DataAreaSlicesDelete()
    {
        tArg = new OpItemKey() { k = sliceKey },
        mon = moniker + "!DataArea!DataSources!" + dataSourceKey.ToString() + "!DataSourceSlices"
    };
    //Удаление среза данных
    var result = somClient.DataAreaSlicesDelete(tDel);
    return result;
}


См. также:


[Работа
 с регламентными отчетами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
