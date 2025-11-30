# IImportRequestProviderParams.LoadEmptyValues

IImportRequestProviderParams.LoadEmptyValues
-


# IImportRequestProviderParams.LoadEmptyValues


## Синтаксис


LoadEmptyValues: Boolean;


## Описание


Свойство LoadEmptyValues определяет,
 загружать ли пустые значения показателей.


## Комментарии


Допустимые значения:


	- True. В базу будут загружаться
	 пустые значения показателей;


	- False. Значение по умолчанию.
	 Пустые значения показателей импортироваться не будут.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором «TSDB». База содержит объект импорта
 с идентификатором «OBJ_IMPORT», импортирующий данные из любого источника,
 кроме базы данных временных рядов.


Добавьте ссылки на системные сборки: Cubes и Metabase.


			Sub UserProc;

Var

    Mb: IMetabase;

    RubrDescr: IMetabaseObjectDescriptor;

    ImpRequestDef: IImportRequestDefinition;

    ImpProvParams: IImportRequestProviderParams;

Begin

    Mb := MetabaseClass.Active;

    RubrDescr := Mb.ItemById("TSDB");

    // Получим объект импорта

    ImpRequestDef := Mb.ItemByIdNamespace("OBJ_IMPORT", RubrDescr.Key).Edit As IImportRequestDefinition;

    ImpProvParams := ImpRequestDef.ProviderParams;

    // Настроим параметры загрузки
 пустых значений

    ImpProvParams.LoadEmptyValues := True;

    (ImpRequestDef As IMetabaseObject).Save;

End Sub UserProc;


В результате выполнения примера будут изменены параметры объекта импорта:
 пустые значения будут импортироваться в базу данных временных рядов.


См. также:


[IImportRequestProviderParams](IImportRequestProviderParams.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
