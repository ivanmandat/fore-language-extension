# EaxMdService.renameSheet

EaxMdService.renameSheet
-


**


# EaxMdService.renameSheet


## Синтаксис


renameSheet(doc, sheetKey, sheetName, callback);


## Параметры


*doc.* Документ экспресс-отчета, который нужно переименовать;


*sheetKey.* Ключ листа документа;


*sheetName.* Новое название документа;


*callback.* Возвратная функция.


## Описание


Метод renameSheet** переименовывает лист документа экспресс-отчета.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. «[Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Переименуем текущий лист документ экспресс-отчета:


// Получим сервис для работы с экспресс-отчетом
var eaxMdService = expressBox.getService();
// Получим документ экспресс-отчета
var eaxDocument = expressBox.getSource();
// Получим ключ активного листа экспресс-отчета
var sheetKey = eaxDocument.getActiveSheetKey();
var sheetName = "Новое название"; // Определим новое наименование листа
var onSheetRenamed = function (n, t) {
    expressBox.getDataView().getSource().getSheets()[t.Args.SheetKey].setName(t.Args.SheetName),
    expressBox.getDataView().refresh(),
    expressBox.getDataView().DocDataChanged.fire(this, new PP.Mb.Ui.PropertyChangedEventArgs({
        PropertyName: PP.Exp.Ui.ControlType.DataView,
        Metadata: null,
        TypeUpdateData: [PP.Exp.Ui.ViewTypeUpdate.Ribbon, PP.Exp.Ui.ViewTypeUpdate.PropertyBar, PP.Exp.Ui.ViewTypeUpdate.Title]
    }))
};
eaxMdService.renameSheet(eaxDocument, sheetKey, sheetName, PP.Delegate(onSheetRenamed, this, {
    SheetKey: sheetKey,
    SheetName: sheetName
}));
// Обновим экспресс-отчет
expressBox.refreshAll();

В результате выполнения примера был переименован текущий лист документа экспресс-отчета, о чем свидетельствует вывод в консоли браузера:


Текущее наименование активного листа: Динамика показателей по региону

Новое наименование активного листа: Новое название


См. также:


[EaxMdService](EaxMdService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
