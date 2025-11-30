# ReportBox.OnEditorTextChanged

ReportBox.OnEditorTextChanged
-


# ReportBox.OnEditorTextChanged


## Синтаксис


OnEditorTextChanged(Sender: Object; Args: [IReportEditorEventArgs](../../Interface/IReportEditorEventArgs/IReportEditorEventArgs.htm));


## Параметры


Sender. Параметр, возвращающий
 компонент, сгенерировавший событие;


Args. Параметр, позволяющий
 определить параметры события.


## Описание


Событие OnEditorTextChanged
 наступает во время визуального редактирования данных в ячейке таблицы.


## Комментарии


Данное событие наступает перед событием [OnBeforeCellChange](ReportBox.OnBeforeCellChange.htm)
 и может использоваться для анализа вводимых данных.


Примечание.
 По умолчанию данное событие не отслеживается для таблицы листа. Для включения
 данного события в список отслеживаемых используйте свойство [EventMask](TabSheet.chm::/Interface/ITabSheet/ITabSheet.EventMask.htm).


См. также:


[ReportBox](ReportBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
