# ILanerContext.Unregister

ILanerContext.Unregister
-


# ILanerContext.Unregister


## Синтаксис


Unregister(Laner: [ILaner](../ILaner/ILaner.htm)):
 Boolean;


## Параметры


Laner. Рабочая книга базы данных
 временных рядов в рядном режиме.


## Описание


Метод Unregister отключает рабочую
 книгу от контекста.


## Комментарии


Допустимые значения:


	- True. Отключение прошло
	 успешно;


	- False. Рабочая книга
	 не была зарегистрирована в контексте.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 TabSheetBox, UiErAnalyzer с идентификаторами Button1, TabSheetBox1 и UiErAnalyzer1
 соответственно. UiErAnalyzer1 является источником данных для TabSheetBox1.
 В UiErAnalyzer1 должна быть загружена рабочая область базы данных временных
 рядов.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: Express, ExtCtrls, Forms, Laner,
 Tab.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    pContext: ILanerContext;

	    Laner: ILaner;

	Begin

	    pContext := New LanerContext.Create;

	    Laner := UiErAnalyzer1.ErAnalyzer.Laner;

	    pContext.Unregister(Laner);

	End Sub Button1OnClick;


После выполнения примера рабочая область базы данных временных рядов
 будет отключена от контекста базы данных временных рядов.


См. также:


[ILanerContext](ILanerContext.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
