# IStandardDimension.DeduplicateExpression

IStandardDimension.DeduplicateExpression
-


# IStandardDimension.DeduplicateExpression


## Синтаксис


DeduplicateExpression: [IExpression](ForeSys.chm::/Interface/IExpression/IExpression.htm);


## Описание


Свойство DeduplicateExpression
 возвращает объект, содержащий выражение, используемое для удаления дубликатов
 в справочнике.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dimens: IStandardDimension;

	    Expr: IExpression;

	    s: String;

	Begin

	    MB:=MetabaseClass.Active;

	    Dimens := MB.ItemById("TAB_DIM").Bind As IStandardDimension;

	    Expr := Dimens.DeduplicateExpression;

	    s := Expr.AsString;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться выражение,
 используемое для удаления дубликатов в справочнике, преобразованное к
 символьному виду. Идентификатор табличного справочника - «TAB_DIM».


См. также:


[IStandardDimension](IStandardDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
