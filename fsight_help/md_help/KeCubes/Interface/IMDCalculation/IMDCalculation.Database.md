# IMDCalculation.Database

IMDCalculation.Database
-


# IMDCalculation.Database


## Синтаксис


Database: [IDatabase](KeDb.chm::/Interface/IDatabase/IDatabase.htm);


## Описание


Свойство Database определяет
 базу данных, в которой хранятся все таблицы источников и приёмника данных,
 участвующих в расчете.


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

    CrInfo.Name := "Многомерный расчёт на сервере БД";

    CrInfo.Parent := MB.Root;

    MObj := MB.CreateObject(CrInfo).Edit;

    MDCalc := MObj As IMDCalculation;

    // Добавляем БД

    MDCalc.Database := MB.ItemById("MDDB").Bind As IDatabase;

    // Указываем куб-источник

    Cube := MB.ItemById("CUBE_INPUT").Bind As ICubeModel;

    MDCalc.Sources.AddCube(Cube);

    // Указываем куб-назначение

    MDCalc.Destination.SetCube(MB.ItemById("CUBE_OUTPUT").Bind As ICubeModel);

    // Создаём новую таблицу формул

    FormulasTable := MDCalc.FormulasTable;

    TableForFormulas := FormulasTable.Create;

    FormulasTable.Attach(TableForFormulas);

    MObj.Save;

End Sub UserProc;


После выполнения примера в корневом каталоге репозитория будет создан
 объект - Многомерный расчёт на сервере БД. Будут установлены один куб-источник,
 куб-назначение и создана новая таблица формул.


См. также:


[IMDCalculation](IMDCalculation.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
