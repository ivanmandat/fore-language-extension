# IRubricatorInstance.ClearEx

IRubricatorInstance.ClearEx
-


# IRubricatorInstance.ClearEx


## Синтаксис


ClearEx(Mode: [CubeLoadClearMode](../../Enums/CubeLoadClearMode.htm);


FactorKeys: Array;


FactsAttrs: String;


ValuesAttrs: String;


[ExtraOptions: CubeClearOptions
 = 0]);


## Параметры


Mode. Режим очистки базы данных
 временных рядов;


FactorKeys. Массив ключей временных
 рядов, которые должны быть очищены;


FactsAttrs. Очищаемые атрибуты
 рядов;


ValuesAttrs. Очищаемые атрибуты
 наблюдений;


ExtraOptions. Дополнительные
 параметры отчистки базы данных временных рядов.


## Описание


Метод ClearEx очищает
 базу данных временных рядов в соответствии с указанными расширенными
 параметрами.


## Комментарии


При работе с методом учитывайте особенности задания следующих параметров:


	- Mode. Параметр может
	 принимать любое значение, кроме [CubeLoadClearMode.Default_](../../Enums/CubeLoadClearMode.htm);


	- FactsAttrs, ValuesAttrs.
	 Указываются идентификаторы рядов и наблюдений, значения которых должны
	 быть очищены. Если требуется очистить значения более одного атрибута,
	 то идентификаторы атрибутов разделяются символом «;».
	 Если необходимо очистить значения всех атрибутов то указывается символ
	 «*».


При работе метод проверяет возможность очистки значения атрибута: если
 какой-либо атрибут не может иметь пустые значения, то его значения сброшены
 не будут.


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных
 временных рядов с идентификатором TSDB. Данная база данных должна содержать
 следующие атрибуты рядов: COUNTRY, являющийся ссылкой на справочник и
 строковый атрибут NOTES.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Metabase, Orm,
 Rds.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    RubInstance: IRubricatorInstance;

	    Lookup: IRubricatorFactsLookup;

	    MetaDLookup: IMetaDictionaryLookup;

	    Cond: IOrmCondition;

	    FactorKeys: Array Of Integer;

	Begin

	    MB := MetabaseClass.Active;

	    // Получаем экземпляр базы данных временных рядов

	    RubInstance := MB.ItemById("TSDB").Open(Null) As IRubricatorInstance;

	    // Создаем объект для поиска в базе данных временных рядов

	    Lookup := RubInstance.CreateFactsLookup;

	    MetaDLookup := Lookup.Lookup;

	    Cond := MetaDLookup.Where.Add;

	    // Указываем, что выполняем поиск тех временных рядов,

	    // у которых атрибут «COUNTRY» принимает значение «512»

	    Cond.AttributeName := "COUNTRY";

	    Cond.Value := 512;

	    // Выполняем поиск и получаем ключи найденных временных рядов

	    MetaDLookup.Open(DictionaryCursorOptions.None);

	    FactorKeys := MetaDLookup.LookupKeys("KEY");

	    MetaDLookup.Close;

	    // Выполняем очистку базы данных временных рядов

	    RubInstance.ClearEx(CubeLoadClearMode.MetadataOnly, FactorKeys, "NOTES", "*", CubeClearOptions.NoCreateRevision);

	End Sub UserProc;


В результате выполнения примера без создания новой ревизии будет выполнена
 очистка базы данных временных рядов: для всех временных рядов, у которых
 значение атрибута COUNTRY равно 512, очищены метаданные атрибута рядов
 NOTES и всех атрибутов наблюдений.


См. также:


[IRubricatorInstance](IRubricatorInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
