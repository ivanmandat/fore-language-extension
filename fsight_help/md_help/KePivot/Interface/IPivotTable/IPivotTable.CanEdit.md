# IPivotTable.CanEdit

IPivotTable.CanEdit
-


# IPivotTable.CanEdit


## Синтаксис


CanEdit: Boolean;


## Описание


Свойство CanEdit возвращает
 признак возможности редактирования таблицы.


## Комментарии


Допустимые значения:


	- True. Таблица доступна
	 для редактирования;


	- False. Таблица недоступна
	 для редактирования.


Для перевода таблицы в режим редактирования используйте метод [IPivotTable.Edit](IPivotTable.Edit.htm).


Для выхода из режима редактирования с сохранением изменённых данных
 таблицы используйте метод [IPivotTable.Post](IPivotTable.Post.htm),
 без сохранения изменённых данных - [IPivotTable.Cancel](IPivotTable.Cancel.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчета
 с идентификатором EXPRESS. В отчёте должна содержаться таблица.


Добавьте ссылки на системные сборки: Express, Metabase, Pivot.


			Sub UserProc;

Var

    MB: IMetabase;

    Express: IEaxAnalyzer;

    Pivot: IPivot;

    Table: IPivotTable;

Begin

    // Получим репозиторий

    MB := MetabaseClass.Active;

    // Получим экспресс-отчёт

    Express := MB.ItemById("EXPRESS").Edit As IEaxAnalyzer;

    // Получим настройки отображения таблицы

    Pivot := Express.Pivot;

    Table := Pivot.ObtainTable;

    // Проверим возможность редактирования таблицы

    If Pivot.CanEdit Then

        // Переведём таблицу в режим редактирования, если она недоступна

        Table.Edit;

    End If;

    // Изменим значение ячейки с координатой (1,2)

    Table.Cell(1, 2) := 100;

    // Сохраним изменённые данные таблицы и обновим её

    Table.Post;

    Pivot.Refresh;

End Sub UserProc;


После выполнения примера в таблице экспресс-отчёта будет изменено значение
 ячейки с координатой (1,2) на «100».


См. также:


[IPivotTable](IPivotTable.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
