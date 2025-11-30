# IPivotTableHeader.SlotDims

IPivotTableHeader.SlotDims
-


# IPivotTableHeader.SlotDims


## Синтаксис


SlotDims(SlotNumber: Integer): Array;


## Параметры


SlotNumber. Индекс слота в
 заголовке.


## Описание


Свойство SlotDims возвращает
 массив ключей измерений, расположенных в указанном слоте заголовка.


## Пример


Для выполнения примера в репозитории предполагается наличие экспресс-отчёта
 с идентификатором EXPRESS_REPORT.


Добавьте ссылки на системные сборки: Express, Metabase, Pivot.


			Sub UserProc;

Var

    Mb: IMetabase;

    Expr: IEaxAnalyzer;

    Pivot: IPivot;

    Header: IPivotTableHeader;

    DimArr: Array Of Integer;

    i, c: Integer;

Begin

    Mb := MetabaseClass.Active;

    Expr := Mb.ItemById("EXPRESS_REPORT").Bind As IEaxAnalyzer;

    Pivot := Expr.Pivot;

    // Заголовок строк

    Header := Pivot.ObtainTable.LeftHeader;

    c := Header.SlotCount;

    For i := 0 To c - 1 Do

        DimArr := Header.SlotDims(i);

        Debug.WriteLine("Слот: " + i.ToString);

        // Просмотр информации об измерениях в слотах заголовка

        ShowArray(Mb, DimArr);

    End For;

End Sub UserProc;


Sub ShowArray(Mb: IMetabase; DimArr: Array Of Integer);

Var

    MDesc: IMetabaseObjectDescriptor;

    Key: Integer;

Begin

    Debug.Indent;

    For Each Key In DimArr Do

        MDesc := Mb.Item(Key);

        Debug.WriteLine(MDesc.Name + '(' + MDesc.Id + ')');

    End For;

    Debug.Unindent;

End Sub ShowArray;


При выполнении примера в консоль среды разработки будет выведена информация
 об измерениях, расположенных в отдельных слотах заголовка строк.


См. также:


[IPivotTableHeader](IPivotTableHeader.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
