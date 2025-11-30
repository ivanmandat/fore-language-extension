# GetChartLabels: Операция

GetChartLabels: Операция
-


**


# GetChartLabels


## Синтаксис


ChartLabels GetChartLabels(ChartId tChart)


## Параметры


tChart. Моникёр
 диаграммы.


## Описание


Операция GetChartLabels получает
 настройки всех подписей данных, заданных для рядов/точек рядов на диаграмме.


## Комментарии


Для выполнения операции укажите в поле tLabel
 моникёр диаграммы. Моникёр диаграммы формируется на базе моникёра объекта
 репозитория, с диаграммой которого осуществляется работа, по следующим
 правилам:


	- «Моникёр экземпляра экспресс-отчета»!Chart.
	 Диаграмма экспресс-отчета (если в экспресс-отчете один лист);


	- «Моникёр экземпляра экспресс-отчета»!Sheets!«Ключ
	 листа»!Chart. Диаграмма заданного листа экспресс-отчета (если
	 в экспресс-отчете несколько листов);


	- «Моникёр экземпляра рабочей
	 книги»!Chart. Диаграмма рабочей книги (если в рабочей книге
	 один лист);


	- «Моникёр экземпляра рабочей
	 книги»!Sheets!«Ключ листа»!Chart. Диаграмма заданного листа
	 рабочей книги (если в рабочей книге несколько листов);


	- «Моникёр экземпляра регламентного
	 отчета»!Sheets!«Ключ листа»!Objects!«Идентификатор диаграммы».
	 Диаграмма, расположенная на листе регламентного отчета.


Результатом выполнения операции будут настройки подписей данных, которые
 заданы для рядов/точек рядов на диаграмме.


## Пример


Ниже приведён пример получения настроек всех подписей данных, заданных
 для рядов/точек рядов на диаграмме. В запросе передаётся моникёр диаграммы.
 В ответе возвращаются полученные настройки.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetChartLabels xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tChart xmlns="****">
  <id>S1!M!S!P1!Sheets!1!Objects!PrxChart3</id>  </tChart>
  </GetChartLabels>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetChartLabelsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<labels xmlns="****">
[![](../../minus.gif)](../../#)<it>
  <v>1</v>  <p>Left</p>  <t>X: %XValue</t>[![](../../minus.gif)](../../#)<f>
  <family>Tahoma</family>[![](../../minus.gif)](../../#)<style>
  <it>Regular</it>  </style>
[![](../../minus.gif)](../../#)<size>
  <width>-1</width>  <height>8</height>  <units>Pt</units>  </size>
  </f>
  <fc>#918F8D</fc>  </it>
[![](../../minus.gif)](../../#)<it>
  <v>1</v>  <p>Left</p>  <t>X: %XValue</t>[![](../../minus.gif)](../../#)<f>
  <family>Tahoma</family>[![](../../minus.gif)](../../#)<style>
  <it>Regular</it>  </style>
[![](../../minus.gif)](../../#)<size>
  <width>-1</width>  <height>8</height>  <units>Pt</units>  </size>
  </f>
  <fc>#918F8D</fc>  </it>
[![](../../minus.gif)](../../#)<it>
  <v>1</v>  <p>Left</p>  <t>X: %XValue</t>[![](../../minus.gif)](../../#)<f>
  <family>Tahoma</family>[![](../../minus.gif)](../../#)<style>
  <it>Regular</it>  </style>
[![](../../minus.gif)](../../#)<size>
  <width>-1</width>  <height>8</height>  <units>Pt</units>  </size>
  </f>
  <fc>#918F8D</fc>  </it>
[![](../../minus.gif)](../../#)<it>
  <v>1</v>  <p>Left</p>  <t>X: %XValue</t>[![](../../minus.gif)](../../#)<f>
  <family>Tahoma</family>[![](../../minus.gif)](../../#)<style>
  <it>Regular</it>  </style>
[![](../../minus.gif)](../../#)<size>
  <width>-1</width>  <height>8</height>  <units>Pt</units>  </size>
  </f>
  <fc>#918F8D</fc>  </it>
[![](../../minus.gif)](../../#)<it>
  <v>1</v>  <p>Left</p>  <t>X: %XValue</t>[![](../../minus.gif)](../../#)<f>
  <family>Tahoma</family>[![](../../minus.gif)](../../#)<style>
  <it>Regular</it>  </style>
[![](../../minus.gif)](../../#)<size>
  <width>-1</width>  <height>8</height>  <units>Pt</units>  </size>
  </f>
  <fc>#918F8D</fc>  </it>
  </labels>
  </GetChartLabelsResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetChartLabels" :
  {
   "tChart" :
    {
     "id" : "S1!M!S!P1!Sheets!1!Objects!PrxChart3"
    }
  }
}

### JSON-ответ:


{
 "GetChartLabelsResult" :
  {
   "labels" :
    {
     "it" :
      [
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
        },
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
        },
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
        },
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
        },
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
      ]
    }
  }
}


public static ChartLabels GetChartLabels(string chartMoniker)
{
    var somClient = new SomPortTypeClient();    // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tGet = new GetChartLabels()
    {
        tChart = new ChartId()
        {
            id = chartMoniker
        }
    };
    // Получение настроек подписей данных
    var result = somClient.GetChartLabels(tGet);
    return result;
}


См. также:


[Диаграмма](Chart/chart_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
