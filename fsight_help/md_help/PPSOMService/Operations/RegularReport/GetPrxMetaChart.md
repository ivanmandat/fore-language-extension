# GetPrxMetaChart: Операция

GetPrxMetaChart: Операция
-


**


# GetPrxMetaChart


## Синтаксис


PrxMetaChart GetPrxMetaChart(string mon, PrxMetaChart
 tArg)


## Параметры


mon. Моникёр
 для работы с диаграммой.


tArg. Метаданные, которые необходимо
 получить для диаграммы.


## Описание


Операция GetPrxMetaChart получает
 метаданные диаграммы, расположенной на листе регламентного отчёта.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта с постфиксом «!Sheets!ключ
 листа!Objects!идентификатор диаграммы» для работы с диаграммой.
 В поле tArg задайте пустые значения
 или значения по умолчанию для тех полей, значения которых необходимо получить.
 Моникёр экземпляра регламентного отчёта может быть получен при выполнении
 операции [OpenPrxMeta](OpenPrxMeta.htm).


Результатом операции будут запрошенные метаданные.


## Пример


Ниже приведён пример получения информации о диаграмме регламентного
 отчёта. В запросе передаётся моникёр диаграммы. В ответе приходит полученная
 информация.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetPrxMetaChart xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">LJCKBHFIAJEAGOAEEMIEIMBELEOLDDKEHLFAGLAKCMOKGDDM!M!S!PCBKPNKFIAJEAGOAECBPKIKLHHMNEMBAELJHMEKFCGPMJLGKM!Sheets!1!Objects!PrxChart5</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <name />
  <data />
  <points />
  <series />
  <seriesInRows>true</seriesInRows>  <chartSettings />
  <sourceType>Sheet</sourceType>  <ptNames />
  </tArg>
  </GetPrxMetaChart>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetPrxMetaChartResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <name xmlns="****">Диаграмма показателей</name>  <data xmlns="****">H14:N17</data>  <points xmlns="****">H13:N13</points>  <series xmlns="****">G14:G17</series>  <seriesInRows xmlns="****">1</seriesInRows>[![](../../minus.gif)](../../#)<chartSettings xmlns="****">
  <type>1</type>  <view3d>0</view3d>  <uzs>1</uzs>[![](../../minus.gif)](../../#)<bg>
  <type>1</type>[![](../../minus.gif)](../../#)<sfill>
  <clr>#FFFFFF</clr>  <tp>0</tp>  </sfill>
  </bg>
[![](../../minus.gif)](../../#)<bd>
  <clr>#000000</clr>  <s>1</s>  <w>2</w>  <enabled>1</enabled>  </bd>
  <ornt>0</ornt>  <accum>0</accum>  <inter>Selection</inter>  <zm>None</zm>  <he>1</he>  <sts>0</sts>  </chartSettings>
  <sourceType xmlns="****">Sheet</sourceType>[![](../../minus.gif)](../../#)<ptNames xmlns="****">
  <its>2000</its>  <its>I полугодие 2000</its>  <its>I квартал 2000</its>  <its>II квартал 2000</its>  <its>II полугодие 2000</its>  <its>III квартал 2000</its>  <its>IV квартал 2000</its>  </ptNames>
  </GetPrxMetaChartResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetPrxMetaChart" :
  {
   "mon" : "LJCKBHFIAJEAGOAEEMIEIMBELEOLDDKEHLFAGLAKCMOKGDDM!M!S!PCBKPNKFIAJEAGOAECBPKIKLHHMNEMBAELJHMEKFCGPMJLGKM!Sheets!1!Objects!PrxChart5",
   "tArg" :
    {
     "name" : "",
     "data" : "",
     "points" : "",
     "series" : "",
     "seriesInRows" : "true",
     "chartSettings" : "",
     "sourceType" : "Sheet",
     "ptNames" : ""
    }
  }
}

### JSON-ответ:


{
 "GetPrxMetaChartResult" :
  {
   "name" : "Диаграмма показателей",
   "data" : "H14:N17",
   "points" : "H13:N13",
   "series" : "G14:G17",
   "seriesInRows" : "1",
   "chartSettings" :
    {
     "type" : "1",
     "view3d" : "0",
     "uzs" : "1",
     "bg" :
      {
       "type" : "1",
       "sfill" :
        {
         "clr" : "#FFFFFF",
         "tp" : "0"
        }
      },
     "bd" :
      {
       "clr" : "#000000",
       "s" : "1",
       "w" : "2",
       "enabled" : "1"
      },
     "ornt" : "0",
     "accum" : "0",
     "inter" : "Selection",
     "zm" : "None",
     "he" : "1",
     "sts" : "0"
    },
   "sourceType" : "Sheet",
   "ptNames" :
    {
     "its" :
      [
        "2000",
        "I полугодие 2000",
        "I квартал 2000",
        "II квартал 2000",
        "II полугодие 2000",
        "III квартал 2000",
        "IV квартал 2000"
      ]
    }
  }
}


public static PrxMetaChart GetPrxChart(string moniker, string sheetKey, string chartId)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tGet = new GetPrxMetaChart()
    {
        tArg = new PrxMetaChart()
        {
            chartSettings = new ChartSettings(),
            data = string.Empty,
            name = string.Empty,
            points = string.Empty,
            series = string.Empty,
            seriesInRows = true,
            sourceType = new PrxMetaChartSourceType(),
            ptNames = new string[0]
        },
        mon = moniker + "!Sheets!" + sheetKey + "!Objects!" + chartId
    };
    //Получение информации о диаграме
    var result = somClient.GetPrxMetaChart(tGet);
    return result;
}


См. также:


[Работа
 с регламентными отчетами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
