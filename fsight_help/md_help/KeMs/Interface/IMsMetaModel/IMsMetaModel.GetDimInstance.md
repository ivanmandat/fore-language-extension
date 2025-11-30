# IMsMetaModel.GetDimInstance

IMsMetaModel.GetDimInstance
-


# IMsMetaModel.GetDimInstance


## Синтаксис


GetDimInstance(DimModel: [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm),
 Stub: [IVariableStub](KeCubes.chm::/Interface/IVariableStub/IVariableStub.htm)):
 [IDimInstance](KeDims.chm::/interface/IDimInstance/IDimInstance.htm);


## Параметры


DimModel. Справочник, используемый
 в абстрактном источнике данных;


Stub. Абстрактный источник
 данных.


## Описание


Метод GetDimInstance возвращает
 данные справочника из абстрактного источника данных.


## Комментарии


Метод актуален для получения данных справочника, которые используются
 при расчёте задачи моделирования с учётом [управляющих
 измерений](UiNavObj.chm::/Cube/CreateCube/Master_Calculation/UiMd_Cube_CreateCube_Master_Calculation_managed_dim.htm) в кубе.


Абстрактным источником данных может выступать:


	- стандартный куб;


	- виртуальный куб;


	- представление-куб;


	- база данных временных рядов;


	- переменная моделирования, являющаяся отдельным объектом в репозитории.


Для получения абстрактного источника данных приведите требуемый объект
 к интерфейсу [IVariableStub](KeCubes.chm::/Interface/IVariableStub/IVariableStub.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории [контейнера
 моделирования](UiModelling.chm::/2_Container_of_Modeling/2_1_Create_Cont_Modeling/UiModelling_Create_Container.htm) с идентификатором CONT_MODEL, в котором
 содержится [задача
 моделирования](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_4_Problem/uimodelling_problem.htm) с идентификатором PROBLEM и [метамодель](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_3_MetaModel/uimodelling_metamodel.htm).
 Для метамодели должна быть задана [цепочка
 расчёта](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_3_MetaModel/uimodelling_metamodel_2.htm), в которой используется стандартный куб с идентификатором
 CUBE с [управляющим
 измерением](UiNavObj.chm::/Cube/CreateCube/Master_Calculation/UiMd_Cube_CreateCube_Master_Calculation_managed_dim.htm), и [параметр](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_3_MetaModel/Metamodel_params.htm)
 типа «Отметка». В качестве управляющего
 измерения и параметра для метамодели используется [параметрический](UiNavObj.chm::/reference_book/Master_RDS_reference_book/Parameters.htm)
 табличный справочник НСИ с идентификатором DIMENSION_PARAM.


Добавьте ссылки на системные сборки: Metabase, Ms, Cubes, Dimensions.


			Sub UserProc;

Var

    Mb: IMetabase;

    MsKey, i: Integer;

    Problem: IMsProblem;

    MetaModel: IMsMetaModel;

    Stub: IVariableStub;

    ParamDim: IMetabaseObjectDescriptor;

    DimInst: IDimInstance;

    Elements: IDimElements;

    DimSelect: IDimSelection;

    Name: String;

    Settings: IMsProblemCalculationSettings;

    Calc: IMsProblemCalculation;

    ParamValues: IMsModelParamValues;

Begin

    // Получим текущий репозиторий

    Mb := MetabaseClass.Active;

    // Получим ключ контейнера моделирования

    MsKey := Mb.GetObjectKeyById("CONT_MODEL");

    // Получим задачу моделирования

    Problem := Mb.ItemByIdNamespace("PROBLEM", MsKey).Edit As IMsProblem;

    // Получим метамодель

    MetaModel := Problem.MetaModel;

    // Получим абстрактный источник данных (куб) и данные справочника

    Stub := Mb.ItemById("CUBE").Bind As IVariableStub;

    ParamDim := Mb.ItemById("DIMENSION_PARAM");

    DimInst := MetaModel.GetDimInstance(ParamDim, Stub);

    // Выведем в консоль наименования полученных элементов справочника

    Elements := DimInst.Elements;

    For i := 0 To Elements.Count - 1 Do

        Name := Elements.Name(i);

        Debug.WriteLine(Name);

    End For;

    // Зададим настройки расчёта задачи моделирования

    Settings := Problem.CreateCalculationSettings;

    // Получим параметр метамодели
 и зададим отметку из полученных элементов справочника

    ParamValues := Settings.ParamValues;

    DimSelect := DimInst.CreateSelection;

    DimSelect.SelectElement(1, False);

    DimSelect.SelectElement(3, False);

    ParamValues.Item(0).Value := DimSelect;

    Calc := Problem.Calculate(Settings);

    // Рассчитаем задачу моделирования

    Calc.Run;

End Sub UserProc;


После выполнения примера будут получены данные справочника из абстрактного
 источника данных и рассчитана задача моделирования с заданной отметкой
 в параметре метамодели из полученных элементов справочника
 с индексом «1» и «3». В консоль будут выведены наименования всех элементов
 справочника.


См. также:


[IMsMetaModel](IMsMetaModel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
