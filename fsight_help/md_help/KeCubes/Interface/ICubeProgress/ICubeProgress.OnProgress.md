# ICubeProgress.OnProgress

ICubeProgress.OnProgress
-


# ICubeProgress.OnProgress


## Синтаксис


OnProgress(Progress: Integer);


## Параметры


Progress. Процент загрузки
 данных.


## Описание


Метод OnProgress реализует событие
 общего статуса загрузки данных из куба в куб. Данный метод должен быть
 переопределен в пользовательском классе.


## Пример


Для выполнения примера предполагается наличие загрузчика данных с идентификатором
 Load_Data, настроенного на загрузку данных из куба в куб.


			Public Class LoadData: Object, ICubeProgress

    Sub OnProgress(Progress: Integer);

    Begin

        Debug.WriteLine(Progress);

    End Sub OnProgress;

End Class LoadData;


Sub UserProc;

Var

    MB: IMetabase;

    CubeLoadInst: ICubeLoaderInstance;

    SelS: IDimSelectionSet;

    Sel: IDimSelection;

    c: LoadData;

Begin

    MB := MetabaseClass.Active;

    CubeLoadInst := MB.ItemById("Load_Data").Open(Null) As ICubeLoaderInstance;

    SelS := CubeLoadInst.Destination.CreateDimSelectionSet;

    For Each Sel In SelS Do

        Sel.SelectAll;

    End For;

    c := New LoadData.Create;

    CubeLoadInst.Execute(SelS, c);

End Sub UserProc;


После выполнения примера будет осуществлена загрузка данных из куба
 в куб, указанных в параметрах загрузчика данных. Отслеживания статуса
 загрузки осуществляется в пользовательском классе LoadData.


См. также:


[ICubeProgress](ICubeProgress.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
