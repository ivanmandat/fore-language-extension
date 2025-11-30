# GetChartAxisLevelLines: Операция

GetChartAxisLevelLines: Операция
-


**


# GetChartAxisLevelLines


## Синтаксис


ChartAxisLevelLines GetChartAxisLevelLines(LevelLinesId
 tLevelLinesId)


## Параметры


tLevelLinesId. Моникёр
 для работы с линиями уровней у оси диаграммы.


## Описание


Операция GetChartAxisLevelLines
 получает настройки линий уровней у оси диаграммы.


## Комментарии


Для выполнения операции укажите в поле tLevelLinesId
 моникёр для работы с линиями уровней. Формат моникёра: «Моникёр
 экземпляра рег.отчёта!Sheets!ключ листа!Objects!идентификатор диаграммы!идентификатор
 оси!LevelLines». Доступны следующие идентификаторы оси:


	- AxisX - для оси X;


	- AxisY - для оси Y.


Результатом операции будут полученные настройки линий уровней.


## Пример


Ниже приведён пример получения настроек линий уровня у оси диаграммы.
 В запросе передаётся моникёр для работы с линиями уровня. В ответе возвращаются
 полученные настройки.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<GetChartAxisLevelLines xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tLevelLinesId xmlns="****">
  <id>IOBMGLDPOIBOFOAEONLPLMHPBOFJKECEFJFPJDPALBEBLOAJ!M!S!PKAKNIPDPOIBOFOAEFGIEKKHIJGANGHCEBKHAMGBHBJHFEANF!Sheets!1!Objects!PrxChart1!AxisY!LevelLines</id>  </tLevelLinesId>
  </GetChartAxisLevelLines>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<GetChartAxisLevelLinesResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<lls xmlns="****">
  <i>0</i>  <v>1.5</v>  <callft>0</callft>[![](../../../minus.gif)](../../../#)<ls>
  <clr>#000000</clr>  <s>0</s>  <w>0.25</w>  </ls>
[![](../../../minus.gif)](../../../#)<lb>
  <v>0</v>[![](../../../minus.gif)](../../../#)<f>
  <family>Tahoma</family>[![](../../../minus.gif)](../../../#)<style>
  <it>Regular</it>  </style>
[![](../../../minus.gif)](../../../#)<size>
  <width>-1</width>  <height>8</height>  <units>Pt</units>  </size>
  </f>
  <fc>#000000</fc>  <mt>%Computation : %Value</mt>  </lb>
  </lls>
[![](../../../minus.gif)](../../../#)<lls xmlns="****">
  <i>1</i>  <v>2.5</v>  <callft>5</callft>[![](../../../minus.gif)](../../../#)<ls>
  <clr>#000000</clr>  <s>0</s>  <w>0.25</w>  </ls>
[![](../../../minus.gif)](../../../#)<lb>
  <v>1</v>[![](../../../minus.gif)](../../../#)<f>
  <family>Tahoma</family>[![](../../../minus.gif)](../../../#)<style>
  <it>Regular</it>  </style>
[![](../../../minus.gif)](../../../#)<size>
  <width>-1</width>  <height>8</height>  <units>Pt</units>  </size>
  </f>
  <fc>#000000</fc>  <mt>Среднее</mt>  </lb>
  </lls>
  </GetChartAxisLevelLinesResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetChartAxisLevelLines" :
  {
   "tLevelLinesId" :
    {
     "id" : "IOBMGLDPOIBOFOAEONLPLMHPBOFJKECEFJFPJDPALBEBLOAJ!M!S!PKAKNIPDPOIBOFOAEFGIEKKHIJGANGHCEBKHAMGBHBJHFEANF!Sheets!1!Objects!PrxChart1!AxisY!LevelLines"
    }
  }
}

### JSON-ответ:


{
 "GetChartAxisLevelLinesResult" :
  {
   "lls" :
    [
      {
       "i" : "0",
       "v" : "1.5",
       "callft" : "0",
       "ls" :
        {
         "clr" : "#000000",
         "s" : "0",
         "w" : "0.25"
        },
       "lb" :
        {
         "v" : "0",
         "f" :
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
         "fc" : "#000000",
         "mt" : "%Computation : %Value"
        }
      },
      {
       "i" : "1",
       "v" : "2.5",
       "callft" : "5",
       "ls" :
        {
         "clr" : "#000000",
         "s" : "0",
         "w" : "0.25"
        },
       "lb" :
        {
         "v" : "1",
         "f" :
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
         "fc" : "#000000",
         "mt" : "Среднее"
        }
      }
    ]
  }
}


public static ChartAxisLevelLines GetChartAxisLevelLines(string moniker, string sheetKey, string chartId, string axis)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tGet = new GetChartAxisLevelLines()
    {
        tLevelLinesId = new LevelLinesId() { id = moniker + "!Sheets!" + sheetKey + "!Objects!" + chartId + '!' + axis + "!LevelLines" }
    };
    // Получение настроек линий уровня у оси диаграммы
    var result = somClient.GetChartAxisLevelLines(tGet);
    return result;
}


См. также:


[Диаграмма](chart_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
