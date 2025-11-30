# Конструктор PivotFilterTransformDialog

Конструктор PivotFilterTransformDialog
-


# Конструктор PivotFilterTransformDialog


## Синтаксис


PP.Exp.Ui.PivotFilterTransformDialog(settings);


## Параметры


settings. JSON-объект
 со значениями свойств компонента.


## Описание


PivotFilterTransformDialog создает экземпляр компонента PivotFilterTransformDialog.


## Пример


Поскольку задание фильтрации по формуле доступно только в настольном
 приложении, для вызова диалога фильтрации потребуется выполнить следующую
 функцию:


function openTransformDialog() {
    if (!PP.Ufe) {
        PP.resourceManager.addToResourceList(["Ufe"], true);
        PP.scriptManager.loadStyles([PP.CSSPath + "PP.Ufe.css"]);
        PP.ScriptManager.loadScripts([PP.ScriptPath + "PP.Ufe.js"], new PP.Delegate(window.openTransformDialog, this));
    return false;
}
    var source = PP.App.getModuleObject().getReportBox().getSource();
    var dim = source.getDims()[0];
    if (dim) {
        var dimKey = dim.getKey();
        var dimElem = dim.getSelectionInfo().firstSelected;
            if (dimElem) {
                window.transformDialog = new PP.Exp.Ui.PivotFilterTransformDialog({
                EaxSource: source,
                Metabase: source.getMetabase(),
                EaxDimKey: dimKey,
                CurDimElementData: dimElem
                });
        transformDialog.show();

}
    openTransformDialog();


После выполнения примера на странице будет открыто окно задания
 фильтрации по формуле.


См. также:


[PivotFilterTransformDialog](PivotFilterTransformDialog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
