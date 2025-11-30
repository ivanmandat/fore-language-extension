# IRubricatorCreator.AssignCube

IRubricatorCreator.AssignCube
-


# IRubricatorCreator.AssignCube


## Синтаксис


AssignCube(Cube: [IStandardCube](../IStandardCube/IStandardCube.htm));


## Параметры


Cube. Стандартный куб.


## Описание


Метод AssignCube устанавливает куб, на котором будет основана база данных временных рядов.


## Комментарии


Для создания БД временных рядов используйте метод [IRubricatorCreator.CreateRubricator](IRubricatorCreator.CreateRubricator.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие стандартного куба с идентификатором «STD_CUBE» и репозитория НСИ с идентификатором «RDS_REPO». Ограничения, накладываемые на стандартный куб:


-
должен присутствовать только один факт с одним значением;


-
должна быть только одна таблица-источник с данными;


-
должно присутствовать хотя бы одно измерение;


-
в отношениях между измерениями отсутствуют формулы, созданные с помощью языка Fore.


Добавьте ссылки на системные сборки: Metabase, Rds, Cubes.


			Sub UserProc;

Var

    mb: IMetabase;

    cr: IRubricatorCreator;

    CrInfo: IMetabaseObjectCreateInfo;

    mbObj: IMetabaseObject;

Begin

    mb := MetabaseClass.Active;

    cr := New RubricatorCreator.Create;

    // Задаем репозиторий
    cr.Metabase := mb;

    // Задаем параметры создаваемой БД временных рядов
    CrInfo := cr.CreateInfo;

    CrInfo.Id := mb.generateId("RUBRICATOR");

    CrInfo.Name := "База данных временных рядов на кубе";
    CrInfo.Parent := mb.Root;

    // Задаем репозиторий НСИ
    mbObj := mb.ItemById("RDS_REPO").Bind;

    cr.RdsDatabase := mbObj As IRdsDatabase;

    // Задаем стандартный куб
    mbObj := mb.ItemById("STD_CUBE").Bind;

    cr.AssignCube(mbObj As IStandardCube);

    // Создаем БД временных рядов
    cr.CreateRubricator;

End Sub UserProc;


Результат выполнения примера: создана БД временных рядов, основанная на стандартном кубе.


См. также:


[IRubricatorCreator](IRubricatorCreator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
