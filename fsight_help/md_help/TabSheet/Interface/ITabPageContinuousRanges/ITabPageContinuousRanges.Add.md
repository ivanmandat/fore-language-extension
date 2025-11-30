# ITabPageContinuousRanges.Add

ITabPageContinuousRanges.Add
-


# ITabPageContinuousRanges.Add


## Синтаксис


Add(Position: Integer; Lenght: Integer): Boolean;


## Параметры


Position. Номер стартовой ячейки
 для неразрывного диапазона.


Lenght. Количество ячеек
 в неразрывном диапазоне.


## Описание


Метод Add создаёт в таблице
 новый неразрывный диапазон.


## Комментарии


В зависимости от того, с какой коллекцией неразрывных диапазонов ведётся
 работа ([диапазонов
 по столбцам](../ITabPageSettings/ITabPageSettings.ContinuousColumns.htm) или [диапазонов
 по строкам](../ITabPageSettings/ITabPageSettings.ContinuousRows.htm)), в параметре Position
 указывается индекс столбца или строки.


## Пример


Для выполнения примера понадобится регламентный отчёт с идентификатором
 «Report». На границе листов отчёта присутствуют какие-либо данные.


			Sub UserProc;

Var

    MB: IMetaBase;

    Report: IPrxReport;

    Tab: ITabSheet;

    TabPS: ITabPageSettings;

Begin

    MB := MetaBaseClass.Active;

    Report := MB.ItemById("Report").Edit As IPrxReport;

    Tab := (Report.Sheets.Item(0) As IPrxTable).TabSheet;

    TabPS := Tab.PageSettings;

    TabPS.ContinuousColumns.Add(50, 3);

    TabPS.ContinuousRows.Add(50, 3);

    (Report As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера при экспорте или печати регламентного отчёта
 данные, ограниченные этим диапазоном, будут размещены на одной странице.


См. также:


[ITabPageContinuousRanges](ITabPageContinuousRanges.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
