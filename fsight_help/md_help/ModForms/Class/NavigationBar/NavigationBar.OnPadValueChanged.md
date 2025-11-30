# NavigationBar.OnPadValueChanged

NavigationBar.OnPadValueChanged
-


# NavigationBar.OnPadValueChanged


## Синтаксис


OnPadValueChanged(Sender: [INavigationBar](../../Interface/INavigationBar/INavigationBar.htm); Args: [INavigationBarPadEventArgs](../../Interface/INavigationBarPadEventArgs/INavigationBarPadEventArgs.htm));


## Параметры


Sender. Параметр, возвращающий
 компонент, сгенерировавший событие.


Args. Параметр, позволяющий
 определить параметры события.


## Описание


Событие OnPadValueChanged наступает
 при смене отметки у флажка, который отображается в заголовке вкладки.


## Комментарии


Флажок в заголовке вкладки отображается если свойству [INavigationBarHeader.Content](../../Interface/INavigationBarHeader/INavigationBarHeader.Content.htm)
 установлено значение [NavigationBarHeaderContent.CheckBox](../../Enums/NavigationBarHeaderContent.htm).
 Изменение состояния флажка происходит при щелчке по нему мышкой, либо
 при изменении значения свойства [INavigationBarHeader.Value](../../Interface/INavigationBarHeader/INavigationBarHeader.Value.htm).


См. также:


[NavigationBar](NavigationBar.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
