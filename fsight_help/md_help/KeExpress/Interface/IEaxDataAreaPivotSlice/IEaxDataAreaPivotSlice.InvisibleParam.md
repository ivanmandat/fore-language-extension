# IEaxDataAreaPivotSlice.InvisibleParam

IEaxDataAreaPivotSlice.InvisibleParam
-


# IEaxDataAreaPivotSlice.InvisibleParam


## Синтаксис


InvisibleParam(ParamId: String): Boolean;


## Параметры


ParamId. Идентификатор параметра.


## Описание


Свойство InvisibleParam определяет,
 скрыт ли параметр с указанным идентификатором.


## Комментарии


Если для параметра в данном свойстве установить значение True,
 то параметр будет скрыт. При значении False
 параметр доступен при работе в отчёте, которому принадлежит аналитическая
 область данных.


## Пример


Для выполнения примера в репозитории предполагается наличие экспресс-отчёта
 с идентификатором EXPRESS_REPORT. Источник данных отчёта имеет один параметр,
 имеющий целочисленный тип данных.


Добавьте ссылки на системные сборки: Express, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Expr: IEaxAnalyzer;

	    Slice: IEaxDataAreaPivotSlice;

	    Params: IMetabaseObjectParamValues;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим экспресс-отчёт

	    Expr := MB.ItemById("EXPRESS_REPORT").Edit As IEaxAnalyzer;

	    // Получим срез аналитической области данных

	    Slice := Expr.DataArea.Slices.Item(0) As IEaxDataAreaPivotSlice;

	    // Получим коллекцию параметров источника среза

	    Params := Slice.ParamValues;

	    // Зададим для параметра
	 значение и скроем его из экспресс-отчёта

	    If Slice.IsParameterized Then

	        Params.Item(0).Value := 100;

	        Slice.InvisibleParam(Params.Item(0).Id) := True;

	    End If;

	    (Expr As IMetabaseObject).Save;

	End Sub UserProc;


При выполнении примера для параметра среза будет определено значение,
 также параметр будет скрыт из экспресс-отчёта.


См. также:


[IEaxDataAreaPivotSlice](IEaxDataAreaPivotSlice.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
