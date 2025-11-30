# DataAreaSourcesDelete: Операция

DataAreaSourcesDelete: Операция
-


**


# DataAreaSourcesDelete


## Синтаксис


bool DataAreaSourcesDelete(string mon, OpItemKey
 tArg)


## Параметры


mon. Моникёр
 для работы с источниками данных аналитической области данных регламентного
 отчёта.


tArg. Ключ удаляемого источника
 данных.


## Описание


Операция DataAreaSourcesDelete
 удаляет источник данных у аналитической области данных.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр открытого экземпляра регламентного отчёта с постфиксом «!DataArea!DataSources» для работы
 с источниками данных, а в поле tArg
 ключ удаляемого источника данных.


Моникёр может быть получен при выполнении операции [OpenPrxMeta](OpenPrxMeta.htm).


Операция вернёт значение true,
 если удаление источника данных завершилось успешно.


## Пример


Ниже приведён пример удаления источника у аналитической области данных.
 В запросе передаётся моникёр для работы с источниками данных и ключ удаляемого
 источника. В ответе приходит признак успешного удаления.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<DataAreaSourcesDelete xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">S1!M!S!P1!DataArea!DataSources</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <k>3</k>  </tArg>
  </DataAreaSourcesDelete>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <DataAreaSourcesDeleteResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</DataAreaSourcesDeleteResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "DataAreaSourcesDelete" :
  {
   "mon" : "S1!M!S!P1!DataArea!DataSources",
   "tArg" :
    {
     "k" : "3"
    }
  }
}

### JSON-ответ:


{
 "DataAreaSourcesDeleteResult" : "1"
}


public static bool DelDataSource(string moniker, uint datasourceKey)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tAdd = new DataAreaSourcesDelete()
    {
        tArg = new OpItemKey()
        {
            k = datasourceKey
        },
        mon = moniker + "!DataArea!DataSources"
    };
    //Добаление источника данных
    var result = somClient.DataAreaSourcesDelete(tAdd);
    return result;
}


См. также:


[Работа
 с регламентными отчетами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
