# DashboardVisualizerCopy: Операция

DashboardVisualizerCopy: Операция
-


**


# DashboardVisualizerCopy


## Синтаксис


DashboardVisualizer DashboardVisualizerCopy(string
 mon, DashboardVisualizer tArg)


## Параметры


mon. Моникёр
 для работы с визуализаторами информационной панели.


tArg. Копируемый визуализатор.


## Описание


Операция DashboardVisualizerCopy
 создаёт копию заданного визуализатора.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр открытого экземпляра информационной панели с постфиксом «!Visualizers!ключ визуализатора»,
 а в поле tArg копируемый визуализатор.
 Моникёр может быть получен при выполнении операции [OpenDashboard](OpenDashboard.htm).
 Список визуализаторов возвращает операция [GetDashboardVisualizers](GetDashboardVisualizers.htm).


Результатом операции будет информация о созданной копии визуализатора.


## Пример


Ниже приведён пример копирования визуализатора. В запросе передаётся
 моникёр с ключом визуализатора и настройки копируемого визуализатора.
 В ответе возвращается информация о созданной копии.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<DashboardVisualizerCopy xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">NGDHDGCPEHADGOAENOBLDBIDDCDEGILEPLMLPCIIGMNMBLKH!M!S!PLHPAOLCPEHADGOAEAHKONCEDOLHDDIAEGIKMEIJNDDGMDEOI!Visualizers!3</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <k>3</k>  <metaModelKey>3</metaModelKey>  </tArg>
  </DashboardVisualizerCopy>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<DashboardVisualizerCopyResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <k xmlns="****">4</k>  <x xmlns="****">0</x>  <y xmlns="****">0</y>  <height xmlns="****">200</height>  <width xmlns="****">400</width>  <metaModelKey xmlns="****">4</metaModelKey>  <type xmlns="****">Chart</type>  <chartType xmlns="****">Lines</chartType>  <externalType xmlns="****" />
  <parentKey xmlns="****">0</parentKey>  <title xmlns="****" />
  <useSync xmlns="****">0</useSync>  <useSelectionSync xmlns="****">0</useSelectionSync>  <gxTitle xmlns="****" />
  <esa xmlns="****">0</esa>  </DashboardVisualizerCopyResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "DashboardVisualizerCopy" :
  {
   "mon" : "NGDHDGCPEHADGOAENOBLDBIDDCDEGILEPLMLPCIIGMNMBLKH!M!S!PLHPAOLCPEHADGOAEAHKONCEDOLHDDIAEGIKMEIJNDDGMDEOI!Visualizers!3",
   "tArg" :
    {
     "k" : "3",
     "metaModelKey" : "3"
    }
  }
}

### JSON-ответ:


{
 "DashboardVisualizerCopyResult" :
  {
   "k" : "4",
   "x" : "0",
   "y" : "0",
   "height" : "200",
   "width" : "400",
   "metaModelKey" : "4",
   "type" : "Chart",
   "chartType" : "Lines",
   "externalType" : "",
   "parentKey" : "0",
   "title" : "",
   "useSync" : "0",
   "useSelectionSync" : "0",
   "gxTitle" : "",
   "esa" : "0"
  }
}


public static DashboardVisualizer DashboardVisualizerCopy(string moniker, DashboardVisualizer copiedVis)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tExp = new DashboardVisualizerCopy()
    {
        tArg = copiedVis,
        // Моникёр для работы с визуализаторами информационной панели
        mon = moniker + "!Visualizers!" + copiedVis.k
    };
    // Копирование визуализатора
    var result = somClient.DashboardVisualizerCopy(tExp);
    return result;
}


См. также:


[Работа
 с информационными панелями](DashboardOperations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
