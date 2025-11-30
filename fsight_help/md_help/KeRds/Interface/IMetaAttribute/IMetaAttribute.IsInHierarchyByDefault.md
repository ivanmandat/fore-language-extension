# IMetaAttribute.IsInHierarchyByDefault

IMetaAttribute.IsInHierarchyByDefault
-


# IMetaAttribute.IsInHierarchyByDefault


## Синтаксис


IsInHierarchyByDefault: Boolean;


## Описание


Свойство IsInHierarchyByDefault
 определяет, участвует ли атрибут в иерархии по умолчанию.


## Комментарии


Допустимые значения:


	- True. Атрибут участвует
	 в иерархии по умолчанию. Для задания порядка следования атрибута в
	 иерархии по умолчанию используйте свойство [IMetaAttribute.OrderInHierarchyByDefault](IMetaAttribute.OrderInHierarchyByDefault.htm),
	 для задания отметки атрибута в иерархии по умолчанию - [IMetaAttribute.FilterInHierarchyByDefault](IMetaAttribute.FilterInHierarchyByDefault.htm);


	- False. Атрибут не участвует
	 в иерархии по умолчанию.


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных
 временных рядов с идентификатором TSDB_HIE_BY_DEF, содержащую атрибуты
 временных рядов с идентификаторами CITY и INDICATOR. В данной базе временных
 рядов отсутствует иерархия атрибутов, используемая по умолчанию.


Добавьте ссылки на системные сборки Metabase, Cubes, Rds, Dimensions.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    Rub: IRubricator;

	    Dic: IMetaDictionary;

	    MetaAttrs: IMetaAttributes;

	    AttCity, AttIndicator: IMetaAttribute;

	    SelCity, SelIndicator: IDimSelection;

	Begin

	    // Получаем базу данных временных рядов

	    mb := MetabaseClass.Active;

	    Rub := mb.ItemById("TSDB_HIE_BY_DEF").Edit As IRubricator;

	    // Получаем атрибуты временных рядов

	    Dic := Rub.EditFacts;

	    MetaAttrs := Dic.Attributes;

	    // Получаем атрибут «CITY»

	    AttCity := MetaAttrs.FindById("CITY");

	    // Указываем, что атрибут будет первым в иерархии по умолчанию

	    AttCity.IsInHierarchyByDefault := True;

	    AttCity.OrderInHierarchyByDefault := 0;

	    // Задаем отметку, используемую по умолчанию для атрибута

	    SelCity := (AttCity.ValuesObject.Open(Null) As IDimInstance).CreateSelection;

	    SelCity.SelectAll;

	    AttCity.FilterInHierarchyByDefault := SelCity;

	    // Получаем атрибут «INDICATOR»

	    AttIndicator := MetaAttrs.FindById("INDICATOR");

	    // Указываем, что атрибут будет вторым в иерархии по умолчанию

	    AttIndicator.IsInHierarchyByDefault := True;

	    AttIndicator.OrderInHierarchyByDefault := 1;

	    // Задаем отметку, используемую по умолчанию для атрибута

	    SelIndicator := (AttIndicator.ValuesObject.Open(Null) As IDimInstance).CreateSelection;

	    SelIndicator.SelectAll;

	    AttIndicator.FilterInHierarchyByDefault := SelIndicator;

	    // Сохраняем и применяем изменения

	    Rub.AlterAndSave;

	End Sub UserProc;


После выполнения примера в базе данных временных рядов TSDB_HIE_BY_DEF
 будет настроена иерархия атрибутов, используемая по умолчанию при создании
 рабочих книг.


См. также:


[IMetaAttribute](IMetaAttribute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
