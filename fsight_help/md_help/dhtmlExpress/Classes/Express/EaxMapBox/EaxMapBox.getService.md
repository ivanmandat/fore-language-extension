# EaxMapBox.getService

EaxMapBox.getService
-


**


# EaxMapBox.getService


## Синтаксис


getService();


## Описание


Метод getService** возвращает
 объект сервиса для работы с экспресс-отчетом.


## Комментарии


Метод возвращает объект типа PP.Exp.[EaxMdService](../EaxMdService/EaxMdService.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [EaxMapBox](../../../Components/Express/EaxMapBox/EaxMapBox.htm)
 с наименованием «map» (см. «[Пример
 создания компонента EaxMapBox](../../../Components/Express/EaxMapBox/EaxMapBox_Example.htm)») и с установленной картой Russia.tbs.
 Перейдем на нижний уровень иерархии в карте экспресс-отчета:


var service = map.getService();
var source = map.getSource();
var shapeId = "RU-KYA"; // Красноярский край
if (source.canMapDrillUp()) {
    // Определим обратную функцию
    var onDrillChanged = function () {
        map.DataChanged.fire(this, new PP.Mb.Ui.PropertyChangedEventArgs({
            TypeUpdateData: [PP.Exp.Ui.ViewTypeUpdate.DimBarSelection, PP.Exp.Ui.ViewTypeUpdate.Title],
            PropertyName: PP.Exp.Ui.ControlType.DrillDown
        }));
        map.refreshAll();
    };
    map.DrillUp.add(function (sender, args) {
        console.log("Переход на нижний уровень иерархии в карте.");
    });
    // Перейдем на нижний уровень иерархии в карте экспресс-отчета
    service.setMapDrillDown(source, shapeId, PP.Mb.DrillMethod.Down, PP.Delegate(onDrillChanged, this));
} else {
    console.log("Переход на нижний уровень иерархии в карте невозможен.");
}

В результате выполнения примера в консоли браузера будет выведено сообщение
 о том, что переход на нижний уровень иерархии в карте невозможен.


См. также:


[EaxMapBox](EaxMapBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
