# IMsUnitInfo.BaseUnit

IMsUnitInfo.BaseUnit
-


# IMsUnitInfo.BaseUnit


## Синтаксис


BaseUnit: Integer


## Описание


Свойство BaseUnit возвращает индекс базовой единицы измерения.


## Комментарии


Индекс BaseUnit соответствует индексу элемента в справочнике мер и единиц измерения. Справочник возвращает свойство [IMsUnitInfo.UnitsDimension](IMsUnitInfo.UnitsDimension.htm).


Если BaseUnit возвращает «-1», то базовая единица измерения не определена.


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных временных рядов с идентификатором «FC». В контейнере моделирования данной базы содержится модель детерминированного уравнения с идентификатором «DETERM». Справочник единиц измерения не является обязательным атрибутом базы данных временных рядов.


Добавьте ссылки на системные сборки «Metabase», «Cubes», «Ms», «Dimensions».


			Sub UserProc;

Var

    Mb: IMetabase;

    Cat: IRubricator;

    MsDesc: IMetabaseObjectDescriptor;

    Model: IMsModel;

    Formula: IMsFormula;

    Determ: IMsDeterministicTransform;

    i: Integer;

    Operands: IMsFormulaTermList;

    UnitInfo: IMsUnitInfo;

    Elements: IDimElements;

    Term: IMsFormulaTerm;

Begin

    Mb := MetabaseClass.Active;

    Cat := Mb.ItemById("FC").Bind As IRubricator;

    MsDesc := Cat.ModelSpace;

    Model := mb.ItemByIdNamespace("DETERM", MsDesc.Key).Bind As IMsModel;

    Formula := Model.Transform.FormulaItem(0);

    Determ := Formula.Method As IMsDeterministicTransform;

    Operands := Determ.Operands;

    UnitInfo := Operands.UnitInfo;

    If UnitInfo.Unit <> -1 Then

        Debug.WriteLine("Все операнды модели имеют одинаковые единицы измерения: ");

        Elements := UnitInfo.UnitsDimension.Elements;

        Debug.WriteLine("  - базовая единица измерения: " + Elements.Name(UnitInfo.BaseUnit));

        Debug.WriteLine("  - единица измерения: " + Elements.Name(UnitInfo.Unit));

        Debug.WriteLine("  - мера: " + Elements.Name(UnitInfo.Measure));

    Else

        Debug.WriteLine("Операнды модели имеют различные единицы измерения:");

        For i := 0 To Operands.Count - 1 Do

            Term := Operands.Item(i);

            Debug.WriteLine("  " + Term.TermToText);

            UnitInfo := Term.UnitInfo;

            Elements := UnitInfo.UnitsDimension.Elements;

            Debug.WriteLine("  - базовая единица измерения: " + Elements.Name(UnitInfo.BaseUnit));

            Debug.WriteLine("  - единица измерения: " + Elements.Name(UnitInfo.Unit));

            Debug.WriteLine("  - мера: " + Elements.Name(UnitInfo.Measure));

            Debug.WriteLine("");

        End For;

    End If;

End Sub UserProc;


Результат выполнения примера: если все операнды детерминированного уравнения имеют общую единицу измерения, то информация о ней, будет выведена в окно консоли. Если операнды имеют различные единицы измерения, то информация об единице измерения будет выведена для каждого операнда.


См. также:


[IMsUnitInfo](IMsUnitInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
