# Переменная моделирования

Переменная моделирования
-


# Переменная моделирования


При создании и работе с переменной следует учитывать следующие особенности:


	- класс объекта «[Переменная
	 моделирования](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_1_Value/uimodelling_work_object_value.htm)» - MetabaseObjectClass.KE_CLASS_MSVARIABLE;


	- обязательно необходимо указывать родительский контейнер, так
	 как переменная моделирования может располагаться только внутри контейнера;


	- по умолчанию каждая создаваемая переменная содержит годовую
	 динамику и сценарный справочник «Факт».


Для работы с созданной переменной через язык Fore предназначен интерфейс
 [IMsVariable](../Interface/IMsVariable/IMsVariable.htm). Используя
 его свойства и методы можно осуществить загрузку данных в переменную,
 добавить в неё дополнительные измерения, изменить календарную динамику
 и настроить прочие параметры.


Примечание.
 В примерах, представленных ниже, предполагается наличие объектов, которые
 указаны в разделе описания переменных.


При использовании переменной в расчётах она должна быть представлена
 как абстрактный источник данных или как терм.


Для использования переменной как абстрактного источника данных, её нужно
 привести к интерфейсу [IVariableStub](KeCubes.chm::/Interface/IVariableStub/IVariableStub.htm):


	Sub UserProc;

	Var

	    VarStub: IVariableStub;

	    MsVar: IMsVariable;

	Begin

	    VarStub := MsVar As IVariableStub;

	End Sub UserProc;


После данного действия переменную можно добавлять в коллекцию входных
 или выходных переменных модели, реализуемую интерфейсом [IMsFormulaTransformVariables](../Interface/IMsFormulaTransformVariables/IMsFormulaTransformVariables.htm):


	Sub UserProc;

	Var

	    Model: IMsModel;

	    ModelTransform: IMsFormulaTransform;

	    OutputsVar: IMsFormulaTransformVariables;

	    VarStub: IVariableStub;

	    TransformVariable: IMsFormulaTransformVariable;

	Begin

	    ModelTransform := Model.Transform;

	    OutputsVar := ModelTransform.Outputs;

	    TransformVariable := InputsVar.Add(VarStub);

	End Sub UserProc;


Если переменная добавлена в коллекцию входных/выходных переменных, то
 её можно представить как терм, реализуемый интерфейсом [IMsFormulaTermInfo](../Interface/IMsFormulaTermInfo/IMsFormulaTermInfo.htm):


	Sub UserProc;

	Var

	    Model: IMsModel;

	    ModelTransform: IMsFormulaTransform;

	    VarStub: IVariableStub;

	    TransformVariable: IMsFormulaTransformVariable;

	    Slice: IMsFormulaTransformSlice;

	    TermInfo: IMsFormulaTermInfo;

	Begin

	    ModelTransform := Model.Transform;

	    TransformVariable := ModelTransform.Outputs.Add(VarStub);

	    Slice := TransformVariable.Slices.Add(Null);

	    TermInfo := ModelTransform.CreateTermInfo;

	    TermInfo.Slice := Slice;

	End Sub UserProc;


Используя свойства и методы интерфейса [IMsFormulaTermInfo](../Interface/IMsFormulaTermInfo/IMsFormulaTermInfo.htm),
 можно определить тип передачи терма в расчёт, задать начальное преобразование
 терма и настроить прочие параметры.


## Создание переменных


Для создания модели сальдо торгового баланса необходимы:


	- переменные, содержащие исходные данные: «Экспорт - всего, млрд.долл.США»
	 и «Импорт - всего, млрд.долл.США»;


	- переменная, в которую будут выгружены итоговые данные: «Сальдо
	 торгового баланса, млрд.долл.США».


Для выполнения модуля по созданию переменной «Экспорт - всего, млрд.долл.США»
 необходимо добавить ссылки на сборки: Metabase, Ms.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    CrInfo: IMetabaseObjectCreateInfo;

	    MObj: IMetabaseObject;

	Begin

	    MB := MetabaseClass.Active;

	    // Задаем параметры созданияпеременной

	    CrInfo := MB.CreateCreateInfo;

	    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_MSVARIABLE;

	    // Задаем идентификаторпеременной

	    CrInfo.Id := "EXPORT";

	    // Задаем наименованиепеременной

	    CrInfo.Name := "Экспорт - всего, млрд.долл.США";

	    // Задаем контейнер моделированиядля переменной

	    CrInfo.Parent := MB.ItemById("MODEL_SPACE");

	    // Создаем и сохраняемпеременную

	    MObj := MB.CreateObject(CrInfo).Edit;

	    MObj.Save;

	    // Вывод информации опеременной в окно консоли

	    Debug.WriteLine("Созданапеременная '" + MObj.Name + "' с идентификатором '" + MObj.Id + "'");

	End Sub UserProc;


