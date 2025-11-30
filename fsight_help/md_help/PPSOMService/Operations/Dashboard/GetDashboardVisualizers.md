# GetDashboardVisualizers: Операция

GetDashboardVisualizers: Операция
-


**


# GetDashboardVisualizers


## Синтаксис


DashboardVisualizers GetDashboardVisualizers(string
 mon, DashboardVisualizers tArg)


## Параметры


mon. Моникёр
 для работы с визуализаторами информационной панели.


tArg. Параметры выполнения
 операции.


## Описание


Операция GetDashboardVisualizers
 получает информацию о визуализаторах, созданных в информационной панели.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр открытого экземпляра информационной панели с постфиксом «!Visualizers», а в поле tArg.its
 пустые значения или значения по умолчанию для тех полей, значения которых
 необходимо получить. Моникёр может быть получен при выполнении операции
 [OpenDashboard](OpenDashboard.htm).


Результатом выполнения операции будет полученная информация о визуализаторах
 информационной панели.


## Пример


Ниже приведён пример получения списка визуализаторов информационной
 панели. В запросе передаётся моникёр для работы с визуализаторами и список
 получаемых для визуализаторов настроек. В ответе возвращается полученная
 информация.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetDashboardVisualizers xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">LMGDDNGEFDIFGOAEIGCANAEEEOBLIOHEBICOKPMHEJEIFPOB!M!S!PGLCIBOGEFDIFGOAEHHDBAHHNAGHEIMPENKHHCMJLGBPHJAEM!Visualizers</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>-1</k>  <n />
  <title />
  <useSync>false</useSync>  <settings />
  <x>2147483647</x>  <y>2147483647</y>  <height>-1</height>  <width>-1</width>  <metaModelKey>-1</metaModelKey>  <type>Chart</type>  <chartType>Areas</chartType>  <parentKey>-1</parentKey>  <sendSelectionSync>false</sendSelectionSync>  <receiveSelectionSync>false</receiveSelectionSync>  <isSendReceiveSelection>false</isSendReceiveSelection>  </it>
  </its>
  </tArg>
  </GetDashboardVisualizers>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetDashboardVisualizersResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<its xmlns="****">
[![](../../minus.gif)](../../#)<it>
  <k>1</k>  <n />
  <title>Таблица с данными</title>  <useSync>0</useSync>  <settings>{"exportLayout":"Landscape","exportFileFormat":"pdf"}</settings>  <x>0</x>  <y>0</y>  <height>12</height>  <width>20</width>  <metaModelKey>1</metaModelKey>  <type>Grid</type>  <chartType>Bars</chartType>  <parentKey>1</parentKey>  <sendSelectionSync>1</sendSelectionSync>  <receiveSelectionSync>1</receiveSelectionSync>  <isSendReceiveSelection>1</isSendReceiveSelection>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>2</k>  <n />
  <title>Лепестковая диаграмма</title>  <useSync>1</useSync>  <settings>{"exportLayout":"Landscape","exportFileFormat":"pdf"}</settings>  <x>0</x>  <y>0</y>  <height>12</height>  <width>20</width>  <metaModelKey>2</metaModelKey>  <type>Chart</type>  <chartType>Petals</chartType>  <parentKey>2</parentKey>  <sendSelectionSync>0</sendSelectionSync>  <receiveSelectionSync>1</receiveSelectionSync>  <isSendReceiveSelection>1</isSendReceiveSelection>  </it>
  </its>
  </GetDashboardVisualizersResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetDashboardVisualizers" :
  {
   "mon" : "LMGDDNGEFDIFGOAEIGCANAEEEOBLIOHEBICOKPMHEJEIFPOB!M!S!PGLCIBOGEFDIFGOAEHHDBAHHNAGHEIMPENKHHCMJLGBPHJAEM!Visualizers",
   "tArg" :
    {
     "its" :
      {
       "it" :
        [
          {
           "k" : "-1",
           "n" : "",
           "title" : "",
           "useSync" : "false",
           "settings" : "",
           "x" : "2147483647",
           "y" : "2147483647",
           "height" : "-1",
           "width" : "-1",
           "metaModelKey" : "-1",
           "type" : "Chart",
           "chartType" : "Areas",
           "parentKey" : "-1",
           "sendSelectionSync" : "false",
           "receiveSelectionSync" : "false",
           "isSendReceiveSelection" : "false"
          }
        ]
      }
    }
  }
}

### JSON-ответ:


{
 "GetDashboardVisualizersResult" :
  {
   "its" :
    {
     "it" :
      [
        {
         "k" : "1",
         "n" : "",
         "title" : "Таблица с данными",
         "useSync" : "0",
         "settings" : "{"exportLayout":"Landscape","exportFileFormat":"pdf"}",
         "x" : "0",
         "y" : "0",
         "height" : "12",
         "width" : "20",
         "metaModelKey" : "1",
         "type" : "Grid",
         "chartType" : "Bars",
         "parentKey" : "1",
         "sendSelectionSync" : "1",
         "receiveSelectionSync" : "1",
         "isSendReceiveSelection" : "1"
        },
        {
         "k" : "2",
         "n" : "",
         "title" : "Лепестковая диаграмма",
         "useSync" : "1",
         "settings" : "{"exportLayout":"Landscape","exportFileFormat":"pdf"}",
         "x" : "0",
         "y" : "0",
         "height" : "12",
         "width" : "20",
         "metaModelKey" : "2",
         "type" : "Chart",
         "chartType" : "Petals",
         "parentKey" : "2",
         "sendSelectionSync" : "0",
         "receiveSelectionSync" : "1",
         "isSendReceiveSelection" : "1"
        }
      ]
    }
  }
}


public static DashboardVisualizers GetDashboardVisualizers(string moniker)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetDashboardVisualizers()
    {
        tArg = new DashboardVisualizers()
        {
            its = new DashboardVisualizer[]
            {
                new DashboardVisualizer()
                {
                    k = uint.MaxValue,
                    n = string.Empty,
                    type = SomDashboardVisualizerType.Chart,
                    chartType = SomDashboardChartType.Areas,
                    x = int.MaxValue,
                    y = int.MaxValue,
                    height = uint.MaxValue,
                    width = uint.MaxValue,
                    settings = string.Empty,
                    metaModelKey = uint.MaxValue,
                    parentKey = uint.MaxValue,
                    useSync = new bool(),
                    sendSelectionSync = new bool(),
                    receiveSelectionSync = new bool(),
                    isSendReceiveSelection = new bool(),
                    title = string.Empty
                }
            }
        },
        // Моникёр для работы с визуализаторами информационной панели
        mon = moniker + "!Visualizers"
    };
    // Получение информации о визуализаторах информационной панели
    var result = somClient.GetDashboardVisualizers(tGet);
    return result;
}


См. также:


[Работа
 с информационными панелями](DashboardOperations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
