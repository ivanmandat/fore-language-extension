# IEaxCellStyle.Reset

IEaxCellStyle.Reset
-


# IEaxCellStyle.Reset


## Синтаксис


Reset;


## Описание


Метод Reset сбрасывает настройки
 оформления в соответствии с настройками по умолчанию.


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчета
 с идентификатором EXPRESS_REPORT.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Expr: IEaxAnalyzer;

	    GStyle: IEaxTableStyle;

	Begin

	    MB := MetabaseClass.Active;

	    Expr := MB.ItemById("EXPRESS_REPORT").Edit As IEaxAnalyzer;

	    GStyle := Expr.Grid.Style;

	    (GStyle.TotalsHeaderStyle As IEaxCellStyle).Reset;

	    (Expr As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера параметры оформления заголовков итоговых данных
 будут установлены по умолчанию.


См. также:


[IEaxCellStyle](IEaxCellStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
