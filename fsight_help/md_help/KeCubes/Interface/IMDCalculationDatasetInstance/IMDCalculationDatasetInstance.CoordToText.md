# IMDCalculationDatasetInstance.CoordToText

IMDCalculationDatasetInstance.CoordToText
-


# IMDCalculationDatasetInstance.CoordToText


## Синтаксис


CoordToText(Coord: [IMatrixCoord](KeMatrix.chm::/Interface/IMatrixCoord/IMatrixCoord.htm);
 [FactIndex: Integer = -1]): String;


## Параметры


Coord. Координата, соответствующая
 элементу в источнике/приёмнике данных;


FactIndex. Индекс показателя,
 по которому необходимо получить значение.


## Описание


Метод CoordToText возвращает
 строковое представление элемента, которому соответствует координата в
 источнике/приёмнике данных.


## Пример


Для выполнения примера в репозитории предполагается наличие многомерного
 расчёта на сервере БД с идентификатором MDCALC.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Matrix, Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    MDInst: IMDCalculationInstance;

    Source: IMDCalculationSourceInstance;

    Slices: IMDCalculationSlicesInstance;

    Slice: IMDCalculationSliceInstance;

    Coord: IMatrixCoord;

    i, j: Integer;

Begin

    // Получаем текущий репозиторий

    MB := MetabaseClass.Active;

    // Получаем многомерный расчёт на сервере

    MDInst := MB.ItemById("MDCALC").Open(Null) As IMDCalculationInstance;

    // Получаем источники

    Source := MDInst.Sources.Item(0);

    // Получаем срезы

    Slices := Source.Slices;

    Coord := Source.NewCoord;

    //Во всех cрезах, кроме первого, выбираем первые элементы

    For i := 1 To Slices.Count - 1 Do

        Coord.Item(i) := 0;

    End For;

    Slice := Source.Slices.Item(0);

    j := Slice.Dimension.Elements.Count;

    //Просмотр всех элементов первого cреза

    For i := 0 To j - 1 Do

        Coord.Item(0) := i;

        Debug.WriteLine(Source.CoordToText(Coord));

    End For;

End Sub UserProc;


После выполнения примера в консоль среды разработки будут выведены строковые
 значения элементов, полученных по первому срезу источника данных. По всем
 остальным нефиксированным срезам будут отмечены первые элементы.


См. также:


[IMDCalculationDatasetInstance](IMDCalculationDatasetInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
