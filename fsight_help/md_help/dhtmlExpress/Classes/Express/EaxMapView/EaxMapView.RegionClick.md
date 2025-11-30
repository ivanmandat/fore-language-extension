# EaxMapView.RegionClick

EaxMapView.RegionClick
-


**


# EaxMapView.RegionClick


## Синтаксис


RegionClick: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии. Доступные аргументы: ShapeName - название фигуры на карте, ShapeId - идентификатор фигуры, Position - позиция фигуры, задаваемая с помощью свойств- координат X и Y, IsDHTML - признак использования DHTML-карты.


## Описание


Событие RegionClick** наступает после выбора региона на карте экспресс-отчета.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. страницу «[Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)») и с загруженной картой в рабочей области. Получим информацию о выбранном регионе на карте экспресс-отчета:


// Получаем представление карты экспресс-отчета
var mapView = expressBox.getDataView().getMapView();
// Обработаем событие RegionClick
mapView.RegionClick.add(function (sender, args) {
    console.log("Название фигуры: " + args.ShapeName);
    console.log("Идентификатор фигуры: " + args.ShapeId);
    console.log("Расположение фигуры: (" + args.Position.X + ", " + args.Position.Y + ")");
});

В результате выполнения примера в консоли браузера будут выведены название, идентификатор и расположение фигуры, соответствующей выбранному региону:


Название фигуры: Krasnoyarsk krai

Идентификатор фигуры: RU-KYA

Расположение фигуры: (791, 410)


См. также:


[EaxMapView](EaxMapView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
