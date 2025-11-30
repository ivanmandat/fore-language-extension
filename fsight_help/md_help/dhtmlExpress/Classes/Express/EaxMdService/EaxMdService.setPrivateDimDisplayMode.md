# EaxMdService.setPrivateDimDisplayMode

EaxMdService.setPrivateDimDisplayMode
-


**


# EaxMdService.setPrivateDimDisplayMode


## Синтаксис


setPrivateDimDisplayMode(report: PP.Exp.[EaxDocument](../EaxDocument/EaxDocument.htm),
 *metadata*: Object, callback: PP.Delegate);


## Параметры


*report.* Документ экспресс-отчёта;


*metadata.* Настройки
 частных измерений;


*callback.* Возвратная
 функция.


## Описание


Метод setPrivateDimDisplayMode**
 отображает частные измерения в виде одного составного измерения в экспресс-отчете
 с несколькими источниками.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Для экспресс-отчета должны быть
 заданы как минимум два источника данных.


Отобразим частные измерения экспресс-отчета с несколькими источниками
 в виде одного составного измерения:


// Получим сервис для работы с экспресс-отчетом
var eaxMdService = expressBox.getService();
// Получим документ экспресс-отчета
var eaxAnalyzer = expressBox.getSource();
// Получим панель частных измерений
var items = expressBox.getPropertyBarView().getDimBarMasterView().getItems();
var dimBarPrivateMP = null;
for (var i in items) {
    if (items[i].getTypeName() == "EaxDimBarPrivateMP") {
        dimBarPrivateMP = items[i];
    }
};
if (dimBarPrivateMP != null) {
    // Определим настройки частных измерений
    var metadata = {
        changeSelection: {
            elRelative: "All",
            elSelectOp: "Set",
            setCompound: {
                displayAsCompound: true // Измерения будем отображать в виде составного измерения
            }
        },
        compound: {
            displayAsCompound: true,
            isCompound: false
        },
        id: "FACTS_COMPOUND",
        k: dimBarPrivateMP.getData(),
        n: "Факты"
    };
    // Определим аргументы для возвратной функции
    var args = new PP.Mb.Ui.PropertyChangedEventArgs({
        PropertyName: PP.Exp.Ui.ControlType.PrivateDimsDisplayMode,
        Metadata: metadata,
        TypeUpdateData: PP.Exp.Ui.ViewTypeUpdate.PropertyBar
    });
    // Определим возвратную функцию
    var onPanelChanged = function (n, t) {
        var chartView = expressBox.getDataView().getChartView();
        t ? (chartView.DataChanged.fire(chartView, t.Args), t.Args.fireCallback(n, t)) : chartView.DataChanged.fire(chartView, t);
        // Обновим панель настроек экспресс-отчета
        expressBox.getPropertyBarView().refreshAll()
    };
    // Инициируем запрос частных измерений в виде составных измерений
    eaxMbService.setPrivateDimDisplayMode(eaxAnalyzer, metadata, PP.Delegate(this.onPanelChanged, eaxMdService, args));
};

В результате выполнения примера частные измерения экспресс-отчёта с
 несколькими источниками будут отображаться в виде составного измерения.


См. также:


[EaxMdService](EaxMdService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
