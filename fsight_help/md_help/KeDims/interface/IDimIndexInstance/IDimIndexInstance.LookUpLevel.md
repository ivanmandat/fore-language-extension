# IDimIndexInstance.LookUpLevel

IDimIndexInstance.LookUpLevel
-


# IDimIndexInstance.LookUpLevel


## Синтаксис


LookUpLevel(IndexAttributesValues: Variant; Level:
 Integer): Integer;


## Параметры


IndexAttributesValues. Значения
 атрибутов, по которым осуществляется поиск;


Level. Уровень, в котором осуществляется
 поиск.


## Описание


Метод LookUpLevel выполняет
 поиск элемента в указанном уровне справочника.


## Комментарии


Метод возвращает значение «-1», если элемент с искомыми значениями атрибутов
 не найден.


Если передать в параметр Level
 значение «-1», то поиск выполняется независимо от уровня.


## Пример


Для выполнения примера в репозитории предполагается наличие табличного
 справочника с идентификатором «DIM_SEP», который состоит из двух уровней.


Добавьте ссылки на системные сборки: Dimensions, Metabase.


			Sub UserProc;

Var

    mb: IMetabase;

    dimension: IDimensionModel;

    instance: IDimInstance;

    levels: IDimLevels;

    level: IDimLevel;

    attrs: IDimAttributes;

    attr: IDimAttribute;

    indexesinstance: IDimIndexesInstance;

    indexinstance: IDimIndexInstance;

    arr: array Of Variant;

    i, n: integer;

Begin

    // Получим репозиторий

    mb := MetabaseClass.Active;

    // Получим доступ к данным справочника

    instance := mb.ItemById("DIM_SEP").Open(Null) As IDimInstance;

    // Создадим массив для
 поиска

    Arr := New Variant[1];

    // Получим коллекцию индексов справочника

    indexesinstance := instance.Indexes;

    // Получим первый индекс справочника

    indexinstance := indexesinstance.Item(0);

    // Ищем элемент "1000"

    Arr[0] := 1000;

    // Получим порядковый номер элемента

    i := indexinstance.LookUpLevel(Arr, 1);

    // Выводим порядковый номер в окно консоли

    Debug.WriteLine("Порядковый номер найденного элемента = " + i.ToString);

End Sub UserProc;


В результате выполнения примера в окно консоли выведется порядковый
 номер искомого элемента справочника.


См. также:


[IDimIndexInstance](IDimIndexInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
