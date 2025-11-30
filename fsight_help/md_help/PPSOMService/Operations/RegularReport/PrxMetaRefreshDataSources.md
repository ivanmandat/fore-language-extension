# PrxMetaRefreshDataSources: Операция

PrxMetaRefreshDataSources: Операция
-


**


# PrxMetaRefreshDataSources


## Синтаксис


bool PrxMetaRefreshDataSources(string mon)


## Параметры


mon. Моникёр
 открытого экземпляра регламентного отчёта.


## Описание


Операция PrxMetaRefreshDataSources
 переоткрывает источники данных регламентного отчёта.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр открытого экземпляра регламентного отчёта. Моникёр может быть
 получен при выполнении операции [OpenPrxMeta](OpenPrxMeta.htm).


Результатом операции будет логическое значение true,
 если переоткрытие источников завершилось успешно.


## Пример


Ниже приведён пример переоткрытия источников данных регламентного отчёта.
 В запросе передаётся моникёр открытого экземпляра регламентного отчёта.
 В ответе приходит признак успешного переоткрытия.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<PrxMetaRefreshDataSources xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">DDCGFGHHDPJPFOAEIAEOEKEJFPJPKKMEGIELPHHJALIADBGO!M!S!PLFCDELHHDPJPFOAEJODECPNDPFIAMPPEDLADDMBCHPBFKIAH</mon>  </PrxMetaRefreshDataSources>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <PrxMetaRefreshDataSourcesResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</PrxMetaRefreshDataSourcesResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "PrxMetaRefreshDataSources" :
  {
   "mon" : "DDCGFGHHDPJPFOAEIAEOEKEJFPJPKKMEGIELPHHJALIADBGO!M!S!PLFCDELHHDPJPFOAEJODECPNDPFIAMPPEDLADDMBCHPBFKIAH"
  }
}

### JSON-ответ:


{
 "PrxMetaRefreshDataSourcesResult" : "1"
}


public static bool PrxMetaRefreshDataSources(string moniker)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tRef = new PrxMetaRefreshDataSources()
    {
        mon = moniker
    };
    // Переоткрытие источников данных
    var result = somClient.PrxMetaRefreshDataSources(tRef);
    return result;
}


См. также:


[Работа
 с регламентными отчётами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
