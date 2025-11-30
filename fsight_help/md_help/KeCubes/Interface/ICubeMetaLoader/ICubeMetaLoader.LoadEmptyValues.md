# ICubeMetaLoader.LoadEmptyValues

ICubeMetaLoader.LoadEmptyValues
-


# ICubeMetaLoader.LoadEmptyValues


## Синтаксис


LoadEmptyValues: Boolean;


## Описание


Свойство LoadEmptyValues определяет,
 загружать ли пустые значения временных рядов.


## Комментарии


Допустимые значения:


	- True. В базу будут загружаться
	 пустые значения временных рядов;


	- False. Значение по умолчанию.
	 Пустые значения временных рядов импортироваться не будут.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором «TSDB». База содержит объект импорта
 с идентификатором «OBJ_IMPORT», импортирующий данные из любого источника,
 кроме базы данных временных рядов.


Добавьте ссылки на системные сборки: Cubes и Metabase.


			Sub UserProc;

Var

    Metabase: IMetabase;

    RubrDescr: IMetabaseObjectDescriptor;

    ImpRequestDef: IImportRequestDefinition;

    MetaLoader: ICubeMetaLoader;

Begin

    Metabase := MetabaseClass.Active;

    RubrDescr := Metabase.ItemById("TSDB");

    // Получим объект импорта

    ImpRequestDef := Metabase.ItemByIdNamespace("OBJ_IMPORT", RubrDescr.Key).Edit As IImportRequestDefinition;

    MetaLoader := ImpRequestDef.ProviderParams As ICubeMetaLoader;

    // Настроим параметры загрузки
 пустых значений

    MetaLoader.LoadEmptyValues := True;

    (ImpRequestDef As IMetabaseObject).Save;

End Sub UserProc;


В результате выполнения примера будут изменены параметры объекта импорта:
 пустые значения будут импортироваться в базу данных временных рядов.


См. также:


[ICubeMetaLoader](ICubeMetaLoader.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
