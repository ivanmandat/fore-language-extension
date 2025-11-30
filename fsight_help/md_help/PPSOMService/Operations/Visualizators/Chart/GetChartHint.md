# GetChartHint: Операция

GetChartHint: Операция
-


**


# GetChartHint


## Синтаксис


ChartHint GetChartHint(ChartHintId tHint)


## Параметры


tHint. Моникёр
 для работы с подсказками диаграммы.


## Описание


Операция GetChartHint получает
 настройки подсказок для диаграммы.


## Комментарии


Для выполнения операции укажите в поле tHint
 моникёр для работы с подсказками диаграммы. Моникёр может быть сформирован
 на основании моникёра диаграммы, указываемого в операциях [GetChart](../GetChart.htm),
 [SetChart](../SetChart.htm), [GetChartSeries](../GetChartSeries.htm).
 Моникёр формируется в следующем формате: «Моникёр
 диаграммы»!Hint.


Результатом работы операции будут полученные настройки подсказок.


## Пример


Ниже приведён пример получения настроек подсказок для диаграммы. В запросе
 передаётся моникёр для работы с подсказками. В ответе возвращаются полученные
 настройки.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<GetChartHint xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tHint xmlns="****">
  <id>EDKKJPHJEHILFOAEPIMEEFNEPLBBPMIENIOCOOKNODOIOCGE!M!S!PPDJOMGIJEHILFOAEKDIEBFPLEKLKDGJEDJIIBCHBAEAKDPIA!Sheets!1!Objects!PrxChart1!Hint</id>  </tHint>
  </GetChartHint>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<GetChartHintResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <tf xmlns="****">%XValue</tf>  <a xmlns="****">Center</a>[![](../../../minus.gif)](../../../#)<fn xmlns="****">
  <family>Tahoma</family>[![](../../../minus.gif)](../../../#)<style>
  <it>Regular</it>  </style>
[![](../../../minus.gif)](../../../#)<size>
  <width>-1</width>  <height>8</height>  <units>Pt</units>  </size>
  </fn>
  <fc xmlns="****">#918F8D</fc>[![](../../../minus.gif)](../../../#)<bg xmlns="****">
  <type>1</type>[![](../../../minus.gif)](../../../#)<sfill>
  <clr>#FFFFFF</clr>  <tp>0</tp>  </sfill>
  </bg>
  <ic xmlns="****">1</ic>[![](../../../minus.gif)](../../../#)<p xmlns="****">
  <clr>#000000</clr>  <s>0</s>  <w>1</w>  <enabled>1</enabled>  </p>
  </GetChartHintResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetChartHint" :
  {
   "tHint" :
    {
     "id" : "EDKKJPHJEHILFOAEPIMEEFNEPLBBPMIENIOCOOKNODOIOCGE!M!S!PPDJOMGIJEHILFOAEKDIEBFPLEKLKDGJEDJIIBCHBAEAKDPIA!Sheets!1!Objects!PrxChart1!Hint"
    }
  }
}

### JSON-ответ:


{
 "GetChartHintResult" :
  {
   "tf" : "%XValue",
   "a" : "Center",
   "fn" :
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
   "fc" : "#918F8D",
   "bg" :
    {
     "type" : "1",
     "sfill" :
      {
       "clr" : "#FFFFFF",
       "tp" : "0"
      }
    },
   "ic" : "1",
   "p" :
    {
     "clr" : "#000000",
     "s" : "0",
     "w" : "1",
     "enabled" : "1"
    }
  }
}


public static ChartHint GetChartHint(string chartMoniker)
{
    var somClient = new SomPortTypeClient();    // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tGet = new GetChartHint()
    {
        tHint = new ChartHintId() { id = chartMoniker + "!Hint" }
    };
    // Получение настроек подсказок диаграммы
    var result = somClient.GetChartHint(tGet);
    return result;
}


См. также:


[Диаграмма](chart_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
