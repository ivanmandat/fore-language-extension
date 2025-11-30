# ILanerSerie.Hidden

ILanerSerie.Hidden
-


# ILanerSerie.Hidden


## Синтаксис


Hidden: Boolean;


## Описание


Свойство Hidden определяет,
 скрыт ли ряд в рабочей книге.


## Комментарии


Допустимые значения:


	- True. Ряд скрытый, но
	 присутствует в рабочей книге и его высота равна нулю;


	- False. Ряд отображается
	 в рабочей книге.


## Пример


Для выполнения примера в репозитории предполагается наличие рабочей
 книги с идентификатором WORKBOOK_HIDDEN, содержащей несколько рядов с
 данными.


Добавьте ссылки на системные сборки: Express, Laner, Metabase.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    WbkObj: IMetabaseObject;

	    EaxAn: IEaxAnalyzer;

	    Laner: ILaner;

	    Serie: ILanerSerie;

	Begin

	    // Получаем рабочую книгу

	    mb := MetabaseClass.Active;

	    WbkObj := mb.ItemById("WORKBOOK_HIDDEN").Edit;

	    EaxAn := WbkObj As IEaxAnalyzer;

	    // Получаем объект для выполнения операций с рабочей книгой

	    Laner := EaxAn.Laner;

	    // Получаем первый ряд в рабочей книге

	    Serie := Laner.Series.Item(0);

	    // Скрываем первый ряд

	    Serie.Hidden := True;

	    // Сохраняем изменения

	    WbkObj.Save;

	End Sub UserProc;


После выполнения примера будет скрыт первый ряд в рабочей книге.


См. также:


[ILanerSerie](ILanerSerie.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
