# RemoveChartAxisLevelLine: Операция

RemoveChartAxisLevelLine: Операция
-


**


# RemoveChartAxisLevelLine


## Синтаксис


bool RemoveChartAxisLevelLine(LevelLinesId tLevelLinesId,
 ChartAxisLevelLineInd tArg)


## Параметры


tLevelLinesId. Моникёр
 для работы с линиями уровней у оси диаграммы.


tArg. Параметры удаления линии
 уровня.


## Описание


Операция RemoveChartAxisLevelLine
 удаляет линию уровня у оси диаграммы.


## Комментарии


Для выполнения операции укажите в поле tLevelLinesId
 моникёр для работы с линиями уровней, а в поле tArg параметры удаления.
 Формат моникёра: «Моникёр экземпляра
 рег.отчёта!Sheets!ключ листа!Objects!идентификатор диаграммы!идентификатор
 оси!LevelLines». Доступны следующие идентификаторы оси:


	- AxisX - для оси X;


	- AxisY - для оси Y.


Результатом операции будет логическое значение true,
 если удаление линии уровня завершилось успешно.


## Пример


Ниже приведён пример удаления линии уровня у оси диаграммы. В запросе
 передаётся моникёр для работы с линиями уровня и индекс удаляемой линии.
 В ответе возвращается признак успешного удаления.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<RemoveChartAxisLevelLine xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tLevelLinesId xmlns="****">
  <id>IOBMGLDPOIBOFOAEONLPLMHPBOFJKECEFJFPJDPALBEBLOAJ!M!S!PKAKNIPDPOIBOFOAEFGIEKKHIJGANGHCEBKHAMGBHBJHFEANF!Sheets!1!Objects!PrxChart1!AxisY!LevelLines</id>  </tLevelLinesId>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
  <index>2</index>  </tArg>
  </RemoveChartAxisLevelLine>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
  <RemoveChartAxisLevelLineResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</RemoveChartAxisLevelLineResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "RemoveChartAxisLevelLine" :
  {
   "tLevelLinesId" :
    {
     "id" : "IOBMGLDPOIBOFOAEONLPLMHPBOFJKECEFJFPJDPALBEBLOAJ!M!S!PKAKNIPDPOIBOFOAEFGIEKKHIJGANGHCEBKHAMGBHBJHFEANF!Sheets!1!Objects!PrxChart1!AxisY!LevelLines"
    },
   "tArg" :
    {
     "index" : "2"
    }
  }
}

### JSON-ответ:


{
 "RemoveChartAxisLevelLineResult" : "1"
}


public static bool RemoveChartAxisLevelLine(string moniker, string sheetKey, string chartId, string axis, uint lineIndex)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tRem = new RemoveChartAxisLevelLine()
    {
        tArg = new ChartAxisLevelLineInd()
        {
            index = lineIndex
        },
        tLevelLinesId = new LevelLinesId() { id = moniker + "!Sheets!" + sheetKey + "!Objects!" + chartId + '!' + axis + "!LevelLines"}
    };
    // Удаление линии уровня у оси диаграммы
    var result = somClient.RemoveChartAxisLevelLine(tRem);
    return result;
}


См. также:


[Диаграмма](chart_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
