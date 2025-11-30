# GetChartLegend: Операция

GetChartLegend: Операция
-


**


# GetChartLegend


## Синтаксис


ChartLegend GetChartLegend(LegendId tLegend)


## Параметры


tLegend.
 Моникёр легенды диаграммы.


## Описание


Операция GetChartLegend получает
 настройки легенды диаграммы.


## Комментарии


Для выполнения операции укажите в поле tLegend
 моникёр легенды. Моникёр может быть сформирован на основании моникёра
 открытого экземпляра объекта, с легендой диаграммы которого осуществляется
 работа. Моникёр легенды диаграммы строится на базе моникёра объекта репозитория,
 с диаграммой которого осуществляется работа, по следующим правилам:


	- «Моникёр экземпляра экспресс-отчета»!Chart!Legend.
	 Легенда диаграммы экспресс-отчета (если в экспресс-отчете один лист);


	- «Моникёр экземпляра экспресс-отчета»!Sheets!«Ключ
	 листа»!Chart!Legend. Легенда диаграммы заданного листа экспресс-отчета
	 (если в экспресс-отчете несколько листов);


	- «Моникёр экземпляра рабочей
	 книги»!Chart!Legend. Легенда диаграммы рабочей книги (если
	 в рабочей книге один лист);


	- «Моникёр экземпляра рабочей
	 книги»!Sheets!«Ключ листа»!Chart!Legend. Легенда диаграммы
	 заданного листа рабочей книги (если в рабочей книги несколько листов);


	- «Моникёр экземпляра регламентного
	 отчета»!Sheets!«Ключ листа»!Objects!«Идентификатор диаграммы»!Legend.
	 Легенда диаграммы, расположенная на листе регламентного отчета.


Результатом работы операции будут настройки легенды.


## Пример


Ниже приведен пример получения информации о легенде диаграммы, расположенной
 на листе регламентного отчёта. В запросе передаётся моникёр легенды. В
 ответе приходят запрошенные данные.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetChartLegend xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tLegend xmlns="****">
  <id>S1!M!S!P1!Sheets!1!Objects!PrxChart2!Legend</id>  </tLegend>
  </GetChartLegend>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetChartLegendResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <align xmlns="****">Bottom</align>[![](../../minus.gif)](../../#)<font xmlns="****">
  <family>Tahoma</family>[![](../../minus.gif)](../../#)<style>
  <it>Regular</it>  </style>
[![](../../minus.gif)](../../#)<size>
  <width>-1</width>  <height>8</height>  <units>Pt</units>  </size>
  </font>
  <fclr xmlns="****">#918F8D</fclr>[![](../../minus.gif)](../../#)<bg xmlns="****">
  <type>0</type>  </bg>
[![](../../minus.gif)](../../#)<bd xmlns="****">
  <enabled>0</enabled>  </bd>
  <sd xmlns="****">0</sd>  <si xmlns="****">0</si>[![](../../minus.gif)](../../#)<ss xmlns="****">
  <width>3.5</width>  <height>3.5</height>  </ss>
  <ap xmlns="****">1</ap>  <ds xmlns="****">0</ds>  <ml xmlns="****">0</ml>  <ea xmlns="****">Center</ea>[![](../../minus.gif)](../../#)<mrg xmlns="****">
  <left>0</left>  <top>0</top>  <right>0</right>  <bottom>0</bottom>  </mrg>
  <amrg xmlns="****">1</amrg>  </GetChartLegendResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetChartLegend" :
  {
   "tLegend" :
    {
     "id" : "S1!M!S!P1!Sheets!1!Objects!PrxChart2!Legend"
    }
  }
}

### JSON-ответ:


{
 "GetChartLegendResult" :
  {
   "align" : "Bottom",
   "font" :
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
   "fclr" : "#918F8D",
   "bg" :
    {
     "type" : "0"
    },
   "bd" :
    {
     "enabled" : "0"
    },
   "sd" : "0",
   "si" : "0",
   "ss" :
    {
     "width" : "3.5",
     "height" : "3.5"
    },
   "ap" : "1",
   "ds" : "0",
   "ml" : "0",
   "ea" : "Center",
   "mrg" :
    {
     "left" : "0",
     "top" : "0",
     "right" : "0",
     "bottom" : "0"
    },
   "amrg" : "1"
  }
}


public static ChartLegend GetChartLegend(string moniker)
{
    var somClient = new SomPortTypeClient();    // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tGet = new GetChartLegend()
    {
        tLegend = new LegendId()
        {
            id = moniker
        }
    };
    // Получение настроек легенды
    var result = somClient.GetChartLegend(tGet);
    return result;
}


См. также:


[Диаграмма](Chart/chart_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
