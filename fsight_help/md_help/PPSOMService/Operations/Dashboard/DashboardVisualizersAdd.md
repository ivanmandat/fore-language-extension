# DashboardVisualizersAdd: Операция

DashboardVisualizersAdd: Операция
-


**


# DashboardVisualizersAdd


## Синтаксис


DashboardVisualizer DashboardVisualizersAdd(string
 mon, DashboardVisualizer tArg)


## Параметры


mon. Моникёр
 для работы с визуализаторами информационной панели.


tArg. Настройки добавляемого
 визуализатора.


## Описание


Операция DashboardVisualizersAdd
 добавляет новый визуализатор в информационную панель.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр открытого экземпляра информационной панели с постфиксом «!Visualizers», а в поле tArg
 настройки создаваемого визуализатора. Если визуализатор добавляется в
 слайд, то также определите поле tArg.parentKey.
 Моникёр может быть получен при выполнении операции [OpenDashboard](OpenDashboard.htm).


Результатом выполнения операции будут ключ созданного визуализатора
 и ключ созданной для него метамодели. Метамодель в дальнейшем необходимо
 связать с источником данных с помощью операции DashboardMetaModelSetLayer.


## Пример


Ниже приведён пример создания нового визуализатора в информационной
 панели. В запросе передаётся моникёр для работы с визуализаторами, тип
 и настройки нового визуализатора. В ответе возвращается ключ, сгенерированный
 для нового визуализатора.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<DashboardVisualizersAdd xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">NGDHDGCPEHADGOAENOBLDBIDDCDEGILEPLMLPCIIGMNMBLKH!M!S!PLHPAOLCPEHADGOAEAHKONCEDOLHDDIAEGIKMEIJNDDGMDEOI!Visualizers</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <k>0</k>  <x>0</x>  <y>0</y>  <height>200</height>  <width>400</width>  <type>Chart</type>  <chartType>Lines</chartType>  </tArg>
  </DashboardVisualizersAdd>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<DashboardVisualizersAddResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <k xmlns="****">3</k>  <metaModelKey xmlns="****">3</metaModelKey>  </DashboardVisualizersAddResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "DashboardVisualizersAdd" :
  {
   "mon" : "NGDHDGCPEHADGOAENOBLDBIDDCDEGILEPLMLPCIIGMNMBLKH!M!S!PLHPAOLCPEHADGOAEAHKONCEDOLHDDIAEGIKMEIJNDDGMDEOI!Visualizers",
   "tArg" :
    {
     "k" : "0",
     "x" : "0",
     "y" : "0",
     "height" : "200",
     "width" : "400",
     "type" : "Chart",
     "chartType" : "Lines"
    }
  }
}

### JSON-ответ:


{
 "DashboardVisualizersAddResult" :
  {
   "k" : "3",
   "metaModelKey" : "3"
  }
}


public static DashboardVisualizer DashboardVisualizersAdd(string moniker)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tAdd = new DashboardVisualizersAdd()
    {
        tArg = new DashboardVisualizer()
        {
            type = SomDashboardVisualizerType.Chart,
            chartType = SomDashboardChartType.Lines,
            x = 0,
            y = 0,
            height = 200,
            width = 400
        },
        // Моникёр для работы с визуализаторами информационной панели
        mon = moniker + "!Visualizers"
    };
    // Добавление визуализатора
    var result = somClient.DashboardVisualizersAdd(tAdd);
    return result;
}


См. также:


[Работа
 с информационными панелями](DashboardOperations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
