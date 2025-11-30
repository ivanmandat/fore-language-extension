# SetChartAxisY: Операция

SetChartAxisY: Операция
-


**


# SetChartAxisY


## Синтаксис


bool SetChartAxisY(AxisId tAxis, ChartAxisY tArg)


## Параметры


tAxis. Моникёр
 оси диаграммы.


tArg. Настройки, которые необходимо
 применить для оси Y.


## Описание


Операция SetChartAxisY изменяет
 настройки оси Y диаграммы.


## Комментарии


Для выполнения операции укажите в поле tAxis
 моникёр оси Y, а в поле tArg устанавливаемые
 настройки. Моникёр может быть сформирован на основании моникёра диаграммы,
 указываемого в операциях [GetChart](GetChart.htm), [SetChart](SetChart.htm),
 [GetChartSeries](GetChartSeries.htm). Моникёр формируется в
 следующем формате: «Моникёр диаграммы»!AxisY».


Результатом выполнения операции будет логическое значение true,
 если применение настроек завершилась успешно.


## Пример


Ниже приведён пример изменения настроек оси Y диаграммы. В запросе передаётся
 моникёр оси и устанавливаемые настройки. В ответе возвращается признак
 удачного применения настроек.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetChartAxisY xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tAxis xmlns="****">
  <id>S1!M!S!P1!Sheets!1!Objects!PrxChart3!AxisY</id>  </tAxis>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <ct>Процент выполнения</ct>  <max>100</max>  <amax>false</amax>  <min>0</min>  <amin>false</amin>  </tArg>
  </SetChartAxisY>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <SetChartAxisYResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</SetChartAxisYResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetChartAxisY" :
  {
   "tAxis" :
    {
     "id" : "S1!M!S!P1!Sheets!1!Objects!PrxChart3!AxisY"
    },
   "tArg" :
    {
     "ct" : "Процент выполнения",
     "max" : "100",
     "amax" : "false",
     "min" : "0",
     "amin" : "false"
    }
  }
}

### JSON-ответ:


{
 "SetChartAxisYResult" : "1"
}


public static bool ChangeAxisYSettings(string moniker)
{
    var somClient = new SomPortTypeClient();    // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tSet = new SetChartAxisY()
    {
        tAxis = new AxisId()
        {
            id = moniker + "!AxisY"
        },
        tArg = new ChartAxisY()
        {
            amax = false,
            max = 100,
            amin = false,
            min = 0,
            ct = "Процент выполнения"
        }
    };
    // Изменение настроек оси Y
    var result = somClient.SetChartAxisY(tSet);
    return result;
}


См. также:


[Диаграмма](Chart/chart_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
