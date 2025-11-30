# SetChartSettings: Операция

SetChartSettings: Операция
-


**


# SetChartSettings


## Синтаксис


bool SetChartSettings(ChartId tChart, ChartSettings
 tArg)


## Параметры


tChart. Моникёр
 диаграммы.


tArg. Устанавливаемые настройки
 диаграммы.


## Описание


Операция SetChartSettings изменяет
 настройки диаграммы.


## Комментарии


Для выполнения операции укажите в поле tChart
 моникёр диаграммы, а в поле tArg
 устанавливаемые настройки.


Моникёр диаграммы строится на базе моникёра объекта репозитория, с диаграммой
 которого осуществляется работа, по следующим правилам:


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


Результатом работы операции будет логическое значение true,
 если применение настроек завершилось успешно.


## Пример


Ниже приведён пример изменения настроек диаграммы, созданной в регламентном
 отчёте. В запросе передаётся моникёр диаграммы и новые настройки. В ответе
 приходит признак успешного изменения настроек.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetChartSettings xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tChart xmlns="****">
  <id>S1!M!S!P1!Sheets!1!Objects!PrxChart1</id>  </tChart>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <view3d>true</view3d>[![](../../minus.gif)](../../#)<bg>
  <type>2</type>[![](../../minus.gif)](../../#)<gfill>
  <cf>#00FF00</cf>  <ct>#009900</ct>  <tp>50</tp>  <a>45</a>  </gfill>
  </bg>
[![](../../minus.gif)](../../#)<bd>
  <enabled>true</enabled>  <clr>#999999</clr>  <s>0</s>  <w>2</w>  </bd>
  </tArg>
  </SetChartSettings>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <SetChartSettingsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</SetChartSettingsResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetChartSettings" :
  {
   "tChart" :
    {
     "id" : "S1!M!S!P1!Sheets!1!Objects!PrxChart1"
    },
   "tArg" :
    {
     "view3d" : "true",
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
 "SetChartSettingsResult" : "1"
}


public static bool SetChartSettings(string moniker)
{
    var somClient = new SomPortTypeClient();    // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tSet = new SetChartSettings()
    {
        tChart = new ChartId()
        {
            id = moniker
        },
         tArg = new ChartSettings()
         {
             view3d = true,
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
    // Изменение настроек
    var result = somClient.SetChartSettings(tSet);
    return result;
}


См. также:


[Диаграмма](Chart/chart_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
