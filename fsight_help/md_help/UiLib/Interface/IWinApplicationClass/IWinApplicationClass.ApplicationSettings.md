# IWinApplicationClass.ApplicationSettings

IWinApplicationClass.ApplicationSettings
-


# IWinApplicationClass.ApplicationSettings


## Синтаксис


		ApplicationSettings: [IWinApplicationSettings](../IWinApplicationSettings/IWinApplicationSettings.htm);


## Описание


Свойство ApplicationSettings
 возвращает настройки оформления, используемые текущим приложением.


Примечание.
 Изменение настроек оформления доступно только в версиях АК «Прогноз-5».
 В «Форсайт. Аналитическая платформа»
 используется постоянная схема оформления, настройки оформления доступны
 только на чтение.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Ui.


					Sub UserProc;

		Var

		    Settings: IWinApplicationSettings;

		Begin

		    // Получим доступ к настройкам оформления

		    Settings := WinApplication.ApplicationSettings;

		    // Зададим стиль оформления вкладок

		    Settings.TabStyles := WindowTabStyle.Chamfered;

		End Sub UserProc;


После выполнения примера будет изменен стиль оформления вкладок.


См. также:


[IWinApplicationClass](IWinApplicationClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
