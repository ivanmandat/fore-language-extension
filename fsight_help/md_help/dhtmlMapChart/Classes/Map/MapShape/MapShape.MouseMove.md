# MapShape.MouseMove

MapShape.MouseMove
-


# MapShape.MouseMove


## Синтаксис


MouseMove: function(sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие MouseMove генерируется при перемещении указателя мыши над областью слоя карты.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [MapChart](../../../Components/MapChart/MapChart.htm) с наименованием «map» (см. «[Пример создания компонента MapChart](../../../Components/MapChart/MapChart_Example.htm)»). Обработаем событие MouseMove, выводя в консоли браузера наименование области слоя данных с идентификатором «RU-KYA» при перемещении над ней указателя мыши:


// Получим область слоя карты с идентификатором «RU-KYA»
var shape = map.getShape("RU-KYA");
// Обработаем событие MouseOver
shape.MouseMove.add(function (sender, args) {
    console.log("Выбранная область слоя карты: " + args.ShapeName);
});
// Обработаем событие MouseOver
map.MouseOver.add(function (sender, args) {
    if (sender.getType() == PP.MapChartType.SVG) {
        if (args != null) {
            // Получим область слоя карты
            var shape = sender.getShape(args.ShapeId);
            // Вызовем событие MouseMove для данного слоя
            shape.MouseMove.fire(shape, args);
        }
    }
});

В результате выполнения примера при перемещении указателя мыши над областью слоя данных с идентификатором «RU-KYA» будет выводиться её наименование:


Выбранная область слоя карты: Красноярский край


См. также:


[MapShape](MapShape.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
