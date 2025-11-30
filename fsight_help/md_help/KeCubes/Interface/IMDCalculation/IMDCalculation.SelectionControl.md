# IMDCalculation.SelectionControl

IMDCalculation.SelectionControl
-


# IMDCalculation.SelectionControl


## Синтаксис


SelectionControl: [ICubeSelectionControl](../ICubeSelectionControl/ICubeSelectionControl.htm);


## Описание


Свойство SelectionControl возвращает
 параметры управляющих измерений для параметризации многомерного расчета.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 с идентификатором DB, стандартных параметрических кубов с идентификаторами
 CUBE_SOUR и CUBE_DEST. Куб CUBE_DEST в качестве факта должен использовать
 справочник с идентификатором PARAM_DICT.


			Sub UserProc;

Var

    Mb: IMetabase;

    CrInf: IMetabaseObjectCreateInfo;

    MDcalc: IMDCalculation;

    FormulasTable: IMDCalculationFormulasTable;

    TableForFormulas: ITable;

    Cube: ICubeModel;

    SelControl: ICubeSelectionControl;

    Params: IMetabaseObjectParams;

    Param: IMetabaseObjectParam;

    Dim: IDimensionModel;

    ObjContrl: IMetabaseObjectControl;

    DictParam: IMetabaseObjectDescriptor;

Begin

    Mb := MetabaseClass.Active;

    CrInf := Mb.CreateCreateInfo;

    CrInf.ClassId := MetabaseObjectClass.KE_CLASS_MDCALCULATION;

    CrInf.Name := "MDCALC";

    CrInf.Id := "MDCALC";

    CrInf.Parent := Mb.Root;

    CrInf.Permanent := True;

    MDcalc := Mb.CreateObject(CrInf).Edit As IMDCalculation;

    // Определяем БД

    MDcalc.Database := Mb.ItemById("DB").Bind As IDatabase;

    // Определяем куб-назначение

    Cube := Mb.ItemById("CUBE_DEST").Bind As ICubeModel;

    MDcalc.Destination.SetCube(Cube);

    // Определяем куб-источник

    Cube := Mb.ItemById("CUBE_SOUR").Bind As ICubeModel;

    MDcalc.Sources.AddCube(Cube);

    // Создаём таблицу формул

    FormulasTable := MDcalc.FormulasTable;

    TableForFormulas := FormulasTable.Create;

    (TableForFormulas As IMetabaseObject).Save;

    FormulasTable.Attach(TableForFormulas);

    // Создаем параметр для многомерного расчета

    Params := (MDcalc As IMetabaseObject).Params;

    Param := Params.Add;

    Param.Id := "PARAM";

    Param.DataType := DbDataType.Integer;

    // Устанавливаем управление параметрами вложенных объектов

    DictParam := Mb.ItemById("PARAM_DICT");

    ObjContrl := Params.ControlInfo.FindByKey(DictParam.Key);

    ObjContrl.Item(0).Expression.AsString := ":PARAM";

    // Устанавливаем управление параметрами

    Dim := DictParam.Bind As IDimensionModel;

    SelControl := MDcalc.SelectionControl;

    SelControl.Item(1).ControllingDim := Dim;

    SelControl.Item(1).Expression.AsString := "FIRST.ID";

    // Сохраняем расчет

    (MDcalc As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера в корневом каталоге репозитория будет создан
 многомерный расчет на сервере БД с идентификатором MDCALC. В многомерном
 расчете будет задан один куб-источник и куб назначения, будет создан параметр,
 влияющий на параметр справочника куба-назначения. Для куба-источника будет
 определено управляющее измерение.


См. также:


[IMDCalculation](IMDCalculation.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
