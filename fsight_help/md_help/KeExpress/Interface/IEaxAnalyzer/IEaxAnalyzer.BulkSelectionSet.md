# IEaxAnalyzer.BulkSelectionSet

IEaxAnalyzer.BulkSelectionSet
-


# IEaxAnalyzer.BulkSelectionSet


## Синтаксис


BulkSelectionSet: [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm);


## Описание


Свойство BulkSelectionSet возвращает
 отметку фиксированных измерений, которая используется для пакетных операций.


## Комментарии


Коллекция BulkSelectionSet состоит
 из всех фиксированных измерений, по которым возможен экспорт/печать. Для
 экспресс-отчета, состоящего из одного листа, это все фиксированные измерения.
 Для экспресс-отчета, состоящего из нескольких листов, это общие фиксированные
 измерения. Отметка по умолчанию будет состоять из всех отмеченных элементов
 по измерениям.


Отметка, полученная в свойстве BulkSelectionSet,
 при необходимости может быть модифицирована и передана в качестве значения
 свойства [IEaxBulkSettings.SelectionSet](../IEaxBulkSettings/IEaxBulkSettings.SelectionSet.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчета
 с идентификатором EXPRESS_REPORT. Отчет содержит несколько листов, источники
 которых имеют минимум одно общее фиксированное измерение.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    DocPrint: IGxDocumentPrinter;

	    EaxRep: IEaxAnalyzer;

	    GxDoc: IGxDocument;

	    BulkSettings: IEaxBulkSettings;

	    SelSet: IDimSelectionSet;

	Begin

	    MB := MetabaseClass.Active;

	    //Принтер для печати

	    DocPrint := GxPrinters.DefaultPrinter As IGxDocumentPrinter;

	    //Экспресс-отчет, для которого настраивается пакетная печать

	    EaxRep := MB.ItemById("EXPRESS_REPORT").Bind As IEaxAnalyzer;

	    GxDoc := EaxRep.Sheets As IGxDocument;

	    //Параметры пакетной печати

	    BulkSettings := GxDoc.BulkSettings As IEaxBulkSettings;

	    BulkSettings.Enabled := True;

	    SelSet := EaxRep.BulkSelectionSet;

	    SelSet.Item(0).SelectAll;

	    BulkSettings.SelectionSet := SelSet;

	    //Печать

	    GxDoc.Print(DocPrint, -1, 0, "");

	End Sub UserProc;


После выполнения примера будет осуществлена пакетная печать экспресс-отчета.
 Варианты отчетов будут сформированы по всем элементам первого фиксированного
 измерения.


См. также:


[IEaxAnalyzer](IEaxAnalyzer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
