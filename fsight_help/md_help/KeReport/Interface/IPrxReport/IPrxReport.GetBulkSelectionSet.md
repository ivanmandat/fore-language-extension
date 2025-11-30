# IPrxReport.GetBulkSelectionSet

IPrxReport.GetBulkSelectionSet
-


# IPrxReport.GetBulkSelectionSet


## Синтаксис


GetBulkSelectionSet(Range: String): [IPrxBulkSelectionSet](../IPrxBulkSelectionSet/IPrxBulkSelectionSet.htm);


## Параметры


Range. Листы, для которых необходимо
 сформировать отметку для пакетных операций (Список листов может быть указаны
 в одном из следующих форматов: "1", "1,3", "1-3").


## Описание


Метод GetBulkSelectionSet возвращает
 допустимую отметку, используемую при выполнении пакетных операций, для
 указанного диапазона листов.


## Комментарии


Для листов, указанных в параметре Range,
 должны быть созданы общие элементы управления, настроенные на работу с
 каким-либо фиксированным измерением среза.


## Пример


Для выполнения примера предполагается наличие в репозитории регламентного
 отчета с идентификатором «Report_1». Для первых двух листов отчета создан
 общий элемент управления, который связан с измерением. Измерение расположено
 в фиксированной области среза.


			Sub UserProc;

Var

    MB: IMetabase;

    DocPrint: IGxDocumentPrinter;

    RegRep: IPrxReport;

    GxDoc: IGxDocument;

    BulkSettings: IPrxBulkSettings;

    SelSet: IPrxBulkSelectionSet;

Begin

    MB := MetabaseClass.Active;

    //Принтер для печати

    DocPrint := GxPrinters.DefaultPrinter As IGxDocumentPrinter;

    //Регламентный отчет, для которого настраивается пакетная печать

    RegRep := MB.ItemById("Report_1").Bind As IPrxReport;

    GxDoc := RegRep As IGxDocument;

    //Параметры пакетной печати

    BulkSettings := GxDoc.BulkSettings As IPrxBulkSettings;

    BulkSettings.Enabled := True;

    SelSet := RegRep.GetBulkSelectionSet("1,2");

    SelSet.Item(0).Selection.SelectAll;

    BulkSettings.SelectionSet := SelSet;

    GxDoc.Print(DocPrint, -1, 0, "");

End Sub UserProc;


После выполнения примера будет осуществлена пакетная печать двух листов
 регламентного отчета. Варианты отчетов будут сформированы по всем элементам
 фиксированного измерения.


См. также:


[IPrxReport](IPrxReport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
