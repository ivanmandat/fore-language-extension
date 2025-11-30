# DataAreaViewsDelete: Операция

DataAreaViewsDelete: Операция
-


**


# DataAreaViewsDelete


## Синтаксис


bool DataAreaViewsDelete(string mon, OpItemKey tArg)


## Параметры


mon. Моникёр,
 содержащий информацию об источнике и срезе данных, для которых был создан
 удаляемый визуализатор.


tArg. Ключ визуализатора, который
 необходимо удалить.


## Описание


Операция DataAreaViewsDelete
 удаляет визуализатор в регламентном отчёте.


## Комментарии


Операция позволяет удалить визуализатор, отображающий данные какого-либо
 источника аналитической области данных. Для выполнения операции укажите
 в поле mon моникёр экземпляра
 регламентного отчёта с постфиксом «!DataArea!DataSources!<ключ
 источника>!DataSourceSlices!<ключ среза>!Views» для работы
 с визуализаторами, а в поле tArg
 ключ удаляемого визуализатора.


Моникёр может быть получен при выполнении операции [OpenPrxMeta](OpenPrxMeta.htm).


Операция вернёт значение true,
 если удаление визуализатора прошло удачно.


## Пример


Ниже приведён пример удаления визуализатора, созданного для среза данных.
 В запросе передаётся моникёр для работы с визуализаторами заданного среза
 и ключ удаляемого визуализатора. В ответе приходит признак успешного удаления.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<DataAreaViewsDelete xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">S1!M!S!P1!DataArea!DataSources!1!DataSourceSlices!1!Views</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <k>4</k>  </tArg>
  </DataAreaViewsDelete>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <DataAreaViewsDeleteResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</DataAreaViewsDeleteResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "DataAreaViewsDelete" :
  {
   "mon" : "S1!M!S!P1!DataArea!DataSources!1!DataSourceSlices!1!Views",
   "tArg" :
    {
     "k" : "4"
    }
  }
}

### JSON-ответ:


{
 "DataAreaViewsDeleteResult" : "1"
}


public static bool DelView(string moniker, uint sourceKey, uint sliceKey, uint viewKey)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tDel = new DataAreaViewsDelete()
    {
        tArg = new OpItemKey() { k = viewKey }
        ,
        mon = moniker + "!DataArea!DataSources!"+ sourceKey.ToString() + "!DataSourceSlices!" + sliceKey.ToString() + "!Views"
    };
    //Удаление визуализатора
    var result = somClient.DataAreaViewsDelete(tDel);
    return result;
}


См. также:


[Работа
 с регламентными отчетами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
