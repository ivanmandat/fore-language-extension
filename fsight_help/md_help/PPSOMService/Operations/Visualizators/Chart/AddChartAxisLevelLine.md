# AddChartAxisLevelLine: Операция

AddChartAxisLevelLine: Операция
-


**


# AddChartAxisLevelLine


## Синтаксис


bool AddChartAxisLevelLine(LevelLinesId tLevelLinesId,
 ChartAxisLevelLine tArg)


## Параметры


tLevelLinesId. Моникёр
 для работы с линиями уровней у оси диаграммы.


tArg. Настройки добавляемой
 линии уровня.


## Описание


Операция AddChartAxisLevelLine
 добавляет линию уровня для оси диаграммы.


## Комментарии


Для выполнения операции укажите в поле tLevelLinesId
 моникёр для работы с линиями уровней, а в поле tArg
 настройки добавляемой линии уровня. Формат моникёра: «Моникёр
 экземпляра рег.отчёта!Sheets!ключ листа!Objects!идентификатор диаграммы!идентификатор
 оси!LevelLines». Доступны следующие идентификаторы оси:


	- AxisX - для оси X;


	- AxisY - для оси Y.


Результатом операции будут логическое значение true,
 если добавление линии уровня завершилось успешно.


## Пример


Ниже приведён пример добавления линии уровня для оси диаграммы. В запросе
 передаётся моникёр для работы с линиями уровня и настройки добавляемой
 линии. В ответе возвращается признак успешного добавления.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<AddChartAxisLevelLine xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tLevelLinesId xmlns="****">
  <id>IOBMGLDPOIBOFOAEONLPLMHPBOFJKECEFJFPJDPALBEBLOAJ!M!S!PKAKNIPDPOIBOFOAEFGIEKKHIJGANGHCEBKHAMGBHBJHFEANF!Sheets!1!Objects!PrxChart1!AxisY!LevelLines</id>  </tLevelLinesId>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
  <v>0</v>  <callft>1</callft>[![](../../../minus.gif)](../../../#)<ls>
  <clr>#FF0000</clr>  <w>1</w>  </ls>
[![](../../../minus.gif)](../../../#)<lb>
  <v>true</v>  <mt>Максимум</mt>  </lb>
  </tArg>
  </AddChartAxisLevelLine>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
  <AddChartAxisLevelLineResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</AddChartAxisLevelLineResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "AddChartAxisLevelLine" :
  {
   "tLevelLinesId" :
    {
     "id" : "IOBMGLDPOIBOFOAEONLPLMHPBOFJKECEFJFPJDPALBEBLOAJ!M!S!PKAKNIPDPOIBOFOAEFGIEKKHIJGANGHCEBKHAMGBHBJHFEANF!Sheets!1!Objects!PrxChart1!AxisY!LevelLines"
    },
   "tArg" :
    {
     "v" : "0",
     "callft" : "1",
     "ls" :
      {
       "clr" : "#FF0000",
       "w" : "1"
      },
     "lb" :
      {
       "v" : "true",
       "mt" : "Максимум"
      }
    }
  }
}

### JSON-ответ:


{
 "AddChartAxisLevelLineResult" : "1"
}


public static bool AddChartAxisLevelLine(string moniker, string sheetKey, string chartId, string axis)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tAdd = new AddChartAxisLevelLine()
    {
        tArg = new ChartAxisLevelLine()
        {
            v = 0,
            callft = 1,
            ls = new ChartLineBase()
            {
                w = 1,
                clr = "#FF0000" // Красный цвет
            },
            lb = new ChartAxisLevelLineLabel()
            {
                v = true,
                mt = "Максимум"
            }
        },
        tLevelLinesId = new LevelLinesId() { id = moniker + "!Sheets!" + sheetKey + "!Objects!" + chartId + '!' + axis + "!LevelLines" }
    };
    // Добавление линии уровня для оси диаграммы
    var result = somClient.AddChartAxisLevelLine(tAdd);
    return result;
}


См. также:


[Диаграмма](chart_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
