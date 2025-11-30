# IRubricator.CreateFacts

IRubricator.CreateFacts
-


# IRubricator.CreateFacts


## Синтаксис


CreateFacts;


## Описание


Метод CreateFacts создает составной
 справочник в [репозитории НСИ](IRubricator.Database.htm), в
 котором будет храниться информация о показателях базы данных временных
 рядов.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 с идентификатором BD.


			Sub UserProc;

Var

    Mb: IMetabase;

    NewRDS: IRdsDatabase;

    NewRub: IRubricator;

    CrInfo: IMetabaseObjectCreateInfo;

Begin

    Mb := MetabaseClass.Active;

    // Создаем репозиторий НСИ

    CrInfo := MB.CreateCreateInfo;

    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_RDS_DATABASE;

    CrInfo.Id := "NewNSI";

    CrInfo.Name := "NewNSI";

    CrInfo.Parent := MB.Root;

    CrInfo.Permanent := True;

    NewRDS := MB.CreateObject(CrInfo).Edit As IRdsDatabase;

    NewRDS.Database := Mb.ItemById("BD").Bind As IDatabase;

    (NewRDS As IMetabaseObject).Save;

    // Создаем базу данных временных рядов

    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_RUBRICATOR;

    CrInfo.Id := "NewCatalog";

    CrInfo.Name := "NewCatalog";

    CrInfo.Parent := MB.Root;

    CrInfo.Permanent := True;

    NewRub := MB.CreateObject(CrInfo).Edit As IRubricator;

    NewRub.Database := NewRDS;

    // Создание в репозитории НСИ основных справочников

    NewRub.CreateMeasures;

    NewRub.CreateUnits;

    NewRub.CreateFacts;

    NewRub.CreateRevisions;

    NewRub.CreateValues;

    (NewRub As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера в корневом каталоге репозитория будут созданы
 репозиторий НСИ и база данных временных рядов. В репозитории НСИ будут
 созданы все базовые справочники, необходимые для работы с базой данных
 временных рядов.


См. также:


[IRubricator](IRubricator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
