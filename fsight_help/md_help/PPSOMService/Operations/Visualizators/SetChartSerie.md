# SetChartSerie: Операция

SetChartSerie: Операция
-


**


# SetChartSerie


## Синтаксис


bool SetChartSerie(SerieId tSerie, ChartSerie tArg)


## Параметры


tSerie. Моникёр
 ряда диаграммы.


tArg. Настройки ряда, которые
 необходимо применить.


## Описание


Операция SetChartSerie изменяет
 настройки ряда диаграммы.


## Комментарии


Для выполнения операции укажите в поле tSerie
 моникёр ряда, а в поле tArg устанавливаемые
 настройки ряда. Моникёр может быть сформирован на основании моникёра диаграммы,
 указываемого в операциях [GetChart](GetChart.htm), [SetChart](SetChart.htm),
 [GetChartSeries](GetChartSeries.htm). Моникёр формируется в
 одном из следующих форматов:


	- «Моникёр диаграммы»!Series!Default.
	 Для работы с настройками ряда диаграммы по умолчанию.


	- «Моникёр диаграммы»!Series!«Индекс
	 ряда». Для работы с настройками ряда диаграммы с указанным
	 индексом. Индексация начинается с нуля.


Результатом работы операции будет логическое значение true,
 если изменение настроек ряда завершилось успешно.


## Пример


Ниже приведён пример изменения настроек ряда диаграммы, добавленной
 на лист регламентного отчёта. В запросе передаётся моникёр ряда и настройки,
 которые необходимо применить. В ответе приходит признак удачного применения
 изменений.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetChartSerie xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tSerie xmlns="****">
  <id>NNLEMMGHNIACGOAEMEELDOGHCOBLJOMEDICAJEEDODMDPNPB!M!S!PHEBCPDHHNIACGOAEHJICHGPOHKLHNDLELKPPOJFBOGIEGJIP!Sheets!1!Objects!PrxChart1!Series!1</id>  </tSerie>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <type>2</type>[![](../../minus.gif)](../../#)<gfill>
  <cf>#FF0000</cf>  <ct>#0000FF</ct>  <tp>30</tp>  <a>5</a>  <deff>false</deff>  <deft>true</deft>  </gfill>
[![](../../minus.gif)](../../#)<bd>
  <clr>#FF0000</clr>  <s>0</s>  <w>0.3</w>  <enabled>true</enabled>  <cdef>true</cdef>  </bd>
  <v>true</v>  </tArg>
  </SetChartSerie>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <SetChartSerieResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</SetChartSerieResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetChartSerie" :
  {
   "tSerie" :
    {
     "id" : "NNLEMMGHNIACGOAEMEELDOGHCOBLJOMEDICAJEEDODMDPNPB!M!S!PHEBCPDHHNIACGOAEHJICHGPOHKLHNDLELKPPOJFBOGIEGJIP!Sheets!1!Objects!PrxChart1!Series!1"
    },
   "tArg" :
    {
     "type" : "2",
     "gfill" :
      {
       "cf" : "#FF0000",
       "ct" : "#0000FF",
       "tp" : "30",
       "a" : "5",
       "deff" : "false",
       "deft" : "true"
      },
     "bd" :
      {
       "clr" : "#FF0000",
       "s" : "0",
       "w" : "0.3",
       "enabled" : "true",
       "cdef" : "true"
      },
     "v" : "true"
    }
  }
}

### JSON-ответ:


{
 "SetChartSerieResult" : "1"
}


public static bool SetChartSerie(string chartMoniker, uint serieNumber)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tSet = new SetChartSerie()
    {
        tArg = new ChartSerie()
        {
            type = 2,
            gfill = new ChartGradientFillSettings()
            {
                cf = "#FF0000",
                ct = "#0000FF",
                tp = 30,
                a = 5,
                deff = false,
                deft = true
            },
            bd = new ChartBorderSettings()
            {
                enabled = true,
                clr = "#FF0000",
                s = 0,
                w = 0.3,
                cdef = true
            },
            v = true
        },
        tSerie = new SerieId() { id = chartMoniker + "!Series!" + serieNumber }
    };
    // Изменяем настройки рядя диаграммы
    var result = somClient.SetChartSerie(tSet);
    return result;
}


См. также:


[Диаграмма](Chart/chart_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
