# IUnitsDimInstance.BasisByElement

IUnitsDimInstance.BasisByElement
-


# IUnitsDimInstance.BasisByElement


## Синтаксис


BasisByElement(Element: Integer): Integer;


## Параметры


Element. Индекс элемента справочника.


## Описание


Свойство BasisByElement возвращает
 индекс базовой единицы измерения элемента.


## Комментарии


Базовая единица измерения - это единица измерения с масштабом «1» той
 же меры, что и единица измерения элемента.


## Пример


Для выполнения примера в репозитории должна присутствовать база данных
 временных рядов с идентификатором «FC». Также необходимо добавить ссылки
 на системные сборки «Metabase», «Cubes», «Dimensions».


			Sub UserProc;

Var

    Mb: IMetabase;

    Cat: IMetabaseObject;

    Inst: IRubricatorInstance;

    UnitsDim: IDimInstance;

    Units: IUnitsDimInstance;

    Elements: IDimElements;

    i, j, Basis: Integer;

    El: Integer;

    bIsUnit: Boolean;

Begin

    Mb := MetabaseClass.Active;

    Cat := Mb.ItemById("FC").Bind;

    Inst := Cat.Open(Null) As IRubricatorInstance;

    UnitsDim := Inst.UnitsDimension;

    Elements := UnitsDim.Elements;

    Units := UnitsDim As IUnitsDimInstance;

    For i := 0 To Elements.Count - 1 Do

        El := Elements.Elements.Element(i);

        bIsUnit := Units.IsUnit(El);

        If Not bIsUnit Then

            Debug.WriteLine(Elements.Name(El));

            Basis := Units.BasisByElement(El);

            For j := 0 To Elements.Count - 1 Do

                El := Elements.Elements.Element(j);

                bIsUnit := Units.IsUnit(El);

                If (bIsUnit) And (Units.BasisByElement(El) = Basis) Then

                    Debug.WriteLine("  " + Elements.Name(El));

                    Debug.WriteLine("    масштаб: " + Units.Scale(El).ToString);

                    Debug.WriteLine("    мера: " + Units.MeasureByElement(El).ToString);

                    Debug.WriteLine("    ключ: " + Units.KeyByElement(El));

                End If;

            End For;

        Else

        End If;

    End For;

End Sub UserProc;


После выполнения примера в окно консоли будет выведена иерархия единиц
 измерения базы данных временных рядов. Для каждого небазового элемента
 будет выведен ключ, значение меры и масштаб.


См. также:


[IUnitsDimInstance](IUnitsDimInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
