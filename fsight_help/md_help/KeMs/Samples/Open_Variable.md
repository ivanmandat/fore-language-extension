# Открытие переменной в контейнере моделирования

Открытие переменной в контейнере моделирования
-


# Открытие переменной в контейнере моделирования


## Описание


Рассмотрим пример открытия переменной для редактирования в интерфейсе
 контейнера моделирования.


## Требования


В репозитории предполагается наличие контейнера моделирования с идентификатором
 MS, содержащего переменную моделирования с идентификатором VARIABLE.


Добавьте ссылки на системные сборки: Metabase, Ui.


## Пример


	Sub OpenVariable;

	Var

	    Mb: IMetabase;

	    ObjDes: IMetabaseObjectDescriptor;

	    Target: IUiCommandTarget;

	Begin

	    MB := MetabaseClass.Active;

	    // Получаем переменную моделирования

	    ObjDes := MB.ItemByIdNamespace("VARIABLE", MB.GetObjectKeyById("MS"));

	    // Получаем объект для выполнения действий над переменной

	    Target := WinApplication.Instance.GetObjectTarget(ObjDes);

	    // Открываем переменную моделирования для редактирования

	    Target.Execute("Object.Edit", Null);

	End Sub OpenVariable;


См. также:


[Примеры](KeMs_Sample.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
