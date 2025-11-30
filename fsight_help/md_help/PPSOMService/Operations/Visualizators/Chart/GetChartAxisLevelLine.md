# GetChartAxisLevelLine: Операция

GetChartAxisLevelLine: Операция
-


**


# GetChartAxisLevelLine


## Синтаксис


ChartAxisLevelLine GetChartAxisLevelLine(LevelLineId
 tLevelLineId)


## Параметры


tLevelLineId. Моникёр
 для работы с линией уровня у оси диаграммы.


## Описание


Операция GetChartAxisLevelLine
 получает настройки линии уровня у оси диаграммы.


## Комментарии


Для выполнения операции укажите в поле tLevelLineId
 моникёр линии уровня. Формат моникёра: «Моникёр
 экземпляра рег.отчёта!Sheets!ключ листа!Objects!идентификатор диаграммы!идентификатор
 оси!LevelLines!индекс линии уровня». Доступны следующие идентификаторы
 оси:


	- AxisX - для оси X;


	- AxisY - для оси Y.


Результатом операции будут полученные настройки линии уровня.


## Пример


Ниже приведён пример получения настроек линии уровня у оси диаграммы.
 В запросе передаётся моникёр для работы с линией уровня. В ответе возвращаются
 полученные настройки.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<GetChartAxisLevelLine xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tLevelLineId xmlns="****">
  <id>IOBMGLDPOIBOFOAEONLPLMHPBOFJKECEFJFPJDPALBEBLOAJ!M!S!PKAKNIPDPOIBOFOAEFGIEKKHIJGANGHCEBKHAMGBHBJHFEANF!Sheets!1!Objects!PrxChart1!AxisY!LevelLines!2</id>  </tLevelLineId>
  </GetChartAxisLevelLine>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<GetChartAxisLevelLineResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <i xmlns="****">2</i>  <v xmlns="****">3</v>  <callft xmlns="****">0</callft>[![](../../../minus.gif)](../../../#)<ls xmlns="****">
  <clr>#FF0000</clr>  <s>1</s>  <w>0.5</w>  </ls>
[![](../../../minus.gif)](../../../#)<lb xmlns="****">
  <v>1</v>[![](../../../minus.gif)](../../../#)<f>
  <family>Tahoma</family>[![](../../../minus.gif)](../../../#)<style>
  <it>Regular</it>  </style>
[![](../../../minus.gif)](../../../#)<size>
  <width>-1</width>  <height>8</height>  <units>Pt</units>  </size>
  </f>
  <fc>#918F8D</fc>  <mt>Ориентир</mt>  </lb>
  </GetChartAxisLevelLineResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetChartAxisLevelLine" :
  {
   "tLevelLineId" :
    {
     "id" : "IOBMGLDPOIBOFOAEONLPLMHPBOFJKECEFJFPJDPALBEBLOAJ!M!S!PKAKNIPDPOIBOFOAEFGIEKKHIJGANGHCEBKHAMGBHBJHFEANF!Sheets!1!Objects!PrxChart1!AxisY!LevelLines!2"
    }
  }
}

### JSON-ответ:


{
 "GetChartAxisLevelLineResult" :
  {
   "i" : "2",
   "v" : "3",
   "callft" : "0",
   "ls" :
    {
     "clr" : "#FF0000",
     "s" : "1",
     "w" : "0.5"
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
     "fc" : "#918F8D",
     "mt" : "Ориентир"
    }
  }
}


public static ChartAxisLevelLine GetChartAxisLevelLine(string moniker, string sheetKey, string chartId, string axis, uint lineIndex)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tGet = new GetChartAxisLevelLine()
    {
        tLevelLineId = new LevelLineId() { id = moniker + "!Sheets!" + sheetKey + "!Objects!" + chartId + '!' + axis + "!LevelLines!" + lineIndex }
    };
    // Получение настроек линии уровня у оси диаграммы
    var result = somClient.GetChartAxisLevelLine(tGet);
    return result;
}


См. также:


[Диаграмма](chart_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
