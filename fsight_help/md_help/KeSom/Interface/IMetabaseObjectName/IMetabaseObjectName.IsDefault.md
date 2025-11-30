# IMetabaseObjectName.IsDefault

IMetabaseObjectName.IsDefault
-


# IMetabaseObjectName.IsDefault


## Синтаксис


IsDefault: Boolean;


## Описание


Свойство IsDefault возвращает
 True, если наименование объекта
 используется по умолчанию.


## Комментарии


Свойство доступно только для чтения. Наименование по умолчанию соответствует
 языку по умолчанию, выбранному для репозитория ([IMetabase.DefaultLocale](../IMetabase/IMetabase.DefaultLocale.htm)).
 Наименование по умолчанию используется для отображения наименования объекта,
 в случае если для него отсутствует наименование на текущем языке репозитория
 ([IMetabase.CurrentLocale](../IMetabase/IMetabase.CurrentLocale.htm)).


## Пример


В рассматриваемом примере предполагается наличие в репозитории объекта
 с идентификатором Object.


Добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    Obj: IMetabaseObjectDescriptor;

	    NameLocale: IMetabaseObjectName;

	Begin

	    Obj := MetabaseClass.Active.ItemById("Object");

	    For Each NameLocale In Obj.Names Do

	        Debug.WriteLine("------------------------");

	        Debug.WriteLine("Locale = " + NameLocale.Locale.ToString);

	        Debug.WriteLine("Name = " + NameLocale.Name);

	        Debug.WriteLine("Наименование по умолчанию = " + NameLocale.IsDefault.ToString);

	    End For;

	End Sub UserProc;


После выполнения примера в окно консоли будут выведены все наименования
 объекта.


См. также:


[IMetabaseObjectName](IMetabaseObjectName.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
