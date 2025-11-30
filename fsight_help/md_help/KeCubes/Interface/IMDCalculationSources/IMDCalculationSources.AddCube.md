# IMDCalculationSources.AddCube

IMDCalculationSources.AddCube
-


# IMDCalculationSources.AddCube


## Синтаксис


AddCube(Cube: [ICubeModel](../ICubeModel/ICubeModel.htm)):
 [IMDCalculationSource](../IMDCalculationSource/IMDCalculationSource.htm);


## Параметры


Cube. Куб, который необходимо
 добавить в список источников многомерного расчета на сервере БД.


## Описание


Метод AddCube осуществляет добавление
 куба в список источников данных многомерного расчета на сервере БД.


## Комментарии


При добавлении куба автоматически создаются срезы для каждого измерения
 куба, а так же создаются показатели, связанные с фактами куба.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 с идентификатором MDDB, а так же двух стандартных кубов CUBE_INPUT и CUBE_OUTPUT.
 Данные кубы основаны на таблицах, хранящихся в данной базе данных.


			Sub UserProc;

Var

    MB: IMetabase;

    CrInfo: IMetabaseObjectCreateInfo;

    MObj: IMetabaseObject;

    MDCalc: IMDCalculation;

    Cube: ICubeModel;

    FormulasTable: IMDCalculationFormulasTable;

    TableForFormulas: ITable;

Begin

    MB := MetabaseClass.Active;

    CrInfo := MB.CreateCreateInfo;

    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_MDCALCULATION;

    CrInfo.Id := "MDCALC_1";

    CrInfo.Name := "Многомерный расчет на сервере БД";

    CrInfo.Parent := MB.Root;

    Debug.WriteLine(CrInfo.Id);

    MObj := MB.CreateObject(CrInfo).Edit;

    MDCalc := MObj As IMDCalculation;

    // Добавляем БД

    MDCalc.Database := MB.ItemById("MDDB").Bind As IDatabase;

    // Указываю куб-источник

    Cube := MB.ItemById("CUBE_INPUT").Bind As ICubeModel;

    MDCalc.Sources.AddCube(Cube);

    // Указываем куб-назначение

    MDCalc.Destination.SetCube(MB.ItemById("CUBE_OUTPUT").Bind As ICubeModel);

    // Создаем новую таблицу формул

    FormulasTable := MDCalc.FormulasTable;

    TableForFormulas := FormulasTable.Create;

    FormulasTable.Attach(TableForFormulas);

    MObj.Save;

End Sub UserProc;


После выполнения примера в корневом каталоге репозитория будет создан
 объект - Многомерный расчет на сервере БД. Будут установлены один куб-источник,
 куб-назначение и создана новая таблица формул.


См. также:


[IMDCalculationSources](IMDCalculationSources.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
