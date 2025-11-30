# IDataAreaTransformationsGetter.GetterKey

IDataAreaTransformationsGetter.GetterKey
-


# IDataAreaTransformationsGetter.GetterKey


## Синтаксис


GetterKey: Integer;


## Описание


Свойство GetterKey возвращает
 уникальный ключ объекта, получающего коллекции формул преобразования
 данных.


## Комментарии


Данный ключ генерируется автоматически в рамках среза. По данному ключу
 находятся коллекции формул преобразования в запрашиваемом срезе данных,
 например для измерений, уровней, сортировок.


Свойство доступно только для чтения.


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчета
 с идентификатором EXPRESS, содержащего таблицу.


Добавьте ссылки на системные сборки: Express, Metabase, Pivot.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Express: IEaxAnalyzer;

	    Pivot: IPivot;

	    SortItem: IPivotSortItem;

	    Getter: IDataAreaTransformationsGetter;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим экспресс-отчет

	    Express := MB.ItemById("EXPRESS").Bind As IEaxAnalyzer;

	    // Получим таблицу

	    Pivot := Express.Pivot;

	    // Получим сортировку

	    SortItem := Pivot.Sorter.Item(0);

	    Getter := SortItem As IDataAreaTransformationsGetter;

	    // Выведем в окно консоли ключ объекта для получения коллекции формул преобразования данных

	    Debug.WriteLine

	    ("Ключ объекта для получения коллекции формул преобразования данных" + Getter.GetterKey.ToString);

	End Sub UserProc;


См. также:


[IDataAreaTransformationsGetter](IDataAreaTransformationsGetter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
