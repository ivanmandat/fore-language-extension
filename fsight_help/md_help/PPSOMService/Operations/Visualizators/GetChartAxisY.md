# GetChartAxisY: Операция

GetChartAxisY: Операция
-


**


# GetChartAxisY


## Синтаксис


ChartAxisY GetChartAxisY(AxisId tAxis)


## Параметры


tAxis. Моникёр
 оси диаграммы.


## Описание


Операция GetChartAxisY получает
 настройки оси Y диаграммы.


## Комментарии


Для выполнения операции укажите в поле tAxis
 моникёр оси диаграммы. Моникёр может быть сформирован на основании моникёра
 диаграммы, указываемого в операциях [GetChart](GetChart.htm),
 [SetChart](SetChart.htm), [GetChartSeries](GetChartSeries.htm).
 Моникёр формируется в следующем формате: «Моникёр
 диаграммы»!AxisY».


Результатом выполнения операции будут полученные настройки оси.


## Пример


Ниже приведён пример получения настроек оси Y диаграммы. В запросе передаётся
 моникёр оси. В ответе возвращаются полученные настройки.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetChartAxisY xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tAxis xmlns="****">
  <id>S1!M!S!P1!Sheets!1!Objects!PrxChart3!AxisY</id>  </tAxis>
  </GetChartAxisY>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetChartAxisYResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <p xmlns="****">Auto</p>  <cv xmlns="****">1</cv>[![](../../minus.gif)](../../#)<cf xmlns="****">
  <family>Tahoma</family>[![](../../minus.gif)](../../#)<style>
  <it>Regular</it>  </style>
[![](../../minus.gif)](../../#)<size>
  <width>-1</width>  <height>10</height>  <units>Pt</units>  </size>
  </cf>
  <cfc xmlns="****">#918F8D</cfc>  <lv xmlns="****">1</lv>[![](../../minus.gif)](../../#)<lf xmlns="****">
  <family>Tahoma</family>[![](../../minus.gif)](../../#)<style>
  <it>Bold</it>  </style>
[![](../../minus.gif)](../../#)<size>
  <width>-1</width>  <height>9</height>  <units>Pt</units>  </size>
  </lf>
  <lfc xmlns="****">#918F8D</lfc>  <la xmlns="****">0</la>[![](../../minus.gif)](../../#)<gl xmlns="****">
  <enabled>1</enabled>  <clr>#E0E0E0</clr>  <s>0</s>  <w>1</w>  </gl>
[![](../../minus.gif)](../../#)<tl xmlns="****">
  <enabled>0</enabled>  </tl>
[![](../../minus.gif)](../../#)<al xmlns="****">
  <enabled>0</enabled>  </al>
  <max xmlns="****">100</max>  <amax xmlns="****">0</amax>  <min xmlns="****">0</min>  <amin xmlns="****">0</amin>  <nf xmlns="****" />
  <du xmlns="****">0</du>  <stm xmlns="****">1</stm>  <tc xmlns="****">5</tc>  </GetChartAxisYResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetChartAxisY" :
  {
   "tAxis" :
    {
     "id" : "S1!M!S!P1!Sheets!1!Objects!PrxChart3!AxisY"
    }
  }
}

### JSON-ответ:


{
 "GetChartAxisYResult" :
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
       "it" : "Bold"
      },
     "size" :
      {
       "width" : "-1",
       "height" : "9",
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
     "w" : "1"
    },
   "tl" :
    {
     "enabled" : "0"
    },
   "al" :
    {
     "enabled" : "0"
    },
   "max" : "100",
   "amax" : "0",
   "min" : "0",
   "amin" : "0",
   "nf" : "",
   "du" : "0",
   "stm" : "1",
   "tc" : "5"
  }
}


public static ChartAxis GetAxisY(string moniker)
{
    var somClient = new SomPortTypeClient();    // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tGet = new GetChartAxisY()
    {
        tAxis = new AxisId()
        {
            id = moniker + "!AxisY"
        }
    };
    // Получение настроек оси Y
    var result = somClient.GetChartAxisY(tGet);
    return result;
}


См. также:


[Диаграмма](Chart/chart_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
