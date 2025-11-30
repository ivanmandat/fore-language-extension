# ILanerContext.RefreshData

ILanerContext.RefreshData
-


# ILanerContext.RefreshData


## Синтаксис


RefreshData;


## Описание


Метод RefreshData обновляет
 данные рабочих книг, зарегистрированных в контексте.


## Комментарии


Если в рабочих книгах имеются несохраненные данные, то они будут потеряны.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 LanerBox, UiErAnalyzer с наименованиями Button1, LanerBox1, LanerBox2
 и UiErAnalyzer1, UiErAnalyzer2 соответственно. UiErAnalyzer1 и UiErAnalyzer2
 являются источником данных для LanerBox1 и LanerBox2 соответственно. В
 компоненты UiErAnalyzer должны быть загружены рабочие книги базы данных
 временных рядов.


Также предполагается, что данные рабочие книги содержатся в одном контексте,
 идентификатор которого «pContext».


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: Express, ExtCtrls, Forms, Laner,
 Tab, Ui.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Laner: ILaner;

	    UnSvData1, UnSvData2, Refr: Boolean;

	Begin

	    Laner := UiErAnalyzer2.ErAnalyzer.Laner;

	    UnSvData1 := Laner.Series.HaveUnsavedData;

	    Laner := UiErAnalyzer1.ErAnalyzer.Laner;

	    UnSvData2 := Laner.Series.HaveUnsavedData;

	    Refr := True;

	    If UnSvData1 Or UnSvData2 Then

	        Refr := WinApplication.ConfirmationBox("При выполнении данной операции " +

	                "несохраненные данные будут потеряны. Продолжить?");

	    End If;

	    If Refr Then

	        pContext.RefreshData;

	    End If;

	End Sub Button1OnClick;


После выполнения примера данные рабочих книг, зарегистрированных в контексте,будут
 обновлены.


См. также:


[ILanerContext](ILanerContext.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
