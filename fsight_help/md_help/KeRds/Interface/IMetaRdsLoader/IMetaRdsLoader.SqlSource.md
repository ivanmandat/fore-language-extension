# IMetaRdsLoader.SqlSource

IMetaRdsLoader.SqlSource
-


# IMetaRdsLoader.SqlSource


## Синтаксис


SqlSource: String;


## Описание


Свойство SqlSource определяет
 SQL-запрос, в результате выполнения которого будет сформирован источник
 данных для справочника НСИ.


## Комментарии


Указанный запрос будет выполняться для извлечения данных при выполнении
 метода [IMetaRdsLoader.Load](IMetaRdsLoader.Load.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие папки с
 идентификатором MDM и таблицы с физическим именем T_Dictionary. Данная
 таблица должна содержать следующие поля: «KEY» (целочисленное), «NAME»
 (строковое), «ORD» (целочисленное).


Добавьте ссылки на системные сборки: Dt, Metabase, Rds.


			Sub UserProc;

Var

    MB: IMetabase;

    CrInfo: IMetabaseObjectCreateInfo;

    RdsLoader: IMetaRdsLoader;

Begin

    // Получаем текущий репозиторий

    MB := MetabaseClass.Active;

    CrInfo := MB.CreateCreateInfo;

    CrInfo.Parent := MB.ItemById("MDM");

    CrInfo.Id := MB.GenerateId("NewSQLDictionary", CrInfo.Parent.Key);

    // Создаем объект для создания табличного справочника НСИ и загрузки в него данных

    RdsLoader := New MetaRdsLoader.Create;

    RdsLoader.SqlSource := "Select ""KEY"", ""NAME"", ""ORD"" From  T_Dictionary";

    //Привязка атрибутов

    RdsLoader.Bindings.KeyBinding.Field := "KEY";

    RdsLoader.Bindings.NameBinding.Field := "NAME";

    RdsLoader.Bindings.OrderBinding.Field := "ORD";

    //Создание справочника

    (RdsLoader.CreateObject(CrInfo) As IMetabaseObject).Save;

    //Загрузка данных

    RdsLoader.Load(UpdateLoadMode.Insert);

End Sub UserProc;


В результате выполнения примера будет инициализирован объект, используемый
 для создания справочников НСИ и загрузки в них данных. Для создания справочника
 будут настроены привязки к полям источника, которым является SQL-запрос.
 После этого будет создан справочник и в него будут загружены данные, полученные
 в результате выполнения SQL-запроса


См. также:


[IMetaRdsLoader](IMetaRdsLoader.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
