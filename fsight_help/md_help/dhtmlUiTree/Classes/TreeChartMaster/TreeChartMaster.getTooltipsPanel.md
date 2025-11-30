# TreeChartMaster.getTooltipsPanel

TreeChartMaster.getTooltipsPanel
-


**


# TreeChartMaster.getTooltipsPanel


## Синтаксис


getTooltipsPanel(): [PP.Ui.TooltipsPanel](../TreeTooltipsPanel/TreeTooltipsPanel.htm);


## Описание


Метод getTooltipsPanel**
 возвращает панель управления подсказками.


## Комментарии


Метод возвращает объект типа [PP.Ui.TooltipsPanel](../TreeTooltipsPanel/TreeTooltipsPanel.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox_Example.htm)») и должен быть выделен
 визуализатор плоское дерево.


// Получим мастер боковой панели
bar = expressBox.getPropertyBarView();
master = bar.getTreeMapMaster();
// Получим панель подсказок
tooltipP = master.getTooltipsPanel();
// -> PP.Ui.TreeTooltipsPanel {_Master: PP.Ui.TreeMapMaster, _HasBranches: true, _tooltipsMaskBranchesIsChanged: false, _ImagePath: "../build/img/", _ResourceKey: "visMasterTooltips"…}
В результате выполнения примера было получено представление объекта
 панели подсказок боковой панели.


См. также:


[TreeChartMaster](TreeChartMaster.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
