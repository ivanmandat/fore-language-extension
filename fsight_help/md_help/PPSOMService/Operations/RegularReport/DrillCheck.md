# DrillCheck: Операция

DrillCheck: Операция
-


**


# DrillCheck


## Синтаксис


DrillActionResult DrillCheck(string mon, DrillArguments
 drillArgs)


## Параметры


mon. Моникёр
 визуализатора Таблица.


drillArgs. Параметры выполнения
 операции.


## Описание


Операция DrillCheck проверяет
 возможность выполнения детализации данных.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта с постфиксом «!DataArea!DataSources!«ключ
 источника»!DataSourceSlices!«ключ среза»!Views!«ключ таблицы» для
 работы с визуализатором, а в поле drillArgs
 параметры проверки на возможность детализации. Моникёр может быть получен
 при выполнении операции [OpenPrxMeta](OpenPrxMeta.htm).


В результате выполнения операции будет доступно целочисленное значение
 из комбинации доступных методов детализации.


## Пример


Ниже приведён пример проверки возможности выполнения детализации данных.
 В запросе передаётся моникёр таблицы и диапазон ячеек, для которого осуществляется
 проверка. В ответе возвращается число, соответствующее комбинации доступных
 методов детализации данных.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<DrillCheck xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">CHCLOAMOHNMNFOAEAOBHLKNHNLECIIEECIEPIFJKDPMAKEHH!M!S!PJMCKNEMOHNMNFOAEACDENOFJJPKEDLHEMIJKOGIFKAHGPPCI!DataArea!DataSources!1!DataSourceSlices!1!Views!1</mon>[![](../../minus.gif)](../../#)<drillArgs xmlns="****">
  <method>1</method>[![](../../minus.gif)](../../#)<grid>
[![](../../minus.gif)](../../#)<rng>
  <left>0</left>  <top>0</top>  <width>0</width>  <height>0</height>  <address>C2</address>  </rng>
  </grid>
  </drillArgs>
  </DrillCheck>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<DrillCheckResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <methods xmlns="****">3</methods>  </DrillCheckResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "DrillCheck" :
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
 "DrillCheckResult" :
  {
   "methods" : "3"
  }
}


public static DrillActionResult DrillCheck(string moniker, uint sourceKey, uint sliceKey, uint viewKey, TabComplexRange drillRange)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tDrill = new DrillCheck()
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
    // Проверка возможности детализации данных в таблице
    var result = somClient.DrillCheck(tDrill);
    return result;
}


См. также:


[Работа
 с регламентными отчетами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
