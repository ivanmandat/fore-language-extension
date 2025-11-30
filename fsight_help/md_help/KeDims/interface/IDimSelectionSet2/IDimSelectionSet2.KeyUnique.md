# IDimSelectionSet2.KeyUnique

IDimSelectionSet2.KeyUnique
-


# IDimSelectionSet2.KeyUnique


## Синтаксис


KeyUnique: Boolean;


## Описание


Свойство KeyUnique определяет
 признак проверки уникальности ключей отметок, входящих в коллекцию.


## Комментарии


Допустимые значения:


	- True. При добавлении
	 в коллекцию нового справочника осуществляется проверка на его наличие
	 в отметке. Если справочник уже добавлен, то повторного добавления
	 не производится.


	- False. При добавлении
	 в коллекцию нового справочника не осуществляется проверка на его наличие
	 в отметке.


Установка свойству значения False
 позволяет добавить в коллекцию один и тот же справочник несколько раз.
 Это может потребоваться, если предполагается использование одного справочника
 но с различными альтернативными иерархиями. Подобное поведение используется
 при работе с кубами ADOMD.


## Пример


Для выполнения примера предполагается наличие в репозитории каталога
 ADOMD с идентификатором «ADOMDTest», в этом каталоге имеется куб ADOMD
 - «SALES». В структуре куба присутствует измерение на базе справочников
 ADOMD с идентификаторами «PRODUCTS», для которого создано несколько альтернативных
 иерархий.


			Sub UserProc;

Var

    MB: IMetabase;

    CubeInst: ICubeInstance;

    Dest: ICubeInstanceDestination;

    SelSet: IDimSelectionSet;

    Sel, Sel2: IDimSelection;

    Hiers: IDimHierarchiesInstance;

    DimSetup: ICubeExecuteDimSetup;

    Exec: ICubeInstanceDestinationExecutor;

    AdoExec: IAdoMdCubeExecutor;

    Mat: IMatrix;

Begin

    MB := MetabaseClass.Active;

    CubeInst := MB.ItemByIdNamespace("SALES", MB.GetObjectKeyById("ADOMDTest")).Open(Null) As ICubeInstance;

    Dest := CubeInst.Destinations.DefaultDestination;

    SelSet := Dest.CreateDimSelectionSet;

    //Отмена проверки уникальности отметок

    (SelSet As IDimSelectionSet2).KeyUnique := False;

    //Отметка измерения

    Sel := SelSet.FindById("PRODUCTS");

    //Ультернативные иерархии

    Hiers := Sel.Dimension.Hierarchies;

    //Добавление отметки измерения еще раз

    Sel2 := SelSet.Add(Sel.Dimension);

    //Установка альтернативной иерархии для второго экземпляра отметки измерения

    Sel2.Hierarchy := Hiers.FindByKey(6);

    //Установка отметок

    For Each Sel In SelSet Do

        If Sel.Dimension.Ident = "PRODUCTS" Then

            Sel.SelectAll;

            DimSetup := CubeClass.SelectionSetup(Sel);

            If DimSetup <> Null Then

                DimSetup.GroupIndex := 1;

            End If;

        Else

            Sel.SelectElement(1, False);

            DimSetup := CubeClass.SelectionSetup(Sel);

            If DimSetup <> Null Then

                DimSetup.GroupIndex := 2;

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


При выполнении примера будет осуществлена подготовка и расчет указанного
 куба ADOMD. При подготовке отметки для расчета в коллекцию отметок измерение
 «PRODUCTS» будет включено два раза. Для второго экземпляра будет применена
 альтернативная иерархия. Отметка по каждому экземпляру измерения «PRODUCTS»
 будет выставлена максимальная. Результат расчета будет доступен в переменной
 «Mat».


См. также:


[IDimSelectionSet2](IDimSelectionSet2.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
