# PrxMetaViewsAdd: Операция

PrxMetaViewsAdd: Операция
-


**


# PrxMetaViewsAdd


## Синтаксис


PrxMetaViewsAddResult PrxMetaViewsAdd(string mon,
 PrxMetaViewsAddArg tArg)


## Параметры


mon. Моникёр
 открытого экземпляра регламентного отчёта.


tArg. Параметры добавления
 визуализатора.


## Описание


Операция PrxMetaViewsAdd добавляет
 визуализатор в регламентный отчёт.


## Комментарии


Операция позволяет на заданном листе регламентного отчёта добавить визуализатор
 для отображения данных указанного источника.


Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта, а в поле tArg
 параметры добавления визуализатора.


Моникёр может быть получен при выполнении операции [OpenPrxMeta](OpenPrxMeta.htm).


Результатом выполнения операции будет информация о созданном визуализаторе.


## Пример


Ниже приведён пример создания нового визуализатора. В запросе передаётся
 моникёр регламентного отчёта и информация, необходимая для создания визуализатора:
 тип визуализатора, ключи источника и среза данных, ключ страницы и начальная
 координата, где будет размещён визуализатор. В ответе приходит ключ созданного
 визуализатора.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<PrxMetaViewsAdd xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">S1!M!S!P1</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <type>Grid</type>  <sourceKey>1</sourceKey>  <sliceKey>1</sliceKey>  <sheetKey>2</sheetKey>  <startCell L="**1**" T="**1**" />
  </tArg>
  </PrxMetaViewsAdd>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<PrxMetaViewsAddResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <sliceKey xmlns="****">1</sliceKey>  <viewKey xmlns="****">4</viewKey>  </PrxMetaViewsAddResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "PrxMetaViewsAdd" :
  {
   "mon" : "S1!M!S!P1",
   "tArg" :
    {
     "type" : "Grid",
     "sourceKey" : "1",
     "sliceKey" : "1",
     "sheetKey" : "2",
     "startCell" :
      {
       "@T" : "1",
       "@L" : "1"
      }
    }
  }
}

### JSON-ответ:


{
 "PrxMetaViewsAddResult" :
  {
   "sliceKey" : "1",
   "viewKey" : "4"
  }
}


public static PrxMetaViewsAddResult AddGrid(string moniker, uint sheetKey, uint sourceKey, uint sliceKey)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tAdd = new PrxMetaViewsAdd()
    {
        tArg = new PrxMetaViewsAddArg()
        {
            type = EaxObjectType.Grid,
            startCell = new TabCoord() { L = 1, LSpecified = true, T = 1, TSpecified = true },
            sheetKey = sheetKey,
            sourceKey = sourceKey,
            sliceKey = sliceKey
        },
        mon = moniker
    };
    //Добаление визуализатора
    var result = somClient.PrxMetaViewsAdd(tAdd);
    return result;
}


См. также:


[Работа
 с регламентными отчетами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
