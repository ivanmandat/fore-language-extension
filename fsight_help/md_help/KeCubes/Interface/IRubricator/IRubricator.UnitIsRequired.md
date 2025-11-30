# IRubricator.UnitIsRequired

IRubricator.UnitIsRequired
-


# IRubricator.UnitIsRequired


## Синтаксис


UnitIsRequired: Boolean;


## Описание


Свойство UnitIsRequired определяет,
 входит ли справочник единиц измерений в состав уникального ключа базы
 данных временных рядов.


## Комментарии


Допустимые значения:


	- True. Справочник единиц
	 измерения входит в состав уникального ключа. При сохранении базы данных
	 временных рядов атрибуту «Единицы измерения» устанавливаются признаки:
	 [Hidden](KeRds.chm::/Interface/IMetaAttribute/IMetaAttribute.Hidden.htm) = False, [Nullable](KeRds.chm::/Interface/IMetaAttribute/IMetaAttribute.Nullable.htm) = False, [InDefaultHierarchy](KeRds.chm::/Interface/IMetaAttribute/IMetaAttribute.InDefaultHierarchy.htm)
	 = True;


	- False. Значение по умолчанию.
	 Справочник единиц измерения не входит в состав уникального ключа.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором FC и репозитория НСИ с идентификатором
 RDS_REPO.


Добавьте ссылки на системные сборки: Cubes, Metabase, Rds.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    Inf: IMetabaseObjectCreateInfo;

	    Obj: IMetabaseObjectDescriptor;

	    Rub: IRubricator;

	Begin

	    mb := MetabaseClass.Active;

	    Inf := Mb.CreateCreateInfo;

	    Inf.ClassId := MetabaseObjectClass.KE_CLASS_RUBRICATOR;

	    Inf.Parent := mb.Root;

	    Inf.KeepEdit := True;

	    Obj := Mb.CreateObject(Inf);

	    Rub := (Obj As IRubricator);

	    Rub.Database := Mb.ItemById("RDS_REPO").Bind As IRdsDatabase;

	    Rub.UnitIsRequired := True;

	    Rub.AlterAndSave;

	End Sub UserProc;


После выполнения примера в корне репозитория будет создана база данных
 временных рядов. В состав уникального ключа базы данных временных рядов
 будет входить справочник единиц измерений.


См. также:


[IRubricator](IRubricator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
