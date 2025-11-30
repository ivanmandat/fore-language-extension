# ICubeSelectionControlApply.Apply

ICubeSelectionControlApply.Apply
-


# ICubeSelectionControlApply.Apply


## Синтаксис


Apply: Boolean;


## Описание


Метод Apply осуществляет построение
 отметки куба в заданном режиме.


## Пример


Для выполнения примера предполагается наличие в репозитории куба с идентификатором
 «CUBE_SEP».


			Sub UserProc;

Var

    MB: IMetabase;

    Cube: ICubeModel;

    CubeInst: ICubeInstance;

    Ap: ICubeSelectionControlApply;

    Se: IDimSelection;

Begin

    MB := MetabaseClass.Active;

    Cube := MB.ItemById("CUBE_SEP").Bind As ICubeModel;

    CubeInst := (Cube As IMetabaseObject).Open(Null) As ICubeInstance;

    //Режим сортировки списка измерений

    Ap := Cube.SelectionControl.CreateApply(SelectionControlApplyMode.Sort);

    Ap.SourceSelection := CubeInst.Destinations.DefaultDestination.CreateDimSelectionSet;

    Debug.WriteLine("---Исходный список---");

    For Each Se In Ap.SourceSelection Do

        Debug.WriteLine(Se.Dimension.Name);

    End For;

    Ap.Apply;

    Debug.WriteLine("---Список после сортировки---");

    For Each Se In Ap.ResultSelection Do

        Debug.WriteLine(Se.Dimension.Name);

    End For;

End Sub UserProc;


При выполнении примера будет создан объект, который осуществляет управление
 отметкой куба. Управление будет выполняться в режиме сортировки. в консоль
 среды разработки будут выведены исходный список измерений и результирующий
 список, в котором будут содержаться сначала управляющие, а затем управляемые
 измерения куба.


См. также:


[ICubeSelectionControlApply](ICubeSelectionControlApply.htm)
 | [ICubeSelectionControl.CreateApply](../ICubeSelectionControl/ICubeSelectionControl.CreateApply.htm)
 | [SelectionControlApplyMode](../../Enums/SelectionControlApplyMode.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
