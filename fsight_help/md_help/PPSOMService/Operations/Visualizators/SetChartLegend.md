# SetChartLegend: Операция

SetChartLegend: Операция
-


**


# SetChartLegend


## Синтаксис


bool SetChartLegend(LegendId tLegend, ChartLegend
 tArg)


## Параметры


tLegend.
 Моникёр легенды диаграммы.


tArg. Настройки диаграммы,
 которые необходимо установить.


## Описание


Операция SetChartLegend изменяет
 настройки легенды диаграммы.


## Комментарии


Для выполнения операции укажите в поле tLegend
 моникёр легенды, а в поле tArg
 устанавливаемые настройки. Моникёр может быть сформирован на основании
 моникёра открытого экземпляра объекта, с легендой диаграммы которого осуществляется
 работа. Моникёр легенды диаграммы строится на базе моникёра объекта репозитория,
 с диаграммой которого осуществляется работа, по следующим правилам:


	- «Моникёр экземпляра экспресс-отчета»!Chart!Legend.
	 Легенда диаграммы экспресс-отчета (если в экспресс-отчете один лист);


	- «Моникёр экземпляра экспресс-отчета»!Sheets!«Ключ
	 листа»!Chart!Legend. Легенда диаграммы заданного листа экспресс-отчета
	 (если в экспресс-отчете несколько листов);


	- «Моникёр экземпляра рабочей
	 книги»!Chart!Legend. Легенда диаграммы рабочей книги (если
	 в рабочей книге один лист);


	- «Моникёр экземпляра рабочей
	 книги»!Sheets!«Ключ листа»!Chart!Legend. Легенда диаграммы
	 заданного листа рабочей книги (если в рабочей книги несколько листов);


	- «Моникёр экземпляра регламентного
	 отчета»!Sheets!«Ключ листа»!Objects!«Идентификатор диаграммы»!Legend.
	 Легенда диаграммы, расположенная на листе регламентного отчета.


Результатом работы операции будет логическое значение true,
 если применение настроек завершилось успешно.


## Пример


Ниже приведен пример изменения настроек легенды диаграммы, расположенной
 на листе регламентного отчёта. В запросе передаётся моникёр легенды и
 устанавливаемые параметры границы и заливки фона. В ответе приходит признак
 успешного применения изменений.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetChartLegend xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tLegend xmlns="****">
  <id>S1!M!S!P1!Sheets!1!Objects!PrxChart2!Legend</id>  </tLegend>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<bg>
  <type>2</type>[![](../../minus.gif)](../../#)<gfill>
  <cf>#00FF00</cf>  <ct>#009900</ct>  <tp>50</tp>  <a>45</a>  </gfill>
  </bg>
[![](../../minus.gif)](../../#)<bd>
  <enabled>true</enabled>  <clr>#999999</clr>  <s>0</s>  <w>2</w>  </bd>
  </tArg>
  </SetChartLegend>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <SetChartLegendResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</SetChartLegendResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetChartLegend" :
  {
   "tLegend" :
    {
     "id" : "S1!M!S!P1!Sheets!1!Objects!PrxChart2!Legend"
    },
   "tArg" :
    {
     "bg" :
      {
       "type" : "2",
       "gfill" :
        {
         "cf" : "#00FF00",
         "ct" : "#009900",
         "tp" : "50",
         "a" : "45"
        }
      },
     "bd" :
      {
       "enabled" : "true",
       "clr" : "#999999",
       "s" : "0",
       "w" : "2"
      }
    }
  }
}

### JSON-ответ:


{
 "SetChartLegendResult" : "1"
}


public static bool SetChartLegend(string moniker)
{
    var somClient = new SomPortTypeClient();    // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tSet = new SetChartLegend()
    {
        tLegend = new LegendId()
        {
            id = moniker
        },
        tArg = new ChartLegend()
        {
            bg = new ChartBackgroundSettings()
            {
                type = 2,
                gfill = new ChartGradientFillSettings()
                {
                    cf = "#00FF00",
                    ct = "#009900",
                    tp = 50,
                    a = 45
                }
            },
            bd = new ChartBorderSettings()
            {
                enabled = true,
                s = 0,
                clr = "#999999",
                w = 2
            }
        }
    };
    // Изменение настроек легенды
    var result = somClient.SetChartLegend(tSet);
    return result;
}


См. также:


[Диаграмма](Chart/chart_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
