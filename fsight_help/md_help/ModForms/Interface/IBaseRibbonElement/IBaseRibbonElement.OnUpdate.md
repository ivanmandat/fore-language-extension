# IBaseRibbonElement.OnUpdate

IBaseRibbonElement.OnUpdate
-


# IBaseRibbonElement.OnUpdate


## Синтаксис


OnUpdate(Sender: Object; Args: IEventArgs);


## Параметры


Sender. Параметр, возвращающий
 компонент, сгенерировавший событие.


Args. Параметр, позволяющий
 определить параметры события.


## Описание


Событие OnUpdate наступает при
 обновлении элемента управления ленты.


## Комментарии


При обновлении ленты для компонента Ribbon наступает событие [Ribbon.OnUpdate](../../Class/Ribbon/Ribbon.OnUpdate.htm).
 Событие OnUpdate отдельного элемента управления наступает после события
 [Ribbon.OnChange](../../Class/Ribbon/Ribbon.OnChange.htm) всей
 ленты.


См. также:


[IBaseRibbonElement](IBaseRibbonElement.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
