# IMDCalculationFormulaElementKey.Item

IMDCalculationFormulaElementKey.Item
-


# IMDCalculationFormulaElementKey.Item


## Синтаксис


Item(Index: Integer): Variant;


## Параметры


Index. Индекс свободного измерения
 источника/приёмника данных, по которому необходимо определить значение
 уникального ключа.


## Описание


Свойство Item определяет значение
 уникального ключа по заданному измерению.


## Комментарии


В качестве значения данного свойства должно указываться значение атрибута,
 по которому создан [индекс
 измерения](../IMDCalculationSliceFree/IMDCalculationSliceFree.Index.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории многомерного
 расчета на сервере БД с идентификатором MDCalc_1.


			Sub UserProc;

Var

    MB: IMetabase;

    MDInst: IMDCalculationInstance;

    Dest: IMDCalculationDestinationInstance;

    Slices: IMDCalculationSlicesInstance;

    Slice: IMDCalculationSliceInstance;

    Key: IMDCalculationFormulaElementKey;

    Index: IDimIndex;

    AttrInst: IDimAttributesInstance;

    i: Integer;

Begin

    MB := MetabaseClass.Active;

    MDInst := MB.ItemById("MDCalc_1").Open(Null) As IMDCalculationInstance;

    Dest := MDInst.Destination;

    Slices := Dest.Slices;

    Key := Dest.NewKey;

    For i := 0 To Slices.Count - 1 Do

        Slice := Slices.Item(i);

        AttrInst := Slice.Dimension.Attributes;

        Index := Slice.Index.Index;

        // Устанавливаем значение ключа по свободным измерениям

        Key.Item(i) := AttrInst.FindByKey(Index.Attributes.Item(0).Key).Value(0);

    End For;

    Debug.WriteLine(Dest.KeyToText(Key));

End Sub UserProc;


После выполнения примера будет создан уникальный ключ. Данный уникальный
 ключ будет соответствовать элементу приёмника данных, расположенному по
 первым элементам измерений. Строковое представление элемента будет выведено
 в консоль среды разработки.


См. также:


[IMDCalculationFormulaElementKey](IMDCalculationFormulaElementKey.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
