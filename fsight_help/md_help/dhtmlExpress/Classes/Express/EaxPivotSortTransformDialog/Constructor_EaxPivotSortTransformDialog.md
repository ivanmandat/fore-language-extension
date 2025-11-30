# Конструктор EaxPivotSortTransformDialog

Конструктор EaxPivotSortTransformDialog
-


# Конструктор EaxPivotSortTransformDialog


## Синтаксис


PP.Exp.Ui.EaxPivotSortTransformDialog(settings);


## Параметры


*Settings.* JSON-объект со значениями [свойств
 класса](EaxPivotSortTransformDialog.htm).


## Описание


Конструктор EaxPivotSortTransformDialog
 создает экземпляр класса EaxPivotSortTransformDialog.


## Комментарий


Класс EaxPivotSortTransformDialog реализует
 диалог сортировки таблицы экспресс-отчета по формуле.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см.
 «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). В консоли зададим функцию вызова
 окна для редактирования [сортировки](UiAnalyticalArea.chm::/Working_with_table_data/Sorting_table_data.htm)
 таблицы «По формуле»:


function openSortTransformDialog() {
    if (!PP.Ufe) {
        PP.resourceManager.addToResourceList(["Ufe"], true);
        PP.scriptManager.loadStyles([PP.CSSPath + "PP.Ufe.css"]);
        PP.ScriptManager.loadScripts([PP.ScriptPath + "PP.Ufe.js"], new PP.Delegate(window.openTransformDialog, this));
    return false;
    }
    // Cоздадим повторное соединение с репозиторием
    var metabase = new PP.Mb.Metabase({
        PPServiceUrl: "PPService.axd",
        Id: "Repository",
        UserCreds: {
            UserName: "user",
            Password: "password"
        }
    });
    // Получим первое измерение экспресс-отчета
    var dim = eaxAnalyzer.getDims()[0];
    if (dim) {
        var dimKey = dim.getKey();
        var dimElem = dim.getSelectionInfo().firstSelected;
        if (dimElem) {
            // Вызовем окно для сортировки элементов таблицы «по формуле»
            var sortTransformDialog = new PP.Exp.Ui.EaxPivotSortTransformDialog({
                EaxSource: eaxAnalyzer,
                Metabase: metabase,
                EaxDimKey: dimKey,
                CurDimElementData: dimElem
            });
            // Отобразим окно
            sortTransformDialog.show();
        }
    }
};
openSortTransformDialog();
В результате выполнения примера отобразится окно «[Редактор выражения](UiNav.chm::/GUI/ExpressionEditor.htm)».


См. также:


[EaxPivotSortTransformDialog](EaxPivotSortTransformDialog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
