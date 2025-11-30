# ITabRange.Delete

ITabRange.Delete
-


# ITabRange.Delete


## Синтаксис


Delete(Value: [TabDeleteShiftDirection](../../Enums/TabDeleteShiftDirection.htm));


## Параметры


Value.
 Способ удаления диапазона ячеек.


## Описание


Метод Delete удаляет заданный
 диапазон ячеек.


## Комментарии


Для вставки нужного диапазона ячеек используйте метод [ITabRange.Insert](ITabRange.Insert.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие регламентного
 отчета с идентификатором «REGULAR_REPORT_ITABSHEET_INSERT_DELETE». Регламентный
 отчет должен содержать заполненный любыми значениями диапазон ячеек «A0:I12».


Для выполнения примера подключите системные сборки: Metabase, Report,
 Tab.


	Sub UserProc;

	Var

	    mb: IMetaBase;

	    regrep: IPrxReport;

	    sheet: IPrxSheet;

	    table: IPrxTable;

	    range: ITabSheet;

	    diap1: ITabRange;

	    diap2: ITabRange;

	Begin

	    // Открываем регламентный отчет для редактирования

	    mb := MetabaseClass.Active;

	    regrep := mb.ItemById("REGULAR_REPORT_ITABSHEET_INSERT_DELETE").Edit As IPrxReport;

	    // Получаем диапазон ячеек (A11:I11)

	    sheet := regrep.Activesheet;

	    table := sheet As IPrxTable;

	    range := table.TabSheet;

	    diap1 := range.ParseRange("A11:I11");

	    // Удаляем диапазон ячеек со сдвигом ячеек вверх

	    diap1.Delete(TabDeleteShiftDirection.ShiftUp);

	    // Вставляем диапазон ячеек в заданный диапазон со сдвигом ячеек вправо

	    diap2 := range.ParseRange("A4:B4");

	    diap2.Insert(TabInsertShiftDirection.ShiftToRight);

	    // Сохраняем изменения

	    (regrep As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера диапазон ячеек «A12:A11» сместится на одну
 строчку вверх и диапазон «A5:I5» сместится на две ячейки вправо.


См. также:


[ITabRange](ITabRange.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
