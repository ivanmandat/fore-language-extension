# IWinApplication.Params

IWinApplication.Params
-


# IWinApplication.Params


## Синтаксис


Params: [IWinApplicationParams](../IWinApplicationParams/IWinApplicationParams.htm);


## Описание


Свойство Params возвращает коллекцию
 параметров, с которыми осуществляется запуск платформы.


## Комментарии


Коллекция параметров включает в себя все элементы, которые были указаны
 в строке запуска. Она состоит из ключей и параметров, передаваемых вместе
 с ключами.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки и компонента Memo с
 наименованием «Memo1». Форма имеет идентификатор «SRART_F».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    WinApp: IWinApplication;

    Params: IWinApplicationParams;

    i: Integer;

Begin

    WinApp := WinApplication.Instance;

    Params := WinApp.Params;

    For i := 0 To Params.Count - 1 Do

        Memo1.Lines.Add(i.ToString + ")" + Params.Item(i));

    End For;

End Sub Button1OnClick;


Если платформа будет запущена с помощью следующей команды «studio.exe
 Warehouse/Warehouse@Warehouse:START_F -splash "c:\splash.bmp"
 -customparam "test"», то после подключения к репозиторию будет
 запущена форма. При нажатии на кнопку в компонент «Memo1» будут выведены
 значения отдельных параметров, которые были использованы в строке запуска.


См. также:


[IWinApplication](IWinApplication.htm)
 | [Запуск
 платформы из командной строки с использованием ключей](Setup.chm::/07_AK_Run_Additional/UseKeys.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
