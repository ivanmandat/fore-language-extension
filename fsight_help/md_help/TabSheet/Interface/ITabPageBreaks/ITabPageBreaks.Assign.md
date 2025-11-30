# ITabPageBreaks.Assign

ITabPageBreaks.Assign
-


# ITabPageBreaks.Assign


## Синтаксис


Assign(Value: [ITabPageBreaks](ITabPageBreaks.htm));


## Параметры


Value. Содержит параметры разрывов,
 устанавливаемых для текущей страницы.


## Описание


Метод Assign устанавливает для
 текущей таблицы разрывы, передаваемые в качестве входных параметров.


## Комментарии


В качестве входных параметров передаётся значение Value.


## Пример


Для выполнения примера понадобится регламентный отчёт с идентификатором
 «Report», содержащий две страницы.


			Sub UserProc;

Var

    MB: IMetaBase;

    Report: IPrxReport;

    Tab: ITabSheet;

    Tab2: ITabSheet;

    TabPS: ITabPageSettings;

    TabPS2: ITabPageSettings;

Begin

    MB := MetaBaseClass.Active;

    Report := MB.ItemById("Report").Edit As IPrxReport;

    Tab := (Report.Sheets.Item(0) As IPrxTable).TabSheet;

    TabPS := Tab.PageSettings;

    TabPS.ColumnsBreaks.Add(3);

    TabPS.RowsBreaks.Add(5);

    Tab2 := (Report.Sheets.Item(1) As IPrxTable).TabSheet;

    TabPS2 := Tab2.PageSettings;

    TabPS2.ColumnsBreaks.Assign(TabPS.ColumnsBreaks);

    TabPS2.RowsBreaks.Assign(TabPS.RowsBreaks);

    (Report As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера созданные для первой страницы разрывы будут
 перенесены на вторую.


См. также:


[ITabPageBreaks](ITabPageBreaks.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
