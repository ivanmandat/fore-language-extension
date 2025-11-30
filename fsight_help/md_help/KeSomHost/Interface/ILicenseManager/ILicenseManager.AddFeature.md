# ILicenseManager.AddFeature

ILicenseManager.AddFeature
-


# ILicenseManager.AddFeature


## Синтаксис


AddFeature(LicenseCode: String; [MakePermanent:
 Boolean=False]): [UiLicenseStatusCode](ForeSys.chm::/Enums/UiLicenseStatusCode.htm);


## Параметры


LicenseCode. Код активации
 лицензии;


MakePermanent. Параметр отвечает
 за сохранение кода активации:


	- если параметр установлен со значением True,
	 то код будет сохранен в файл лицензии: %PROGRAMDATA%\Foresight\Foresight Analytics Platform\lservrc;


	- если параметр установлен со значением False,
	 то код будет добавлен только на текущую сессию. По умолчанию параметр
	 принимает значение False.


## Описание


Метод AddFeature добавляет код
 лицензии.


## Комментарии


Метод актуален при использовании автономной лицензии. В противном случае
 будет выдано соответствующее сообщение.


## Пример


Для выполнения примера разместите на форме компоненты Button и Editbox
 с наименованиями «Button1» и «Editbox1» соответственно.


Добавьте ссылки на системные сборки: Host, Ui, Forms.


Пример является обработчиком события OnClick для компонента «Button1».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    LicManager: ILicenseManager;

    LicString: String;

    StatusCode: UiLicenseStatusCode;

Begin

    LicManager := WinApplication.Instance.LicenseManager;

    LicString := Editbox1.Text;

    StatusCode := LicManager.AddFeature(LicString,
 False);

    If StatusCode = UiLicenseStatusCode.Success Then

        WinApplication.InformationBox("Код успешно добавлен");

    Else

        WinApplication.InformationBox("Ошибка: " + StatusCode.ToString);

    End If;

End Sub Button1OnClick;


После нажатия на кнопку указанный код активации в Editbox будет добавлен
 для использования на текущую сессию. О результате добавления кода будет
 выдано соответствующее сообщение. Если при добавлении возникнут ошибки,
 то будет выдано сообщение с [кодом](ForeSys.chm::/Enums/UiLicenseStatusCode.htm)
 возникшей ошибки.


См. также:


[ILicenseManager](ILicenseManager.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
