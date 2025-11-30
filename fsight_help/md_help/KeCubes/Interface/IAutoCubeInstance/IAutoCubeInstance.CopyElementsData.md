# IAutoCubeInstance.CopyElementsData

IAutoCubeInstance.CopyElementsData
-


# IAutoCubeInstance.CopyElementsData


## Синтаксис


CopyElementsData(Selection: [IDimSelectionSet](kedims.chm::/interface/idimselectionset/idimselectionset.htm);
 DimKey: Integer; Element: Integer);


## Параметры


Selection. Отметка элементов
 измерений, в которые необходимо скопировать данные.


DimKey. Ключ измерения, по
 которому осуществляется копирование.


Element. Элемент измерения,
 данные которого необходимо скопировать по всем элементам, отмеченным в
 Selection.


## Описание


Метод CopyElementsData осуществляет
 копирование данных автоматического куба в соответствии с указанными параметрами.


## Пример


Для выполнения примера предполагается наличие автоматического куба с
 идентификатором AUTO_CUBE. В кубе имеется измерение с идентификатором
 Dim_1, по которому будет осуществляться копирование.


			Sub UserProc;

Var

    MB: IMetabase;

    CubeInst: ICubeInstance;

    DimSS: IDimSelectionSet;

    DimS: IDimSelection;

    DimKey: Integer;

Begin

    MB := MetabaseClass.Active;

    CubeInst := MB.ItemById("AUTO_CUBE").Open(Null) As ICubeInstance;

    DimSS := CubeInst.Destinations.DefaultDestination.CreateDimSelectionSet;

    For Each Dims In DimSS Do

        If Dims.Dimension.Ident = "Dim_1" Then

            DimS.SelectElement(1, False);

            DimS.SelectElement(2, False);

            DimKey := Dims.Dimension.Key;

        Else

            DimS.SelectAll;

        End If;

    End For;

    (CubeInst As IAutoCubeInstance).CopyElementsData(DimSS, DimKey, 0);

End Sub UserProc;


После выполнения примера будет осуществлено копирование данных в автоматическом
 кубе. Копируемые данные расположены по первому элементу указанного измерения.
 Копирование осуществляется в ячейки, расположенные по второму и третьему
 элементу измерения и всем элементам остальных измерений.


См. также:


[IAutoCubeInstance](IAutoCubeInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
