# SetPivotHeaderMetaData: Операция

SetPivotHeaderMetaData: Операция
-


**


# SetPivotHeaderMetaData


## Синтаксис


bool SetPivotHeaderMetaData(string mon, PivotHeader
 tArg)


## Параметры


mon. Моникёр
 для работы с заголовком среза данных.


tArg. Параметры, которые необходимо
 применить для заголовка среза.


## Описание


Операция SetPivotHeaderMetaData
 изменяет настройки заголовка среза данных.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта с постфиксом «!DataArea!DataSources!<ключ
 источника>!DataSourceSlices!<ключ среза>!Pivot!».


Также данный моникёр необходимо дополнить одним из следующих значений:


	- «TopHeader» - для работы
	 с заголовком столбцов;


	- «LeftHeader» - для работы
	 с заголовком строк.


Моникёр может быть получен при выполнении операции [OpenPrxMeta](OpenPrxMeta.htm).


В поле tArg задайте настройки,
 которые нужно применить для заголовка.


Операция вернёт значение true,
 если применение настроек завершилось успешно.


## Пример


Ниже приведён пример изменения настроек заголовка столбцов среза данных.
 В запросе передаётся моникёр для работы с настройками заголовка и изменяемые
 параметры. В ответе приходит признак успешного применения изменений.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetPivotHeaderMetaData xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">FCJKECDEBBGOFOAENKBHCHAOHGPDFHHEPJAKMBIGJNLFCJOB!M!S!PLHCGKDDEBBGOFOAENCPCGCHBJGOFDLNEIJMPDIHNAGKFLNGA!DataArea!DataSources!1!DataSourceSlices!1!Pivot!TopHeader</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <separated>1</separated>  </tArg>
  </SetPivotHeaderMetaData>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <SetPivotHeaderMetaDataResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</SetPivotHeaderMetaDataResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetPivotHeaderMetaData" :
  {
   "mon" : "FCJKECDEBBGOFOAENKBHCHAOHGPDFHHEPJAKMBIGJNLFCJOB!M!S!PLHCGKDDEBBGOFOAENCPCGCHBJGOFDLNEIJMPDIHNAGKFLNGA!DataArea!DataSources!1!DataSourceSlices!1!Pivot!TopHeader",
   "tArg" :
    {
     "separated" : "1"
    }
  }
}

### JSON-ответ:


{
 "SetPivotHeaderMetaDataResult" : "1"
}


public static bool SetPivotHeaderMeta(string moniker, uint dataSourceKey, uint sliceKey)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tSet = new SetPivotHeaderMetaData()
    {
        tArg = new PivotHeader()
        {
            separated = 1
        },
        mon = moniker + "!DataArea!DataSources!" + dataSourceKey.ToString() + "!DataSourceSlices!" + sliceKey.ToString() + "!Pivot!TopHeader"
    };
    //Изменение настроек для заголовка
    var result = somClient.SetPivotHeaderMetaData(tSet);
    return result;
}


См. также:


[Работа
 с регламентными отчетами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
