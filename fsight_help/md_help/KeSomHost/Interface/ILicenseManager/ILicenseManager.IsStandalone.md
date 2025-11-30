# ILicenseManager.IsStandalone

ILicenseManager.IsStandalone
-


# ILicenseManager.IsStandalone


## Синтаксис


IsStandalone: Boolean;


## Описание


Свойство IsStandalone возвращает
 значение True,
 если используется автономная лицензия (standalone), и False,
 если используется сетевая лицензия (network) или временная локальная,
 полученная с сервера лицензий (network с атрибутом commuter).


## Комментарии


Подробнее о типах лицензии и возможных сценариев их применения можно
 посмотреть в статье «[О
 типе и времени действия лицензии](Setup.chm::/08_Licensing/Admin_Licensing_Variants.htm)».


## Пример


Для выполнения примера разместите на форме компонент Button с наименованием
 «Button1».


Добавьте ссылки на системные сборки: Host, Ui, Forms.


Пример является обработчиком события OnClick для компонента «Button1».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    LicManager: ILicenseManager;

Begin

    LicManager := WinApplication.Instance.LicenseManager;

    If LicManager.IsStandalone Then

        WinApplication.InformationBox("Автономная лицензия");

    Else

        WinApplication.InformationBox("Сетевая лицензия");

    End If;

End Sub Button1OnClick;


После выполнения примера будет выдано сообщение с информацией о используемой
 лицензии.


См. также:


[ILicenseManager](ILicenseManager.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
