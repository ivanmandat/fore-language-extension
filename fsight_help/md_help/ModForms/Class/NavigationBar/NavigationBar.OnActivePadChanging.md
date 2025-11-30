# NavigationBar.OnActivePadChanging

NavigationBar.OnActivePadChanging
-


# NavigationBar.OnActivePadChanging


## Синтаксис


OnActivePadChanging(Sender: [INavigationBar](../../Interface/INavigationBar/INavigationBar.htm); Args: [INavigationBarPadChangingEventArgs](../../Interface/INavigationBarPadChangingEventArgs/INavigationBarPadChangingEventArgs.htm));


## Параметры


Sender. Параметр, возвращающий
 компонент, сгенерировавший событие.


Args. Параметр, позволяющий
 определить параметры события.


## Описание


Событие OnActivePadChanging
 наступает перед активацией вкладки навигационной панели.


## Комментарии


Используя свойство [INavigationBarPadChangingEventArgs.Allowed](../../Interface/INavigationBarPadChangingEventArgs/INavigationBarPadChangingEventArgs.Allowed.htm)
 аргумента события можно отменить активацию вкладки. Для этого необходимо
 в свойстве указать значение False.


См. также:


[NavigationBar](NavigationBar.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
