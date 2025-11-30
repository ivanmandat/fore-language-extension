# SetChartHint: Операция

SetChartHint: Операция
-


**


# SetChartHint


## Синтаксис


bool SetChartHint(ChartHintId tHint, ChartHint tArg)


## Параметры


tHint. Моникёр
 для работы с подсказками диаграммы.


tArg. Настройки подсказок,
 которые необходимо применить.


## Описание


Операция SetChartHint изменяет
 настройки подсказок для диаграммы.


## Комментарии


Для выполнения операции укажите в поле tHint
 моникёр для работы с подсказками диаграммы, а в поле tArg
 устанавливаемые настройки. Моникёр может быть сформирован на основании
 моникёра диаграммы, указываемого в операциях [GetChart](../GetChart.htm),
 [SetChart](../SetChart.htm), [GetChartSeries](../GetChartSeries.htm).
 Моникёр формируется в следующем формате: «Моникёр
 диаграммы»!Hint.


Результатом работы операции будет логическое значение true,
 если применение настроек завершилось успешно.


## Пример


Ниже приведён пример изменения настроек подсказок для диаграммы. В запросе
 передаётся моникёр для работы с подсказками и устанавливаемые настройки.
 В ответе возвращается признак успешного применения изменений.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<SetChartHint xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tHint xmlns="****">
  <id>EDKKJPHJEHILFOAEPIMEEFNEPLBBPMIENIOCOOKNODOIOCGE!M!S!PPDJOMGIJEHILFOAEKDIEBFPLEKLKDGJEDJIIBCHBAEAKDPIA!Sheets!1!Objects!PrxChart1!Hint</id>  </tHint>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
  <tf>%XValue</tf>  <a>Center</a>  <ic>true</ic>[![](../../../minus.gif)](../../../#)<p>
  <clr>#000000</clr>  <s>0</s>  <enabled>true</enabled>  </p>
  </tArg>
  </SetChartHint>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
  <SetChartHintResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</SetChartHintResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetChartHint" :
  {
   "tHint" :
    {
     "id" : "EDKKJPHJEHILFOAEPIMEEFNEPLBBPMIENIOCOOKNODOIOCGE!M!S!PPDJOMGIJEHILFOAEKDIEBFPLEKLKDGJEDJIIBCHBAEAKDPIA!Sheets!1!Objects!PrxChart1!Hint"
    },
   "tArg" :
    {
     "tf" : "%XValue",
     "a" : "Center",
     "ic" : "true",
     "p" :
      {
       "clr" : "#000000",
       "s" : "0",
       "enabled" : "true"
      }
    }
  }
}

### JSON-ответ:


{
 "SetChartHintResult" : "1"
}


public static bool SetChartHint(string chartMoniker)
{
    var somClient = new SomPortTypeClient();    // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tSet = new SetChartHint()
    {
        tHint = new ChartHintId() { id = chartMoniker + "!Hint" },
        tArg = new ChartHint()
        {
            tf = "%XValue",
            a = ChartHorizontalAlignment.Center,
            ic = true,
            p = new ChartLine()
            {
                enabled = true,
                s = 0,
                clr = "#000000" //Black
            }
        }
    };
    // Изменение настроек подсказок диаграммы
    var result = somClient.SetChartHint(tSet);
    return result;
}


См. также:


[Диаграмма](chart_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
