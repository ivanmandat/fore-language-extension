# SetDashboardVisualizers: Операция

SetDashboardVisualizers: Операция
-


**


# SetDashboardVisualizers


## Синтаксис


bool SetDashboardVisualizers(string mon, DashboardVisualizers
 tArg)


## Параметры


mon. Моникёр
 для работы с визуализаторами информационной панели.


tArg. Параметры выполнения
 операции.


## Описание


Операция SetDashboardVisualizers
 изменяет настройки визуализаторов, созданных в информационной панели.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр открытого экземпляра информационной панели с постфиксом «!Visualizers», а в поле tArg.its
 обновлённые настройки визуализаторов, которые необходимо применить. Моникёр
 может быть получен при выполнении операции [OpenDashboard](OpenDashboard.htm).


Результатом выполнения операции будет логическое значение true,
 если изменение настроек завершилось успешно.


## Пример


Ниже приведён пример изменения настроек визуализатора информационной
 панели. В запросе передаётся моникёр для работы с визуализаторами и обновлённые
 настройки визуализатора. В ответе возвращается признак успешного изменения
 настроек.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetDashboardVisualizers xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">NGDHDGCPEHADGOAENOBLDBIDDCDEGILEPLMLPCIIGMNMBLKH!M!S!PLHPAOLCPEHADGOAEAHKONCEDOLHDDIAEGIKMEIJNDDGMDEOI!Visualizers</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>1</k>  <n />
  <x>630</x>  <y>101</y>  <height>423</height>  <width>714</width>  <metaModelKey>1</metaModelKey>  <type>Grid</type>  <chartType>Bars</chartType>  <parentKey>0</parentKey>  <title>Расчётные данные</title>  <useSync>false</useSync>  <useSelectionSync>false</useSelectionSync>[![](../../minus.gif)](../../#)<syncGroups>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>-1</k>  <dimKeys />
  </it>
  </its>
  </syncGroups>
  <settings>{"exportLayout":"Landscape","exportFileFormat":"pdf"}</settings>  </it>
  </its>
  </tArg>
  </SetDashboardVisualizers>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <SetDashboardVisualizersResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</SetDashboardVisualizersResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetDashboardVisualizers" :
  {
   "mon" : "NGDHDGCPEHADGOAENOBLDBIDDCDEGILEPLMLPCIIGMNMBLKH!M!S!PLHPAOLCPEHADGOAEAHKONCEDOLHDDIAEGIKMEIJNDDGMDEOI!Visualizers",
   "tArg" :
    {
     "its" :
      {
       "it" :
        [
          {
           "k" : "1",
           "n" : "",
           "x" : "630",
           "y" : "101",
           "height" : "423",
           "width" : "714",
           "metaModelKey" : "1",
           "type" : "Grid",
           "chartType" : "Bars",
           "parentKey" : "0",
           "title" : "Расчётные данные",
           "useSync" : "false",
           "useSelectionSync" : "false",
           "syncGroups" :
            {
             "its" :
              {
               "it" :
                [
                  {
                   "k" : "-1",
                   "dimKeys" : ""
                  }
                ]
              }
            },
           "settings" : "{"exportLayout":"Landscape","exportFileFormat":"pdf"}"
          }
        ]
      }
    }
  }
}

### JSON-ответ:


{
 "SetDashboardVisualizersResult" : "1"
}


public static bool SetDashboardVisualizers(string moniker, DashboardVisualizer visualizer)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tSet = new SetDashboardVisualizers()
    {
        tArg = new DashboardVisualizers()
        {
            its = new DashboardVisualizer[]
            {
                visualizer
            }
        },
        // Моникёр для работы с визуализаторами информационной панели
        mon = moniker + "!Visualizers"
    };
    // Изменение информации о визуализаторах информационной панели
    var result = somClient.SetDashboardVisualizers(tSet);
    return result;
}


См. также:


[Работа
 с информационными панелями](DashboardOperations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
