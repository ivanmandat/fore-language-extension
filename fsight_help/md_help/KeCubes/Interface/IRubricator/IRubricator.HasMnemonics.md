# IRubricator.HasMnemonics

IRubricator.HasMnemonics
-


# IRubricator.HasMnemonics


## Синтаксис


HasMnemonics: Boolean;


## Описание


Свойство HasMnemonics определяет,
 использовать ли мнемоники для идентификации показателей.


## Комментарии


Допустимые значения:


	- True. Для идентификации
	 показателей используются мнемоники. Значение по умолчанию при создании
	 базы данных временных рядов;


	- False. Мнемоники не
	 используются для идентификации показателей. Метод [IRubricatorInstance.GetFactDataByMnemo](../IRubricatorInstance/IRubricatorInstance.GetFactDataByMnemo.htm)
	 всегда будет возвращать пустой результат. Атрибут показателей «MNEMO»
	 отсутствует в справочнике, возвращаемом свойством [IRubricator.EditFacts](IRubricator.EditFacts.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 с идентификатором «OBJ_DB» и репозитория НСИ с идентификатором «RDS_REPO».
 Добавьте ссылки на системные сборки «Metabase», «Cubes», «Rds», «Db»,
 «Dimensions».


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

    Inf.Id := Mb.GenerateId("OBJ_FC");

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

    Cat.AutoUnits := True;

    Cat.HasMnemonics := False;

    Cat.KeepHistory := False;

    Cat.CalendarLevels := DimCalendarLevelSet.Year Or DimCalendarLevelSet.Quarter;

    Cat.AlterAndSave;

    Debug.WriteLine(Inf.Id);

End Sub UserProc;


После выполнения примера в корне репозитория будет создана база данных
 временных рядов, идентификатор которой будет выведен в окно консоли. В
 базе не будет сохраняться история изменений показателей, т.е., база
 данных временных рядов будет неверсионной. Также показатели не будут использовать
 мнемоники для идентификации.


См. также:


[IRubricator](IRubricator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
