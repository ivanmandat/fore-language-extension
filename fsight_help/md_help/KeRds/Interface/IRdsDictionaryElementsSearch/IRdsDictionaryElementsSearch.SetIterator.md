# IRdsDictionaryElementsSearch.SetIterator

IRdsDictionaryElementsSearch.SetIterator
-


# IRdsDictionaryElementsSearch.SetIterator


## Синтаксис


SetIterator(Value: [IRdsElementsIterator](../IRdsElementsIterator/IRdsElementsIterator.htm));


## Параметры


Value. Итератор.


## Описание


Метод SetIterator устанавливает
 итератор, среди элементов которого выполняется поиск.


## Комментарии


Свойство [IRdsDictionaryElementsSearch.IsIterator](IRdsDictionaryElementsSearch.IsIterator.htm)
 возвращает признак того, выполняется ли поиск среди элементов итератора.


При получении итератора объект поиска отстраивает дерево элементов,
 поэтому при очень больших объемах выборки может не хватать ресурсов оперативной
 памяти. В данном случае выдается ошибка «Недостаточно памяти для завершения
 операции».


## Пример


Для выполнения примера в репозитории предполагается наличие справочника
 НСИ с идентификатором RDS_DICT.


Добавьте ссылки на системные сборки: Dimensions, Metabase, Rds.


			Sub UserProc;

Var

    Mb: IMetabase;

    RdsInst: IRdsDictionaryInstance;

    elSearch: IRdsDictionaryElementsSearch;

    Dict: IRdsDictionary;

    Filter: IRdsDictionaryFilterConditions;

    Condition: IRdsDictionaryFilterCondition;

    Iter: IRdsElementsIterator;

    Crit: IDimTextCriteria;

    Res: IRdsDictionaryElementList;

    i: Integer;

Begin

    Mb := MetabaseClass.Active;

    // Открываем справочник, в котором будет выполняться поиск

    RdsInst := Mb.ItemById("RDS_DICT").Open(Null) As IRdsDictionaryInstance;

    Dict := RdsInst.Dictionary;

    // Создаем объект для поиска по справочнику

    elSearch := RdsInst.CreateSearch;

    // Проверяем: выполняется ли поиск среди объектов, полученных из итератора

    If Not elSearch.IsIterator Then

        // Создаем фильтр итератора

        Filter := New RdsDictionaryFilterConditions.Create;

        Condition := Filter.Add(Dict.Attributes.FindById("NAME"));

        Condition.Operation := RdsConditionOperation.Like;

        Condition.Value := "%1%";

        // Создаем итератор

        Iter := RdsInst.BigElements.CreateIterator(1, RdsInst.Elements.Count, Filter, Null);

        // Устанавливаем созданный итератор для объекта, выполняющего поиск

        elSearch.SetIterator(Iter);

        // Приводим итератор к первому элементу

        Iter.First;

        // Выводим элементы итератора в окно консоли

        Debug.WriteLine("Элементы итератора:");

        While Iter.Next Do

            Debug.WriteLine(Iter.Element.Name);

        End While;

    End If;

    // Задаем условия поиска

    elSearch.Attributes.Attributes := "NAME";

    Crit := New DimTextCriteria.Create;

    Crit.CriteriaOptions := TextCriteriaOptions.SearchStringAttributes;

    Crit.Text := "a";

    elSearch.SetTextCriteria(Crit);

    // Выполняем поиск

    Res := elSearch.FindAllList;

    // Выводим результаты в окно консоли

    Debug.WriteLine("Результат поиска:");

    For i := 0 To Res.Count - 1 Do

        Debug.WriteLine(Res.Item(i).Name);

    End For;

End Sub UserProc;


После выполнения примера будет выполнен поиск среди элементов справочника
 НСИ. Параметры поиска:


	- ищутся элементы, в наименовании которых присутствует символ
	 «a»;


	- поиск выполняется среди элементов, полученных от итератора справочника;


	- в итератор попадают элементы, в наименовании которых присутствует
	 символ «1».


Найденные элементы и элементы, содержащиеся в итераторе, будут выведены
 в окно консоли.


См. также:


[IRdsDictionaryElementsSearch](IRdsDictionaryElementsSearch.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
