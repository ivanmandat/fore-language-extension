# ILaner.TransformationHistory

ILaner.TransformationHistory
-


# ILaner.TransformationHistory


## Синтаксис


TransformationHistory: Boolean;


## Описание


Свойство TransformationHistory
 определяет, отображать ли подсказку о изменении значения показателя.


## Комментарии


Допустимые значения:


	- True. Отображать всплывающую
	 подсказку;


	- False. Не отображать.
	 Значение по умолчанию.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 TabSheetBox, UiErAnalyzer с наименованиями Button1, TabSheetBox1 и UiErAnalyzer1
 соответственно. UiErAnalyzer1 является источником данных для TabSheetBox1.
 В UiErAnalyzer1 должна быть загружена рабочая область базы данных временных
 рядов.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: Express, ExtCtrls, Forms, Laner,
 Tab.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Eax: IEaxAnalyzer;

	    Laner: ILaner;

	Begin

	    Eax := UiErAnalyzer1.ErAnalyzer;

	    Laner := Eax.Laner;

	    Laner.TransformationHistory := True;

	End Sub Button1OnClick;


После выполнения примера при наведении указателя мыши на ячейку с данными,
 будет отображена всплывающая подсказка с наименованием ревизии, в которой
 были произведены изменения значения показателя.


См. также:


[ILaner](ILaner.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
