# IControl.OnDblClick

IControl.OnDblClick
-


# OnDblClick


## Синтаксис


OnDblClick(Sender: Object; Args: [IMouseEventArgs](../IMouseEventArgs/IMouseEventArgs.htm));


## Параметры


Sender. Параметр, возвращающий
 компонент, сгенерировавший событие;


Args. Параметр, позволяющий
 определить параметры события.


## Описание


Событие OnDblClick наступает,
 если пользователь дважды щёлкнул в области компонента.


## Комментарии


Событие не поддерживается компонентами [Button](UiDevEnv.chm::/02_Components_constructor_forms/01_Standart_Components/Button.htm),
 [PPButton](UiDevEnv.chm::/02_Components_constructor_forms/04_PPControls/PPButton.htm).
 Компонент [Frame](UiDevEnv.chm::/02_Components_constructor_forms/01_Standart_Components/Frame.htm)
 обрабатывает событие только тогда, когда в него не загружена форма.


См. также:


[IControl](IControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
