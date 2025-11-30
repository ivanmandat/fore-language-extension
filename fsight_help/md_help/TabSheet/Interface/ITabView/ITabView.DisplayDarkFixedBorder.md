# ITabView.DisplayDarkFixedBorder

ITabView.DisplayDarkFixedBorder
-


# ITabView.DisplayDarkFixedBorder


## Синтаксис


DisplayDarkFixedBorder: Boolean;


## Описание


Свойство DisplayDarkFixedBorder
 определяет, будет ли отображаться тень фиксированной области.


## Комментарии


Допустимые значения:


	- True. Значение по умолчанию.
	 Тень фиксированной области будет отображаться;


	- False. Тень фиксированной
	 области не будет отображаться.


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент
 Button с наименованием «Button1»,
 компонент UiErAnalyzer с наименованием
 «UiErAnalyzer1» и компонент TabSheetBox
 с наименованием «TabSheetBox1». Укажите «UiErAnalyzer1» в качестве источника
 данных для «TabSheetBox1». В качестве источника для «UiErAnalyzer1» укажите
 экспресс-отчёт, содержащий таблицу с данными.


Процедура является обработчиком события OnClick
 для кнопки «Button1».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Eax: IEaxAnalyzer;

    Tab: ITabSheet;

    TView: ITabView;

Begin

    Eax := UiErAnalyzer1.ErAnalyzer;

    Tab := Eax.Grid.TabSheet;

    TView := Tab.View;

    TView.DisplayDarkFixedBorder := False;

End Sub Button1OnClick;


При нажатии кнопки тень фиксированной области не будет отображаться.


См. также:


[ITabView](ITabView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
