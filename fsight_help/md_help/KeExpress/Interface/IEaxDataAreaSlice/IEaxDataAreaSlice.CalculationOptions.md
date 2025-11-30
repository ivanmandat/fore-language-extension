# IEaxDataAreaSlice.CalculationOptions

IEaxDataAreaSlice.CalculationOptions
-


# IEaxDataAreaSlice.CalculationOptions


## Синтаксис


CalculationOptions: [EaxDataAreaSliceCalculationOptions](../../Enums/EaxDataAreaSliceCalculationOptions.htm);


## Описание


Свойство CalculationOptions
 определяет параметры вычисления элементов среза аналитической области
 данных.


## Комментарии


Для использования данного свойства убедитесь, чтобы свойство [IEaxDataAreaSlice.SkipEmptyValues](IEaxDataAreaSlice.SkipEmptyValues.htm)
 принимало значение False.


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчета
 с идентификатором EXPRESS, содержащего таблицу. Для элементов, имеющих
 пустые значения, должна быть задана формула суммы. Созданный вычисляемый
 элемент должен содержать пустые значения.


Добавьте ссылки на системные сборки: Express, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Express: IEaxAnalyzer;

	    Slice: IEaxDataAreaSlice;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим экспресс-отчет

	    Express := MB.ItemById("EXPRESS").Edit As IEaxAnalyzer;

	    // Получим срез данных

	    Slice := Express.DataArea.Slices.Item(0);

	    // Заменим пустые значения на нули

	    If Slice.SkipEmptyValues Then Slice.SkipEmptyValues := False;

	    End If;

	    Slice.CalculationOptions := EaxDataAreaSliceCalculationOptions.TreatNullsAsZeros;

	    // Сохраним изменения

	    Express.RefreshAll;

	    (Express As IMetaBaseObject).Save;

	End Sub UserProc;


После выполнения примера в экспресс-отчете для вычисляемого элемента
 пустые значения будут заменены нулями.


См. также:


[IEaxDataAreaSlice](IEaxDataAreaSlice.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
