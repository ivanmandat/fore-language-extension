# CustomAnalysisWizard.RequestMetadata

CustomAnalysisWizard.RequestMetadata
-


**


# CustomAnalysisWizard.RequestMetadata


## Синтаксис


RequestMetadata(sender: Object, args: [PP.Mb.Ui.PropertyChangedEventArgs](dhtmlMetabase.chm::/Classes/Metabase/PropertyChangedEventArgs/PropertyChangedEventArgs.htm));


## Параметры


sender. Источник события;


args. Информация о событии. Параметр содержит объект типа [PP.Mb.Ui.PropertyChangedEventArgs](dhtmlMetabase.chm::/Classes/Metabase/PropertyChangedEventArgs/PropertyChangedEventArgs.htm), у которого свойство Metadata содержит следующие поля: RubKey - ключ эталонной базы данных временных рядов, Target - наименование [класса, реализующего редактор выражения](../ExpressionEditorDialog/ExpressionEditorDialog.htm).


## Описание


Событие RequestMetadata** генерируется при отсутствии метаданных в источнике мастера для валидации данных путём пользовательского анализа временных рядов.


## Пример


Пример использования события приведён на странице описания метода [CustomAnalysisWizard.getExpressionEditorDialog](CustomAnalysisWizard.getExpressionEditorDialog.htm).


См. также:


[CustomAnalysisWizard](CustomAnalysisWizard.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
