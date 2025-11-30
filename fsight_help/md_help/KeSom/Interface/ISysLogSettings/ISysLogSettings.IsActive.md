# ISysLogSettings.IsActive

ISysLogSettings.IsActive
-


# ISysLogSettings.IsActive


## Синтаксис


IsActive: Boolean;


## Описание


Свойство IsActive определяет
 признак активного подключения к syslog-серверу.


## Комментарии


Допустимые значения:


	- False. По умолчанию.
	 Подключение не используется;


	- True. Подключение используется.


## Пример


Для выполнения примера в репозитории предполагается наличие формы, расположенные
 на ней кнопки Button с наименованиями
 Button1 и Button2, компоненты CheckBox
 с наименованием IsActive, EditBox
 с наименованием Server, IntegerEdit
 с наименованием Port, и два компонента RadioButton
 с наименованиями UDP и TCP.


Добавьте ссылки на системные сборки: ExtCtrls, Forms, Metabase.


Пример является обработчиком события OnClick
 для кнопок.


	// Чтение настроек

	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    SLSettings: ISysLogSettings;

	Begin

	    SLSettings := New SysLogSettings.Create;

	    IsActive.Checked := SLSettings.IsActive;

	    Server.Text := SLSettings.Server;

	    Port.Value := SLSettings.Port;

	    UDP.Checked := SLSettings.Protocol <> SysLogProtocol.TCP;

	    TCP.Checked := SLSettings.Protocol = SysLogProtocol.TCP;

	End Sub Button1OnClick;


	// Сохранение настроек

	Sub Button2OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    SLSettings: ISysLogSettings;

	Begin

	    SLSettings := New SysLogSettings.Create;

	    SLSettings.IsActive := IsActive.Checked;

	    SLSettings.Server := Server.Text;

	    SLSettings.Port := Port.Value;

	    If UDP.Checked Then

	        SLSettings.Protocol := SysLogProtocol.UDP;

	    Else

	        SLSettings.Protocol := SysLogProtocol.TCP;

	    End If;

	    // Настройки будут сохранены в место, которое задано в SLSettings.Scope

	    // Или туда, откуда прочитали. Если явно не задавали значение

	    // Если настроек еще нигде нет, будет использовано значение SysLogSettingsScope.File

	    SLSettings.Save;

	End Sub Button2OnClick;


При нажатии на кнопку Button1 активируется подключение к syslog-серверу
 с настройками, указанными в компонентах Server, Port, UDP и TCP.


При нажатии на кнопку Button2 определяется состояние IsActive и настройки
 сохраняются.


См. также:


[ISysLogSettings](ISysLogSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
