# IPivot.AddHierarchy

IPivot.AddHierarchy
-


# IPivot.AddHierarchy


## Синтаксис


AddHierarchy(Value: [IDimHierarchyInstance](KeDims.chm::/interface/IDimHierarchyInstance/IDimHierarchyInstance.htm));


## Параметры


Value. Данные альтернативной
 иерархии справочника.


## Описание


Метод AddHierarchy добавляет
 альтернативную иерархию в коллекцию.


## Комментарии


Для удаления альтернативной иерархии из коллекции используйте метод
 [IPivot.RemoveHierarchy](IPivot.RemoveHierarchy.htm).


Для получения признака, определяющего наличие указанной альтернативной
 иерархии в коллекции, используйте свойство [IPivot.ContainsHierarchy](IPivot.ContainsHierarchy.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчёта
 с идентификатором EXPRESS_REPORT. В экспресс-отчёте должен быть выбран
 [источник
 данных](UIExpress.chm::/purpose/UiExpress_Tree_Multivariate_Object.htm) - стандартный куб, в состав которого входит
 табличный справочник НСИ с идентификатором DIM, содержащий хотя бы одну
 [альтернативную
 иерархию](UiNavObj.chm::/reference_book/look-and-feel_Reference_book/Use_AlterHier_ForRefBook.htm).


Добавьте ссылки на системные сборки: Dimensions, Express, Metabase,
 Pivot.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj, Dimension: IMetabaseObject;

    Express: IEaxAnalyzer;

    Pivot: IPivot;

    DimModel: IDimensionModel;

    DimInstance: IDimInstance;

    Hierarchies: IDimHierarchies;

    Hierarchy: IDimHierarchy;

    HierarchiesInstance: IDimHierarchiesInstance;

    HierarchyInstance: IDimHierarchyInstance;

Begin

    MB := MetabaseClass.Active;

    // Получим экспресс-отчёт

    MObj := MB.ItemById("EXPRESS_REPORT").Edit;

    Express := MObj As IEaxAnalyzer;

    // Получим альтернативную иерархию справочника

    Dimension := MB.ItemById("DIM").Bind;

    DimModel := Dimension As IDimensionModel;

    Hierarchies := DimModel.Hierarchies;

    Hierarchy := Hierarchies.Item(0);

    // Получим данные альтернативной иерархии

    DimInstance := Dimension.Open(Null) As IDimInstance;

    HierarchiesInstance := DimInstance.Hierarchies;

    HierarchyInstance := HierarchiesInstance.Item(0);

    // Получим таблицу экспресс-отчёта

    Pivot := Express.Pivot;

    // Добавим альтернативную иерархию, если она не содержится в коллекции

    If Pivot.ContainsHierarchy(Hierarchy) = False Then

        Pivot.AddHierarchy(HierarchyInstance);

    End If;

    // Сохраним изменения

    MObj.Save;

End Sub UserProc;


После выполнения примера в экспресс-отчёте будет добавлена альтернативная
 иерархия в качестве дополнительного измерения в группе вкладок «[Отметка](UiSelection.chm::/Selection/Dimension.htm)».


См. также:


[IPivot](IPivot.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
