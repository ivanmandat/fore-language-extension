# EaxDataBox.getService

EaxDataBox.getService
-


# EaxDataBox.getService


## Синтаксис


getService();


## Описание


Метод getService возвращает сервис для работы с экспресс-отчетами.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента EaxDataBox с наименованием «eaxDataBox» (см. «[Пример создания компонента EaxDataBox](../../../Components/Express/EaxDataBox/EaxDataBox_Example.htm)»). Добавим новый лист с названием «Indicators»:


// Получаем сервис для работы с экспресс-отчётами
var service = eaxDataBox.getService();
// Получаем данные
var doc = eaxDataBox.getSource();
// Задаем обработчик события добавления нового листа
onSheetAdded = function (sender, args) {
    eaxDataBox.DataChanged.fire(this, new PP.Mb.Ui.PropertyChangedEventArgs({
        PropertyName: PP.Exp.Ui.ControlType.DataView,
        Metadata: null,
        TypeUpdateData: [PP.Exp.Ui.ViewTypeUpdate.Ribbon, PP.Exp.Ui.ViewTypeUpdate.PropertyBar,
            PP.Exp.Ui.ViewTypeUpdate.Title]
    }));
};
// Добавляем новый лист в документ
service.addSheet(doc, "Indicators", true, PP.Delegate(onSheetAdded, doc));

// Затем обновим экспресс-отчет
eaxDataBox.refreshAll();

После выполнения примера в документ будет добавлен новый лист «Indicators»:


![](../../../ExpressBox.getService.png)


См. также:


[EaxDataBox](EaxDataBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
