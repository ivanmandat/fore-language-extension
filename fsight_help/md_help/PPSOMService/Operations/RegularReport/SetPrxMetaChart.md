# SetPrxMetaChart: Операция

SetPrxMetaChart: Операция
-


**


# SetPrxMetaChart


## Синтаксис


bool SetPrxMetaChart(string mon, PrxMetaChart tArg)


## Параметры


mon. Моникёр
 для работы с диаграммой.


tArg. Метаданные, которые необходимо
 задать для диаграммы.


## Описание


Операция SetPrxMetaChart изменяет
 метаданные диаграммы, расположенной на листе регламентного отчёта.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта с постфиксом «!Sheets!ключ
 листа!Objects!идентификатор диаграммы» для работы с диаграммой,
 а в поле tArg задаваемые метаданные.
 Моникёр экземпляра регламентного отчёта может быть получен при выполнении
 операции [OpenPrxMeta](OpenPrxMeta.htm).


Операция возвращает значение true,
 если изменение метаданных завершилось успешно.


## Пример


Ниже приведён пример изменения настроек диаграммы. В запросе передаётся
 моникёр диаграммы и обновлённые метаданные, содержащие необходимые настройки.
 В ответе приходит признак успешного применения изменений.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetPrxMetaChart xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">S1!M!S!P1!Sheets!1!Objects!PrxChart3</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <name>Диаграмма показателей</name>  <data>H14:N17</data>  <points>H13:N13</points>  <series>G14:G17</series>  <seriesInRows>true</seriesInRows>[![](../../minus.gif)](../../#)<chartSettings>
  <type>1</type>  <uzs>true</uzs>[![](../../minus.gif)](../../#)<bd>
  <enabled>true</enabled>  <s>1</s>  <w>2</w>  <cdef>true</cdef>  </bd>
  </chartSettings>
  </tArg>
  </SetPrxMetaChart>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <SetPrxMetaChartResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</SetPrxMetaChartResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetPrxMetaChart" :
  {
   "mon" : "S1!M!S!P1!Sheets!1!Objects!PrxChart3",
   "tArg" :
    {
     "name" : "Диаграмма показателей",
     "data" : "H14:N17",
     "points" : "H13:N13",
     "series" : "G14:G17",
     "seriesInRows" : "true",
     "chartSettings" :
      {
       "type" : "1",
       "uzs" : "true",
       "bd" :
        {
         "enabled" : "true",
         "s" : "1",
         "w" : "2",
         "cdef" : "true"
        }
      }
    }
  }
}

### JSON-ответ:


{
 "SetPrxMetaChartResult" : "1"
}


public static bool ChangePrxChart(string moniker, string sheetKey, string chartId)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tSet = new SetPrxMetaChart()
    {
        tArg = new PrxMetaChart()
        {
            chartSettings = new ChartSettings()
            {
                uzs = true,
                type = 1,
                bd = new ChartBorderSettings()
                {
                    enabled = true,
                    cdef = true,
                    s = 1,
                    w = 2
                }
            },
            name = "Диаграмма показателей",
            data = "H14:N17",
            points = "H13:N13",
            series = "G14:G17",
            seriesInRows = true,
        },
        mon = moniker + "!Sheets!" + sheetKey + "!Objects!" + chartId
    };
    //Изменение настроек диаграммы
    var result = somClient.SetPrxMetaChart(tSet);
    return result;
}


См. также:


[Работа
 с регламентными отчетами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
