# GetChartAxisYSec: Операция

GetChartAxisYSec: Операция
-


**


# GetChartAxisYSec


## Синтаксис


ChartAxisYSec GetChartAxisYSec(AxisId tAxis)


## Параметры


tAxis. Моникёр
 дополнительной оси Y диаграммы.


## Описание


Операция GetChartAxisYSec получает
 настройки дополнительной оси Y диаграммы.


## Комментарии


Для выполнения операции укажите в поле tAxis
 моникёр дополнительной оси диаграммы. Моникёр может быть сформирован на
 основании моникёра диаграммы, указываемого в операциях [GetChart](GetChart.htm),
 [SetChart](SetChart.htm), [GetChartSeries](GetChartSeries.htm).
 Моникёр формируется в следующем формате: «Моникёр
 диаграммы»!AxisYSec».


Результатом выполнения операции будут полученные настройки оси.


## Пример


Ниже приведён пример получения настроек дополнительной оси Y диаграммы.
 В запросе передаётся моникёр оси. В ответе возвращаются полученные настройки.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetChartAxisYSec xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tAxis xmlns="****">
  <id>S1!M!S!P1!Sheets!1!Objects!PrxChart3!AxisYSec</id>  </tAxis>
  </GetChartAxisYSec>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetChartAxisYSecResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <p xmlns="****">Auto</p>  <cv xmlns="****">1</cv>[![](../../minus.gif)](../../#)<cf xmlns="****">
  <family>Tahoma</family>[![](../../minus.gif)](../../#)<style>
  <it>Regular</it>  </style>
[![](../../minus.gif)](../../#)<size>
  <width>-1</width>  <height>10</height>  <units>Pt</units>  </size>
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
  <enabled>0</enabled>  </tl>
[![](../../minus.gif)](../../#)<al xmlns="****">
  <enabled>0</enabled>  </al>
  <max xmlns="****">10</max>  <amax xmlns="****">0</amax>  <min xmlns="****">0</min>  <amin xmlns="****">0</amin>  <nf xmlns="****" />
  <du xmlns="****">0</du>  <stm xmlns="****">3</stm>  <tc xmlns="****">5</tc>  </GetChartAxisYSecResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetChartAxisYSec" :
  {
   "tAxis" :
    {
     "id" : "S1!M!S!P1!Sheets!1!Objects!PrxChart3!AxisYSec"
    }
  }
}

### JSON-ответ:


{
 "GetChartAxisYSecResult" :
  {
   "p" : "Auto",
   "cv" : "1",
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
       "height" : "10",
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
     "enabled" : "0"
    },
   "al" :
    {
     "enabled" : "0"
    },
   "max" : "10",
   "amax" : "0",
   "min" : "0",
   "amin" : "0",
   "nf" : "",
   "du" : "0",
   "stm" : "3",
   "tc" : "5"
  }
}


public static ChartAxisYSec GetAxisYSec(string moniker)
{
    var somClient = new SomPortTypeClient();    // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tGet = new GetChartAxisYSec()
    {
        tAxis = new AxisId()
        {
            id = moniker + "!AxisYSec"
        }
    };
    // Получение настроек дополнительной оси Y
    var result = somClient.GetChartAxisYSec(tGet);
    return result;
}


См. также:


[Диаграмма](Chart/chart_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
