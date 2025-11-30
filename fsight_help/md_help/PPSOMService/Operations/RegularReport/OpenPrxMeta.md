# OpenPrxMeta: Операция

OpenPrxMeta: Операция
-


**


# OpenPrxMeta


## Синтаксис


PrxMetaResult OpenPrxMeta(OdId tObject, OpenPrxMetaArg
 tArg)


## Параметры


tObject. Моникёр
 объекта репозитория, являющегося регламентным отчётом.


tArg. Параметры выполнения
 операции.


## Описание


Операция OpenPrxMeta открывает
 регламентный отчёт и предоставляет доступ для работы с его метаданными.


## Комментарии


Для выполнения операции укажите в поле tObject
 моникёр объекта, являющегося регламентным отчётом, а в поле tArg
 параметры открытия. Моникёр объекта может быть получен при выполнении
 операции [GetObjects](../Repository/GetObjects.htm).
 В поле tArg.args могут быть указаны
 режим открытия отчёта (просмотр или редактирование) и значения параметров,
 которые будут переданы параметрическим источникам данных. В поле tArg.meta можно указать метаданные,
 которые необходимо получить при выполнении операции. Задайте те поля,
 которые необходимо получить. Для полей должны быть указаны их значения
 по умолчанию. Для получения коллекций каких-либо объектов необходимо запросить
 как минимум ключ объектов и указать в качестве значения ключа «-1». Результатом
 работы операции будет моникёр открытого экземпляра регламентного отчёта,
 а также метаданные, если были определены поля в tArg.meta.


Дальнейшая работа с открытым отчётом осуществляется с помощью операций
 [GetPrxMeta](GetPrxMeta.htm),
 [SetPrxMeta](SetPrxMeta.htm),
 [PrxMetaReportRecalc](PrxMetaReportRecalc.htm),
 [PrxMetaReportExport](PrxMetaReportExport.htm).


Для работы с листами отчёта используйте операции: [PrxMetaSheetsAdd](PrxMetaSheetsAdd.htm),
 [PrxMetaSheetsDelete](PrxMetaSheetsDelete.htm),
 [PrxMetaSheetsMove](PrxMetaSheetsMove.htm),
 [PrxMetaSheetsDuplicate](PrxMetaSheetsDuplicate.htm).


Для работы с элементами управления: [PrxMetaControlsAdd](PrxMetaControlsAdd.htm),
 [PrxMetaControlsDelete](PrxMetaControlsDelete.htm),
 [PrxMetaControlsMove](PrxMetaControlsMove.htm).


Для работы с визуализаторами используйте операции [PrxMetaViewsAdd](PrxMetaViewsAdd.htm),
 [DataAreaViewsDelete](DataAreaViewsDelete.htm).


Для работы с аналитической областью данных используйте операции: [DataAreaSourcesAdd](DataAreaSourcesAdd.htm),
 [GetDataAreaSources](GetDataAreaSources.htm),
 [SetDataAreaSources](SetDataAreaSources.htm),
 [SetDataAreaVirtualSources](SetDataAreaVirtualSources.htm),
 [DataAreaSourcesDelete](DataAreaSourcesDelete.htm),
 [DataAreaSlicesAdd](DataAreaSlicesAdd.htm),
 [DataAreaSlicesDelete](DataAreaSlicesDelete.htm).


Для работы с основой среза данных используйте операции: [GetPivotMetaData](GetPivotMetaData.htm), [SetPivotMetaData](SetPivotMetaData.htm),
 [PivotChangeDimHeader](PivotChangeDimHeader.htm),
 [PivotMoveDimToIndex](PivotMoveDimToIndex.htm).


Для закрытия открытого экземпляра регламентного отчёта используйте операцию
 [ClosePrxMeta](ClosePrxMeta.htm).


## Пример


Ниже приведён пример открытия регламентного отчёта на редактирование.
 В запросе передаётся моникёр объекта, являющегося регламентным отчетом,
 и флаг, определяющий необходимость открыть отчёт на редактирование. В
 ответе приходит моникёр открытого экземпляра регламентного отчёта.


В примере C# используется функция FindObjectById,
 код которой приведён в примере «[Получение
 описания объекта по его идентификатору](../Repository/GetObjects_Sample/GetObjects_Sample.htm)».


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<OpenPrxMeta xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tObject xmlns="****">
  <id>S1!M!177486</id>  </tObject>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<args>
  <openForEdit>true</openForEdit>  </args>
  </tArg>
  </OpenPrxMeta>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<OpenPrxMetaResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>S1!M!S!P1</id>  </id>
  </OpenPrxMetaResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "OpenPrxMeta" :
  {
   "tObject" :
    {
     "id" : "S1!M!177486"
    },
   "tArg" :
    {
     "args" :
      {
       "openForEdit" : "true"
      }
    }
  }
}

### JSON-ответ:


{
 "OpenPrxMetaResult" :
  {
   "id" :
    {
     "id" : "S1!M!S!P1"
    }
  }
}


public static PrxMetaResult OpenMetaPrx(MbId mb, string prxId, bool forEdit = true )
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tOpen = new OpenPrxMeta()
    {
        tArg = new OpenPrxMetaArg()
        {
            args = new PrxMetaOpenArgs() { openForEdit = forEdit }
        },
        //Формирование моникера объекта
        tObject = new OdId() { id = mb.id + "!" + FindObjectById(mb, prxId).k }
    };
    //Открытие регламентного отчета
    var result = somClient.OpenPrxMeta(tOpen);
    return result;
}


См. также:


[Работа
 с регламентными отчетами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
