# DataSourceParamsPanel.DestsSectionVisible

DataSourceParamsPanel.DestsSectionVisible
-


**


# DataSourceParamsPanel.DestsSectionVisible


## Синтаксис


DestsSectionVisible: boolean


## Описание


Свойство DestsSectionVisible** задаёт видимость вкладки «Параметры источников данных» на панели свойств экспресс-отчета.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [EaxPropertyBar](../../../Components/Express/EaxPropertyBar/EaxPropertyBar.htm) с наименованием «eaxPropBar» (см. «[Пример совместного размещения EaxPropertyBar и EaxGrid](../../../Components/Express/EaxGrid/EaxGrid_Example.htm)»). Далее получим объект класса DataSourceParamsPanel, установим источник данных для панели, отобразим её и обновим:


// Получим панель параметров источника данных
var dataSourceParamsPanel = eaxPropBar.getDataSourceParamsPanel();
// Установим источник данных
dataSourceParamsPanel.setSource(eaxAnalyzer);
// Покажем вкладку "Параметры источников данных"
PP.Object.defineProps(PP.Exp.Ui.DataSourceParamsPanel, ["DestsSectionVisible"], true);
// Обновим панель свойств
eaxPropBar.refreshAll();

В результате выполнения примера будет отображена панель для настройки параметров источника данных с загруженными в неё данными.


См. также:


[DataSourceParamsPanel](DataSourceParamsPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
