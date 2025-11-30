# IDynamicInstance.AttributeCount

IDynamicInstance.AttributeCount
-


# IDynamicInstance.AttributeCount


## Синтаксис


AttributeCount: Integer;


## Описание


Свойство AttributeCount возвращает
 количество атрибутов справочника.


## Пример


Для выполнения примера предполагается наличие в репозитории табличного
 справочника НСИ с настроенной динамической загрузкой элементов и с идентификатором
 «DYNDIM».


Добавьте ссылки на системные сборки: Dimensions и Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    Dim: IDynamicInstance;

    DimInst: IDimInstance;

    DimElementArr: IDimElementArray;

Begin

    MB := MetabaseClass.Active;

    Dim := MB.ItemById("DYNDIM").Open(Null) As IDynamicInstance;

    // Выведем наименование справочника

    DimInst := Dim.DimInstance;

    Debug.WriteLine("Наименование справочника: " + DimInst.Name);

    // Получим массив всех элементов справочника

    DimElementArr := Dim.CreateDimElementArray;

    // Выведем количество элементов в справочнике

    Debug.WriteLine("Элементов в справочнике: " + DimElementArr.Count.ToString);

    // Выведем количество атрибутов справочника

    Debug.WriteLine("Количество атрибутов: " + Dim.AttributeCount.ToString);

End Sub UserProc;


В результате выполнения примера в окно консоли будут выведены наименование,
 количество элементов и количество атрибутов справочника.


См. также:


[IDynamicInstance](IDynamicInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
