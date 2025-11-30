# Поиск временных рядов

Поиск временных рядов
-


# Поиск временных рядов


Приведен пример поиска временных рядов в базе данных временных рядов,
 являющейся источником данных для экспресс-отчета. Будут найдены все временные
 ряды, которые имеют данные и в названии содержат слово «млн».


Для выполнения примера в репозитории предполагается наличие экспресс-отчета
 с идентификатором «REPORT_LOOKUP». Источником данных для отчета является
 база данных временных рядов, содержащая пользовательские атрибуты временных
 рядов с идентификаторами «INDICATOR» и «CITY». Данные атрибуты являются
 ссылками на справочники.


В результате выполнения примера в окно консоли будут выведены наименования
 найденных рядов.


## Пример


Добавьте ссылки на системные сборки: Cubes, Dimensions, Express, Metabase,
 Orm, Pivot, Rds.


			Sub FactorsLookup;

Var

    mb: IMetabase;

    Eax: IEaxAnalyzer;

    Cube: ICubeInstance;

    RubI: IRubricatorInstance;

    Rub: IRubricator;

    DictionaryInstance: IMetaDictionaryInstance;

    resSelSet,SelectionSet: IDimSelectionSet;

    factLookup: IRubricatorFactsLookup;

    criteria: IDimTextCriteria;

    factory: IDimSelectionSetFactory;

    selection: IDimSelection;

    attributes: IMetaAttributes;

    attr: IMetaAttribute;

    id: string;

    IsSelectionSetEmpty: Boolean;

    res, Arr: array Of Integer;

    i: Integer;

    isFind: Boolean = False;

    Loo: IMetaDictionaryLookup;

    Cond: IOrmCondition;

Begin

    // Получаем репозиторий

    mb := MetabaseClass.Active;

    // Получаем экспресс-отчет «REPORT_LOOKUP»

    Eax := mb.ItemById("REPORT_LOOKUP").Bind As IEaxAnalyzer;

    // Получаем источник данных экспресс-отчета в виде куба

    Cube := (Eax.Pivot.DataSource As ICubeInstanceDestination).Cube;

    // Если источником данных экспресс-отчета является база данных

    // временных рядов, то выполняем поиск

    If Cube Is IRubricatorInstance Then

        // Получаем экземпляр базы данных временных рядов

        RubI := Cube As IRubricatorInstance;

        Rub := RubI.Rubricator;

        Debug.WriteLine("Поиск в базе данных временных рядов '" + (Rub As IMetabaseObject).Name + "':");

        // Получаем справочник временных рядов

        DictionaryInstance := RubI.GetDictionary(RubricatorDictionary.Facts);

        // Создаем объект для поиска временных рядов

        factLookup := RubI.CreateFactsLookup;

        // Задаем критерии поиска

        criteria := New DimTextCriteria.Create;

        // Выполняем поиск вхождения искомого слова в значения строковых атрибутов

        criteria.CriteriaOptions := TextCriteriaOptions.SearchStringAttributes Or TextCriteriaOptions.FreeText;

        // Задаем искомое слово

        criteria.Text := "млн";

        // Выполняем поиск среди элементов, отмеченных в измерениях базы данных временных рядов

        criteria.SelectOptions := ConditionSelectOptions.SelectedOnly;

        // Создаем отметку в измерениях базы данных временных рядов

        factory := New DimSelectionSetFactory.Create;

        SelectionSet := factory.CreateDimSelectionSet;

        // Получаем все атрибуты временных рядов

        attributes := Rub.Facts.Attributes;

        // Перебираем все атрибуты временных рядов

        For Each Attr In attributes Do

            id := Attr.Id;

            // Если это атрибут «INDICATOR» или «CITY»,

            // то отмечаем все элементы в измерении, основанном на данном атрибуте

            If (Id = "INDICATOR") Or (Id = "CITY") Then

                selection := SelectionSet.Add(Attr.ValuesObject.Open(Null) As IDimInstance);

                selection.SelectAll;

            End If;

        End For;

        // Выполняем фильтрацию атрибутов по заданным параметрам

        resSelSet := factLookup.SetTextCriteria(criteria, SelectionSet);

        // Проверяем, найдены ли временные ряды с соответствующим текстом

        selection := Null;

        For Each selection In resSelSet Do

            If selection.SelectedCount > 0 Then

                IsSelectionSetEmpty := False;

                Else IsSelectionSetEmpty := True;

            End If;

        End For;

        // Если временные ряды найдены, то проверяем, содержат ли они данные

        If Not IsSelectionSetEmpty Then

            // Получаем ключи найденных временных рядов

            res := factLookup.LookupFactors;

            If (Not IsNULL(res)) And (res.Length <> 0) Then

                // Создаем объект для поиска временных рядов по заданным значениям атрибутов

                Loo := RubI.Values.CreateLookup;

                // Указываем, что ищем по последней актуальной ревизии

                Loo.WhereRevisionKey := -1;

                // Указываем, что временные ряды не должны быть удалены

                Loo.WhereIsDeleted := TriState.OffOption;

                // Указываем, что у временных рядов должны быть данные

                Cond := Loo.Where.Add;

                Cond.AttributeName := "VL";

                Cond.Operator_ := OrmComparisonOperator.IsNotNull;

                // Ограничиваем поиск временными рядами, содержащими в названии текст «млн»

                Cond := Loo.Where.Add;

                Cond.AttributeName := "FACTOR";

                Cond.Operator_ := OrmComparisonOperator.In_;

                //Cond.Value := arr2;

                Cond.Value := res;

                // Получаем ключи найденных временных рядов

                arr := Loo.LookupKeys("FACTOR");

                // Получаем признак того, найдены ли временные ряды

                isFind := (Not isNULL(arr) And (arr.Length > 0));

                // Выводим в окно консоли мнемоники найденных временных рядов

                For i := 0 To arr.Length - 1 Do

                    Debug.WriteLine(#9 + RubI.GetFactData(arr[i]).Mnemo);

                End For;

            End If;

        End If;

        // Если временные ряды не найдены, то выводим в окно консоли соответствующее сообщение

        If Not isFind Then

            Debug.WriteLine(#9 + "Временные ряды не найдены или найденные временные ряды не содержат данных");

        End If;

    End If;

End Sub FactorsLookup;


См. также:


[Примеры](KeCubes_Sample.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
