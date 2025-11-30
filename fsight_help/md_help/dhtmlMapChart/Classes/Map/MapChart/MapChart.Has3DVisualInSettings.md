# MapChart.Has3DVisualInSettings

MapChart.Has3DVisualInSettings
-


# MapChart.Has3DVisualInSettings


## Синтаксис


Has3DVisualInSettings: Boolean;


## Описание


Свойство Has3DVisualInSettings определяет, прочитаны ли настройки трёхмерной карты из файла или же они заданы программно.


## Комментарии


Значение свойство можно установить из JSON и с помощью метода setHas3DVisualInSettings.


Свойство содержит значение true (по умолчанию), если настройки трёхмерной карты прочитаны из файла, и значение false, если они были заданы программно.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [MapChart](../../../Components/MapChart/MapChart.htm) с наименованием «map» и компонента [ToolBar](dhtmlUi.chm::/Classes/ToolBar/ToolBar.htm) с наименованием «MapType» (см. «[Пример создания компонента MapChart](../../../Components/MapChart/MapChart_Example.htm)»). Также требуется, чтобы была загружена карта с типом отображения «Sphere» (см. страницу описания свойства [MapChart.AmbientLightValue](MapChart.AmbientLightValue.htm)).


Определим, откуда были взяты настройки для карты типа «Sphere»:


// Установим карту типа Sphere
map.setType(PP.MapChartType.Sphere);
if (map.getHas3DVisualInSettings()) {
    console.log("Настройки трёхмерной карты прочитаны из файла.");
} else {
    console.log("Настройки трёхмерной карты были заданы программно.");
};

В результате выполнения примера в консоли браузера было выведено сообщение о том, что настройки трёхмерной карты были прочитаны из файла.


См. также:


[MapChart](MapChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