После выполнения модуля будет создана переменная «Экспорт - всего, млрд.долл.США»
 с идентификатором EXPORT, информация об этом будет выведена в окно консоли.


Далее аналогичным образом создайте переменную «Импорт - всего, млрд.долл.США»
 с идентификатором IMPORT и переменную «Сальдо торгового баланса, млрд.долл.США»
 с идентификатором BALANCE.


Следующим шагом является наполнение начальными данными переменных «Экспорт
 - всего, млрд.долл.США» и «Импорт - всего, млрд.долл.США». По умолчанию
 все созданные переменные имеют годовую динамику. Именно для неё и будут
 вводиться данные.


Для выполнения модуля по наполнению начальными данными переменной «Экспорт
 - всего, млрд.долл.США» необходимо добавить ссылки на сборки: Cubes, Dimensions,
 MathFin, Matrix, Metabase, Ms.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    ModelSp: IMetabaseObjectDescriptor;

	    MObj: IMetabaseObject;

	    MsVar: IMsVariable;

	    Cube: IAutoCube;

	    CubeInst: ICubeInstance;

	    Des: ICubeInstanceDestination;

	    DimSS: IDimSelectionSet;

	    DimS: IDimSelection;

	    Elem: IDimElementArray;

	    Mat: IMatrix;

	    Coord: IMatrixCoord;

	    Sto: ICubeInstanceStorage;

	    i: Integer;

	Begin

	    // Задаем переменнуюмоделирования, которая должна быть наполнена данными

	    MB := MetabaseClass.Active;

	    ModelSp := MB.ItemById("MODEL_SPACE");

	    MObj := MB.ItemByIdNamespace("EXPORT", ModelSp.Key).Edit;

	    MsVar := MObj As IMsVariable;

	    // Устанавливаем способнаполнения данными - вручную

	    MsVar.DataFillType := MsVariableDataFillType.Manual;

	    // Получаем представлениепеременной в экспресс-анализе

	    Cube := MsVar.Cube;

	    CubeInst := (Cube As IMetabaseObject).Open(Null) As ICubeInstance;

	    Des := CubeInst.Destinations.DefaultDestination;

	    DimSS := Des.CreateDimSelectionSet;

	    // Отмечаем динамику, для которой будут указываться данные: Годы

	    DimS := DimSS.Item(0);

	    Elem := DimS.Dimension.Levels.Item(0).Elements;

	    For Each i In Elem Do

	        DimS.SelectElement(i, False);

	    End For;

	    // Отмечаем сценарныйсправочник «Факт»

	    DimSS.Item(1).SelectAll;

	    // Получаем пустую матрицуданных переменной

	    Mat := Des.Execute(DimSS);

	    Mat.ValueFlag := Mat.ValueFlag + 1;

	    Coord := Mat.CreateCoord;

	    Coord.Item(1) := 0;

	    // Заполняем матрицуслучайными числами из диапазона [50; 100]

	    Debug.WriteLine("Данныепеременной '" + MObj.Name + "':");

	    For Each i In Elem Do

	        Coord.Item(0) := i;

	        Mat.Item(Coord) := Math.RandBetween(50, 100);

	        Debug.WriteLine(Mat.Item(Coord));

	    End For;

	    // Сохраняем данные переменной

	    Sto := Des.CreateStorage;

	    Sto.SaveMatrix(Mat, Mat.ValueFlag);

	    MObj.Save;

	End Sub UserProc;


После выполнения модуля переменная «Экспорт - всего, млрд.долл.США»
 будет наполнена данными: случайные числа из диапазона [50; 100]. Эти данные
 будут выведены в окно консоли.


Аналогичным образом наполните данными переменную «Импорт - всего, млрд.долл.США».
 Переменная «Сальдо торгового баланса, млрд.долл.США» будет содержать результаты
 расчёта, поэтому данные в неё загружать не требуется.


Следующим шагом будет [создание
 модели](KeMs_Programming_Model.htm#model_create).


См. также:


[Общие принципы программирования с использованием
 сборки Ms](KeMs_Programming.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
