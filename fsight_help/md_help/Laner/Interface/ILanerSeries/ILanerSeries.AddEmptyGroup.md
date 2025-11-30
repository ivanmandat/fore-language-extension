# ILanerSeries.AddEmptyGroup

ILanerSeries.AddEmptyGroup
-


# ILanerSeries.AddEmptyGroup


## Синтаксис


AddEmptyGroup(SerieName: String; [Index: Integer
 = -1]): [ILanerGroupSerie](../ILanerGroupSerie/ILanerGroupSerie.htm);


## Параметры


SerieName. Наименование
 добавляемой группы;


Index. Индекс позиции, в которую
 необходимо добавить группу.


## Описание


Метод AddEmptyGroup добавляет
 пустую группу рядов.


## Пример


Для выполнения примера в репозитории предполагается наличие рабочей
 книги с идентификатором WORKBOOK_SERIES, содержащей несколько рядов.


Добавьте ссылки на системные сборки: Express, Laner, Metabase.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    WbkObj: IMetabaseObject;

	    EaxAn: IEaxAnalyzer;

	    Laner: ILaner;

	    Series: ILanerSeries;

	    Group: ILanerGroupSerie;

	    Serie: ILanerSerie;

	Begin

	    // Получаем рабочую книгу

	    mb := MetabaseClass.Active;

	    WbkObj := mb.ItemById("WORKBOOK_SERIES").Edit;

	    EaxAn := WbkObj As IEaxAnalyzer;

	    Laner := EaxAn.Laner;

	    // Получаем ряды рабочей книги

	    Series := Laner.Series;

	    // Создаем новую группу

	    Group := Series.AddEmptyGroup("Новая группа", 1);

	    // Получаем последний ряд в рабочей книге

	    Serie := Series.Item(Series.Count - 1);

	    // Перемещаем полученный ряд в созданную группу

	    Serie.MoveToParent(Group, 0);

	    // Сохраняем изменения

	    WbkObj.Save;

	End Sub UserProc;


В результате выполнения примера после первого ряда в рабочей книге будет
 создана группа, в которую будет перемещён последний ряд.


См. также:


[ILanerSeries](ILanerSeries.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
