# IRubricator.AlterAndSave

IRubricator.AlterAndSave
-


# IRubricator.AlterAndSave


## Синтаксис


AlterAndSave;


## Описание


Метод AlterAndSave создает/обновляет
 системные таблицы базы данных временных рядов.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 с идентификатором OBJ_DB и репозитория НСИ с идентификатором RDS_REPO.


			Sub UserProc;

Var

    Mb: IMetabase;

    Inf: IMetabaseObjectCreateInfo;

    Obj: IMetabaseObjectDescriptor;

    Cat: IRubricator;

    Rds: IRdsDatabase;

    Database: IDatabase;

Begin

    Mb := MetabaseClass.Active;

    Inf := Mb.CreateCreateInfo;

    Inf.Id := "OBJ_FC_EX";

    Inf.Name := Inf.Id;

    Inf.ClassId := MetabaseObjectClass.KE_CLASS_RUBRICATOR;

    Inf.Parent := Mb.Root;

    Inf.KeepEdit := True;

    Obj := Mb.CreateObject(Inf);

    Cat := (Obj As IRubricator);

    Rds := Mb.ItemById("RDS_REPO").Bind As IRdsDatabase;

    Cat.Database := Rds;

    Database := Mb.ItemById("OBJ_DB").Bind As IDatabase;

    Cat.DatabaseEx := Database;

    Cat.CreateFacts;

    Cat.AutoUnits := True;

    Cat.CalendarLevels := DimCalendarLevelSet.Year Or DimCalendarLevelSet.Quarter;

    Cat.AlterAndSave;

End Sub UserProc;


После выполнения примера в репозитории будет создана базы данных временных
 рядов OBJ_FC_EX со всеми системными таблицами, которые будут расположены
 в самой базе данных временных рядов.


См. также:


[IRubricator](IRubricator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
