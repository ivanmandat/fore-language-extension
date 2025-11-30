# IWinApplicationParams.Item

IWinApplicationParams.Item
-


# IWinApplicationParams.Item


## Синтаксис


Item(Index: Integer): String;


## Параметры


Index - индекс параметра, с
 которым осуществлен запуск платформы.


## Описание


Свойство Item возвращает значение
 параметра, с которым осуществлен запуск приложения. В список параметров
 включаются учетная запись, с которой осуществляется подключение к репозитория,
 ключи, значения ключей.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки и компонента Memo с
 наименованием "Memo1".


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    WinApp: IWinApplication;

	    Params: IWinApplicationParams;

	    i: Integer;

	Begin

	    WinApp := WinApplication.Instance;

	    Params := WinApp.Params;

	    Memo1.Lines.Clear;

	    For i := 0 To Params.Count - 1 Do

	        Memo1.Lines.Add(Params.Item(i));

	    End For;

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку в компонент Memo1 будут
 выведены значения параметров, с которыми осуществлен запуск платформы.


См. также:


[IWinApplicationParams](IWinApplicationParams.htm)


[Запуск
 платформы из командной строки с использованием ключей](setup.chm::/07_AK_Run_Additional/UseKeys.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
