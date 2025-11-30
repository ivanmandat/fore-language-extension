# Timer: Компонент

Timer: Компонент
-


# Timer


## Иерархия наследования


           [IComponent](modforms.chm::/Interface/IComponent/IComponent.htm)


           [ITimer](ModForms.chm::/Interface/ITimer/ITimer.htm)


           [Timer](ModForms.chm::/Class/Timer/Timer.htm)


## Описание


Компонент Timer используется
 для планирования некоторых команд языка Fore через определенные промежутки
 времени.


## Работа с компонентом


Для работы компонента необходимо в свойстве [Interval](ModForms.chm::/Interface/ITimer/ITimer.Interval.htm)
 указать время, по истечению которого будет повторяться последовательность
 действий, указанная в обработчике события [OnTimer](ModForms.chm::/Class/Timer/Timer.OnTimer.htm).
 После установки свойству [Enabled](ModForms.chm::/Interface/ITimer/ITimer.Enabled.htm)
 значения True таймер будет активирован
 и указанные действия будут повторяться с заданной периодичностью.


## Свойства компонента Timer


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ComponentCount](ModForms.chm::/Interface/IComponent/IComponent.ComponentCount.htm)
		 Свойство ComponentCount
		 возвращает количество дочерних компонентов.


		 ![](../../Property_Image.gif)
		 [Components](ModForms.chm::/Interface/IComponent/IComponent.Components.htm)
		 Свойство Components
		 возвращает дочерний компонент.


		 ![](../../Property_Image.gif)
		 [Data](ModForms.chm::/Interface/IComponent/IComponent.Data.htm)
		 Свойство Data предназначено
		 для хранения любых пользовательских данных.


		 ![](../../Property_Image.gif)
		 [Enabled](ModForms.chm::/Interface/ITimer/ITimer.Enabled.htm)
		 Свойству Enabled определяет
		 активность таймера.


		 ![](../../Property_Image.gif)
		 [Interval](ModForms.chm::/Interface/ITimer/ITimer.Interval.htm)
		 Свойство Interval определяет
		 интервал времени таймера.


		 ![](../../Property_Image.gif)
		 [Name](ModForms.chm::/Interface/IComponent/IComponent.Name.htm)
		 Свойство Name определяет
		 наименование компонента.


		 ![](../../Property_Image.gif)
		 [Tag](ModForms.chm::/Interface/IComponent/IComponent.Tag.htm)
		 Свойство Tag не используется
		 компилятором. Пользователь может изменить значение свойства Tag и использовать его по своему
		 усмотрению.


## События компонента Timer


		 Имя события
		 Краткое описание


		 ![](../../Event_Image.gif)
		 [OnTimer](ModForms.chm::/Class/Timer/Timer.OnTimer.htm)
		 Событие OnTimer наступает
		 по истечении времени, заданного свойством [Interval](ModForms.chm::/Interface/ITimer/ITimer.Interval.htm).


См. также:


[Стандартные компоненты](Standart_Components.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
