# DataVisualizer.UseSelectOnClick

DataVisualizer.UseSelectOnClick
-


# DataVisualizer.UseSelectOnClick


## Синтаксис


UseSelectOnClick: Boolean;


## Описание


Свойство UseSelectOnClick определяет,
 разрешено ли выделение элемента с помощью указателя мыши.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setUseSelectOnClick.


Свойство содержит значение true,
 если разрешено выделение элемента с помощью указателя мыши, иначе - значение
 false.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [MapChart](dhtmlMapChart.chm::/Components/MapChart/MapChart.htm)
 с наименованием «map» (см. «[Пример
 создания компонента MapChart](dhtmlMapChart.chm::/Components/MapChart/MapChart_Example.htm)»). Обработаем события ItemSelecting
 и ItemSelected, выводя в консоль браузера идентификатор выбираемой и наименование
 выбранной области слоя карты соответственно:


// Разрешим выбирать области слоя карты с помощью щелчка мыши
map.setUseSelectOnClick(true);
// Обработаем событие ItemSelecting
map.ItemSelecting.add(function (sender, args) {
    console.log("Идентификатор выбираемой области: " + args.ItemId);
});
// Обработаем событие ItemSelecting
map.ItemSelected.add(function (sender, args) {
    // Получим область слоя карты по идентификатору
    var shape = map.getShape(args.ItemId);
    console.log("Наименование выбранной области: " + shape.getValue());
});
Далее выберем указателем мыши на карте России следующие регионы: Красноярский
 край и Саха. После этого в консоли браузера будут выведены идентификаторы
 выбираемых и наименования выбранных областей слоя карты:


Идентификатор выбираемой области: RU-KYA


Наименование выбранной области: Красноярский край


Идентификатор выбираемой области: RU-SA


Наименование выбранной области: Саха


См.
 также:


[DataVisualizer](DataVisualizer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
