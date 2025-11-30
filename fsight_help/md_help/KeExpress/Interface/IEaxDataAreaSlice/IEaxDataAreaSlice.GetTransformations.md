# IEaxDataAreaSlice.GetTransformations

IEaxDataAreaSlice.GetTransformations
-


# IEaxDataAreaSlice.GetTransformations


## Синтаксис


GetTransformations(Value: [IDataAreaTransformationsGetter](ForeSys.chm::/Interface/IDataAreaTransformationsGetter/IDataAreaTransformationsGetter.htm)):
 [IEaxDataAreaTransformations](../IEaxDataAreaTransformations/IEaxDataAreaTransformations.htm);


## Параметры


Value. Объект, получающий коллекции
 формул преобразования данных.


## Описание


Метод GetTransformations возвращает
 коллекцию формул преобразования данных.


## Комментарии


Для возвращения измерения среза аналитической области данных по его
 ключу используйте [IEaxDataAreaSlice.GetDimension](IEaxDataAreaSlice.GetDimension.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчета
 с идентификатором EXPRESS, содержащего таблицу. Для сортировки данных
 в таблице должны быть добавлены несколько формул.


Добавьте ссылки на системные сборки: Express, Metabase, Pivot.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Express: IEaxAnalyzer;

	    Pivot: IPivot;

	    SortItem: IPivotSortItem;

	    Getter: IDataAreaTransformationsGetter;

	    Trs: IEaxDataAreaTransformations;

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

	    // Получим коллекцию формул преобразования данных из сортировки

	    Trs := Express.DataArea.Slices.Item(0).GetTransformations(Getter);

	    // Выведем в окно консоли количество формул преобразования данных

	    Debug.WriteLine("Количество формул преобразования данных = " + Trs.Count.ToString);

	End Sub UserProc;


После выполнения примера в окно консоли будет выведено количество формул
 преобразования данных, указанных в сортировке.


См. также:


[IEaxDataAreaSlice](IEaxDataAreaSlice.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
