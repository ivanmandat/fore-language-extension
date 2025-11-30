# IPivot.BeginSelectionUpdate

IPivot.BeginSelectionUpdate
-


# IPivot.BeginSelectionUpdate


## Синтаксис


BeginSelectionUpdate;


## Описание


Метод BeginSelectionUpdate отключает
 применение отметки в источнике данных при изменении отметки в таблице.


## Комментарии


После вызова данного метода и до вызова метода [IPivot.EndSelectionUpdate](IPivot.EndSelectionUpdate.htm)
 изменение отметки, доступной в свойстве [IPivot.Selection](IPivot.Selection.htm),
 не будет приводить к изменению отметки в исходном источнике данных.


## Пример


Для выполнения примера предполагается наличие формы, содержащей следующие
 компоненты:


	- Button с наименованием
	 «Button1»;


	- TabSheetBox с наименованием
	 «TabSheetBox1»;


	- UiErAnalyzer с наименованием
	 «UiErAnalyzer1», являющийся источником данных для
	 «TabSheetBox1».


Добавьте ссылки на системные сборки: Dimensions, Pivot.


Пример является обработчиком события OnClick
 для компонента Button.


					Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

		Var

		    OLAP: IEaxAnalyzer;

		    Pivot: IPivot;

		    DimSS: IDimSelectionSet;

		Begin

		    OLAP := UiErAnalyzer1.ErAnalyzer;

		    Pivot := OLAP.Pivot;

		    DimSS := Pivot.Selection;

		    Pivot.BeginSelectionUpdate;

		    //...

		    //Изменение отметки

		    //...

		    Pivot.EndSelectionUpdate;

		    //Повторное получение отметки с перестроенными управляемыми измерениями

		    DimSS := Pivot.Selection;

		    Pivot.BeginSelectionUpdate;

		    //...

		    //Изменение отметки в измерениях, которыми управляют другие измерения

		    //...

		    Pivot.EndSelectionUpdate;

		End Sub Button1OnClick;


При нажатии на кнопку для ускорения процесса работы будет отключено
 применение отметки в источнике данных при ее изменении в таблице.


См. также:


[IPivot](IPivot.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
