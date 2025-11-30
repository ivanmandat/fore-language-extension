# DataSourcesPanel.OpenMode

DataSourcesPanel.OpenMode
-


**


# DataSourcesPanel.OpenMode


## Синтаксис


OpenMode: PP.Exp.[EaxDataSourceOpenMode](../../../Enums/EaxDataSourceOpenMode.htm)


## Описание


Свойство OpenMode** определяет режим извлечения куба - с сохранёным представлением по умолчанию или только куб данных.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [EaxPropertyBar](../../../Components/Express/EaxPropertyBar/EaxPropertyBar.htm) с наименованием «eaxPropBar» (см. «[Пример совместного размещения EaxPropertyBar и EaxGrid](../../../Components/Express/EaxGrid/EaxGrid_Example.htm)»). Далее получим объект класса DataSourcesPanel, зададим режим извлечения куба, установим источник данных для соответствующей вкладки, покажем, обновим её и возвратим:


// Получим вкладку "Источники данных"
var dataSourceParamsPanel = eaxPropBar.getDataSourcesPanel();
// Извлекаем только куб данных
PP.Object.defineProps(PP.Exp.Ui.DataSourceParamsPanel, ["OpenMode"], PP.Exp.EaxDataSourceOpenMode.None);
// Задаём источник данных
PP.Object.defineProps(PP.Exp.Ui.DataSourceParamsPanel, ["Source"], eaxPropBar.getSource());
// Покажем вкладку
dataSourceParamsPanel.show();
// Раскроем вкладку
dataSourceParamsPanel.expand(true);
// Возвратим массив ключей объектов репозитория,
// выбранных в качестве источника данных для экспресс-отчета
console.log(dataSourceParamsPanel.getCurrentState());

В результате выполнения примера будет изменён режим извлечения куба и установлен источник данных для панели «Источники данных».


См. также:


[DataSourcesPanel](DataSourcesPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
