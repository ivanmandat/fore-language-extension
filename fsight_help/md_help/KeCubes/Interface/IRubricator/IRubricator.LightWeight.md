# IRubricator.LightWeight

IRubricator.LightWeight
-


# IRubricator.LightWeight


## Синтаксис


LightWeight: Boolean;


## Описание


Свойство LightWeight определяет,
 загружать ли показатели динамически.


## Комментарии


Если LightWeight = True,
 то показатели загружаются динамически (только при раскрытии последнего
 уровня дерева показателей). Использование динамической загрузки позволяет
 сократить время загрузки дерева показателей.


## Пример


Для выполнения примера в репозитории необходимо наличие базы данных
 временных рядов с идентификатором FC.


Добавьте ссылки на системные сборки: Cubes, Metabase.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    RubDes: IMetabaseObject;

	    Rub: IRubricator;

	Begin

	    mb := MetabaseClass.Active;

	    RubDes := mb.ItemById("FC").Edit;

	    Rub := RubDes As IRubricator;

	    Rub.LightWeight := True;

	    RubDes.Save;

	End Sub UserProc;


После выполнения примера показатели базы будут загружаться динамически.


См. также:


[IRubricator](IRubricator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
