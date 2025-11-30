# Создание контейнера моделирования

Создание контейнера моделирования
-


# Создание контейнера моделирования


Для выполнения примера предполагается наличие в репозитории базы данных
 с идентификатором BD.


Добавьте ссылки на системные сборки: Db, Metabase, Ms.


			Sub UserProc;

Var

    MB: IMetabase;

    CrInfo: IMetabaseObjectCreateInfo;

    MObj: IMetabaseObject;

    Kont: IMsModelSpace;

Begin

    MB := MetabaseClass.Active;

    CrInfo := MB.CreateCreateInfo;

    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_MODELSPACE;

    CrInfo.Id := "KONT_MODEL";

    CrInfo.Name := "Новый контейнер моделирования";

    CrInfo.Parent := MB.Root;

    MObj := MB.CreateObject(CrInfo).Edit;

    Kont := MObj As IMsModelSpace;

    Kont.Database := MB.ItemById("BD").Bind As IDatabase;

    Kont.StartDate := DateTime.ComposeDay(2000, 1, 1);

    Kont.EndDate := DateTime.AddYears(Kont.StartDate, 10);

    MObj.Save;

End Sub UserProc;


После выполнения примера в корневом каталоге репозитория будет создан
 контейнер моделирования. Календарный период для данного контейнера будет
 установлен - 10 лет.


См. также:


[Примеры](KeMs_Sample.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
