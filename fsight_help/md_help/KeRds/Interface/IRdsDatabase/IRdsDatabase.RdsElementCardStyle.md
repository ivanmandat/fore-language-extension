# IRdsDatabase.ElementCardStyle

IRdsDatabase.ElementCardStyle
-


# IRdsDatabase.ElementCardStyle


## Синтаксис


ElementCardStyle:
 [RdsElementCardStyle](ForeSys.chm::/Enums/RdsElementCardStyle.htm);


## Описание


Свойство ElementCardStyle определяет
 тип отображения карточки элемента.


## Комментарии


По умолчанию используется значение RdsElementCardStyle.Standart.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 с идентификатором «NSI_BD».


Добавьте ссылки на системные сборки: Db, Metabase, Rds;


			Sub UserProc;

Var

    MB: IMetabase;

    NSI: IRdsDatabase;

    CrInfo: IMetabaseObjectCreateInfo;

Begin

    MB := MetabaseClass.Active;

        CrInfo := MB.CreateCreateInfo;

        CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_RDS_DATABASE;

        CrInfo.Id := "NSI_1";

        CrInfo.Name := "Репозиторий НСИ";

        CrInfo.Parent := Null;

    NSI := MB.CreateObject(CrInfo).Edit As IRdsDatabase;

    NSI.Database := MB.ItemById("NSI_BD").Bind As IDatabase;

    NSI.ElementCardStyle := RdsElementCardStyle.PropertyList;

(NSI As IMetabaseObject).Save;

End Sub UserProc;


В результате выполнения примера в корневом каталоге репозитория будет
 создан новый репозиторий НСИ с идентификатором «NSI_1». Будет установлен
 табличный тип отображения карточки элемента.


См. также:


[IRdsDatabase](IRdsDatabase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
