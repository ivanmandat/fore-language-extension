# IEaxDataAreaPivotSlice.ParamValues

IEaxDataAreaPivotSlice.ParamValues
-


# IEaxDataAreaPivotSlice.ParamValues


## Синтаксис


ParamValues: [IMetabaseObjectParamValues](KeSom.chm::/Interface/IMetabaseObjectParamValues/IMetabaseObjectParamValues.htm);


## Описание


Свойство ParamValues определяет
 коллекцию значений параметров источника среза.


## Пример


Для выполнения примера в репозитории предполагается наличие экспресс-отчёта
 с идентификатором EXPRESS_REPORT.


Добавьте ссылки на системные сборки: Express, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Expr: IEaxAnalyzer;

	    Slice: IEaxDataAreaPivotSlice;

	    Params: IMetabaseObjectParamValues;

	    v: Variant;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим экспресс-отчёт

	    Expr := MB.ItemById("EXPRESS_REPORT").Bind As IEaxAnalyzer;

	    // Получим срез аналитической области данных

	    Slice := Expr.DataArea.Slices.Item(0) As IEaxDataAreaPivotSlice;

	    // Определим коллекцию значений параметров источника среза

	    Params := Slice.ParamValues;

	    // Получим значение первого параметра куба

	    If Slice.IsParameterized Then

	        v := Params.Item(0).Value;

	    End If;

	End Sub UserProc;


В результате выполнения примера переменная «v» будет содержать значение
 первого параметра куба, являющийся источником данных для экспресс-отчёта,
 если таковые имеются.


См. также:


[IEaxDataAreaPivotSlice](IEaxDataAreaPivotSlice.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
