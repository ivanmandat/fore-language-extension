# IDatasetModelField.IsSparse

IDatasetModelField.IsSparse
-


# IDatasetModelField.IsSparse


## Синтаксис


IsSparse: Boolean;


## Описание


Свойство IsSparse возвращает
 признак того, используются ли для хранения данных поля разреженные столбцы.


## Комментарии


Разреженные столбцы - это обычные столбцы, имеющие оптимизированное
 хранилище для значений Null. Разреженные
 столбцы уменьшают пространство, необходимое для хранения значений Null, но увеличивается ресурсоемкость
 получения значений, отличных от Null. Используйте
 разреженные столбцы только в том случае, если экономится не менее чем
 от 20 до 40 процентов места.


Допустимые значения:


	- True. Используются разреженные
	 столбцы;


	- False. Не используются
	 разреженные столбцы.


## Пример


Для выполнения примера в репозитории предполагается наличие таблицы
 с идентификатором T_ISSPARSE.


Добавьте ссылки на системные сборки: Db, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    DSInst: IDatasetInstance;

	    DSModel: IDatasetModel;

	    Fields: IDatasetModelFields;

	    i: Integer;

	    Field: IDatasetModelField;

	Begin

	    MB := MetabaseClass.Active;

	    // Получаем таблицу

	    DSInst := MB.ItemById("T_ISSPARSE").Open(Null) As IDatasetInstance;

	    // Получаем поля таблицы

	    DSModel := DSInst.Dataset;

	    Fields := DSModel.Fields;

	    For i := 0 To Fields.Count - 1 Do

	        Field := Fields.Item(i);

	        // Выводим наименования полей, использующих

	        // для хранения данных разреженные столбцы

	        If Field.IsSparse Then

	            Debug.WriteLine(Field.Name);

	        End If;

	    End For;

	    DSInst.Close;

	End Sub UserProc;


В результате выполнения примера в окно консоли будут выведены наименования
 столбцов, использующих для хранения данных разреженные столбцы.


См. также:


[IDatasetModelField](IDatasetModelField.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
