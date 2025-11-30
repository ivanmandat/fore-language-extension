# IWxStyles.Count

IWxStyles.Count
-


# IWxStyles.Count


## Синтаксис


Count: Integer;


## Описание


Свойство Count возвращает количество
 стилей рабочего пространства.


## Пример


Для выполнения примера в репозитории предполагается наличие рабочего
 пространства с идентификатором IWSTYLE, содержащего несколько стилей.


Добавьте ссылки на системные сборки: Andy, Metabase.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    Wsp: IWxWorkspace;

	    Sts: IWxStyles;

	    style: IWxStyle;

	Begin

	    // Получаем рабочее пространство для редактирования

	    Mb := MetabaseClass.Active;

	    Wsp := Mb.ItemById("IWSTYLE").Edit As IWxWorkspace;

	    Sts := Wsp.Styles;

	    style := Sts.Item(Sts.Count - 1);

	    style.Delete;

	    (Wsp As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера будет удален последний стиль в списке.


См. также:


[IWxStyles](IWxStyles.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
