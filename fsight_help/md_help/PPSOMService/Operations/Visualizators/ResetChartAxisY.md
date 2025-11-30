# ResetChartAxisY: Операция

ResetChartAxisY: Операция
-


**


# ResetChartAxisY


## Синтаксис


ChartAxisY ResetChartAxisY(AxisId tAxis)


## Параметры


tAxis. Моникёр
 оси диаграммы.


## Описание


Операция ResetChartAxisY сбрасывает
 имеющиеся настройки для оси Y диаграммы и устанавливает настройки по умолчанию.


## Комментарии


Для выполнения операции укажите в поле tAxis
 моникёр оси Y. Моникёр может быть сформирован на основании моникёра диаграммы,
 указываемого в операциях [GetChart](GetChart.htm), [SetChart](SetChart.htm),
 [GetChartSeries](GetChartSeries.htm). Моникёр формируется в
 следующем формате: «Моникёр диаграммы»!AxisY».


Результатом выполнения операции будут установленные настройки.


## Пример


Ниже приведён пример сброса настроек у оси Y диаграммы. В запросе передаётся
 моникёр оси. В ответе возвращаются настройки, которые будут установлены
 после сброса ранее заданных настроек.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<ResetChartAxisY xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tAxis xmlns="****">
  <id>S1!M!S!P1!Sheets!1!Objects!PrxChart3!AxisY</id>  </tAxis>
  </ResetChartAxisY>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<ResetChartAxisYResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <p xmlns="****">Auto</p>  <cv xmlns="****">1</cv>  <ct xmlns="****" />
[![](../../minus.gif)](../../#)<cf xmlns="****">
  <family>Tahoma</family>[![](../../minus.gif)](../../#)<style>
  <it>Regular</it>  </style>
[![](../../minus.gif)](../../#)<size>
  <width>-1</width>  <height>8</height>  <units>Pt</units>  </size>
  </cf>
  <cfc xmlns="****">#918F8D</cfc>  <lv xmlns="****">1</lv>[![](../../minus.gif)](../../#)<lf xmlns="****">
  <family>Tahoma</family>[![](../../minus.gif)](../../#)<style>
  <it>Regular</it>  </style>
[![](../../minus.gif)](../../#)<size>
  <width>-1</width>  <height>8</height>  <units>Pt</units>  </size>
  </lf>
  <lfc xmlns="****">#918F8D</lfc>  <la xmlns="****">0</la>[![](../../minus.gif)](../../#)<gl xmlns="****">
  <enabled>1</enabled>  <clr>#E0E0E0</clr>  <s>0</s>  <w>0.5</w>  </gl>
[![](../../minus.gif)](../../#)<tl xmlns="****">
  <enabled>0</enabled>  <clr>#000000</clr>  <s>0</s>  <w>0.25</w>  </tl>
[![](../../minus.gif)](../../#)<al xmlns="****">
  <enabled>0</enabled>  <clr>#E0E0E0</clr>  <s>0</s>  <w>0.25</w>  </al>
  <max xmlns="****">1.5</max>  <amax xmlns="****">1</amax>  <min xmlns="****">-1.5</min>  <amin xmlns="****">1</amin>  <nf xmlns="****" />
  <du xmlns="****">0</du>  <stm xmlns="****">1</stm>  <tc xmlns="****">5</tc>  </ResetChartAxisYResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "ResetChartAxisY" :
  {
   "tAxis" :
    {
     "id" : "S1!M!S!P1!Sheets!1!Objects!PrxChart3!AxisY"
    }
  }
}

### JSON-ответ:


{
 "ResetChartAxisYResult" :
  {
   "p" : "Auto",
   "cv" : "1",
   "ct" : "",
   "cf" :
    {
     "family" : "Tahoma",
     "style" :
      {
       "it" : "Regular"
      },
     "size" :
      {
       "width" : "-1",
       "height" : "8",
       "units" : "Pt"
      }
    },
   "cfc" : "#918F8D",
   "lv" : "1",
   "lf" :
    {
     "family" : "Tahoma",
     "style" :
      {
       "it" : "Regular"
      },
     "size" :
      {
       "width" : "-1",
       "height" : "8",
       "units" : "Pt"
      }
    },
   "lfc" : "#918F8D",
   "la" : "0",
   "gl" :
    {
     "enabled" : "1",
     "clr" : "#E0E0E0",
     "s" : "0",
     "w" : "0.5"
    },
   "tl" :
    {
     "enabled" : "0",
     "clr" : "#000000",
     "s" : "0",
     "w" : "0.25"
    },
   "al" :
    {
     "enabled" : "0",
     "clr" : "#E0E0E0",
     "s" : "0",
     "w" : "0.25"
    },
   "max" : "1.5",
   "amax" : "1",
   "min" : "-1.5",
   "amin" : "1",
   "nf" : "",
   "du" : "0",
   "stm" : "1",
   "tc" : "5"
  }
}


public static ChartAxis ResetAxisYSettings(string moniker)
{
    var somClient = new SomPortTypeClient();    // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tReset = new ResetChartAxisY()
    {
        tAxis = new AxisId()
        {
            id = moniker + "!AxisY"
        }
    };
    // Сброс настроек оси Y
    var result = somClient.ResetChartAxisY(tReset);
    return result;
}


См. также:


[Диаграмма](Chart/chart_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
