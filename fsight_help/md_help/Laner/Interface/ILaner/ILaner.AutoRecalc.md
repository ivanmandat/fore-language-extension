# ILaner.AutoRecalc

ILaner.AutoRecalc
-


# ILaner.AutoRecalc


## Синтаксис


AutoRecalc: Boolean;


## Описание


Свойство AutoRecalc определяет
 состояние опции «Автоматический перерасчет».


## Комментарии


Допустимые значения:


	-  True. Автоматический
	 пересчет единиц измерения включен;


	- False. Автоматический
	 пересчет единиц измерения выключен.


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

	    ErAn: IEaxAnalyzer;

	    Laner: ILaner;

	Begin

	    ErAn := UiErAnalyzer1.ErAnalyzer;

	    Laner := ErAn.Laner;

	    Laner.AutoRecalc := False;

	End Sub Button1OnClick;


После выполнения примера автоматический перерасчет единиц измерения
 будет выключен.


См. также:


[ILaner](ILaner.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
