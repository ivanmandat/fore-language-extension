# Настройка управляющих измерений для параметризации многомерного расчета

Настройка управляющих измерений для параметризации многомерного расчета
-


# Настройка управляющих измерений для параметризации многомерного расчета


Для выполнения примера предполагается наличие в репозитории базы данных с идентификатором «DB», стандартных параметрических кубов с идентификаторами «CUBE_DEST» и «CUBE_SOUR». Куб «CUBE_DEST» в качестве факта должен использовать справочник с идентификатором «PARAM_DICT».


			Sub UserProc;

Var

    Mb: IMetabase;

    dMd: IMetabaseObjectDescriptor;

    MDcalc: IMDCalculation;

    FormulasTable: IMDCalculationFormulasTable;

    TableForFormulas: ITable;

    destination: IMDCalculationDestination;

    source: IMDCalculationSource;

    Cub: ICubeModel;

    sel: ICubeSelectionControl;

    param: IMetabaseObjectParam;

    dim: IDimensionModel;

    Des: IMetabaseObjectDescriptor;

    CrInf: IMetabaseObjectCreateInfo;

    objContrl: IMetabaseObjectControl;

    Params: IMetabaseObjectParams;

    DictParam: IMetabaseObjectDescriptor;

Begin

    Mb := MetabaseClass.Active;

    CrInf := Mb.CreateCreateInfo;

    CrInf.ClassId := MetabaseObjectClass.KE_CLASS_MDCALCULATION;

    CrInf.Name := "MDCALC";

    CrInf.Id := "MDCALC";

    CrInf.Parent := Mb.Root;

    CrInf.Permanent := True;

    Des := Mb.CreateObject(CrInf);

    dMd := Des.Edit;

    MDcalc := dMd As IMDCalculation;

// Определяем БД
    MDcalc.Database := Mb.ItemById("DB").Bind As IDatabase;

    Destination := MDcalc.Destination;

// Определяем куб-назначение
    Cub := Mb.ItemById("CUBE_DEST").Bind As ICubeModel;

    Destination.SetCube(Cub);

// Определяем куб источник
    Cub := Mb.ItemById("CUBE_SOUR").Bind As ICubeModel;

    source := MDcalc.Sources.AddCube(Cub);

// Создаем таблицу формул
    FormulasTable := MDcalc.FormulasTable;

    TableForFormulas := FormulasTable.Create;

    (TableForFormulas As IMetabaseObject).Save;

    FormulasTable.Attach(TableForFormulas);

// Создаем параметр для многомерного расчета
    Params := (dMd As IMetabaseObject).Params;

    param := Params.Add;

    param.Id := "PARAM";

    param.DataType := DbDataType.Integer;

// Устанавливаем управление параметрами вложенных объектов
    DictParam := Mb.ItemById("PARAM_DICT");

    objContrl := Params.ControlInfo.FindByKey(DictParam.Key);

    objContrl.Item(0).Expression.AsString := ":PARAM";

// Устанавливаем управление параметрами
    dim := DictParam.Bind As IDimensionModel;

    sel := MDcalc.SelectionControl;

    sel.Item(1).ControllingDim := dim;

    sel.Item(1).Expression.AsString := "FIRST.ID";

    sel.Item(1).SelectionStrategy := CubeSelectionControlStrategy.SelectFirst;

// Сохраняем расчет
    (dMd As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера, в корневом каталоге репозитория будет создан многомерный расчет на сервере БД с идентификатором «MDCALC». В качестве куба-источника выступает куб «CUBE_SOUR», куба-назначения - «CUBE_DEST». В многомерном расчете будет создан параметр, влияющий на параметр справочника куба-назначения. Для куба-источника будет определено управляющее измерение. После перестроения в зависимом справочнике будет выставлена отметка первого элемента.


См. также:


[Примеры](KeCubes_Sample.htm) | [IMDCalculation](../Interface/IMDCalculation/IMDCalculation.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
