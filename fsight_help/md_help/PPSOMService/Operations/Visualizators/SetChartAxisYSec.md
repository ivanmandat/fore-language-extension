# SetChartAxisYSec: Операция

SetChartAxisYSec: Операция
-


**


# SetChartAxisYSec


## Синтаксис


bool SetChartAxisYSec(AxisId tAxis, ChartAxisYSec
 tArg)


## Параметры


tAxis. Моникёр
 дополнительной оси Y диаграммы.


tArg. Настройки, которые необходимо
 применить для дополнительной оси Y.


## Описание


Операция SetChartAxisYSec изменяет
 настройки дополнительной оси Y диаграммы.


## Комментарии


Для выполнения операции укажите в поле tAxis
 моникёр дополнительной оси Y, а в поле tArg
 устанавливаемые настройки. Моникёр может быть сформирован на основании
 моникёра диаграммы, указываемого в операциях [GetChart](GetChart.htm),
 [SetChart](SetChart.htm), [GetChartSeries](GetChartSeries.htm).
 Моникёр формируется в следующем формате: «Моникёр
 диаграммы»!AxisYSec».


Результатом выполнения операции будет логическое значение true,
 если применение настроек завершилась успешно.


## Пример


Ниже приведён пример изменения настроек дополнительной оси Y диаграммы.
 В запросе передаётся моникёр дополнительной оси и устанавливаемые настройки.
 В ответе возвращается признак удачного применения настроек.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetChartAxisYSec xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tAxis xmlns="****">
  <id>S1!M!S!P1!Sheets!1!Objects!PrxChart3!AxisYSec</id>  </tAxis>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <ct>Дополнительные значения</ct>  <max>10</max>  <amax>false</amax>  <min>0</min>  <amin>false</amin>  </tArg>
  </SetChartAxisYSec>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <SetChartAxisYSecResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</SetChartAxisYSecResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetChartAxisYSec" :
  {
   "tAxis" :
    {
     "id" : "S1!M!S!P1!Sheets!1!Objects!PrxChart3!AxisYSec"
    },
   "tArg" :
    {
     "ct" : "Дополнительные значения",
     "max" : "10",
     "amax" : "false",
     "min" : "0",
     "amin" : "false"
    }
  }
}

### JSON-ответ:


{
 "SetChartAxisYSecResult" : "1"
}


public static bool ChangeAxisYSecSettings(string moniker)
{
    var somClient = new SomPortTypeClient();    // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tSet = new SetChartAxisYSec()
    {
        tAxis = new AxisId()
        {
            id = moniker + "!AxisYSec"
        },
        tArg = new ChartAxisYSec()
        {
            amax = false,
            max = 10,
            amin = false,
            min = 0,
            ct = "Дополнительные значения"
        }
    };
    // Изменение настроек дополнительной оси Y
    var result = somClient.SetChartAxisYSec(tSet);
    return result;
}


См. также:


[Диаграмма](Chart/chart_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
