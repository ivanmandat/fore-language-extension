# IRdsElementsIterator.CreateChildrenIterator

IRdsElementsIterator.CreateChildrenIterator
-


# IRdsElementsIterator.CreateChildrenIterator


## Синтаксис


CreateChildrenIterator(Parent: [IRdsDictionaryElement](../IRdsDictionaryElement/IRdsDictionaryElement.htm);

                       FirstElement:
 Integer;

                       [CopyFilter:
 Boolean = True]): [IRdsElementsIterator](IRdsElementsIterator.htm);


## Параметры


Parent. Элемент, для которого
 создается итератор.


FirstElement. Индекс первого
 элемента.


CopyFilter. Признак копирования
 фильтра родительского итератора.


## Описание


Метод CreateChildrenIterator
 создает для указанного элемента справочника итератор, предназначенный
 для навигации по дочерним элементам.


## Комментарии


В языке Fore параметр CopyFilter необязательный и по
 умолчанию имеет значение True,
 т.е. в дочернем итераторе используется тот же фильтр элементов, что и
 в родительском итераторе.


## Пример


Для выполнения примера в репозитории предполагается наличие справочника
 НСИ с идентификатором RDS_DICT.


Добавьте ссылки на системные сборки: Metabase, Rds.


			Sub UserProc;

Var

    Mb: IMetabase;

    RdsInst: IRdsDictionaryInstance;

    elSearch: IRdsDictionaryElementsSearch;

    Dict: IRdsDictionary;

    Iter: IRdsElementsIterator;

    IterCh: IRdsElementsIterator;

Begin

    Mb := MetabaseClass.Active;

    // Получаем справочник, в котором будет выполняться поиск

    RdsInst := Mb.ItemById("RDS_DICT").Open(Null) As IRdsDictionaryInstance;

    Dict := RdsInst.Dictionary;

    // Создаем объект для поиска по справочнику

    elSearch := RdsInst.CreateSearch;

    // Проверяем: выполняется ли поиск среди объектов, полученных из итератора

    If Not elSearch.IsIterator Then

        // Создаем итератор

        Iter := RdsInst.BigElements.CreateIterator(1, 100, Null, Null);

        // Устанавливаем созданный итератор для объекта, выполняющего поиск

        elSearch.SetIterator(Iter);

        // Выводим элементы итератора в окно консоли

        Debug.WriteLine("Элементы итератора:");

        Iter.First; Iter.Next;

        Debug.WriteLine(Iter.Element.Name);

        IterCh := Iter.CreateChildrenIterator(Iter.Element, 0, True);

        IterCh.First;

        While IterCh.Next Do

            Debug.WriteLine("  " + IterCh.Element.Name);

        End While;

    End If;

End Sub UserProc;


После выполнения примера в консоль среды разработки будет выведен первый
 элемент справочника и его дочерние элементы.


См. также:


[IRdsElementsIterator](IRdsElementsIterator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
