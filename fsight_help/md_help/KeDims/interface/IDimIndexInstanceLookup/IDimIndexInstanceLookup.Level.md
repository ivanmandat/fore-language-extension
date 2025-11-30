# IDimIndexInstanceLookup.Level

IDimIndexInstanceLookup.Level
-


# IDimIndexInstanceLookup.Level


## Синтаксис


Level: Integer;


## Описание


Свойство Level определяет уровень
 справочника, в котором выполняется поиск элемента.


## Комментарии


Если свойство принимает значение «-1», то поиск выполняется независимо
 от уровня.


## Пример


Для выполнения примера в репозитории необходимо наличие табличного справочника
 с идентификатором «DIM_SEP», который состоит из двух уровней.


Добавьте ссылки на системные сборки: Dimensions, Metabase.


			Sub UserProc;

Var

    mb: IMetabase;

    instance: IDimInstance;

    indexesinstance: IDimIndexesInstance;

    indexinstance: IDimIndexInstance;

    instlook: IDimIndexInstanceLookup;

    arr, arr1: array Of Variant;

    i, c: integer;

Begin

    // Получим репозиторий

    mb := MetabaseClass.Active;

    // Получим доступ к данным справочника

    instance := mb.ItemById("DIM_SEP").Open(Null) As IDimInstance;

    // Создадим массивы
 для поиска

    Arr := New Variant[1];

    Arr1 := New Variant[1];

    // Получим коллекцию индексов справочника

    indexesinstance := instance.Indexes;

    // Получим первый индекс справочника

    indexinstance := indexesinstance.Item(0);

    // Создадим объект для поиска элементов справочника

    instlook := indexinstance.CreateDimIndexLookup;

    // Зададим уровень
 для поиска

    instlook.Level := 2;

    // Найдем элементы «1000»
 и «1020»

    Arr[0] := 1000;

    Arr1[0] := 1020;

    // Получим порядковый номер элемента

    i := indexinstance.LookUp(Arr);

    // Получим порядковый номер элемента

    c := indexinstance.LookUp(Arr1);

    // Выведем порядковый номер в окно консоли

    Debug.WriteLine("Порядковый номер найденного элемента = " + i.ToString);

    // Выведем порядковый номер в окно консоли

    Debug.WriteLine("Порядковый номер найденного элемента = " + c.ToString);

End Sub UserProc;


После выполнения примера в окно консоли выведутся порядковые номера
 найденных элементов.


См. также:


[IDimIndexInstanceLookup](IDimIndexInstanceLookup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
