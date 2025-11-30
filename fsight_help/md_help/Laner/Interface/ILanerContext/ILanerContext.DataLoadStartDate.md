# ILanerContext.DataLoadStartDate

ILanerContext.DataLoadStartDate
-


# ILanerContext.DataLoadStartDate


## Синтаксис


DataLoadStartDate: DateTime;


## Описание


Свойство DataLoadStartDate определяет
 дату начала загрузки данных для всех рабочих книг, содержащихся в контексте.


## Комментарии


Дату окончания загрузки данных определяет свойство [ILanerContext.DataLoadEndDate](ILanerContext.DataLoadEndDate.htm).


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 LanerBox, UiErAnalyzer с наименованиями Button1, LanerBox1, LanerBox2,
 UiErAnalyzer1 и UiErAnalyzer2 соответственно. UiErAnalyzer1 и UiErAnalyzer2
 являются источником данных для LanerBox1 и LanerBox2 соответственно. В
 компоненты UiErAnalyzer1 и UiErAnalyzer2 должны быть загружены рабочие
 книги одной базы данных временных рядов.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: Express, ExtCtrls, Forms, Laner,
 Tab.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    pContext: ILanerContext;

	    Laner: ILaner;

	Begin

	    pContext := New LanerContext.Create;

	    pContext.DataLoadStartDate := DateTime.Parse("01.01.1990");

	    pContext.DataLoadEndDate := DateTime.Parse("01.01.2020");

	    pContext.BeginLoad;

	    Laner := UiErAnalyzer1.ErAnalyzer.Laner;

	    If Not Laner.IsInContext Then

	        pContext.Register(Laner);

	    End If;

	    Laner := UiErAnalyzer2.ErAnalyzer.Laner;

	    If Not Laner.IsInContext Then

	        pContext.Register(Laner);

	    End If;

	    pContext.EndLoad;

	End Sub Button1OnClick;


После выполнения примера рабочие книги, загруженные в компоненты UiErAnalyzer,
 будут зарегистрированы в созданном контексте. Если рабочая книга уже содержится
 в каком-либо контексте, то она не будет зарегистрирована.


См. также:


[ILanerContext](ILanerContext.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
