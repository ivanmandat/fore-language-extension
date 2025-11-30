# IExAnalyzerExporter.EmfType

IExAnalyzerExporter.EmfType
-


# IExAnalyzerExporter.EmfType


## Синтаксис


EmfType: [GxEmfType](ModDrawing.chm::/enums/GxEmfType.htm);


## Описание


Свойство EmfType определяет
 тип создаваемого при экспорте метафайла.


## Комментарии


Тип создаваемого метафайла по умолчанию - [GxEmfType.EmfPlusDual](ModDrawing.chm::/enums/GxEmfType.htm).


## Пример


Для выполнения примера предполагается наличие экспресс-отчета с идентификатором
 EXPRESS.


Добавьте ссылки на системные сборки: Drawing, Express, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Express: IEaxAnalyzer;

	    Sheet: IEaxSheet;

	    Exp: IExAnalyzerExporter;

	Begin

	    MB := MetabaseClass.Active;

	    Express := MB.ItemById("EXPRESS").Bind As IEaxAnalyzer;

	    // Получим страницу для экспорта

	    Sheet := Express.ActiveSheet;

	    Exp := New ExAnalyzerExporter.Create;

	    // Настроим и произведем экспорт в метафайл

	    Exp.Sheet := Sheet;

	    Exp.EmfType := GxEmfType.EmfOnly;

	    Exp.ExportToFile("C:\img.emf","emf");

	End Sub UserProc;


В результате выполнения примера будет произведен экспорт отчета в метафайл
 в формате EMF.


См. также:


[IExAnalyzerExporter](IExAnalyzerExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
