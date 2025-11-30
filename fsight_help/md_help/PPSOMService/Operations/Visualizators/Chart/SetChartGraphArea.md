# SetChartGraphArea: Операция

SetChartGraphArea: Операция
-


**


# SetChartGraphArea


## Синтаксис


bool SetChartGraphArea(ChartGraphAreaId tGraphArea,
 ChartGraphArea tArg)


## Параметры


mon. Моникёр
 области построения диаграммы.


tArg. Параметры области построения,
 которые необходимо применить.


## Описание


Операция SetChartGraphArea изменяет
 настройки области построения диаграммы.


## Комментарии


Для выполнения операции укажите в поле tGraphArea
 моникёр области построения, а в поле tArg
 устанавливаемые настройки. Моникёр может быть сформирован на основании
 моникёра диаграммы, указываемого в операциях [GetChart](../GetChart.htm),
 [SetChart](../SetChart.htm), [GetChartSeries](../GetChartSeries.htm).
 Моникёр формируется в следующем формате: «Моникёр
 диаграммы»!GraphArea.


Результатом работы операции будет логическое значение true,
 если изменение настроек области построения завершилось успешно.


## Пример


Ниже приведён пример изменения настроек области построения диаграммы.
 В запросе передаётся моникёр для работы с областью построения и устанавливаемые
 настройки. В ответе возвращается признак успешного применения изменений.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<SetChartGraphArea xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tGraphArea xmlns="****">
  <id>EDKKJPHJEHILFOAEPIMEEFNEPLBBPMIENIOCOOKNODOIOCGE!M!S!PPDJOMGIJEHILFOAEKDIEBFPLEKLKDGJEDJIIBCHBAEAKDPIA!Sheets!1!Objects!PrxChart1!GraphArea</id>  </tGraphArea>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<bg>
  <type>2</type>[![](../../../minus.gif)](../../../#)<gfill>
  <cf>#00FF00</cf>  <ct>#00FFFF</ct>  <tp>0</tp>  <a>45</a>  </gfill>
  </bg>
[![](../../../minus.gif)](../../../#)<bd>
  <clr>#000000</clr>  <s>0</s>  <enabled>true</enabled>  </bd>
  </tArg>
  </SetChartGraphArea>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
  <SetChartGraphAreaResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</SetChartGraphAreaResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetChartGraphArea" :
  {
   "tGraphArea" :
    {
     "id" : "EDKKJPHJEHILFOAEPIMEEFNEPLBBPMIENIOCOOKNODOIOCGE!M!S!PPDJOMGIJEHILFOAEKDIEBFPLEKLKDGJEDJIIBCHBAEAKDPIA!Sheets!1!Objects!PrxChart1!GraphArea"
    },
   "tArg" :
    {
     "bg" :
      {
       "type" : "2",
       "gfill" :
        {
         "cf" : "#00FF00",
         "ct" : "#00FFFF",
         "tp" : "0",
         "a" : "45"
        }
      },
     "bd" :
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
 "SetChartGraphAreaResult" : "1"
}


public static bool SetChartGraphArea(string chartMoniker)
{
    var somClient = new SomPortTypeClient();    // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tSet = new SetChartGraphArea()
    {
        tGraphArea = new ChartGraphAreaId()
        {
            id = chartMoniker + "!GraphArea"
        },
        tArg = new ChartGraphArea()
        {
            bg = new ChartBackgroundSettings()
            {
                type = 2, //Gradient
                gfill = new ChartGradientFillSettings()
                {
                    cf = "#00FF00", //Lime
                    ct = "#00FFFF", //Cyan
                    a = 45
                }
            },
            bd = new ChartLine()
            {
                enabled = true,
                s = 0,
                clr = "#000000" //Black
            }
        }
    };
    // Изменение настроек области построения
    var result = somClient.SetChartGraphArea(tSet);
    return result;
}


См. также:


[Диаграмма](chart_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
