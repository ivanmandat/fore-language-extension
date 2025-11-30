# IWinApplication.CustomParams

IWinApplication.CustomParams
-


# IWinApplication.CustomParams


## Синтаксис


CustomParams: String;


## Описание


Свойство CustomParams возвращает
 пользовательские параметры, передаваемые при запуске платформы с ключом
 «-Customparam».


## Пример


Для выполнения примера предполагается наличие формы и расположенной
 на ней кнопки. Форма имеет идентификатор «SRART_F».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    WinApp: IWinApplication;

Begin

    WinApp := WinApplication.Instance;

    Self.Text := WinApp.CustomParams;

End Sub Button1OnClick;


Если платформа будет запущена с помощью следующей команды «studio.exe
 Warehouse/Warehouse@Warehouse:START_F -customparam "test"»,
 то после подключения к репозиторию будет запущена форма. При нажатии на
 кнопку в заголовок формы будет выведено значение, переданное вместе с
 ключом «-Customparam».


См. также:


[IWinApplication](IWinApplication.htm)
 | [Запуск
 платформы из командной строки с использованием ключей](Setup.chm::/07_AK_Run_Additional/UseKeys.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
