# IEaxDataAreaValidationChain.Move

IEaxDataAreaValidationChain.Move
-


# IEaxDataAreaValidationChain.Move


## Синтаксис


Move(FromIndex: Integer; ToIndex: Integer);


## Параметры


FromIndex. Индекс позиции правила
 валидации, из которой необходимо переместить правило валидации;


ToIndex. Индекс позиции, в
 которую необходимо переместить правило валидации.


## Описание


Метод Move перемещает элементы
 цепочки валидаций.


## Комментарии


Метод выполняется только, если в коллекции находится больше одного правила
 валидации.


## Пример


Для выполнения примера в репозитории необходимо наличие регламентного
 отчета с идентификатором REG_REPORT_VALIDATIONS, для которого источником
 данных служит база данных временных рядов. Отчет содержит два правила
 валидации.


Добавьте ссылки на системные сборки: Drawing, Express, Laner, Metabase,
 Ms, Pivot, Report, Tab.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Validation: IValidationFilter;

	    Report: IPrxReport;

	    DataArea: IEaxDataArea;

	    AreaSlice: IEaxDataAreaSlice;

	    EaxValidations: IEaxDataAreaValidations;

	    EaxValidation, EaxValidation1: IEaxDataAreaValidation;

	    i, k, m, index: integer;

	    Grid: IEaxGrid;

	    DiagReport: IDiagnosticReport;

	    Chain: IEaxDataAreaValidationChain;

	    ValidationLink: IEaxDataAreaValidationLink;

	    Validations: IEaxDataAreaValidations;

	    ValidationsCount: Integer;

	    LinkSource: IEaxDataAreaValidation;

	    Id: String;

	    ValidFilterSetting: IValidationFilterSettings;

	    TabCellStyle: ITabCellStyle;

	    Color: IGxColor;

	    Brush: IGxSolidBrush;

	    DataAreaValidation: IEaxDataAreaValidation;

	    Level: IValidationLevel;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим регламентный отчет

	    Report := MB.ItemById("REG_REPORT_VALIDATIONS").Edit As IPrxReport;

	    // Получим аналитическую область данных

	    DataArea := Report.DataArea;

	    // Получим срез данных

	    AreaSlice := DataArea.Slices.Item(0);

	        For i := 0 To AreaSlice.Views.Count - 1 Do

	            If Areaslice.Views.Item(i) Is IEaxGrid Then

	                // Получим таблицу данных

	                Grid := AreaSlice.Views.Item(i) As IEaxGrid;

	                // Создадим диагностический отчет

	                DiagReport := New DiagnosticReport.Create;

	                {Свяжем цепочку валидаций диагностического отчета с коллекцией

	                 правил валидации регламентного отчета}

	                DiagReport.Grid := Grid;

	                Break;

	            End If;

	        End For;

	    // Получим цепочку валидаций

	    Chain := DiagReport.Chain;

	    // Получим коллекцию валидаций в цепочке

	    Validations := Chain.Validations;

	    // Получим и выведем в окно консоли количество валидаций в цепочке

	    ValidationsCount := Validations.Count;

	    Debug.WriteLine("Количество валидаций в цепочке = " + ValidationsCount.ToString);

	        // Выведем в окно консоли идентификатор объекта-родителя среза

	        For k := 0 To Chain.Count - 1 Do

	            ValidationLink := Chain.Item(k);

	                If ValidationLink.Enabled = False Then

	                    ValidationLink.Enabled := True;

	                End If;

	            LinkSource := ValidationLink.Source;

	            Id := LinkSource.Id;

	            Debug.WriteLine("Идентификатор объекта-родителя среза - " + Id);

	        End For;

	    // Переместим элементы цепочки валидаций

	    Chain.Move(1, 0);

	    // Получим коллекцию правил валидаций

	    EaxValidations := AreaSlice.Validations;

	    // Очистим коллекцию правил валидации

	    EaxValidations.Clear;

	    // Создадим правила валидации

	    EaxValidation := EaxValidations.Create;

	    // Добавим новое правило валидации

	    EaxValidation1 := EaxValidations.Add(EaxValidation);

	        // Выведем в окно консоли индекс правила валидации

	        For m := 0 To EaxValidations.Count - 1 Do

	            DataAreaValidation := EaxValidations.Item(m);

	            Index := EaxValidations.IndexOf(DataAreaValidation);

	            Debug.WriteLine("Индекс правила валидации = " + Index.ToString);

	        End For;

	            // Если найдено правило по ключу «1», то оно удалится

	            If EaxValidations.FindByKey(1) <> Null Then

	                EaxValidations.RemoveByKey(1);

	            End If;

	    // Получим фильтр

	    Validation := EaxValidation.Filter As IValidationFilter;

	        If Validation <> Null Then

	            // Для расчета валидации используем дату начала/окончания данных

	            Validation.StartDateSettings.DateOptions := ValidationDateOptions.DependsFromData;

	            Validation.EndDateSettings.DateOptions := ValidationDateOptions.DependsFromData;

	            // Получим настройки фильтра

	            ValidFilterSetting := Validation.Settings;

	            // Тип валидации - сравнение с числом

	            Validation.Kind := ValidationDetailsKind.Level;

	            // Получим настройки типа валидации

	            Level := Validation.Details As IValidationLevel;

	            // Оператор сравнения - больше заданного числа

	            Level.ComparisonValue.ComparisonOperator := ValidationComparisonOperator.More;

	            // Зададим число для сравнения

	            Level.ComparisonValue.Value1 := 0;

	            // Получим стиль ячеек

	            TabCellStyle := ValidFilterSetting.CellStyle.TabStyle;

	            // Изменим цвет фона ячееек, удовлетворяющих правилу валидации

	            Color := New GxColor.CreateRGB(120, 0, 120);

	            Brush := New GxSolidBrush.Create(Color);

	            TabCellStyle.BackgroundBrush := Brush;

	            // Изменим текст ячеек, удовлетворяющих правилу валидации

	            TabCellStyle.Text := "Text";

	        End If;

	    // Обновим отчет и сохраним изменения

	    Report.Recalc;

	    (Report As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера:


	- в окно консоли выведется количество валидаций в цепочке;


	- в окно консоли выведется идентификатор объекта-родителя среза
	 источника данных;


	- переместится элемент цепочки валидаций;


	- в окно консоли выведется индекс правила валидации;


	- если найдено правило с ключом «1», то оно будет удалено;


	- будет создано правило валидации с параметрами, по которому будет
	 выполнено форматирование таблицы.


См. также:


[IEaxDataAreaValidationChain](IEaxDataAreaValidationChain.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
