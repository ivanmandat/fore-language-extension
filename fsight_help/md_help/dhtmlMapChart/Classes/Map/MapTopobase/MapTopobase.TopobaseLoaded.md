# MapTopobase.TopobaseLoaded

MapTopobase.TopobaseLoaded
-


# MapTopobase.TopobaseLoaded


## Синтаксис


TopobaseLoaded: function(sender, args);


## Параметры


sender. Источник события;


args. Информация
 о событии.


## Описание


Событие TopobaseLoaded наступает
 после загрузки топоосновы.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [MapChart](../../../Components/MapChart/MapChart.htm) с наименованием
 «map» (см. «[Размещение
 карты на HTML странице](../../../Components/MapChart/HTML_layout.htm)»).


var topo = map.getTopobase();
// Изменяем топооснову по указанному url-адресу
topo.changeTopobase(PP.MapChartType.SVG, "/build/demo/lib/SVG/Russia.svg");
// Создаём событие после загрузки топоосновы
topo.TopobaseLoaded.add(function (sender, args) {
alert(topo.isLoaded())
});
В результате выполнения примера изменилась топооснова, и появилось окно
 с сообщением «true» - топооснова загружена.


См. также:


[MapTopobase](MapTopobase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
