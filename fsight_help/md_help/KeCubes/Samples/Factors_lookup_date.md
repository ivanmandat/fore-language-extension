# Получение диапазона дат для найденных временных рядов

Получение диапазона дат для найденных временных рядов
-


# Получение диапазона дат для найденных временных рядов


Приведен пример поиска временных рядов в базе данных временных рядов.
 Будут найдены все временные ряды, которые в названии содержат слово «млн». Затем для данных рядов будет
 получена информация: на какой первый и последний годы есть данные.


Для выполнения примера в репозитории предполагается наличие базы данных
 временных рядов с идентификатором «TSDB», содержащая пользовательские
 атрибуты временных рядов с идентификаторами «INDICATOR» и «CITY». Данные
 атрибуты являются ссылками на справочники.


В результате выполнения примера в окно консоли будут выведены наименования
 найденных рядов.


## Пример


Добавьте ссылки на системные сборки: Cubes, Dimensions, Metabase, Orm,
 Rds.


			Sub FactorsLookup;

Var

    mb: IMetabase;

    RubI: IRubricatorInstance;

    Rub: IRubricator;

    DictionaryInstance: IMetaDictionaryInstance;

    resSelSet, SelectionSet: IDimSelectionSet;

    factLookup: IRubricatorFactsLookup;

    criteria: IDimTextCriteria;

    factory: IDimSelectionSetFactory;

    selection: IDimSelection;

    attributes: IMetaAttributes;

    attr: IMetaAttribute;

    id: String;

    IsSelectionSetEmpty: Boolean;

    res: Array Of Integer;

    i: Integer;

    Loo: IMetaDictionaryLookup;

    Cond: IOrmCondition;

    resV: Array Of Variant;

    min, max: DateTime;

    v: Variant;

    Members: IMetaDataMembers;

Begin

    // Получаем репозиторий

    mb := MetabaseClass.Active;

    // Получаем экземпляр базы данных временных рядов «TSDB»

    RubI := mb.ItemById("TSDB").Open(Null) As IRubricatorInstance;

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

            // Преобразуем массив найденных ключей в массив типа Variant

            resV := New Variant[res.Length];

            For i := 0 To res.Length - 1 Do

                resV[i] := res[i];

            End For;

            // Создаем объект для поиска временных рядов по заданным значениям атрибутов

            Loo := RubI.Values.CreateLookup;

            // Указываем, что ищем по последней актуальной ревизии

            Loo.WhereRevisionKey := -1;

            // Указываем, что временные ряды не должны быть удалены

            Loo.WhereIsDeleted := TriState.OffOption;

            // Ограничиваем поиск временными рядами, содержащими в названии текст «млн»

            Cond := Loo.Where.Add;

            Cond.AttributeName := "FACTOR";

            Cond.Operator_ := OrmComparisonOperator.In_;

            Cond.Value := resV;

            // Получаем найденные временные ряды

            Loo.Open(DictionaryCursorOptions.None);

            // Получаем данные найденных рядов

            Members := Loo.Current.Record.Members;

            // Получаем дату наблюдения временного ряда

            min := Members.FindById("DT").Value;

            max := min;

            // Выбираем минимальную и максимальные даты временных рядов

            While Not Loo.Eof Do

                Members := Loo.Current.Record.Members;

                v := Members.FindById("DT").Value;

                If v <= min Then

                    min := v

                Else

                    max := v > max ? v : max;

                End If;

                Loo.Next;

            End While;

            // Закрываем объект для поиска временных рядов

            Loo.Close;

            // Выводим результаты в окно консоли

            Debug.WriteLine(" - минимальная дата: " + min.ToString);

            Debug.WriteLine(" - максимальная дата: " + max.ToString);

        End If;

    End If;

End Sub FactorsLookup;


См. также:


[Примеры](KeCubes_Sample.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
