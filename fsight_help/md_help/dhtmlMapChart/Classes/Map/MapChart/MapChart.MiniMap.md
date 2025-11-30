# MapChart.MiniMap

MapChart.MiniMap
-


# MapChart.MiniMap


## Синтаксис


MiniMap : PP.Ui.MiniMap;


## Описание


Свойство MiniMap определяет
 мини-карту.


## Комментарии


Мини-карта отображается сверху слева.


Для управления отображением мини-карты в нижнем правом углу карты создается
 кнопка.


Для создания мини-карты используйте свойство [MapChart.MiniMapEnabled](MapChart.MiniMapEnabled.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [MapChart](../../../Components/MapChart/MapChart.htm) с наименованием
 «map» (см. «[Пример
 создания компонента MapChart](../../../Components/MapChart/MapChart_Example.htm)»).


// Изменим масштаб мини-карты
map.setMiniMapScale(0.15);
// Включим отображение мини-карты
map.setMiniMapEnabled(true);
// Выведем объект мини-карты в консоль
console.log(map.getMiniMap());
// -> PP.Ui.MiniMap {_Events: Object, _typeName: "PP.Ui.MiniMap", ScaleChanged: PP.Delegate, ViewAreaChanged: PP.Delegate, _IsRTL: false…}
В результате выполнения примера будет включено отображение мини-карты.
 Объект мини-карты будет выведен в консоль.


См. также:


[MapChart](MapChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
