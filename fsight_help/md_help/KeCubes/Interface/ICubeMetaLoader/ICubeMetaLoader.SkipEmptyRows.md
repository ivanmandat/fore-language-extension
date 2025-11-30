# ICubeMetaLoader.SkipEmptyRows

ICubeMetaLoader.SkipEmptyRows
-


# ICubeMetaLoader.SkipEmptyRows


## Синтаксис


SkipEmptyRows: Boolean;


## Описание


Свойство SkipEmptyRows
 определяет, пропускать ли пустые строки при импорте данных.


## Комментарии


Допустимые значения:


	- True. Пустые строки
	 будут пропущены при импорте данных;


	- False. При встрече первой
	 пустой строки в источнике данных импорт будет остановлен.


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных
 временных рядов с идентификатором «TSDB_IMPORT», содержащей объект импорта
 с идентификатором «OBJ_IMPORT». Данный объект должен импортировать данные
 из любого источника, кроме базы данных временных рядов.


Добавьте ссылки на системные сборки: Cubes, Metabase.


			Sub UserProc;

Var

    Mb: IMetabase;

    RubrKey: Integer;

    ImpRequestDefDescr: IMetabaseObjectDescriptor;

    ImpRequestDef: IImportRequestDefinition;

    MetaLoader: ICubeMetaLoader;

Begin

    // Получаем репозиторий

    Mb := MetabaseClass.Active;

    // Получаем базу данных временных рядов

    RubrKey := Mb.GetObjectKeyById("TSDB_IMPORT");

    // Получаем объект импорта

    ImpRequestDefDescr := Mb.ItemByIdNamespace("OBJ_IMPORT", RubrKey);

    // Получаем параметры загрузки временных рядов

    ImpRequestDef := ImpRequestDefDescr.Edit As IImportRequestDefinition;

    MetaLoader := ImpRequestDef.ProviderParams As ICubeMetaLoader;

    // Указываем, что при импорте значений, не соответствующих типу поля-приёмника,

    // будет записано значение Null

    MetaLoader.LoadNullForMissMatchValueType := True;

    // Указываем, что при импорте ряд будет целиком перезаписан

    MetaLoader.OverWriteWholeFactorValues := True;

    // Задаём длину строкового поля в источнике данных

    MetaLoader.SourceFieldStringSize := 100;

    // Указываем, что при импорте значений будут пропущены пустые строки

    MetaLoader.SkipEmptyRows := True;

    // Указываем, что при импорте не будет уменьшаться период временных рядов

    // в базе данных временных рядов

    MetaLoader.DecreasePeriod := False;

    // Указываем, что надо логировать ошибку распознавания даты

    MetaLoader.LogDateParseError := True;

    // Сохраняем изменения

    (ImpRequestDef As IMetabaseObject).Save;

End Sub UserProc;


В результате выполнения примера будут изменены параметры объекта импорта:
 при импорте будут пропускаться пустые строки, логироваться ошибки распознавания
 даты, ряды будут целиком перезаписаны. Также будет изменена длина строкового
 поля в источнике данных и если импортируемое значение не соответствует
 типу поля-приёмника, то будет записываться значение Null.


См. также:


[ICubeMetaLoader](ICubeMetaLoader.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
