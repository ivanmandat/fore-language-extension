# ILanerSerie.Visible

ILanerSerie.Visible
-


# ILanerSerie.Visible


## Синтаксис


Visible: Boolean;


## Описание


Свойство Visible определяет,
 видим ли ряд в рабочей книге.


## Комментарии


Допустимые значения:


	- True. Ряд видимый и
	 отображается в рабочей книге;


	- False. Ряд является
	 невидимым и не отображается в рабочей книге.


## Пример


Для выполнения примера в репозитории предполагается наличие рабочей
 книги с идентификатором WORKBOOK_POPULATION, содержащей несколько рядов
 с данными.


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

	    WbkObj := mb.ItemById("WORKBOOK_POPULATION").Edit;

	    EaxAn := WbkObj As IEaxAnalyzer;

	    // Получаем объект для выполнения операций с рабочей книгой

	    Laner := EaxAn.Laner;

	    // Получаем первый ряд в рабочей книге

	    Serie := Laner.Series.Item(0);

	    // Скрываем первый ряд

	    Serie.Visible := False;

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
