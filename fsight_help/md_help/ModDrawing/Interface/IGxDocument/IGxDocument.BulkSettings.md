# IGxDocument.BulkSettings

IGxDocument.BulkSettings
-


# IGxDocument.BulkSettings


## Синтаксис


BulkSettings: [IGxBulkSettings](../IGxBulkSettings/IGxBulkSettings.htm);


## Описание


Свойство BulkSettings возвращает
 параметры пакетного выполнения операции.


## Комментарии


Свойство актуально, если объект, приведенный к интерфейсу IGxDocument
 поддерживает выполнение пакетной печати/экспорта. Если объект не поддерживает
 пакетные операции, то свойство BulkSettings
 вернет значение Null. В зависимости
 от типа объекта, для которого настраиваются параметры, значение данного
 свойства может быть приведено к следующим типам:


	- [IEaxBulkSettings](KeExpress.chm::/Interface/IEaxBulkSettings/IEaxBulkSettings.htm).
	 Параметры пакетных операций для экспресс-отчетов.


	- [IPrxBulkSelection](KeReport.chm::/Interface/IPrxBulkSelection/IPrxBulkSelection.htm).
	 Параметры пакетных операций для регламентных отчетов.


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчёта
 с идентификатором EXPRESS_REPORT. Отчёт содержит несколько листов, источники
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


После выполнения примера будет осуществлена пакетная печать экспресс-отчёта.
 Варианты отчётов будут сформированы по всем элементам первого фиксированного
 измерения.


См. также:


[IGxDocument](IGxDocument.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
