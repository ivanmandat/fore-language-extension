# ICubeSelectionControl.CreateApply

ICubeSelectionControl.CreateApply
-


# ICubeSelectionControl.CreateApply


## Синтаксис


CreateApply(Mode: [SelectionControlApplyMode](../../Enums/SelectionControlApplyMode.htm)):
 [ICubeSelectionControlApply](../ICubeSelectionControlApply/ICubeSelectionControlApply.htm);


## Параметры


Mode. Параметр, определяющий
 режим, в котором будет выполняться метод [Apply](../ICubeSelectionControlApply/ICubeSelectionControlApply.Apply.htm).


## Описание


Метод CreateApply создает объект,
 осуществляющий управление параметрами куба через отметку в измерениях.


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


После выполнения примера будет создан объект, осуществляющий управление
 параметрами куба через отметку. Данный объект будет выполняться в режиме
 сортировки. На экран будет выведен исходный список измерений и результирующий
 список, в котором будут содержаться сначала управляющие, а затем управляемые
 измерения куба.


См. также:


[ICubeSelectionControl](ICubeSelectionControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
