# SetChartLabel: Операция

SetChartLabel: Операция
-


**


# SetChartLabel


## Синтаксис


bool SetChartLabel(ChartLabelId tLabel, ChartLabel
 tArg)


## Параметры


tLabel. Моникёр
 для работы с подписями данных.


tArg. Устанавливаемые настройки
 подписей данных.


## Описание


Операция SetChartLabel изменяет
 настройки подписей данных на диаграмме.


## Комментарии


Для выполнения операции укажите в поле tLabel
 моникёр для работы с подписями данных, а в поле tArg
 устанавливаемые настройки. Моникёр может быть сформирован на основании
 моникёра диаграммы, указываемого в операциях [GetChart](GetChart.htm),
 [SetChart](SetChart.htm), [GetChartSeries](GetChartSeries.htm).
 Моникёр формируется в следующем формате:


	- «Моникёр диаграммы!Label».
	 Подписи данных для ряда по умолчанию.


	- «Моникёр диаграммы!Series!Индекс
	 ряда!Label». Подписи данных для ряда с указанным индексом.


	- «Моникёр диаграммы!Series!Индекс
	 ряда!Points!Label». Подписи данных для точек ряда.


	- «Моникёр диаграммы!Series!Индекс
	 ряда!Points!Индекс точки!Label». Подписи данных для точки ряда
	 с указанным индексом.


Результатом выполнения операции будет логическое значение true,
 если применение изменений завершилось успешно.


## Пример


Ниже приведён пример изменения настроек подписей данных диаграммы. В
 запросе передаётся моникёр для работы с подписями данных и устанавливаемые
 настройки. В ответе возвращается признак успешного применения настроек.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetChartLabel xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tLabel xmlns="****">
  <id>S1!M!S!P1!Sheets!1!Objects!PrxChart3!Label</id>  </tLabel>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <v>true</v>  <p>Left</p>  <t>X: %XValue</t>  </tArg>
  </SetChartLabel>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <SetChartLabelResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</SetChartLabelResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetChartLabel" :
  {
   "tLabel" :
    {
     "id" : "S1!M!S!P1!Sheets!1!Objects!PrxChart3!Label"
    },
   "tArg" :
    {
     "v" : "true",
     "p" : "Left",
     "t" : "X: %XValue"
    }
  }
}

### JSON-ответ:


{
 "SetChartLabelResult" : "1"
}


public static bool SetChartLabel(string chartMoniker)
{
    var somClient = new SomPortTypeClient();    // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tSet = new SetChartLabel()
    {
        tLabel = new ChartLabelId()
        {
            id = chartMoniker + "!Label"
        },
        tArg = new ChartLabel()
        {
            v = true,
            p = ChartLabelPosition.Left,
            t = "X: %XValue"
        }
    };
    // Получение настроек подписей данных
    var result = somClient.SetChartLabel(tSet);
    return result;
}


См. также:


[Диаграмма](Chart/chart_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
