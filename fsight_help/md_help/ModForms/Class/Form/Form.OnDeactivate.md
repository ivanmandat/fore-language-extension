# Form.OnDeactivate

Form.OnDeactivate
-


# Form.OnDeactivate


## Синтаксис


OnDeactivate(Sender: Object; Args: [IEventArgs](ForeSys.chm::/Interface/IEventArgs/IEventArgs.htm));


## Параметры


Sender. Параметр, возвращающий
 компонент, сгенерировавший событие.


Args. Параметр, позволяющий
 определить параметры события.


## Описание


Событие OnDeactivate наступает
 в момент потери фокуса формой, либо одним из ее дочерних компонентов.


## Комментарии


Данное событие не наступает, если:


	- происходит передача фокуса между дочерними компонентами, расположенными
	 на форме.


	- форма подключена к компонентам [Frame](UiDevEnv.chm::/02_Components_constructor_forms/01_Standart_Components/Frame.htm),
	 либо [ControlBar](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/ControlBar.htm).


	- текущая форма является дочерней MDI-формой.


См. также:


[Form](Form.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
