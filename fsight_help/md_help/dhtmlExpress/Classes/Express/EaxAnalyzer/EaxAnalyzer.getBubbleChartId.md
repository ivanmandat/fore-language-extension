# EaxAnalyzer.getBubbleChartId

EaxAnalyzer.getBubbleChartId
-


**


# EaxAnalyzer.getBubbleChartId


## Синтаксис


getBubbleChartId();


## Описание


Метод getBubbleChartId**
 возвращает идентификатор представления данных «Пузырьковая диаграмма»
 у экспресс-отчета.


## Комментарии


Метод возвращает JSON-объект с полем id - строковый идентификатор вида
 {идентификатор_сессии}!{идентификатор_объекта} для пузырьковой диаграммы
 экспресс-отчета.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Получим строковый идентификатор
 вида {идентификатор_сессии}!{идентификатор_объекта} для таблицы,
 диаграммы, пузырьковой диаграммы и карты экспресс-отчета (если доступна):


var eaxAnalyzer = expressBox.getSource();
console.log("Bubble chart: " + eaxAnalyzer.getBubbleChartId().id);
console.log("Chart: " + eaxAnalyzer.getChartId().id);
console.log("Chart: " + eaxAnalyzer.getChartId().id);
if (eaxAnalyzer.isMapAvailable) {
    console.log("Map: " + eaxAnalyzer.getMapId().id);
}
console.log("Tab: " + eaxAnalyzer.getTabId().id);

В результате выполнения примера в консоли браузера будут выведены строковые
 идентификаторы таблицы, диаграммы и пузырьковой диаграммы экспресс-отчета:


Bubble chart: ACEGIKMKEJOBEOAEIALFIBABEBJIOPOEOLEPEGGOPMAMMEPP!M!S!ELABMBCNKEJOBEOAEGGDPPMMMLJJFOBMEOJHFCNPOMHLPPPCH!bubbleChart

Chart:

ACEGIKMKEJOBEOAEIALFIBABEBJIOPOEOLEPEGGOPMAMMEPP!M!S!ELABMBCNKEJOBEOAEGGDPPMMMLJJFOBMEOJHFCNPOMHLPPPCH!Chart

Chart: ACEGIKMKEJOBEOAEIALFIBABEBJIOPOEOLEPEGGOPMAMMEPP!M!S!ELABMBCNKEJOBEOAEGGDPPMMMLJJFOBMEOJHFCNPOMHLPPPCH!Chart

Map: ACEGIKMKEJOBEOAEIALFIBABEBJIOPOEOLEPEGGOPMAMMEPP!M!S!ELABMBCNKEJOBEOAEGGDPPMMMLJJFOBMEOJHFCNPOMHLPPPCH!Map

Tab: ACEGIKMKEJOBEOAEIALFIBABEBJIOPOEOLEPEGGOPMAMMEPP!M!S!ELABMBCNKEJOBEOAEGGDPPMMMLJJFOBMEOJHFCNPOMHLPPPCH!Tab


См. также:


[EaxAnalyzer](EaxAnalyzer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
