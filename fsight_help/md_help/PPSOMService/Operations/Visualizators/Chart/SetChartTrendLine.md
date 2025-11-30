# SetChartTrendLine: Операция

SetChartTrendLine: Операция
-


**


# SetChartTrendLine


## Синтаксис


bool SetChartTrendLine(SerieId tSerie, ChartTrendLine
 tArg)


## Параметры


tSerie. Моникёр
 ряда диаграммы.


tArg. Настройки трендовой линии,
 которые необходимо применить.


## Описание


Операция SetChartTrendLine изменяет
 настройки линии тренда для ряда данных.


## Комментарии


Для выполнения операции укажите в поле tSerie
 моникёр ряда. Моникёр может быть сформирован на основании моникёра диаграммы,
 указываемого в операциях [GetChart](../GetChart.htm), [SetChart](../SetChart.htm),
 [GetChartSeries](../GetChartSeries.htm). Моникёр формируется
 в одном из следующих форматов:


	- «Моникёр диаграммы»!Series!Default.
	 Для работы с настройками ряда диаграммы по умолчанию.


	- «Моникёр диаграммы»!Series!«Индекс
	 ряда». Для работы с настройками ряда диаграммы с указанным
	 индексом. Индексация начинается с нуля.


Результатом работы операции будет логическое значение true,
 если изменение настроек завершилось успешно.


## Пример


Ниже приведён пример изменения настроек линии тренда для ряда данных.
 В запросе передаётся моникёр ряда и устанавливаемые настройки. В ответе
 возвращается признак успешного применения изменений.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<SetChartTrendLine xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tSerie xmlns="****">
  <id>EDKKJPHJEHILFOAEPIMEEFNEPLBBPMIENIOCOOKNODOIOCGE!M!S!PPDJOMGIJEHILFOAEKDIEBFPLEKLKDGJEDJIIBCHBAEAKDPIA!Sheets!1!Objects!PrxChart1!Series!1</id>  </tSerie>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
  <e>true</e>  <tt>2</tt>[![](../../../minus.gif)](../../../#)<ls>
  <clr>#000000</clr>  <s>0</s>  </ls>
  <dil>false</dil>  <uat>true</uat>  </tArg>
  </SetChartTrendLine>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
  <SetChartTrendLineResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</SetChartTrendLineResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetChartTrendLine" :
  {
   "tSerie" :
    {
     "id" : "EDKKJPHJEHILFOAEPIMEEFNEPLBBPMIENIOCOOKNODOIOCGE!M!S!PPDJOMGIJEHILFOAEKDIEBFPLEKLKDGJEDJIIBCHBAEAKDPIA!Sheets!1!Objects!PrxChart1!Series!1"
    },
   "tArg" :
    {
     "e" : "true",
     "tt" : "2",
     "ls" :
      {
       "clr" : "#000000",
       "s" : "0"
      },
     "dil" : "false",
     "uat" : "true"
    }
  }
}

### JSON-ответ:


{
 "SetChartTrendLineResult" : "1"
}


public static bool SetChartTrendLine(string chartMoniker, ulong serieNumber)
{
    var somClient = new SomPortTypeClient();    // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tSet = new SetChartTrendLine()
    {
        tSerie = new SerieId() { id = chartMoniker + "!Series!" + serieNumber },
        tArg = new ChartTrendLine()
        {
            e = true,
            tt = 2, //Exponential
            ls = new ChartLineBase()
            {
                s = 0,
                clr = "#000000" //Black
            },
            dil = false,
            uat = true
        }
    };
    // Изменение настроек линии тренда
    var result = somClient.SetChartTrendLine(tSet);
    return result;
}


См. также:


[Диаграмма](chart_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
