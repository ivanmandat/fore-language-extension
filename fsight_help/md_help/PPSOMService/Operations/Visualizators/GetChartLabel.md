# GetChartLabel: Операция

GetChartLabel: Операция
-


**


# GetChartLabel


## Синтаксис


ChartLabel GetChartLabel(ChartLabelId tLabel)


## Параметры


tLabel. Моникёр
 для работы с подписями данных.


## Описание


Операция GetChartLabel получает
 настройки подписей данных на диаграмме.


## Комментарии


Для выполнения операции укажите в поле tLabel
 моникёр для работы с подписями данных. Моникёр может быть сформирован
 на основании моникёра диаграммы, указываемого в операциях [GetChart](GetChart.htm),
 [SetChart](SetChart.htm), [GetChartSeries](GetChartSeries.htm).
 Моникёр формируется в одном из следующих форматов:


	- «Моникёр диаграммы!Label».
	 Подписи данных для ряда по умолчанию.


	- «Моникёр диаграммы!Series!Индекс
	 ряда!Label». Подписи данных для ряда с указанным индексом.


	- «Моникёр диаграммы!Series!Индекс
	 ряда!Points!Label». Подписи данных для точек ряда.


	- «Моникёр диаграммы!Series!Индекс
	 ряда!Points!Индекс точки!Label». Подписи данных для точки ряда
	 с указанным индексом.


Результатом выполнения операции будут полученные настройки подписей
 данных.


## Пример


Ниже приведён пример получения настроек подписей данных диаграммы. В
 запросе передаётся моникёр для работы с подписями данных. В ответе возвращаются
 полученные настройки.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetChartLabel xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tLabel xmlns="****">
  <id>S1!M!S!P1!Sheets!1!Objects!PrxChart3!Label</id>  </tLabel>
  </GetChartLabel>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetChartLabelResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <v xmlns="****">1</v>  <p xmlns="****">Left</p>  <t xmlns="****">X: %XValue</t>[![](../../minus.gif)](../../#)<f xmlns="****">
  <family>Tahoma</family>[![](../../minus.gif)](../../#)<style>
  <it>Regular</it>  </style>
[![](../../minus.gif)](../../#)<size>
  <width>-1</width>  <height>8</height>  <units>Pt</units>  </size>
  </f>
  <fc xmlns="****">#918F8D</fc>  </GetChartLabelResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetChartLabel" :
  {
   "tLabel" :
    {
     "id" : "S1!M!S!P1!Sheets!1!Objects!PrxChart3!Label"
    }
  }
}

### JSON-ответ:


{
 "GetChartLabelResult" :
  {
   "v" : "1",
   "p" : "Left",
   "t" : "X: %XValue",
   "f" :
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
   "fc" : "#918F8D"
  }
}


public static ChartLabel GetChartLabel(string chartMoniker)
{
    var somClient = new SomPortTypeClient();    // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tGet = new GetChartLabel()
    {
        tLabel = new ChartLabelId()
        {
            id = chartMoniker + "!Label"
        }
    };
    // Получение настроек подписей данных
    var result = somClient.GetChartLabel(tGet);
    return result;
}


См. также:


[Диаграмма](Chart/chart_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
