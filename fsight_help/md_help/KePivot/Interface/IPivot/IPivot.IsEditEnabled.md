# IPivot.IsEditEnabled

IPivot.IsEditEnabled
-


# IPivot.IsEditEnabled


## Синтаксис


IsEditEnabled: Boolean;


## Описание


Свойство IsEditEnabled определяет,
 доступно ли редактирование данных таблицы.


## Комментарии


Допустимые значения:


	- True. Доступно редактирование
	 данных таблицы;


	- False. Недоступно редактирование
	 данных таблицы.


Для получения признака, доступно ли редактирование данных в таблице,
 используйте свойство [IPivot.CanEdit](IPivot.CanEdit.htm).


## Пример


Для выполнения примера разместите на форме два компонента Button и компоненты
 TabSheetBox, UiErAnalyzer с наименованиями «Button1», «Button2», «TabSheetBox1»,
 «UiErAnalyzer1» соответственно. Для «TabSheetBox1» укажите источник данных
 «UiErAnalyzer1». Для «UiErAnalyzer1» источником данных является экспресс-отчёт.


Добавьте ссылки на системные сборки: Express, Forms, Pivot, Tab.


Пример является обработчиком события OnClick для компонентов «Button1»
 и «Button2».


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Pivot: IPivot;

	Begin

	    Pivot := UiErAnalyzer1.ErAnalyzer.ActiveSheet.Pivot;

	    Debug.WriteLine ("-----------------------------------------");

	    // Проверим, доступно ли редактирование данных в таблице

	    If Pivot.CanEdit = True Then

	        Debug.WriteLine ("Доступно редактирование данных в таблице");

	        Else

	            Debug.WriteLine ("Недоступно редактирование данных в таблице. Включите возможность редактирования");

	    End If;

	    // Обновим таблицу

	    Pivot.Refresh;

	End Sub Button1OnClick;


	Sub Button2OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Pivot: IPivot;

	Begin

	    Pivot := UiErAnalyzer1.ErAnalyzer.ActiveSheet.Pivot;

	    // Разблокируем редактирование ячеек

	    Pivot.IsEditEnabled := True;

	    Debug.WriteLine ("-----------------------------------------");

	    Debug.WriteLine ("Доступно редактирование данных таблицы");

	End Sub Button2OnClick;


При нажатии на первую кнопку в консоль будет выведено сообщение, доступно
 ли редактирование данных в таблице. После нажатия на вторую кнопку будет
 разблокировано редактирование ячеек.


См. также:


[IPivot](IPivot.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
