# EaxPropertyBar.getAnalysisPanel

EaxPropertyBar.getAnalysisPanel
-


**


# EaxPropertyBar.getAnalysisPanel


## Синтаксис


getAnalysisPanel();


## Описание


Метод getAnalysisPanel** возвращает [панель анализа](../AnalysisPanel/AnalysisPanel.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. «[Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Далее получим идентификаторы некоторых панелей и мастеров, входящих в состав боковой панели экспресс-отчёта:


function getId(eaxPropBar, groups) {
    var id = "";
    var panel = null;
    if (eaxPropBar && groups) {        groups = Array.isArray(groups) ? groups : [groups];
        for (var i = 0; i < groups.length; i++) {
            switch (groups[i]) {
                case PP.Exp.Ui.PropertyGroups.Table:
                    // Получим панель анализа
                    panel = eaxPropBar.getAnalysisPanel();
                    break;
                case PP.Exp.Ui.PropertyGroups.Chart:
                    // Получим мастер диаграммы
                    panel = eaxPropBar.getChartMaster();
                    break;
                case PP.Exp.Ui.PropertyGroups.Map:
                    // Получим мастер карты
                    panel = eaxPropBar.getMapMaster();
                    break;
                case PP.Exp.Ui.PropertyGroups.Title:
                    // Получим панель для настройки заголовка
                    panel = eaxPropBar.getTitlePanel();
                    break;
                case PP.Exp.Ui.PropertyGroups.Sheet:
                    // Получим панель итогов
                    panel = eaxPropBar.getTotalsPanel();
                    break;
                default:
                    panel = null;
            };
            if (panel != null) {
                // Получим идентификатор панели или мастера
                id = panel.getId();
                console.log("Идентификатор объекта " + panel.getTypeName() + ": " + panel.getId());
                panel = null;
            }
        }
    }
};
// Получим представление боковой панели экспресс-отчёта
var eaxPropBar = expressBox.getPropertyBarView();
// Получим идентификаторы мастеров и панелей, входящих в состав боковой панели экспресс-отчёта
getId(eaxPropBar, PP.Exp.Ui.PropertyGroups.Table);
getId(eaxPropBar, PP.Exp.Ui.PropertyGroups.Chart);
getId(eaxPropBar, PP.Exp.Ui.PropertyGroups.Map);
getId(eaxPropBar, PP.Exp.Ui.PropertyGroups.Title);
getId(eaxPropBar, PP.Exp.Ui.PropertyGroups.Sheet);

В результате выполнения примера в консоли браузера были выведены идентификаторы панелей анализа, заголовка, итогов, а также мастеров диаграммы, карты и выделенных элементов пузырьковой диаграммы:


Идентификатор объекта AnalysisPanel: 15352

Идентификатор объекта ChartMaster: 18102

Идентификатор объекта PP.Ui.MapMaster: 18315

Идентификатор объекта TitleStructurePanel: Title

Идентификатор объекта TotalsPanel: Totals


См. также:


[EaxPropertyBar](EaxPropertyBar.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
