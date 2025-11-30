# IMDCalculationDatasetInstance.KeyToText

IMDCalculationDatasetInstance.KeyToText
-


# IMDCalculationDatasetInstance.KeyToText


## Синтаксис


KeyToText(Key: [IMDCalculationFormulaElementKey](../IMDCalculationFormulaElementKey/IMDCalculationFormulaElementKey.htm)):
 String;


## Параметры


Key. Уникальный ключ элемента.


## Описание


Метод KeyToText возвращает строковое
 представление элемента, которому соответствует уникальный ключ.


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

        // Устанавливаем значение ключа по свободным срезам

        Key.Item(i) := AttrInst.FindByKey(Index.Attributes.Item(0).Key).Value(0);

    End For;

    Debug.WriteLine(Dest.KeyToText(Key));

End Sub UserProc;


После выполнения примера будет создан уникальный ключ. Данный уникальный
 ключ будет соответствовать элементу приёмника данных, расположенному по
 первым элементам срезов. Строковое представление элемента будет выведено
 в консоль среды разработки.


См. также:


[IMDCalculationDatasetInstance](IMDCalculationDatasetInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
