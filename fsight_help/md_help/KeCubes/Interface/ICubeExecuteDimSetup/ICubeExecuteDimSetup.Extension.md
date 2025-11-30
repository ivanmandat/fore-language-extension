# ICubeExecuteDimSetup.Extension

ICubeExecuteDimSetup.Extension
-


# ICubeExecuteDimSetup.Extension


## Синтаксис


Extension: Object;


## Описание


Свойство Extension возвращает
 дополнительные настройки, которые будут использоваться при расчете куба.


## Комментарии


В текущей реализации свойство возвращает дополнительные настройки для
 измерений кубов ADOMD. Приведите значение данного свойства к интерфейсу
 [IAdoMdExecuteDimSetup](KeAdoMd.chm::/Interface/IAdoMdExecuteDimSetup/IAdoMdExecuteDimSetup.htm)
 для указания дополнительных настроек.


## Пример


Для выполнения примера предполагается наличие в репозитории каталога
 ADOMD с идентификатором «ADOMDTest», в этом каталоге имеется куб ADOMD
 - «SALES». В структуре куба должны присутствовать измерения на базе справочников
 ADOMD с идентификаторами «DATE» и «COUNTRY».


			Sub UserProc;

Var

    MB: IMetabase;

    CubeInst: ICubeInstance;

    Dest: ICubeInstanceDestination;

    SelSet: IDimSelectionSet;

    Sel: IDimSelection;

    DimSetup: ICubeExecuteDimSetup;

    Calcs: IAdoMdDimCalculations;

    Calc: IAdoMdDimCalculation;

    Exec: ICubeInstanceDestinationExecutor;

    AdoExec: IAdoMdCubeExecutor;

    Mat: IMatrix;

Begin

    MB := MetabaseClass.Active;

    CubeInst := MB.ItemByIdNamespace("SALES", MB.GetObjectKeyById("ADOMDTest")).Open(Null) As ICubeInstance;

    Dest := CubeInst.Destinations.DefaultDestination;

    SelSet := Dest.CreateDimSelectionSet;

    //Установка отметок

    For Each Sel In SelSet Do

        If Sel.Dimension.Ident = "COUNTRY" Then

            DimSetup := CubeClass.SelectionSetup(Sel);

            If DimSetup <> Null Then

                DimSetup.GroupIndex := 2;

            End If;

            //Создание вычисляемого элемента

            Calcs := (DimSetup.Extension As IAdoMdExecuteDimSetup).Calculations;

            Calc := Calcs.Add("");

            Calc.Element(Sel.Dimension) := Sel.LastDimElement;

            Calc.Expression := "SUM([DATE].[Year].Children)";

            //Полная отметка

            Sel.SelectAll;

        Elseif Sel.Dimension.Ident = "DATE" Then

            Sel.SelectElement(1, False);

            DimSetup := CubeClass.SelectionSetup(Sel);

            If DimSetup <> Null Then

                DimSetup.GroupIndex := 1;

            End If;

        Else

            Sel.SelectElement(1, False);

            DimSetup := CubeClass.SelectionSetup(Sel);

            If DimSetup <> Null Then

                DimSetup.GroupIndex := 0;

            End If;

        End If

    End For;

    //Вычисление

    Exec := Dest.CreateExecutor;

    AdoExec := Exec As IAdoMdCubeExecutor;

    Exec.PrepareExecute(SelSet);

    Exec.PerformExecute;

    Mat := Exec.Matrix;

End Sub UserProc;


При выполнении примера для последнего элемента в измерении «COUNTRY»
 будет добавлен вычисляемый элемент. После этого куб будет вычислен, результирующая
 матрица будет доступна в переменной «Mat».


См. также:


[ICubeExecuteDimSetup](ICubeExecuteDimSetup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
