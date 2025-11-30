# IRubricator.SeparateTableForActualData

IRubricator.SeparateTableForActualData
-


# IRubricator.SeparateTableForActualData


## Синтаксис


SeparateTableForActualData: Boolean;


## Описание


Свойство SeparateTableForActualData
 определяет, использовать ли отдельную таблицу для хранения актуальных
 данных.


## Комментарии


Допустимые значения:


	- True. Для хранения актуальных
	 данных используется отдельная таблица;


	- False. Для хранения
	 всех данных используется одна таблица.


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных
 временных рядов с идентификатором «TSDB_DATA».


Добавьте ссылки на системные сборки: Cubes, Metabase.


			Sub UserProc;

Var

    mb: IMetabase;

    Rub: IRubricator;

Begin

    // Получаем репозиторий

    mb := MetabaseClass.Active;

    // Получаем базу данных временных рядов

    Rub := mb.ItemById("TSDB_DATA").Edit As IRubricator;

    // Указываем, что для хранения актуальных данных

    // будет использоваться отдельная таблица

    Rub.SeparateTableForActualData := True;

    // Обновляем системные таблицы и сохраняем изменения

    Rub.AlterAndSave;

End Sub UserProc;


В результате выполнения примера в базе данных «TSDB_DATA» будет использоваться
 отдельная таблица для хранения актуальных данных.


См. также:


[IRubricator](IRubricator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
