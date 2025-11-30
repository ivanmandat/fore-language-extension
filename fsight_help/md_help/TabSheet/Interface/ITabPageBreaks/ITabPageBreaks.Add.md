# ITabPageBreaks.Add

ITabPageBreaks.Add
-


# ITabPageBreaks.Add


## Синтаксис


Add(ItemBreak: Integer);


## Параметры


ItemBreak. Индекс разрыва
 в таблице.


## Описание


Метод Add устанавливает новый
 разрыв в таблице.


## Комментарии


После создания разрыва после столбца и перед строкой, по которым он
 создан, будет нарисована штрих-пунктирная линия.


## Пример


Для выполнения примера понадобится регламентный отчёт с идентификатором
 «Report».


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

    TabPS.ColumnsBreaks.Add(3);

    TabPS.RowsBreaks.Add(5);

    (Report As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера на первой странице отчёта будут созданы разрывы
 по столбцам и по строкам.


См. также:


[ITabPageBreaks](ITabPageBreaks.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
