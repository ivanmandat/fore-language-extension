# DrillAction: Операция

DrillAction: Операция
-


**


# DrillAction


## Синтаксис


bool DrillAction(string mon, DrillArguments drillArgs)


## Параметры


mon. Моникёр
 визуализатора Таблица.


drillArgs. Параметры выполнения
 операции.


## Описание


Операция DrillAction выполняет
 детализацию данных.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта с постфиксом «!DataArea!DataSources!«ключ
 источника»!DataSourceSlices!«ключ среза»!Views!«ключ таблицы» для
 работы с визуализатором, а в поле drillArgs
 параметры детализации. Моникёр может быть получен при выполнении операции
 [OpenPrxMeta](OpenPrxMeta.htm).


Операция вернёт логическое значение true,
 если детализация выполнена успешно.


## Пример


Ниже приведён пример выполнения детализации данных. В запросе передаётся
 моникёр таблицы, диапазон ячеек и метод детализации. В ответе возвращается
 признак успешного выполнения детализации.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<DrillAction xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">CHCLOAMOHNMNFOAEAOBHLKNHNLECIIEECIEPIFJKDPMAKEHH!M!S!PJMCKNEMOHNMNFOAEACDENOFJJPKEDLHEMIJKOGIFKAHGPPCI!DataArea!DataSources!1!DataSourceSlices!1!Views!1</mon>[![](../../minus.gif)](../../#)<drillArgs xmlns="****">
  <method>1</method>[![](../../minus.gif)](../../#)<grid>
[![](../../minus.gif)](../../#)<rng>
  <left>0</left>  <top>0</top>  <width>0</width>  <height>0</height>  <address>C2</address>  </rng>
  </grid>
  </drillArgs>
  </DrillAction>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <DrillActionResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</DrillActionResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "DrillAction" :
  {
   "mon" : "CHCLOAMOHNMNFOAEAOBHLKNHNLECIIEECIEPIFJKDPMAKEHH!M!S!PJMCKNEMOHNMNFOAEACDENOFJJPKEDLHEMIJKOGIFKAHGPPCI!DataArea!DataSources!1!DataSourceSlices!1!Views!1",
   "drillArgs" :
    {
     "method" : "1",
     "grid" :
      {
       "rng" :
        {
         "left" : "0",
         "top" : "0",
         "width" : "0",
         "height" : "0",
         "address" : "C2"
        }
      }
    }
  }
}

### JSON-ответ:


{
 "DrillActionResult" : "1"
}


public static bool DrillAction(string moniker, uint sourceKey, uint sliceKey, uint viewKey, TabComplexRange drillRange)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tDrill = new DrillAction()
    {
        drillArgs = new DrillArguments()
        {
            method = 1,
            grid = new GridDrillArgs()
            {
                rng = drillRange
            }
        },
        mon = moniker + "!DataArea!DataSources!" + sourceKey.ToString() + "!DataSourceSlices!" + sliceKey.ToString() + "!Views!" + viewKey.ToString()
    };
    // Детализация данных в таблице
    var result = somClient.DrillAction(tDrill);
    return result;
}


См. также:


[Работа
 с регламентными отчетами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
