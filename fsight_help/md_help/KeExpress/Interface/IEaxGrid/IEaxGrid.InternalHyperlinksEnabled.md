# IEaxGrid.InternalHyperlinksEnabled

IEaxGrid.InternalHyperlinksEnabled
-


# IEaxGrid.InternalHyperlinksEnabled


## Синтаксис


InternalHyperlinksEnabled: Boolean;


## Описание


Свойство InternalHyperlinksEnabled
 определяет, будут ли использоваться гиперссылки для детализации данных
 в таблице.


## Комментарии


Допустимые значения:


	- True. Гиперссылки будут
	 использоваться;


	- False. Значение
	 по умолчанию. Гиперссылки не будут использоваться.


Использование гиперссылок доступно только в том случае, если возможна
 детализация. Для проверки возможности детализации данных в таблице используйте
 свойства [IEaxGrid.IsCellDrillable](IEaxGrid.IsCellDrillable.htm)
 и [IEaxGrid.IsRangeDrillable](IEaxGrid.IsRangeDrillable.htm).


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент
 Button с наименованием «Button1»,
 компонент TabSheetBox с наименованием
 «TabSheetBox1» и компонент UiErAnalyzer
 с наименованием «UiErAnalyzer1». Укажите «UiErAnalyzer1» в качестве источника
 данных для компонента «TabSheetBox1».


В качестве источника данных для компонента «UiErAnalyzer1» укажите экспресс-отчёт.
 Установите для компонента «UiErAnalyzer1» свойство Active = True.


Процедура является обработчиком события OnClick для компонента «Button1».


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Eax: IEaxAnalyzer;

	    Grid: IEaxGrid;

	Begin

	    Eax := UiErAnalyzer1.ErAnalyzer;

	    Grid := Eax.Grid;

	    Grid.InternalHyperlinksEnabled := True;

	End Sub Button1OnClick;


После выполнения примера данные в таблице будут отображаться в виде
 гиперссылок.


См. также:


[IEaxGrid](IEaxGrid.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
