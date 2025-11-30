# SetChartAxisLevelLine: Операция

SetChartAxisLevelLine: Операция
-


**


# SetChartAxisLevelLine


## Синтаксис


bool SetChartAxisLevelLine(LevelLineId tLevelLineId,
 ChartAxisLevelLine tArg)


## Параметры


tLevelLineId. Моникёр
 для работы с линией уровня у оси диаграммы.


tArg. Настройки, которые необходимо
 установить для линии уровня.


## Описание


Операция SetChartAxisLevelLine
 изменяет настройки линии уровня у оси диаграммы.


## Комментарии


Для выполнения операции укажите в поле tLevelLineId
 моникёр линии уровня, а в поле tArg
 устанавливаемые настройки. Формат моникёра: «Моникёр
 экземпляра рег.отчёта!Sheets!ключ листа!Objects!идентификатор диаграммы!идентификатор
 оси!LevelLines!индекс линии уровня». Доступны следующие идентификаторы
 оси:


	- AxisX - для оси X;


	- AxisY - для оси Y.


Результатом операции будет логическое значение true,
 если изменение настроек завершилось успешно.


## Пример


Ниже приведён пример изменения настроек линии уровня у оси диаграммы.
 В запросе передаётся моникёр линии уровня и устанавливаемые настройки.
 В ответе возвращается признак успешного изменения настроек.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<SetChartAxisLevelLine xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tLevelLineId xmlns="****">
  <id>IOBMGLDPOIBOFOAEONLPLMHPBOFJKECEFJFPJDPALBEBLOAJ!M!S!PKAKNIPDPOIBOFOAEFGIEKKHIJGANGHCEBKHAMGBHBJHFEANF!Sheets!1!Objects!PrxChart1!AxisY!LevelLines!2</id>  </tLevelLineId>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
  <v>3</v>  <callft>0</callft>[![](../../../minus.gif)](../../../#)<ls>
  <s>1</s>  <w>0.5</w>  </ls>
[![](../../../minus.gif)](../../../#)<lb>
  <v>true</v>  <mt>Ориентир</mt>  </lb>
  </tArg>
  </SetChartAxisLevelLine>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
  <SetChartAxisLevelLineResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</SetChartAxisLevelLineResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetChartAxisLevelLine" :
  {
   "tLevelLineId" :
    {
     "id" : "IOBMGLDPOIBOFOAEONLPLMHPBOFJKECEFJFPJDPALBEBLOAJ!M!S!PKAKNIPDPOIBOFOAEFGIEKKHIJGANGHCEBKHAMGBHBJHFEANF!Sheets!1!Objects!PrxChart1!AxisY!LevelLines!2"
    },
   "tArg" :
    {
     "v" : "3",
     "callft" : "0",
     "ls" :
      {
       "s" : "1",
       "w" : "0.5"
      },
     "lb" :
      {
       "v" : "true",
       "mt" : "Ориентир"
      }
    }
  }
}

### JSON-ответ:


{
 "SetChartAxisLevelLineResult" : "1"
}


public static bool SetChartAxisLevelLine(string moniker, string sheetKey, string chartId, string axis, uint lineIndex)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tSet = new SetChartAxisLevelLine()
    {
        tArg = new ChartAxisLevelLine()
        {
            v = 3,
            callft = 0,
            ls = new ChartLineBase()
            {
                w = 0.5,
                s = 1
            },
            lb = new ChartAxisLevelLineLabel()
            {
                v = true,
                mt = "Ориентир"
            }
        },
        tLevelLineId = new LevelLineId() { id = moniker + "!Sheets!" + sheetKey + "!Objects!" + chartId + '!' + axis + "!LevelLines!" + lineIndex }
    };
    // Изменение настроек линии уровня у оси диаграммы
    var result = somClient.SetChartAxisLevelLine(tSet);
    return result;
}


См. также:


[Диаграмма](chart_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
