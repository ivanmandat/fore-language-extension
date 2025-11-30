# IPivot.EndUpdateEx

IPivot.EndUpdateEx
-


# IPivot.EndUpdateEx


## Синтаксис


EndUpdateEx(Recalc: Boolean);


## Параметры


Recalc. Признак, нужно ли выполнить
 перерасчёт данных таблицы с применением внесённых изменений.


## Описание


Метод EndUpdateEx возобновляет
 перерисовку таблицы с расширенными настройками.


## Комментарии


Допустимые значения параметра Recalc:


	- True. Выполнять перерасчёт
	 данных таблицы с применением внесённых изменений;


	- False. Не выполнять
	 перерасчёт данных таблицы с применением внесённых изменений.


Метод возобновляет перерисовку таблицы после того, как она была остановлена
 методом [IPivot.BeginUpdate](IPivot.BeginUpdate.htm). При использовании
 метода также будут применены все изменения, произведённые в таблице между
 вызовами методов [IPivot.BeginUpdate](IPivot.BeginUpdate.htm)
 и IPivot.EndUpdateEx.


## Пример


Для выполнения примера разместите на форме компоненты Button, TabSheetBox
 и UiErAnalyzer с идентификаторами «Button1», «TabSheetBox1» и «UiErAnalyzer1»
 соответственно. В качестве источника данных для «TabSheetBox1» укажите
 «UiErAnalyzer1». Источником данных для «UiErAnalyzer1» является экспресс-отчёт.


Добавьте ссылки на системные сборки: Express, ExtCtrls, Forms, Pivot,
 Tab.


Пример является обработчиком события OnClick для компонента «Button1».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    OLAP: IEaxAnalyzer;

    Pivot: IPivot;

    Sorter: IPivotSorter;

    SortItem: IPivotSortItem;

Begin

    OLAP := UiErAnalyzer1.ErAnalyzer;

    Pivot := OLAP.Pivot;

    // Отключим перерисовку таблицы

    Pivot.BeginUpdate;

    // Зададим параметры сортировки

    Sorter := Pivot.Sorter;

    SortItem := Sorter.Add;

    SortItem.Kind := PivotSortKind.Column;

    SortItem.IndexInHeader := 0;

    SortItem.Direction := PivotSortDirection.Asc;

    Pivot.SortDiapason := PivotSortDiapason.Level;

    // Возобновим перерисовку таблицы с расширенными настройками

    Pivot.EndUpdateEx(True);

End Sub Button1OnClick;


При нажатии на кнопку будет выполнен перерасчёт данных таблицы с применением
 сортировки по возрастанию по первому столбцу.


См. также:


[IPivot](IPivot.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
