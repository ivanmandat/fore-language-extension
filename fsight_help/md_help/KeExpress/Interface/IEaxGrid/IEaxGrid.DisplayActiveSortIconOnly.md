# IEaxGrid.DisplayActiveSortIconOnly

IEaxGrid.DisplayActiveSortIconOnly
-


# IEaxGrid.DisplayActiveSortIconOnly


## Синтаксис


DisplayActiveSortIconOnly: Boolean;


## Описание


Свойство DisplayActiveSortIconOnly
 определяет, отображается ли пиктограмма сортировки только для столбца/строки
 с включенной сортировкой.


## Комментарии


При значении True будет видна
 пиктограмма сортировки только столбца/строки с включенной сортировкой.
 Если сортировка не включена, все пиктограммы будут скрыты.


Значение по умолчанию: False.


## Пример


Для выполнения примера создайте форму, на которой разместите кнопку
 с наименованием «Button1», компонент TabSheetBox с наименованием «TabSheetBox1»
 и компонент UiErAnalyzer с наименованием «UiErAnalyzer1». В свойстве Object
 компонента «UiErAnalyzer1» определите экспресс-отчет из репозитория, в
 свойстве Source компонента «TabSheetBox1» выберите «UiErAnalyzer1».


Добавьте ссылки на системные сборки: Forms, Express, Tab.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Analyzer: IEaxAnalyzer;

	    EaxGrid: IEaxGrid;

	Begin

	    UiErAnalyzer1.Active := True;

	    Analyzer := UiErAnalyzer1.ErAnalyzer;

	    EaxGrid := Analyzer.Grid;

	    EaxGrid.DisplayActiveSortIconOnly := True;

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку в таблице указанного
 экспресс-отчета будет видна пиктограмма сортировки только для столбца/строки
 с включенной сортировкой.


См. также:


[IEaxGrid](IEaxGrid.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
