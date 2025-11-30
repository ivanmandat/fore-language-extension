# IMsFormulaTransformSlice.Selection

IMsFormulaTransformSlice.Selection
-


# IMsFormulaTransformSlice.Selection


## Синтаксис


Selection: [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm);


## Описание


Свойство Selection определяет
 объект, содержащий отметку среза.


## Пример


Для выполнения примера предполагается наличие модели с идентификатором
 NEW_NONLINREG в контейнере моделирования с идентификатором KONT_MODEL.
 В модели содержатся входные переменные с дополнительными измерениями.


Добавьте ссылки на системные сборки: Metabase,Ms, Dimensions.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Model: IMsModel;

    Slice: IMsFormulaTransformSlice;

    TransVar: IMsFormulaTransformVariable;

    i: Integer;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemByIdNamespace("NEW_NONLINREG", MB.ItemById("KONT_MODEL").Key).Edit;

    Model := MObj As IMsModel;

    TransVar := Model.Transform.Inputs.Item(0);

    Slice := TransVar.Slices.Item(0);

    For i := 0 To Slice.Selection.Count - 1 Do

        Slice.Selection.Item(i).DeselectAll;

        Slice.Selection.Item(i).SelectElement(0, True);

    End For;

    Debug.WriteLine(Slice.CalendarMode);

    MObj.Save;

End Sub UserProc;


После выполнения примера для первой входной переменной в модели с идентификатором
 NEW_NONLINREG будет изменена отметка по всем дополнительным измерениям.
 В консоль будет выведен [способ
 расчёта](../../Enums/MsCalendarMode.htm) календарных элементов в срезе переменной.


См. также:


[IMsFormulaTransformSlice](IMsFormulaTransformSlice.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
