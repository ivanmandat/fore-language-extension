# IPivot.RebuildCompounds

IPivot.RebuildCompounds
-


# IPivot.RebuildCompounds


## Синтаксис


RebuildCompounds;


## Описание


Метод RebuildCompounds осуществляет
 перестроение составных измерений в таблице.


## Комментарии


Метод работает в рамках [блокировки
 изменений в отметке](IPivot.BeginSelectionUpdate.htm) и [перерисовки
 таблицы](IPivot.BeginUpdate.htm). Используется при [применении](DataEntryForms.chm::/Desktop/Table/Select_dimension_elements.htm)
 настроек управляющего измерения в кубе и расширенного фильтра. Метод используется
 в случае, если после изменения отметки в общем родительском измерении
 необходимо переоткрыть справочник в частном дочернем измерении.


## Пример


Для выполнения примера предполагается наличие в репозитории формы ввода
 с табличной областью с идентификатором AREA1, для которой в качестве показателя
 указан куб с настроенным управляющим измерением. Управляющее измерение
 находится в боковике, управляемое измерение находится в частных измерениях
 показателя. Управляющее измерение с идентификатором DIM, управляемое -
 DIM_1.


Модуль подключается в качестве [пользовательской
 кнопки](DataEntryForms.chm::/Desktop/Custom_module/Advanced.htm) в форму ввода.


Добавьте ссылки на системные сборки: Dimensions, Express, Pivot, Report.


					Public Sub RebuildCompounds(report: IPrxReport);

		Var

		    pivot: IPivot;

		    dataarea: IEaxDataArea;

		    grid: IEaxGrid;

		    version_index: integer;

		    selComp, sel, selCarr: IDimSelection;

		Begin

		    //Останавливаем перестройку аналитической области

		    dataarea := report.DataArea;

		    dataarea.BeginUpdate;

		    //Получаем табличную область

		    grid := dataarea.Views.FindById("AREA1") As IEaxGrid;

		    // Получаем основу таблицы

		    pivot := grid.Pivot;

		    // Останавливает перестроение таблицы и отметки

		    pivot.BeginUpdate;

		    pivot.BeginSelectionUpdate;

		    // Получаем отметку управляющего измерения

		    sel := pivot.Selection.FindById("DIM");

		    // Снимаем отметку элементов

		    sel.DeselectAll;

		    // Добавляем элемент в отметку

		    version_index := 0;

		    sel.SelectElement(version_index, False);

		    // Перестраиваем составное измерение

		    pivot.RebuildCompounds;

		    // Повторно получаем отметку составного измерения

		    selComp := pivot.Selection.FindById("FACTS_COMPOUND");

		    selCarr := ((selComp As ICompoundSelection).Selection.Item(0) As ICompoundSelection).Selection.FindById("DIM_1");

		    // Возобновляем перестроение отметки, таблицы и аналитической области

		    pivot.EndSelectionUpdate;

		    pivot.EndUpdate;

		    dataarea.EndUpdate;

		End Sub RebuildCompounds;


В результате выполнения примера после нажатия пользовательской кнопки
 будет перестроена табличная область формы ввода.


См. также:


[IPivot](IPivot.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
