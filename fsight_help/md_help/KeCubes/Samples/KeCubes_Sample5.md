# Настройка параметров объектов, входящих в многомерный расчет на сервере БД

Настройка параметров объектов, входящих в многомерный расчет на сервере БД
-


# Настройка параметров объектов, входящих в многомерный расчет на сервере БД


Для выполнения примера предполагается наличие в репозитории многомерного расчета с идентификатором «MDCALC», стандартного параметрического куба с идентификаторами «CUBE_DEST», который в качестве факта использует справочник с идентификатором «PARAM_DICT».


			Sub UserProc;

Var

    Mb: IMetabase;

    dMd: IMetabaseObjectDescriptor;

    MDcalc: IMDCalculation;

    Destination: IMDCalculationDestination;

    Cub: ICubeModel;

    param: IMetabaseObjectParam;

    objContrl: IMetabaseObjectControl;

    Params: IMetabaseObjectParams;

    DictParam: IMetabaseObjectDescriptor;

Begin

    Mb := MetabaseClass.Active;

    dMd := Mb.ItemById("MDCALC").Edit;

    MDcalc := dMd As IMDCalculation;

// Определяем куб-назначение
    Cub := Mb.ItemById("CUBE_DEST").Bind As ICubeModel;

    Destination := MDcalc.Destination;

    Destination.SetCube(Cub);

// Создаем параметр для многомерного расчета
    Params := (dMd As IMetabaseObject).Params;

    param := Params.Add;

    param.Id := "PARAM_1";

    param.DataType := DbDataType.Integer;

// Устанавливаем управление параметрами вложенных объектов
    DictParam := Mb.ItemById("PARAM_DICT");

    objContrl := Params.ControlInfo.FindByKey(DictParam.Key);

    objContrl.Item(0).Expression.AsString := ":PARAM_1";

// Сохраняем расчет
    (dMd As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера, для многомерного расчет на сервере БД в качестве куба-назначения будет установлен куб «CUBE_DEST». В многомерном расчете будет создан параметр, влияющий на параметр справочника куба-назначения.


См. также:


[Примеры](KeCubes_Sample.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
