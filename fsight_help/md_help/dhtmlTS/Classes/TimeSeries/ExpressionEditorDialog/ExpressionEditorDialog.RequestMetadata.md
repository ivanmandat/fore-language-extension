# ExpressionEditorDialog.RequestMetadata

ExpressionEditorDialog.RequestMetadata
-


**


# ExpressionEditorDialog.RequestMetadata


## Синтаксис


RequestMetadata(sender: Object, args: [PP.Mb.Ui.PropertyChangedEventArgs](dhtmlMetabase.chm::/Classes/Metabase/PropertyChangedEventArgs/PropertyChangedEventArgs.htm));


## Параметры


sender. Источник события;


args. Информация о событии. Параметр содержит объект типа [PP.Mb.Ui.PropertyChangedEventArgs](dhtmlMetabase.chm::/Classes/Metabase/PropertyChangedEventArgs/PropertyChangedEventArgs.htm), у которого свойство Metadata содержит следующие поля: RubKey - ключ эталонной базы данных временных рядов, Target - наименование [класса, реализующего редактор выражения](ExpressionEditorDialog.htm).


## Описание


Событие RequestMetadata** генерируется при отсутствии метаданных в источнике редактора выражения рабочей книги.


## Пример


Пример использования события приведён на странице «[Пример создания компонента ExpressionEditorDialog](../../../Components/TimeSeries/ExpressionEditorDialog/ExpressionEditorDialog_Example.htm)».


См. также:


[ExpressionEditorDialog](ExpressionEditorDialog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
