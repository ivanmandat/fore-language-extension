# IImportRequestProviderParams.TreatEmptyStringAsNull

IImportRequestProviderParams.TreatEmptyStringAsNull
-


# IImportRequestProviderParams.TreatEmptyStringAsNull


## Синтаксис


TreatEmptyStringAsNull: Boolean;


## Описание


Свойство TreatEmptyStringAsNull
 определяет, записывать ли пустые строки как Null.


## Комментарии


Свойство TreatEmptyStringAsNull предназначено
 для загрузки данных только в неверсионные базы данных временных рядов.


Допустимые значения:


	- True. Пустые строки
	 будут записаны как Null;


	- False. Значение по умолчанию.
	 Пустые строки будут записаны в исходном виде.


## Пример


Для выполнения примера в репозитории предполагается наличие неверсионной
 базы данных временных рядов с идентификатором «TSDB_NON_REV», содержащей
 объект импорта с идентификатором «OBJ_IMPORT». Данный объект должен импортировать
 данные из любого источника, кроме базы данных временных рядов.


Добавьте ссылки на системные сборки: Cubes, Metabase.


			Sub UserProc;

Var

    Mb: IMetabase;

    RubrKey: Integer;

    ImpRequestDefDescr: IMetabaseObjectDescriptor;

    ImpRequestDef: IImportRequestDefinition;

    ImpProvParams: IImportRequestProviderParams;

Begin

    // Получаем репозиторий

    Mb := MetabaseClass.Active;

    // Получаем базу данных временных рядов

    RubrKey := Mb.GetObjectKeyById("TSDB_NON_REV");

    // Получаем объект импорта

    ImpRequestDefDescr := Mb.ItemByIdNamespace("OBJ_IMPORT", RubrKey);

    // Получаем параметры загрузки временных рядов

    ImpRequestDef := ImpRequestDefDescr.Edit As IImportRequestDefinition;

    ImpProvParams := ImpRequestDef.ProviderParams;

    // Указываем, что пустые строки будут записаны как Null

    ImpProvParams.TreatEmptyStringAsNull := True;

    // Сохраняем изменения

    (ImpRequestDef As IMetabaseObject).Save;

End Sub UserProc;


В результате выполнения примера будут изменены параметры объекта импорта:
 пустые строки будут записаны как Null.


См. также:


[ICubeMetaLoader](../ICubeMetaLoader/ICubeMetaLoader.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
