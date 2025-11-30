# ITabPageContinuousRanges.Assign

ITabPageContinuousRanges.Assign
-


# ITabPageContinuousRanges.Assign


## Синтаксис


Assign(Value: [ITabPageContinuousRanges](ITabPageContinuousRanges.htm));


## Параметры


Value. Содержит параметры
 неразрывных диапазонов, устанавливаемых для текущей страницы..


## Описание


Метод Assign устанавливает для
 текущей таблицы неразрывные диапазоны, передаваемые в качестве входного
 параметра.


## Комментарии


В качестве входных параметров передаётся значение Value.


## Пример


Для выполнения примера понадобится регламентный отчёт с идентификатором
 «Report», содержащий две страницы. На границах страниц присутствуют какие-либо
 данные.


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

    TabPS.ContinuousColumns.Add(50, 3);

    TabPS.ContinuousRows.Add(50, 3);

    Tab2 := (Report.Sheets.Item(1) As IPrxTable).TabSheet;

    TabPS2 := Tab2.PageSettings;

    TabPS2.ContinuousColumns.Assign(TabPS.ContinuousColumns);

    TabPS2.ContinuousRows.Assign(TabPS.ContinuousRows);

    (Report As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера, созданные для первой страницы неразрывные
 диапазоны будут перенесены на вторую. При экспорте или печати регламентного
 отчёта данные, ограниченные этим диапазоном, будут размещены на одной
 странице.


См. также:


[ITabPageContinuousRanges](ITabPageContinuousRanges.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
