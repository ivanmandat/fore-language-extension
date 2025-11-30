# IEaxInvisibleDimensions.Add

IEaxInvisibleDimensions.Add
-


# IEaxInvisibleDimensions.Add


## Синтаксис


Add(Key: Integer);


## Параметры


Key. Ключ справочника, который
 необходимо скрыть из списка измерений источника данных, в экспресс-отчете.


## Описание


Метод Add осуществляет добавление
 измерение, ключ которого передается посредством параметра Key,
 в список невидимых.


## Комментарии


Для определения количества невидимых измерений в справочника используйте
 свойство [IEaxInvisibleDimensions.Count](IEaxInvisibleDimensions.Count.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчёта
 с идентификатором EXPRESS_REPORT.


Добавьте ссылки на системные сборки: Dimensions, Express, Metabase,
 Pivot.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Expr: IEaxAnalyzer;

	    Slice: IEaxDataAreaPivotSlice;

	    InvDim: IEaxInvisibleDimensions;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим экспресс-отчет

	    Expr := MB.ItemById("EXPRESS_REPORT").Edit As IEaxAnalyzer;

	    // Получим срез аналитической области данных

	    Slice := Expr.DataArea.Slices.Item(0) As IEaxDataAreaPivotSlice;

	    // Получим невидимые иземрения и добавим в список первое измерение источника данных

	    InvDim := Slice.InvisibleDimensions;

	    InvDim.Add(Slice.Pivot.DimItem(0).Key);

	    // Сохраним изменения

	    (Expr As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера в список невидимых измерений будет добавлено
 первое измерение источника данных экспресс-отчета.


См. также:


[IEaxInvisibleDimensions](IEaxInvisibleDimensions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
