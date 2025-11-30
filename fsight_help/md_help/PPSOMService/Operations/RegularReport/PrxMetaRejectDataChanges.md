# PrxMetaRejectDataChanges: Операция

PrxMetaRejectDataChanges: Операция
-


**


# PrxMetaRejectDataChanges


## Синтаксис


bool PrxMetaRejectDataChanges(string mon)


## Параметры


mon. Моникёр
 открытого экземпляра регламентного отчёта или листа отчёта.


## Описание


Операция PrxMetaRejectDataChanges
 отменяет изменения в данных табличных областей регламентного отчёта или
 листа отчёта.


## Комментарии


При выполнении операции все несохранённые в источники изменения во всех
 табличных областях отчёта/листа будут отменены. Для выполнения операции
 укажите в поле mon моникёр открытого
 экземпляра регламентного отчёта. Моникёр отчёта может быть получен при
 выполнении операции [OpenPrxMeta](OpenPrxMeta.htm). Моникёр
 листа указывается в формате «Моникёр
 экземпляра рег.отчёта!Sheets!Ключ листа».


Результатом выполнения операции будет логическое значение true,
 если отмена изменений в данных завершилась успешно.


## Пример


Ниже приведён пример отмены изменённых данных в табличных областях регламентного
 отчёта. В запросе передаётся моникёр открытого экземпляра регламентного
 отчёта. В ответе возвращается признак успешной отмены.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<PrxMetaRejectDataChanges xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">LEFCEGHEHDAGGOAEIDIBAFJILIJAOCNEFJGGKICOCEHGJIFE!M!S!PCGIBEMHEHDAGGOAELLKJBGLMCMMNKKMEJJJCPJBIHOHKDFHJ</mon>  </PrxMetaRejectDataChanges>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <PrxMetaRejectDataChangesResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</PrxMetaRejectDataChangesResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "PrxMetaRejectDataChanges" :
  {
   "mon" : "LEFCEGHEHDAGGOAEIDIBAFJILIJAOCNEFJGGKICOCEHGJIFE!M!S!PCGIBEMHEHDAGGOAELLKJBGLMCMMNKKMEJJJCPJBIHOHKDFHJ"
  }
}

### JSON-ответ:


{
 "PrxMetaRejectDataChangesResult" : "1"
}


public static bool PrxMetaRejectDataChanges(string moniker)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tChange = new PrxMetaRejectDataChanges()
    {
        mon = moniker
    };
    // Отмена изменений в данных
    var result = somClient.PrxMetaRejectDataChanges(tChange);
    return result;
}


См. также:


[Работа
 с регламентными отчётами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
