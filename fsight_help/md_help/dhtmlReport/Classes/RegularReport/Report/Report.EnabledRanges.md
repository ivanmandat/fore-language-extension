# Report.EnabledRanges

Report.EnabledRanges
-


# Report.EnabledRanges


## Синтаксис


EnabledRanges: Array of Object;


## Описание


Свойство EnabledRanges определяет
 диапазоны, доступные для редактирования.


## Комментарии


Значение свойства может быть установлено из JSON или при помощи метода
 setEnabledRanges, а возвращено
 при помощи метода getEnabledRanges.


Для задания возможности редактирования всех ячеек используйте свойство
 метаданных previewEnableEdit,
 например:


// Получим метаданные
meta = prxReport.getMetadata();
// Внесем в метаданные изменения
meta.options.previewEnableEdit = true;
// Зададим повторно метаданные
prxReport.setMetadata(meta);

## Пример


Для выполнения примера предполагается наличие на странице компонента
 [ReportBox](../../../Components/RegularReport/ReportBox/ReportBox.htm)
 с наименованием «reportBox» (см. «[Пример
 размещения компонента ReportBox](../../../Components/RegularReport/ReportBox/ReportBox_Example.htm)»). Получим диапазоны, доступные для
 редактирования:


// Получим отчет
report = reportBox.getSource();
// Получим редактируемые диапазоны
report.getEnabledRanges();
// -> [ObjectBottomRight: Objectx: 5y: 7__proto__: ObjectTopLeft: Objectx: 3y: 6__proto__: ObjectdsoKey: 2sliceKey: 2__proto__: Object, Object, Object]

В результате выполнения примера были получены диапазоны, доступные для
 редактирования.


См. также:


[Report](Report.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
